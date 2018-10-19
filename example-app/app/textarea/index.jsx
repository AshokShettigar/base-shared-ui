import { Textarea } from 'platform-common-ui';
import BaseComponentView from 'app/components/base-component-view';

export default class TextareaExample extends BaseComponentView {
    constructor(props) {
        super(props);
        this.state = {
            cols: null,
            hasError: false,
            hideLabel: false,
            isDisabled: false,
            isRequired: false,
            label: 'Textarea',
            placeholder: null,
            rows: null
        };
    }

    getOptions() {
        return (
            <div className="cn-field">
                <label htmlFor="text_input">
                    <strong>Change Textarea Value</strong>
                    <input id="text_input" className="cn-field__input" type="text" onChange={this.changeValue} />
                </label>
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
                <label className="cn-field__opt" htmlFor="placeholderInput" >
                    <input id="placeholderInput" className="cn-field__input" type="text" onChange={this.changePlaceholder} placeholder="Enter placeholder text" />
                </label>
                <label className="cn-field__opt" htmlFor="rowsInput">
                    <input id="rowsInput" className="cn-field__input" type="number" onChange={this.changeRows} placeholder="No. of Rows" />
                </label>
                <label className="cn-field__opt" htmlFor="colsInput">
                    <input id="colsInput" className="cn-field__input" type="number" onChange={this.changeCols} placeholder="No. of Cols" />
                </label>
            </div>
        );
    }

    renderComponent() {
        return (
            <Textarea
                cols={this.state.cols}
                hasError={this.state.hasError}
                hideLabel={this.state.hideLabel}
                isDisabled={this.state.isDisabled}
                isRequired={this.state.isRequired}
                label={this.state.label}
                placeholder={this.state.placeholder}
                rows={this.state.rows}
                value={this.state.value}
                onChange={this.changeTextareaValue}
            />
        );
    }

    changeTextareaValue = value => {
        this.setState({
            value
        });
    }

    changeValue = e => {
        this.setState({
            value: e.target.value
        });
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

    changePlaceholder = e => {
        this.setState({
            placeholder: e.target.value === '' ? null : e.target.value
        });
    }

    changeRows = e => {
        this.setState({
            rows: parseInt(e.target.value, 10)
        });
    }

    changeCols = e => {
        this.setState({
            cols: parseInt(e.target.value, 10)
        });
    }
}
