import { Button, BUTTON_SIZE, BUTTON_VARIATION } from 'platform-common-ui';
import BaseComponentView from 'app/components/base-component-view';

export default class ButtonExample extends BaseComponentView {
    constructor(props) {
        super(props);
        this.state = {
            isDark: false,
            isDisabled: false,
            isLoading: false,
            size: BUTTON_SIZE.MEDIUM,
            variation: BUTTON_VARIATION.DEFAULT
        };
    }

    getOptions() {
        return (
            <div>
                <div className="control">
                    <span>Button variation: </span>
                    <label htmlFor="defaultRadio">
                        <input
                            checked={this.state.variation === BUTTON_VARIATION.DEFAULT}
                            id="defaultRadio"
                            name="btnState"
                            onChange={() => this.toggleView(BUTTON_VARIATION.DEFAULT)}
                            type="radio"
                        />
                        Enable default
                    </label>
                    <label htmlFor="primaryRadio">
                        <input
                            checked={this.state.variation === BUTTON_VARIATION.PRIMARY}
                            id="primaryRadio"
                            name="btnState"
                            onChange={() => this.toggleView(BUTTON_VARIATION.PRIMARY)}
                            type="radio"
                        />
                        Enable primary
                    </label>
                    <label htmlFor="secondaryRadio">
                        <input
                            checked={this.state.variation === BUTTON_VARIATION.SECONDARY}
                            id="secondaryRadio"
                            name="btnState"
                            onChange={() => this.toggleView(BUTTON_VARIATION.SECONDARY)}
                            type="radio"
                        />
                        Enable secondary
                    </label>
                </div>
                <div>
                    <span>Button state:</span>
                    <label htmlFor="isNotLoading">
                        <input
                            type="radio"
                            id="isNotLoading"
                            name="isLoading"
                            checked={!this.state.isLoading}
                            onChange={() => this.toggleIsLoading(false)}
                        />
                        None
                    </label>
                    <label htmlFor="isLoading">
                        <input
                            type="radio"
                            id="isLoading"
                            name="isLoading"
                            checked={this.state.isLoading}
                            onChange={() => this.toggleIsLoading(true)}
                        />
                       Loading
                    </label>
                </div>
                <div className="control">
                    <span>Button Size: </span>
                    <label htmlFor="smallRadio">
                        <input
                            checked={this.state.size === BUTTON_SIZE.SMALL}
                            id="smallRadio"
                            name="btnSize"
                            onChange={() => this.toggleSize(BUTTON_SIZE.SMALL)}
                            type="radio"
                        />
                        Small
                    </label>
                    <label htmlFor="mediumRadio">
                        <input
                            checked={this.state.size === BUTTON_SIZE.MEDIUM}
                            id="mediumRadio"
                            name="btnSize"
                            onChange={() => this.toggleSize(BUTTON_SIZE.MEDIUM)}
                            type="radio"
                        />
                        Medium
                    </label>
                    <label htmlFor="largeRadio">
                        <input
                            checked={this.state.size === BUTTON_SIZE.LARGE}
                            id="largeRadio"
                            name="btnSize"
                            onChange={() => this.toggleSize(BUTTON_SIZE.LARGE)}
                            type="radio"
                        />
                        Large
                    </label>
                </div>
                <label className="control" htmlFor="themeCheckbox">
                    <input
                        checked={this.state.isDark}
                        id="themeCheckbox"
                        onChange={this.toggleTheme}
                        type="checkbox"
                    />
                    Dark Theme
                </label>
                <label className="control" htmlFor="disabledCheckbox">
                    <input
                        checked={this.state.isDisabled}
                        id="disabledCheckbox"
                        onChange={this.toggleDisabled}
                        type="checkbox"
                    />
                    Disable button
                </label>
            </div>
        );
    }

    renderComponent() {
        return (
            <Button
                isDark={this.state.isDark}
                isDisabled={this.state.isDisabled}
                size={this.state.size}
                variation={this.state.variation}
                isLoading={this.state.isLoading}
                onClick={() => {
                    alert('Button clicked!'); // eslint-disable-line no-alert
                }}
            >
                Button Label
            </Button>
        );
    }

    toggleView = variation => {
        this.setState({
            variation
        });
    }

    toggleIsLoading(isLoading) {
        this.setState(() => ({ isLoading }));
    }

    toggleDisabled = () => {
        this.setState({
            isDisabled: !this.state.isDisabled
        });
    }

    toggleSize = size => {
        this.setState({
            size
        });
    }

    toggleTheme = () => {
        this.setState({
            isDark: !this.state.isDark
        });
    }
}
