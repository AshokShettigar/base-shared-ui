import PropTypes from 'prop-types';
import Cell from 'platform-common-ui/table/cell';
import { CheckBox } from 'platform-common-ui/checkbox';

const SelectRowCell = props => (
    <Cell width={36}>
        <CheckBox
            hideLabel
            id={props.id}
            isChecked={props.isSelected}
            onChange={props.onChange}
            value="row"
        >
            Select row
        </CheckBox>
    </Cell>
);

SelectRowCell.displayName = 'SelectRowCell';

SelectRowCell.propTypes = {
    id: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
};

SelectRowCell.defaultProps = {
    isSelected: false
};

export default SelectRowCell;
