import { connect } from 'react-redux';
import { Button, CheckBox, DatePicker, Input } from 'platform-common-ui';
import BaseComponentView from 'app/components/base-component-view';

const ConnectedDatePicker = connect()(DatePicker);
export default class DatePickerExample extends BaseComponentView {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            hideLabel: false,
            isDisabled: false,
            isRequired: false,
            label: 'Date picker',
            placeholder: 'mm/dd/yyyy',
            value: null
        };

        this.onChange = value => this.setState({ value });
        this.onDisabledChange = () => this.setState({ isDisabled: !this.state.isDisabled });
        this.onRequiredChange = () => this.setState({ isRequired: !this.state.isRequired });
        this.onHasErrorChange = () => this.setState({ hasError: !this.state.hasError });
        this.onHideLabelChange = () => this.setState({ hideLabel: !this.state.hideLabel });
        this.onChangePlaceholder = placeholder => this.setState({ placeholder });
        this.onChangeLabel = label => this.setState({ label });
        this.setToToday = () => this.setState({ value: new Date() });
        this.clearValue = () => this.setState({ value: null });
    }

    getOptions() {
        return (
            <div>
                <Button onClick={this.setToToday}>
                    Set to Today
                </Button>
                <Button onClick={this.clearValue}>
                    Clear date
                </Button>
                <CheckBox
                    id="fieldHideLabel"
                    isChecked={this.state.hideLabel}
                    onChange={this.onHideLabelChange}
                    value="hideLabel"
                >
                    Hide Label
                </CheckBox>
                <CheckBox
                    id="fieldDisable"
                    isChecked={this.state.isDisabled}
                    onChange={this.onDisabledChange}
                    value="disable"
                >
                    Disable
                </CheckBox>
                <CheckBox
                    id="fieldRequired"
                    isChecked={this.state.isRequired}
                    onChange={this.onRequiredChange}
                    value="required"
                >
                    Enable Required
                </CheckBox>
                <CheckBox
                    id="fieldHasError"
                    isChecked={this.state.hasError}
                    onChange={this.onHasErrorChange}
                    value="error"
                >
                    Set error
                </CheckBox>
                <Input
                    id="placeholderInput"
                    label="Placeholder value"
                    onChange={this.onChangePlaceholder}
                    value={this.state.placeholder}
                />
                <Input
                    id="labelInput"
                    label="Label value"
                    onChange={this.onChangeLabel}
                    value={this.state.label}
                />
            </div>
        );
    }

    renderComponent() {
        return (
            <ConnectedDatePicker
                hasError={this.state.hasError}
                hideLabel={this.state.hideLabel}
                id="dp1"
                isDisabled={this.state.isDisabled}
                isRequired={this.state.isRequired}
                label={this.state.label}
                onChange={this.onChange}
                placeholder={this.state.placeholder}
                value={this.state.value}
            />
        );
    }
}
