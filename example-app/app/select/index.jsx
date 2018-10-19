import { Select } from 'platform-common-ui';
import BaseComponentView from 'app/components/base-component-view';

const OPTIONS = [
    { label: 'A', value: 'a' },
    { label: 'B', value: 'b' },
    { label: 'C', value: 'c' },
    { label: 'D', value: 'd' },
    { label: 'E', value: 'e', isDisabled: true }
];

export default class SelectExample extends BaseComponentView {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            hideLabel: false,
            isDisabled: false,
            isRequired: false,
            label: 'Select',
            name: 'select',
            value: 'Select an Option'
        };
    }

    getOptions() {
        return (
            <div className="cn-field">
                <label className="cn-field__opt" htmlFor="disableCheckBox" >
                    <input id="disableCheckBox" className="cn-field__checkradio" type="checkbox" checked={this.state.isDisabled} onChange={this.toggleDisabled} />
                    <span className="cn-field__text">Disable input box</span>
                </label>
                <label className="cn-field__opt" htmlFor="requiredCheckBox" >
                    <input id="requiredCheckBox" className="cn-field__checkradio" type="checkbox" checked={this.state.isRequired} onChange={this.toggleRequired} />
                    <span className="cn-field__text">Required input box</span>
                </label>
                <label className="cn-field__opt" htmlFor="errorCheckBox" >
                    <input id="errorCheckBox" className="cn-field__checkradio" type="checkbox" checked={this.state.hasError} onChange={this.toggleHasError} />
                    <span className="cn-field__text">Invalid input box</span>
                </label>
                <label className="cn-field__opt" htmlFor="hideLabelCheckBox" >
                    <input id="hideLabelCheckBox" className="cn-field__checkradio" type="checkbox" checked={this.state.hideLabel} onChange={this.toggleHideLabel} />
                    <span className="cn-field__text">No label input box</span>
                </label>
            </div>
        );
    }

    renderComponent() {
        return (
            <Select
                emptyOptionLabel={this.state.emptyOptionLabel}
                hasError={this.state.hasError}
                hideLabel={this.state.hideLabel}
                isDisabled={this.state.isDisabled}
                isRequired={this.state.isRequired}
                label={this.state.label}
                name={this.state.name}
                options={OPTIONS}
                showEmptyOption
                value={this.state.value}
            />
        );
    }

    toggleDisabled = () => {
        this.setState({
            isDisabled: !this.state.isDisabled
        });
    }

    toggleRequired = () => {
        this.setState({
            isRequired: !this.state.isRequired
        });
    }

    toggleHasError = () => {
        this.setState({
            hasError: !this.state.hasError
        });
    }

    toggleHideLabel = () => {
        this.setState({
            hideLabel: !this.state.hideLabel
        });
    }
}
