import PropTypes from 'prop-types';
import classNames from 'classnames';

// eslint-disable-next-line import/prefer-default-export
export const Group = props => {
    const className = classNames('cn-sidebar-group', props.className);
    const titleClassName = classNames('cn-sidebar-group__title', props.titleClassName);
    /* eslint-disable jsx-a11y/interactive-supports-focus */
    return (
        <div className={className}>
            <span
                className={titleClassName}
                onClick={props.onChangeExpandCollapse}
                role="button"
            >
                {props.title}
            </span>
            {!props.isCollapsed && <ul className="cn-sidebar-group__list">{props.children}</ul>}
        </div>
    );
    /* eslint-disable jsx-a11y/interactive-supports-focus */
};

Group.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    isCollapsed: PropTypes.bool.isRequired,
    onChangeExpandCollapse: PropTypes.func.isRequired,
    title: PropTypes.node.isRequired,
    titleClassName: PropTypes.string
};

Group.defaultProps = {
    isCollapsed: false
};
