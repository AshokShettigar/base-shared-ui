import { Button, CheckBox, Field, Input } from 'platform-common-ui';
import BaseComponentView from 'app/components/base-component-view';

function cloneOptions(origOptions, replaceOption, replaceIndex) {
    const options = [];
    for (let i = 0; i < origOptions.length; i++) {
        options.push(replaceIndex === i ? replaceOption : origOptions[i]);
    }
    return options;
}

export default class InputExample extends BaseComponentView {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            isDisabled: false,
            isRequired: false,
            newOption: {
                isChecked: false,
                isDisabled: false,
                hideLabel: false,
                label: '',
                value: ''
            },
            options: [{
                hideLabel: false,
                isChecked: false,
                isDisabled: false,
                label: 'Option 1',
                value: 'opt1'
            }, {
                hideLabel: false,
                isChecked: false,
                isDisabled: false,
                label: 'Option 2',
                value: 'opt2'
            }]
        };
        this.onAddNewOption = () => {
            const options = this.state.options.concat(this.state.newOption);
            this.setState({
                options,
                newOption: {
                    label: '',
                    value: '',
                    isChecked: false,
                    isDisabled: false
                }
            });
        };
        this.onDisabledChange = () => {
            this.setState({ isDisabled: !this.state.isDisabled });
        };
        this.onHasErrorChange = () => {
            this.setState({ hasError: !this.state.hasError });
        };
        this.onNewOptionHideLabelChange = () => {
            const newOption = {
                ...this.state.newOption,
                hideLabel: !this.state.newOption.hideLabel
            };
            this.setState({ newOption });
        };
        this.onNewOptionIsCheckedChange = () => {
            const newOption = {
                ...this.state.newOption,
                isChecked: !this.state.newOption.isChecked
            };
            this.setState({ newOption });
        };
        this.onNewOptionIsDisabledChange = () => {
            const newOption = {
                ...this.state.newOption,
                isDisabled: !this.state.newOption.isDisabled
            };
            this.setState({ newOption });
        };
        this.onNewOptionLabelChange = label => {
            const newOption = {
                ...this.state.newOption,
                label
            };
            this.setState({ newOption });
        };
        this.onNewOptionValueChange = value => {
            const newOption = {
                ...this.state.newOption,
                value
            };
            this.setState({ newOption });
        };
        this.onOptionIsCheckedChange = index => () => {
            const option = this.state.options[index];
            const newOption = {
                ...option,
                isChecked: !option.isChecked
            };

            const options = cloneOptions(this.state.options, newOption, index);
            this.setState({ options });
        };
        this.onOptionIsDisabledChange = index => () => {
            const option = this.state.options[index];
            const newOption = {
                ...option,
                isDisabled: !option.isDisabled
            };

            const options = cloneOptions(this.state.options, newOption, index);
            this.setState({ options });
        };
        this.onOptionHideLabelChange = index => () => {
            const option = this.state.options[index];
            const newOption = {
                ...option,
                hideLabel: !option.hideLabel
            };

            const options = cloneOptions(this.state.options, newOption, index);
            this.setState({ options });
        };
        this.onOptionLabelChange = index => label => {
            const option = this.state.options[index];
            const newOption = {
                ...option,
                label
            };

            const options = cloneOptions(this.state.options, newOption, index);
            this.setState({ options });
        };
        this.onOptionValueChange = index => value => {
            const option = this.state.options[index];
            const newOption = {
                ...option,
                value
            };

            const options = cloneOptions(this.state.options, newOption, index);
            this.setState({ options });
        };
        this.onRemoveOption = index => () => {
            const options = [].concat(this.state.options);
            options.splice(index, 1);
            this.setState({ options });
        };
        this.onRequiredChange = () => {
            this.setState({ isRequired: !this.state.isRequired });
        };
    }

    getOptions() {
        return (
            <div>
                <Field label="Field Options">
                    <CheckBox
                        id="fieldDisable"
                        isChecked={this.state.isDisabled}
                        onChange={this.onDisabledChange}
                        value="disable"
                    >
                        Disable field
                    </CheckBox>
                    <CheckBox
                        id="fieldRequired"
                        isChecked={this.state.isRequired}
                        onChange={this.onRequiredChange}
                        value="required"
                    >
                        Enable required
                    </CheckBox>
                    <CheckBox
                        id="fieldHasError"
                        isChecked={this.state.hasError}
                        onChange={this.onHasErrorChange}
                        value="error"
                    >
                        Set error
                    </CheckBox>
                </Field>
                <Field label="Options List">
                    {
                        this.state.options.map((option, index) => this.renderOption(
                            option.label,
                            option.value,
                            option.isChecked,
                            option.isDisabled,
                            option.hideLabel,
                            index))
                    }
                    <Field className="app-option" label="New option">
                        <Input
                            label="Label"
                            id={this.state.newOption.label}
                            onChange={this.onNewOptionLabelChange}
                            value={this.state.newOption.label}
                        />
                        <Input
                            label="Value"
                            id={this.state.newOption.value}
                            onChange={this.onNewOptionValueChange}
                            value={this.state.newOption.value}
                        />
                        <CheckBox
                            id="addNewCheck"
                            isChecked={this.state.newOption.isChecked}
                            onChange={this.onNewOptionIsCheckedChange}
                            value={this.state.newOption.value}
                        >
                            Check
                        </CheckBox>
                        <CheckBox
                            id="addNewDisable"
                            isChecked={this.state.newOption.isDisabled}
                            onChange={this.onNewOptionIsDisabledChange}
                            value={this.state.newOption.value}
                        >
                            Disable
                        </CheckBox>
                        <CheckBox
                            id="addNewHideLabel"
                            isChecked={this.state.newOption.hideLabel}
                            onChange={this.onNewOptionHideLabelChange}
                            value={this.state.newOption.value}
                        >
                            Hide Label
                        </CheckBox>
                        <Button onClick={this.onAddNewOption}>Add new</Button>
                    </Field>
                </Field>
            </div>
        );
    }

    renderComponent() {
        return (
            <Field
                hasError={this.state.hasError}
                isDisabled={this.state.isDisabled}
                isRequired={this.state.isRequired}
                label="Field option example"
            >
                {
                    this.state.options.map((option, index) => (
                        <CheckBox
                            hideLabel={option.hideLabel}
                            id={option.value}
                            isChecked={option.isChecked}
                            isDisabled={option.isDisabled}
                            key={option.value}
                            onChange={this.onOptionIsCheckedChange(index)}
                            value={option.value}
                        >
                            {option.label}
                        </CheckBox>
                    ))
                }
            </Field>
        );
    }

    renderOption(label, value, isChecked, isDisabled, hideLabel, index) {
        return (
            <Field className="app-option" label={label} key={value}>
                <Input
                    label="Label"
                    id={label}
                    onChange={this.onOptionLabelChange(index)}
                    value={label}
                />
                <Input
                    label="Value"
                    id={value}
                    onChange={this.onOptionValueChange(index)}
                    value={value}
                />
                <CheckBox
                    id={`ck_${value}`}
                    isChecked={isChecked}
                    onChange={this.onOptionIsCheckedChange(index)}
                    value={value}
                >
                    Check
                </CheckBox>
                <CheckBox
                    id={`di_${value}`}
                    isChecked={isDisabled}
                    onChange={this.onOptionIsDisabledChange(index)}
                    value={value}
                >
                    Disable
                </CheckBox>
                <CheckBox
                    id={`hl_${value}`}
                    isChecked={hideLabel}
                    onChange={this.onOptionHideLabelChange(index)}
                    value={value}
                >
                    Hide Label
                </CheckBox>
                <Button onClick={this.onRemoveOption(index)}>Remove</Button>
            </Field>
        );
    }
}
