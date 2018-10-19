import { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Placement } from 'platform-common-ui/shared';
import StyledPopup from 'platform-common-ui/signal-popup/styled-signal-popup';

export class SignalPopupWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup: false
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.showPopup !== this.state.showPopup ||
            nextProps.value !== this.props.value;
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    onClick = () => {
        this.setState(prevState => {
            const showPopup = !prevState.showPopup;
            this.addSignalCellScrollWatcher(showPopup);
            return { showPopup };
        });
    }

    setSignalPopupDisplayState = () => {
        const isVisible = this.isSignalCellVisibleInParentComponent();

        if (!isVisible) {
            clearInterval(this.intervalId);
            this.setState({ ...this.state, showPopup: isVisible });
        }
    }

    isSignalCellVisibleInParentComponent = () => {
        if (this.containerRef === null || this.props.parentElm == null) {
            return true;
        }
        const elemRect = this.containerRef.getBoundingClientRect();

        // a small amount of optimization if the user has not scrolled the grid
        // it will simply return and wont change state
        if (this.cellY === elemRect.y) {
            return true;
        }

        this.cellY = elemRect.y;

        const elemTop = elemRect.top;
        const elemBottom = elemRect.bottom;
        const elemHeight = elemRect.height;

        const holder = this.props.parentElm;
        const holderRect = holder.getBoundingClientRect();
        const holderTop = holderRect.top;
        const holderBottom = holderRect.bottom;

        if (elemTop <= holderTop) {
            return !(holderTop - elemTop > elemHeight);
        }

        return !(elemBottom - holderBottom > elemHeight);
    }

    addSignalCellScrollWatcher = showPopup => {
        clearInterval(this.intervalId);
        if (showPopup) {
            this.intervalId = setInterval(this.setSignalPopupDisplayState, 100);
        }
    }

    handlePopupPositionChanged = position => {
        this.setState({ popupPosition: position });
    }

    renderSignalInstances = () => {
        if (!this.props.buttonConfig) {
            return <div />;
        }
        const SignalButtonComponent = this.props.buttonConfig.Component;
        const newProps = { ...this.props };
        delete newProps.buttonConfig;
        return (
            <div
                className="signal-cell__container"
                role="presentation"
                onClick={this.onClick}
                ref={ref => {
                    this.buttonRef = ref;
                }}
            >
                <SignalButtonComponent {...newProps} showPopup={this.state.showPopup} />
            </div>
        );
    }

    render() {
        const signalPopupClassName = classNames(
            'signal-popup-wrapper__styled-tabled-cell',
            this.props.signalClassName
        );

        return (
            <div
                className={signalPopupClassName}
                ref={ref => {
                    this.containerRef = ref;
                }}
            >
                {this.renderSignalInstances()}
                {
                        this.state.showPopup
                            ? <Placement
                                isOpen
                                target={this.containerRef}
                                onDismiss={this.onClick}
                                position="bottom-end"
                                className="ag-grid-signal-cell-placement-popup"
                                isPortal
                                modifiers={{
                                    hide: { enabled: false },
                                    preventOverflow: { enabled: false }
                                }}
                            >
                                {
                                    ({ updatePosition, position }) => (
                                        <StyledPopup
                                            {...this.props}
                                            onPositionChanged={this.handlePopupPositionChanged}
                                            signalWidth={this.buttonRef}
                                            updatePosition={updatePosition}
                                            position={position}
                                        />
                                    )
                                }
                            </Placement>
                            : ''
                    }
            </div>
        );
    }
}

SignalPopupWrapper.propTypes = {
    value: PropTypes.string,
    data: PropTypes.objectOf(PropTypes.any),
    parentElm: PropTypes.instanceOf(Element),
    signalClassName: PropTypes.string,
    buttonConfig: PropTypes.shape({
        Component: PropTypes.any
    }).isRequired
};

export default SignalPopupWrapper;
