import PropTypes from 'prop-types';
import classNames from 'classnames';

// eslint-disable-next-line import/prefer-default-export
export const Item = function(props) {
    const className = classNames('cn-sidebar-group__item', props.className);
    return (
        <li className={className}>
            {props.children}
        </li>
    );
};

Item.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};
