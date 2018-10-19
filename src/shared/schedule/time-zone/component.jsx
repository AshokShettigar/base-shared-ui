import { Component } from 'react';
import { bool, string, func } from 'prop-types';
import classNames from 'classnames';

import { DropDownField, RadioGroup, RadioField } from '../../form';
import { getMyTimeZone, timeZones } from '../../helpers';

import { SELECTED_FIELD } from '../constants';
import styles from './component.scss';

export const myTimeZoneName = getMyTimeZone().name;
const timeZoneOptions = timeZones.map(timeZone => ({ label: timeZone.label, value: timeZone.name }));

class TimeZone extends Component {
    static propTypes = {
        name: string.isRequired,
        className: string,
        onlyCustomTimeZone: bool,
        getField: func.isRequired,
        getFieldValue: func.isRequired,
        onChange: func.isRequired
    };

    static defaultProps = {
        className: undefined,
        onlyCustomTimeZone: true
    };

    componentDidMount() {
        const isSelectMachineTime = this.props.getFieldValue(`${this.props.name}.${SELECTED_FIELD}`) !== 'local';

        if (isSelectMachineTime && this.props.onlyCustomTimeZone) {
            this.props.onChange(`${this.props.name}.${SELECTED_FIELD}`, 'local');
        }
    }

    render() {
        return (
            <RadioGroup
                required
                title="TIME ZONE"
                description="(APPLIES TO ALL TIME SETTINGS FOR THIS SCHEDULE)"
                field={this.props.getField(`${this.props.name}.${SELECTED_FIELD}`)}
                className={classNames(styles.root, this.props.className)}
                onChange={this.props.onlyCustomTimeZone ? undefined : this.props.onChange}
            >
                <RadioField
                    value="machineTime"
                    hidden={this.props.onlyCustomTimeZone}
                >
                    Local Machine Time
                </RadioField>
                <RadioField value="local">
                    <DropDownField
                        isClearable
                        field={this.props.getField(`${this.props.name}.local`)}
                        defaultValue={myTimeZoneName}
                        isDisabled={this.props.getFieldValue(`${this.props.name}.${SELECTED_FIELD}`) !== 'local'}
                        options={timeZoneOptions}
                        onChange={this.props.onChange}
                    />
                </RadioField>
            </RadioGroup>
        );
    }
}

export default TimeZone;
