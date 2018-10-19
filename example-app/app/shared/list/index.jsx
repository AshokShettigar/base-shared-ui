import BaseComponentView from 'app/components/base-component-view';
import { CheckBox, Select } from 'platform-common-ui';

import { List } from '../index';

const OPTIONS = [
    { label: 'Left', value: 'left' },
    { label: 'Right', value: 'right' }
];

export default class ListExample extends BaseComponentView {
    state = {
        title: 'List title',
        list: [
            {
                name: 'With label and nested items',
                label: 'LABEL',
                subList: [
                    {
                        name: 'nested item1'
                    },
                    {
                        name: 'nested item2'
                    },
                    {
                        name: 'nested item3'
                    }
                ]
            },
            {
                name: 'With label',
                label: 'LABEL',
            },
            {
                name: 'With nested items',
                disabled: true,
                subList: [
                    {
                        name: 'nested item1'
                    },
                    {
                        name: 'nested item2'
                    },
                    {
                        name: 'nested item3'
                    }
                ]
            },
            {
                name: 'Simple item',
                disabled: true
            }
        ],

        sublistTitleCheckbox: true,
        showCount: true,
        position: 'right'
    };

    onSelect = () => {};
    onMouseEnter = () => {};

    handleSwitchSublistTitle = () => {
        this.setState({
            sublistTitleCheckbox: !this.state.sublistTitleCheckbox
        });
    };

    handleSwitchCount = () => {
        this.setState({
            showCount: !this.state.showCount
        });
    };

    handleSelectChange = value => {
        this.setState({
            position: value
        });
    };

    getOptions() {
        return (
            <div>
                <CheckBox
                    id="sublistTitleCheckbox"
                    isChecked={this.state.sublistTitleCheckbox}
                    onChange={this.handleSwitchSublistTitle}
                >
                    Show sublist title
                </CheckBox>
                <CheckBox
                    isChecked={this.state.showCount}
                    onChange={this.handleSwitchCount}
                >
                    Show count
                </CheckBox>
                <Select
                    label="Sublist position"
                    name="Position"
                    options={OPTIONS}
                    value={this.state.position}
                    onChange={this.handleSelectChange}
                />
            </div>
        );
    }

    renderComponent() {
        return (
            <div style={{ margin: '0 25%' }}>
                <List
                    title="categories"
                    list={this.state.list}
                    subList={({ subList }) => subList }
                    subListPosition={this.state.position}
                    showSublistTitle={this.state.sublistTitleCheckbox}
                    showCount={this.state.showCount}
                    onSelect={this.onSelect}
                    onMouseEnter={this.onMouseEnter}
                />
            </div>
        );
    }
}
