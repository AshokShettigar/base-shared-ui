import PropTypes from 'prop-types';
import Column from 'platform-common-ui/table/column';
import { Icon } from 'platform-common-ui';

const CheckBoxColumn = props => {
    const icon = props.isAllSelected ? 'check-all' : 'check-none';
    return (
        <Column id={props.id} onClick={props.onClick} width="38px">
            <Icon className="cn-table__header-icon" icon={icon} />
        </Column>
    );
};

CheckBoxColumn.displayName = 'CheckBoxColumn';

CheckBoxColumn.propTypes = {
    id: PropTypes.string.isRequired,
    isAllSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

CheckBoxColumn.defaultProps = {
    id: 'checkbox_col',
    isAllSelected: false
};

export default CheckBoxColumn;
