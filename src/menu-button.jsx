import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Icon } from 'platform-common-ui';

function onClickHandler(onClick, isDisabled) {
    if (isDisabled) { return; }
    onClick();
}

// eslint-disable-next-line import/prefer-default-export
export const MenuButton = props => {
    const className = classNames('cn-menu-button', {
        'cn-menu-button--is-disabled': props.isDisabled
    });
    return (
        <button
            className={className}
            onClick={() => onClickHandler(props.onClick, props.isDisabled)}
            title={props.title}
        >
            {props.icon && <Icon className="cn-menu-button__icon" icon={props.icon} />}
            {props.children && <span>{props.children}</span>}
        </button>
    );
};

MenuButton.propTypes = {
    children: PropTypes.node,
    icon: PropTypes.string,
    // eslint-disable-next-line react/no-unused-prop-types
    hasChildrenOrIcon: props => {
        if (!props.children && !props.icon) {
            return new Error(
                "At least one of 'children' or 'icon' prop is required for MenuButton component.");
        }
        return null;
    },
    isDisabled: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string
};

MenuButton.defaultProps = {
    isDisabled: false
};
