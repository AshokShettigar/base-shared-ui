import { CheckBox, Input, MenuButton } from 'platform-common-ui';
import BaseComponentView from 'app/components/base-component-view';

export default class MenuButtonExample extends BaseComponentView {
    constructor(props) {
        super(props);
        this.state = {
            icon: null,
            isDisabled: false,
            label: 'Menu button',
            title: ''
        };

        this.onDisabledChange = () => this.setState({ isDisabled: !this.state.isDisabled });
        this.onChangeLabel = label => this.setState({ label });
        this.onChangeTitle = title => this.setState({ title });
        this.toggleShowIcon = icon => this.setState({ icon: this.state.icon ? null : icon });
        // eslint-disable-next-line no-alert
        this.onClickHandler = () => alert('Menu button clicked!');
    }

    getOptions() {
        return (
            <div>
                <CheckBox
                    id="showIcon"
                    isChecked={!!this.state.icon}
                    onChange={this.toggleShowIcon}
                    value="filter"
                >
                    Show Icon
                </CheckBox>
                <CheckBox
                    id="fieldDisable"
                    isChecked={this.state.isDisabled}
                    onChange={this.onDisabledChange}
                    value="disable"
                >
                    Disable
                </CheckBox>
                <Input
                    id="labelInput"
                    label="Label value"
                    onChange={this.onChangeLabel}
                    value={this.state.label}
                />
                <Input
                    id="titleInput"
                    label="Title value"
                    onChange={this.onChangeTitle}
                    value={this.state.title}
                />
            </div>
        );
    }

    renderComponent() {
        return (
            <MenuButton
                icon={this.state.icon}
                isDisabled={this.state.isDisabled}
                onClick={this.onClickHandler}
                title={this.state.title}
            >
                {this.state.label}
            </MenuButton>
        );
    }
}
