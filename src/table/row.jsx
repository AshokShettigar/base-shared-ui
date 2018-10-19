import classNames from 'classnames';
import PropTypes from 'prop-types';

const Row = props => {
    const className = classNames({
        'cn-table__row': true,
        'cn-table__row--selected': props.isSelected
    }, props.className);
    return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <tr className={className} onClick={props.onClick}>
            {props.children}
        </tr>
    );
};

Row.displayName = 'TableRow';

Row.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func
};

Row.defaultProps = {
    isSelected: false
};

export default Row;
