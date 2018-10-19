import classNames from 'classnames';
import PropTypes from 'prop-types';
import { onChangeInput } from 'platform-common-ui/input';

// eslint-disable-next-line import/prefer-default-export
export function CheckBox(props) {
    const className = classNames({
        'cn-field__opt': true,
        'cn-field__opt--is-checked': props.isChecked
    }, props.className);

    const textClassName = classNames({
        'cn-field__text': true,
        a11y: props.hideLabel
    });

    return (
        <label className={className} htmlFor={props.id}>
            <input
                checked={props.isChecked}
                className="cn-field__checkradio"
                disabled={props.isDisabled}
                id={props.id}
                onChange={onChangeInput(props.onChange)}
                type={props.type}
                value={props.value}
            />
            <span className={textClassName}>{props.children}</span>
        </label>
    );
}

CheckBox.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    hideLabel: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['checkbox', 'radio']).isRequired,
    value: PropTypes.string.isRequired
};

CheckBox.defaultProps = {
    hideLabel: false,
    isChecked: false,
    isDisabled: false,
    type: 'checkbox'
};
