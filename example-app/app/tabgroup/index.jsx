/* eslint-disable jsx-a11y/no-static-element-interactions, react/prop-types */
import { Component } from 'react';
import { HigherOrderTabComponent, Tab, TabGroup } from 'platform-common-ui';
import BaseComponentView from 'app/components/base-component-view';

// eslint-disable-next-line react/prefer-stateless-function
class TabWithPreText extends Component {
    render() {
        return (
            <div
                className={this.props.className}
                onClick={this.props.onClick}
            >
                Custom! {this.props.label}
            </div>
        );
    }
}

const CustomTab = HigherOrderTabComponent(TabWithPreText);

export default class TabGroupExample extends BaseComponentView {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'Tab 1',
            showContent: false
        };
    }

    getOptions() {
        return (
            <div>
                <div className="cn-field">
                    <span className="cn-field__label">Active tab: </span>
                    <label className="cn-field__opt" htmlFor="tab1">
                        <input
                            checked={this.state.activeTab === 'Tab 1'}
                            className="cn-field__checkradio"
                            id="tab1"
                            onChange={() => this.onChangeTab('Tab 1')}
                            type="radio"
                        />
                        <span className="cn-field__text">Tab 1</span>
                    </label>
                    <label className="cn-field__opt" htmlFor="tab2">
                        <input
                            checked={this.state.activeTab === 'Tab 2'}
                            className="cn-field__checkradio"
                            id="tab2"
                            onChange={() => this.onChangeTab('Tab 2')}
                            type="radio"
                        />
                        <span className="cn-field__text">Tab 2</span>
                    </label>
                    <label className="cn-field__opt" htmlFor="tab3">
                        <input
                            checked={this.state.activeTab === 'Tab 3'}
                            className="cn-field__checkradio"
                            id="tab3"
                            onChange={() => this.onChangeTab('Tab 3')}
                            type="radio"
                        />
                        <span className="cn-field__text">Tab 3</span>
                    </label>
                    <label className="cn-field__opt" htmlFor="tab4">
                        <input
                            checked={this.state.activeTab === 'Tab 4'}
                            className="cn-field__checkradio"
                            id="tab4"
                            onChange={() => this.onChangeTab('Tab 4')}
                            type="radio"
                        />
                        <span className="cn-field__text">Tab 4</span>
                    </label>
                </div>
                <div className="cn-field">
                    <label className="cn-field__opt" htmlFor="disableCheckBox" >
                        <input id="disableCheckBox" className="cn-field__checkradio" type="checkbox" checked={this.state.showContent} onChange={() => this.toggleContent()} />
                        <span className="cn-field__text">Show content</span>
                    </label>
                </div>
            </div>
        );
    }

    renderComponent() {
        const tabs = [
            <Tab
                href="#/tab1"
                isActive={this.state.activeTab === 'Tab 1'}
                label="Tab 1"
            />,
            <Tab
                href="#/tab2"
                isActive={this.state.activeTab === 'Tab 2'}
                label="Tab 2"
            />,
            <CustomTab
                label="Tab 3"
                isActive={this.state.activeTab === 'Tab 3'}
                onClick={() => this.onChangeTab('Tab 3')}
            />,
            <CustomTab
                label="Tab 4"
                isActive={this.state.activeTab === 'Tab 4'}
                onClick={() => this.onChangeTab('Tab 4')}
            />
        ];
        return (
            <TabGroup tabs={tabs}>
                {this.state.showContent && <span>content</span>}
            </TabGroup>
        );
    }

    onChangeTab(activeTab) {
        this.setState({ activeTab });
    }

    toggleContent() {
        this.setState({ showContent: !this.state.showContent });
    }
}
