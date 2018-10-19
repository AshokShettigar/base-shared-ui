import React from 'react';

import BaseComponentView from 'app/components/base-component-view';
import { Spinner, CheckBox } from 'platform-common-ui';


export default class SpinnerExample extends BaseComponentView {
    state = {
        size: 'extra-large',
        color: 'azure-radiance',
        text: ''
    };

    handleChange = (name, value) => {
        this.setState(() => ({ [name]: value }));
    };

    getListRadioOptions(name, options) {
        return (
            <div>
                {options.map(({ label, value }) => (
                    <CheckBox
                        type="radio"
                        key={`${label}-${value}`}
                        id={`${label}-${value}`}
                        isChecked={this.state[name] === value}
                        onChange={val => this.handleChange(name, val)}
                        value={value}
                    >
                        {label}
                    </CheckBox>
                ))}
            </div>
        );
    }

    getSizeOptions() {
        const sizes = [
            { label: 'Extra Small', value: 'extra-small' },
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
            { label: 'Extra Large', value: 'extra-large' }
        ];

        const listSizeOptions = this.getListRadioOptions('size', sizes);

        return (
            <div>
                <h3>Sizes</h3>
                {listSizeOptions}
            </div>
        );
    }

    getColorOptions() {
        const colors = [
            { label: 'Azure Radiance', value: 'azure-radiance' },
            { label: 'White', value: 'white' }
        ];

        const colorSizeOptions = this.getListRadioOptions('color', colors);

        return (
            <div>
                <h3>Color</h3>
                {colorSizeOptions}
            </div>
        );
    }

    getWithTextOptions() {
        const text = [
            { label: 'None', value: '' },
            { label: 'With Text', value: 'Simple Text Text' }
        ];

        const withTextOptions = this.getListRadioOptions('text', text);

        return (
            <div>
                <h3>Add Text</h3>
                {withTextOptions}
            </div>
        );
    }

    getOptions() {
        const sizeOptions = this.getSizeOptions();
        const colorOptions = this.getColorOptions();
        const withTextOptions = this.getWithTextOptions();

        return (
            <div>
                {sizeOptions}
                {colorOptions}
                {withTextOptions}
            </div>
        );
    }

    renderComponent() {
        return (
            <div>
                <Spinner size={this.state.size} color={this.state.color} />
                {this.state.text}
            </div>
        );
    }
}
