import { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Placement } from 'platform-common-ui/shared';

class AttributeListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showPopup: false
        };

        this.toggleItemSelect = this.toggleItemSelect.bind(this);
        this.getDescription = this.getDescription.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    componentDidMount() {
        if (this.props.isChecked) {
            this.props.onClick(this.props.item, !this.props.isChecked, this.props.ancestors);
        }
    }

    getDescription(descriptions = []) {
        return descriptions.map(description => (
            <div>{ description }</div>
        ));
    }

    handleMouseOver() {
        if (!this.state.showPopup) {
            this.setState({
                showPopup: true
            });
        }
    }

    handleMouseLeave() {
        if (this.state.showPopup) {
            this.setState({
                showPopup: false
            });
        }
    }

    toggleItemSelect() {
        if (!this.props.isDisabled) {
            this.props.onClick(this.props.item, this.props.isChecked, this.props.ancestors);
        }
    }

    render() {
        const { isDisabled, isChecked, item, children } = this.props;
        const classForAttributeListItem = classNames('attribute-list__item', {
            'attribute-list__item--disabled': isDisabled
        });
        const isPopupVisible = item.notification && this.state.showPopup;

        return (
            <li className={classForAttributeListItem}>
                <div
                    role="presentation"
                    className="attribute-list__item__content"
                    onClick={this.toggleItemSelect}
                    onMouseOver={this.handleMouseOver}
                    onMouseLeave={this.handleMouseLeave}
                    ref={ref => {
                        this.containerRef = ref;
                    }}
                >
                    <span>
                        <input
                            className="attribute-list__item__checkbox"
                            type="checkbox"
                            checked={isChecked}
                            disabled={isDisabled}
                            readOnly
                        />
                    </span>
                    {isPopupVisible &&
                        <Placement
                            isOpen
                            target={this.containerRef}
                            onDismiss={() => {}}
                            position="top-start"
                            className="attribute-list__item-popup"
                            modifiers={{
                                hide: { enabled: false },
                                preventOverflow: { enabled: false }
                            }}
                        >
                            {
                                ({ updatePosition, position }) => (
                                    <div
                                        className="attribute-list__item__tooltip-container"
                                        updatePosition={updatePosition}
                                        position={position}
                                    >
                                        <div
                                            className="attribute-list__item__tooltip"
                                        >
                                            { item.notification }
                                        </div>
                                    </div>
                                )
                            }
                        </Placement>
                    }
                    <div className="attribute-list__item__label">
                        <span className="attribute-list__item__name">{ item.name }</span>
                        {
                            item.friendlyName &&
                                <span className="attribute-list__item__friendly-name">
                                    { `(${item.friendlyName})` }
                                </span>
                        }
                        {
                            item.descriptions &&
                                <div className="attribute-list__item__description">
                                    { this.getDescription(item.descriptions) }
                                </div>
                        }
                    </div>
                </div>
                { children || null }
            </li>
        );
    }
}

AttributeListItem.propTypes = {
    children: PropTypes.node,
    ancestors: PropTypes.arrayOf(PropTypes.string),
    isChecked: PropTypes.bool,
    isDisabled: PropTypes.bool,
    item: PropTypes.objectOf(PropTypes.any).isRequired,
    onClick: PropTypes.func.isRequired
};

export default AttributeListItem;
