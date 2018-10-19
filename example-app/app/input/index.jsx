import { Input, Field } from 'platform-common-ui';
import BaseComponentView from 'app/components/base-component-view';

export default class InputExample extends BaseComponentView {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            hideLabel: false,
            id: 'inputId',
            isDisabled: false,
            isFocusOnMount: false,
            isRequired: false,
            key: 'inputKey',
            keyCode: null,
            label: 'Text',
            value: ''
        };
        this.keyDown = this.keyDown.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    getOptions() {
        return (
            <div className="cn-field">
                <Field label="Key Down">Key code: {this.state.keyCode}</Field>
                <div className="cn-field">
                    <span className="cn-field__label">Input Options:</span>
                </div>
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
                <label className="cn-field__opt" htmlFor="maxLengthCheckBox" >
                    <input id="maxLengthCheckBox" className="cn-field__checkradio" type="checkbox" checked={this.state.maxLength} onChange={this.toggleMaxLength} />
                    <span className="cn-field__text">Set maxLength to 10</span>
                </label>
                <label className="cn-field__opt" htmlFor="hideLabelCheckBox" >
                    <input id="hideLabelCheckBox" className="cn-field__checkradio" type="checkbox" checked={this.state.hideLabel} onChange={this.toggleHideLabel} />
                    <span className="cn-field__text">No label input box</span>
                </label>
                <label className="cn-field__opt" htmlFor="focusCheckBox" >
                    <input id="focusCheckBox" className="cn-field__checkradio" type="checkbox" checked={this.state.isFocusOnMount} onChange={this.toggleFocus} />
                    <span className="cn-field__text">Focus input on mount</span>
                </label>
            </div>
        );
    }

    renderComponent() {
        return [
            <Input
                hasError={this.state.hasError}
                hideLabel={this.state.hideLabel}
                id={this.state.id}
                isDisabled={this.state.isDisabled}
                isFocusOnMount={this.state.isFocusOnMount}
                isRequired={this.state.isRequired}
                maxLength={this.state.maxLength}
                key={this.state.key}
                label={this.state.label}
                value={this.state.value}
                onKeyDown={this.keyDown}
                onChange={this.onChange}
            />
        ];
    }

    onChange(value) {
        this.setState({ value });
    }

    keyDown(keyCode) {
        this.setState({ keyCode });
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

    toggleFocus = () => {
        this.setState({
            isFocusOnMount: !this.state.isFocusOnMount,
            key: Math.random().toString()
        });
    }

    toggleMaxLength = () => {
        this.setState({
            maxLength: !this.state.maxLength ? 10 : undefined
        });
    }
}
