import PropTypes from 'prop-types';
import classNames from 'classnames';

const Cell = props => {
    const className = classNames('cn-table__cell', props.className);
    return (
        <td className={className}>
            {props.children}
        </td>
    );
};

Cell.displayName = 'TableCell';

Cell.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default Cell;
