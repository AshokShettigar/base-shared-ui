import CheckBoxExample from 'app/checkbox';
import { Field, Radio } from 'platform-common-ui';

function resolveSelected(options, selectedOption) {
    return options.map(option => ({
        ...option,
        isChecked: option.value === selectedOption
    }));
}

export default class RadioExample extends CheckBoxExample {
    constructor(props) {
        super(props);

        this.onAddNewOption = () => {
            const { newOption } = this.state;
            const tmpOptions = this.state.options.concat(newOption);
            const selectedOption = newOption.isChecked
                ? newOption.value
                : this.state.selectedOption;
            const options = resolveSelected(tmpOptions, selectedOption);
            this.setState({
                options,
                selectedOption,
                newOption: {
                    label: '',
                    value: '',
                    hideLabel: false,
                    isChecked: false,
                    isDisabled: false
                }
            });
        };
        this.onOptionIsCheckedChange = () => selectedOption => {
            const options = resolveSelected(this.state.options, selectedOption);
            this.setState({ options, selectedOption });
        };
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
                        <Radio
                            hideLabel={option.hideLabel}
                            id={option.value}
                            isChecked={this.state.selectedOption === option.value}
                            isDisabled={option.isDisabled}
                            key={option.value}
                            onChange={this.onOptionIsCheckedChange(index)}
                            value={option.value}
                        >
                            {option.label}
                        </Radio>
                    ))
                }
            </Field>
        );
    }
}
