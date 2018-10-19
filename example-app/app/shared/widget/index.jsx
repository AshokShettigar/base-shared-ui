import BaseComponentView from 'app/components/base-component-view';
import { Widget } from '../index';

class WidgetExample extends BaseComponentView {
    state = {
        title: 'Title',
        icon: 'alert',
        actualCount: 0,
        totalCount: 20,
        isDisabled: false,
        isActive: false
    };

    handleInputChanged = e => this.setState({
        [e.target.name]: e.target.value
    });

    handleCheckboxChanged = e => this.setState({
        [e.target.name]: e.target.checked
    });

    handleToggle = () => this.setState(prevState => ({
        isActive: !prevState.isActive
    }));

    getOptions() {
        return (
            <div>
                <div>
                    <b>Actual count: </b>
                    <input
                        name="actualCount"
                        type="number"
                        onChange={this.handleInputChanged}
                        value={this.state.actualCount}
                    />
                </div>
                <div>
                    <b>Total count: </b>
                    <input
                        name="totalCount"
                        type="number"
                        onChange={this.handleInputChanged}
                        value={this.state.totalCount}
                    />
                </div>
                <div>
                    <b>Select widget title: </b>
                    <input
                        name="title"
                        onChange={this.handleInputChanged}
                        value={this.state.title}
                    />
                </div>
                <div>
                    <b>Select icon of widget: </b>
                    <select name="icon" onChange={this.handleInputChanged}>
                        <option value="alert">Alert</option>
                        <option value="success">Success</option>
                        <option value="remove">Failure</option>
                    </select>
                </div>
                <div>
                    <b>Disabled: </b>
                    <input
                        name="isDisabled"
                        type="checkbox"
                        onChange={this.handleCheckboxChanged}
                    />
                </div>
                <div>
                    <b>Hint: you can click on a widget
                        and it will cause toogle function to be called</b>
                </div>
            </div>
        );
    }

    renderComponent() {
        return (
            <div>
                <Widget
                    actualCount={this.state.actualCount}
                    totalCount={this.state.totalCount}
                    title={this.state.title}
                    icon={this.state.icon}
                    isDisabled={this.state.isDisabled}
                    isActive={this.state.isActive}
                    onToggle={this.handleToggle}
                />
            </div>
        );
    }
}

export default WidgetExample;
