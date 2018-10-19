import { cloneElement } from 'react';
import PropTypes from 'prop-types';

function getWidth(widths, position) {
    if (widths.length) {
        return `${widths[position]}px`;
    }

    return '100px';
}

const Header = props => (
    <table className="cn-table__header" style={{ left: props.scrollLeft }}>
        <thead>
            <tr>
                {props.columns.map((column, i) => cloneElement(
                    column,
                    { width: getWidth(props.widths, i) }
                ))}
            </tr>
        </thead>
    </table>
);

Header.displayName = 'TableHeader';

Header.propTypes = {
    columns: PropTypes.node.isRequired,
    scrollLeft: PropTypes.number.isRequired,
    widths: PropTypes.arrayOf(PropTypes.number).isRequired
};

Header.defaultProps = {
    scrollLeft: 0,
    widths: []
};

export default Header;
