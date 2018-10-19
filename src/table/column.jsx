import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Icon } from 'platform-common-ui';

export const SORT_DIRECTION = {
    ASC: 'asc',
    DESC: 'desc'
};

const SORT_ICON = {
    [SORT_DIRECTION.ASC]: 'arrow-up',
    [SORT_DIRECTION.DESC]: 'arrow-down'
};

const onClickHandler = (callback, id) => () => callback(id);

const Column = props => {
    const className = classNames({
        'cn-table__column': true,
        'cn-table__column--is-sortable': props.isSortable
    }, props.className);
    const style = {
        maxWidth: props.width || props.minWidth || 100,
        minWidth: props.width || props.minWidth || 100
    };
    if (props.width) {
        style.width = props.width;
    }

    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
    /* eslint-disable jsx-ally/no-noninteractive-element-to-interactive-role */
    return (
        <th
            className={className}
            onClick={onClickHandler(props.onClick, props.id)}
            style={style}
        >
            {props.children}
            {props.sortDirection &&
                <Icon
                    className="cn-table__column__sort-icon"
                    icon={SORT_ICON[props.sortDirection]}
                />
            }
        </th>
    );
    /* eslint-disable jsx-ally/no-noninteractive-element-to-interactive-role */
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
};

Column.displayName = 'TableColumn';

Column.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    isSortable: PropTypes.bool.isRequired,
    minWidth: PropTypes.string,
    onClick: PropTypes.func,
    sortDirection: PropTypes.oneOf([SORT_DIRECTION.ASC, SORT_DIRECTION.DESC]),
    width: PropTypes.string
};

Column.defaultProps = {
    isSortable: false
};

export default Column;
