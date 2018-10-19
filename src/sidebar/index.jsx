import PropTypes from 'prop-types';
import { Icon } from 'platform-common-ui';
import classNames from 'classnames';

// eslint-disable-next-line import/prefer-default-export
export const Sidebar = props => {
    const classes = classNames({
        'cn-sidebar': true,
        'cn-sidebar--closed': !props.isOpen
    });

    return (
        <div className={classes}>
            <div className="cn-sidebar__controls">
                <Icon
                    className="cn-sidebar__close-btn"
                    icon={props.isOpen ? 'close' : 'carat-right'}
                    onClick={props.onToggleSidebar}
                />
            </div>{ props.isOpen && <div className="cn-sidebar__content">{props.children}</div>}
        </div>
    );
};

Sidebar.propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onToggleSidebar: PropTypes.func.isRequired
};

Sidebar.displayName = 'Sidebar';

Sidebar.defaultProps = {
    isOpen: true
};
