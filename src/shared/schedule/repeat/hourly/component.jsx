import React, { Component } from 'react';
import { string, func } from 'prop-types';
import classNames from 'classnames';

import { FieldsGroup, NumberField } from '../../../form';
import styles from './component.scss';

class Hourly extends Component {
    static propTypes = {
        name: string.isRequired,
        getField: func.isRequired,
        getFieldValue: func.isRequired,
        destroyForm: func.isRequired,
        onChange: func.isRequired
    };

    componentWillUnmount() {
        this.props.destroyForm(this.props.name);
    }

    render() {
        const field = this.props.getField(`${this.props.name}.every`);

        return (
            <FieldsGroup className={classNames(styles.root, styles.row)}>
                <NumberField
                    required
                    label="EVERY"
                    fieldClassName={styles.every}
                    maxLength={2}
                    max={12}
                    name={field.name}
                    value={field.value}
                    error={field.error}
                    onChange={this.props.onChange}
                >
                    hour(s)
                </NumberField>
            </FieldsGroup>
        );
    }
}

export default Hourly;
