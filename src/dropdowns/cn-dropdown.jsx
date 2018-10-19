import PropTypes from 'prop-types';
import {
    DropdownMenu,
    DropdownToggle,
    Icon,
    UncontrolledDropdown
} from 'platform-common-ui';
import classNames from 'classnames';

const CnDropdown = props => {
    const {
        caret,
        children,
        color,
        disabled,
        dropdownClass,
        dropdownToggleClass,
        dropup,
        hideLabel,
        icon,
        id,
        label,
        right,
        showIcon,
        size,
        tag
    } = props;

    const dropdownClassname = classNames({
        'cn-dropdown': true,
        'cn-dropdown--basic': color === 'basic',
        'cn-dropdown--no-label': hideLabel,
        'cn-dropdown--outline': color === 'outline',
        'cn-dropdown--secondary': color === 'secondary'
    }, dropdownClass);

    const dropdownMenuClassname = classNames('cn-dropdown__menu', dropdownClass);
    const dropdownToggleClassname = classNames('cn-dropdown__toggle', dropdownToggleClass);
    const dropdownToggleLabelClassname = classNames('cn-dropdown__toggle__label', { a11y: hideLabel });

    return (
        <UncontrolledDropdown
            className={dropdownClassname}
            disabled={disabled}
            dropup={dropup}
            id={id}
            size={size}
            tag={tag}
        >
            <DropdownToggle
                caret={false}
                className={dropdownToggleClassname}
                color={color}
                disabled={disabled}
            >
                {
                    showIcon && <Icon className="cn-dropdown__toggle__icon btn-icon" icon={icon} />
                }

                <span className={dropdownToggleLabelClassname}>{label}</span>

                {
                    caret && <Icon className="cn-dropdown__toggle__caret" icon="triangle-down" />
                }
            </DropdownToggle>
            <DropdownMenu
                className={dropdownMenuClassname}
                right={right}
            >
                {children}
            </DropdownMenu>
        </UncontrolledDropdown>
    );
};

CnDropdown.displayName = 'CnDropdown';

CnDropdown.propTypes = {
    color: PropTypes.oneOf([
        'standard',
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'danger',
        'link'
    ]).isRequired,
    children: PropTypes.node,
    tag: PropTypes.string,
    disabled: PropTypes.bool,
    dropup: PropTypes.bool,
    hideLabel: PropTypes.bool,
    icon: PropTypes.string,
    id: PropTypes.string.isRequired,
    label: PropTypes.node.isRequired,
    dropdownClass: PropTypes.string,
    // eslint-disable-next-line react/no-unused-prop-types
    dropdownMenuClass: PropTypes.string,
    dropdownToggleClass: PropTypes.string,
    caret: PropTypes.bool,
    // eslint-disable-next-line react/no-unused-prop-types
    onClick: PropTypes.func,
    // eslint-disable-next-line react/no-unused-prop-types
    onSelect: PropTypes.func,
    // eslint-disable-next-line react/no-unused-prop-types
    onToggle: PropTypes.func,
    // eslint-disable-next-line react/no-unused-prop-types
    isOpen: PropTypes.bool,
    // eslint-disable-next-line react/no-unused-prop-types
    open: PropTypes.bool,
    // eslint-disable-next-line react/no-unused-prop-types
    showIcon: PropTypes.bool,
    // eslint-disable-next-line react/no-unused-prop-types
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    right: PropTypes.bool,
    // eslint-disable-next-line react/no-unused-prop-types
    role: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'md', 'lg']).isRequired
};

CnDropdown.defaultProps = {
    caret: true,
    color: 'default',
    dropup: false,
    hideLabel: false,
    isOpen: false,
    open: false,
    options: [],
    right: false,
    role: 'button',
    size: 'medium',
    tag: 'div'
};

export default CnDropdown;
