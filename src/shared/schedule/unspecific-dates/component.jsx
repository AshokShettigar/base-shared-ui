import { Component } from 'react';
import { bool, string, func, oneOf, node } from 'prop-types';
import classNames from 'classnames';

import { UNSPECIFIC_INDICATORS, unspecificDaysOptions } from '../constants';
import { DropDownField } from '../../form';
import styles from './component.scss';

class UnspecificDays extends Component {
    state = {
        unspecificIndicator: UNSPECIFIC_INDICATORS[0].value,
        unspecificDay: unspecificDaysOptions[0].value
    };

    componentDidMount() {
        this.props.onChange(this.state);
    }

    componentDidUpdate() {
        this.props.onChange(this.state);
    }

    getField = name => ({
        name,
        value: this.state[name]
    });

    handleChange = (name, value) => {
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className={classNames(styles.root, this.props.className)}>
                <DropDownField
                    id="unspecificIndicator"
                    required={this.props.isRequired}
                    options={UNSPECIFIC_INDICATORS}
                    isDisabled={this.props.isDisabled}
                    field={this.getField('unspecificIndicator')}
                    dropDownClassName="unspecificIndicatorDropdown"
                    className={this.props.dropdownClassName}
                    onChange={this.handleChange}
                />
                <DropDownField
                    id="unspecificDay"
                    required={this.props.isRequired}
                    options={unspecificDaysOptions}
                    isDisabled={this.props.isDisabled}
                    field={this.getField('unspecificDay')}
                    dropDownClassName="unspecificDayDropdown"
                    className={this.props.dropdownClassName}
                    onChange={this.handleChange}
                />
                {this.props.description &&
                    <span>{this.props.description}</span>
                }
            </div>
        );
    }
}

UnspecificDays.propTypes = {
    isDisabled: bool,
    isRequired: bool,

    className: string,
    dropdownClassName: string,

    description: oneOf([string, node]),

    onChange: func.isRequired
};

UnspecificDays.defaultProps = {
    isDisabled: false,
    isRequired: false,

    className: undefined,
    dropdownClassName: undefined,

    description: undefined
};

export default UnspecificDays;
