import { string, bool, oneOfType, func, number, shape } from 'prop-types';
import classNames from 'classnames';

import styles from './component.scss';

const DayCell = props => (
    <button
        type="button"
        value={props.value}
        className={classNames(
            styles.root,
            {
                [styles.disabled]: props.isDisabled
            },
            props.className
        )}
        disabled={props.isDisabled}
        onClick={() => props.onChange(props.value)}
    >
        {props.label}
    </button>
);

DayCell.propTypes = {
    className: string,
    label: string,

    isDisabled: bool,

    value: oneOfType([number, string, shape({})]),

    onChange: func
};

DayCell.defaultProps = {
    className: undefined,
    label: '',

    isDisabled: false,

    value: undefined,

    onChange: undefined
};

export default DayCell;
