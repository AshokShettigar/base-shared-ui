import { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { isEqual } from 'lodash';
import styled from 'styled-components';

const DivTop = styled.div`
height: 4px;
overflow: visible;
background-color: $white;
position: absolute;
z-index: 1006;
margin: 0;
bottom: -2px;
right: 1px;`;

const DivBottom = styled.div`
height: 4px;
overflow: visible;
background-color: $white;
position: absolute;
z-index: 1006;
margin: 0;
top: -2px;
right: 1px;`;

class StyledSignalPopup extends Component {
    constructor(props) {
        super(props);
        this.coverComponentTop = DivTop;
        this.coverComponentBottom = DivBottom;
        this.isPopupPositionBottom = 0;
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.onPositionChanged && !isEqual(this.props.position, nextProps.position)) {
            this.props.onPositionChanged(nextProps.position);
        }
        if (nextProps.position === 'top-end') {
            this.isPopupPositionBottom = 0;
        } else {
            this.isPopupPositionBottom = 1;
        }
    }

    componentDidUpdate() {
        this.props.updatePosition();
    }

    render() {
        if (!this.props.popupConfig || !this.props.popupConfig.Component) {
            return <div />;
        }
        const PopupComponent = this.props.popupConfig.Component;
        const signalButtonWidth = this.props.signalWidth != null ? this.props.signalWidth.offsetWidth : 0;
        const propsToPass = { ...this.props };
        const popupDimensions = {
            width: this.props.popupConfig.popupWidth,
            maxHeight: this.props.popupConfig.popupMaxHeight
        };

        const popupClassname = classNames(
            'signal-popup-contanier',
            this.props.popupConfig.className
        );

        return (
            <div className={popupClassname} style={popupDimensions}>
                <PopupComponent {...propsToPass} />
                {this.isPopupPositionBottom ? <this.coverComponentBottom
                    className="signal-popup-joiner"
                    style={{ width: `${signalButtonWidth - 2}px` }}
                /> :
                <this.coverComponentTop
                    className="signal-popup-joiner"
                    style={{ width: `${signalButtonWidth - 2}px` }}
                /> }
            </div>
        );
    }
}

StyledSignalPopup.propTypes = {
    popupConfig: PropTypes.shape({
        Component: PropTypes.any,
        popupWidth: PropTypes.string,
        popupMaxHeight: PropTypes.string,
        className: PropTypes.string
    }).isRequired,
    data: PropTypes.objectOf(PropTypes.any),
    position: PropTypes.string,
    updatePosition: PropTypes.func,
    onPositionChanged: PropTypes.func.isRequired,
    signalWidth: PropTypes.objectOf(PropTypes.any)
};

export default StyledSignalPopup;
