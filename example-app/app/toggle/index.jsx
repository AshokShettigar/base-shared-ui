import { CheckBox, Toggle } from 'platform-common-ui';
import BaseComponentView from 'app/components/base-component-view';

export default class ToggleExample extends BaseComponentView {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            isDisabled: false
        };
        this.onChange = () => this.setState({ isChecked: !this.state.isChecked });
        this.onDisabledChange = () => this.setState({ isDisabled: !this.state.isDisabled });
    }

    getOptions() {
        return (
            <div>
                <CheckBox
                    id="fieldCheck"
                    isChecked={this.state.isChecked}
                    onChange={this.onChange}
                    value="check"
                >
                    Check
                </CheckBox>
                <CheckBox
                    id="fieldDisable"
                    isChecked={this.state.isDisabled}
                    onChange={this.onDisabledChange}
                    value="disable"
                >
                    Disable
                </CheckBox>
            </div>
        );
    }

    renderComponent() {
        return (
            <div>
                <Toggle
                    checked={this.state.isChecked}
                    disabled={this.state.isDisabled}
                    icons={false}
                    onChange={this.onChange}
                />
                <p className="helper-text">
                    Developer note:  This toggle component wraps the open-source component <a href="https://www.npmjs.com/package/react-toggle" alt="react-toggle">react-toggle</a>.
                    <br />
                    Please reference documentation at <a href="https://www.npmjs.com/package/react-toggle" alt="react-toggle">react-toggle</a> for usage guidance.
                </p>
            </div>
        );
    }
}
