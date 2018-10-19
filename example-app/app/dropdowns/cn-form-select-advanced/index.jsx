import { CnFormSelectAdvanced } from 'platform-common-ui';
import BaseComponentView from 'app/components/base-component-view';

export default class CnFormSelectAdvancedExample extends BaseComponentView {
    constructor(props) {
        super(props);

        this.state = {
            isRequired: true,
            isDisabled: false,
            isLoading: false
        };

        this.toggleRequired = this.toggleRequired.bind(this);
        this.toggleDisabled = this.toggleDisabled.bind(this);
        this.toggleLoading = this.toggleLoading.bind(this);
    }

    toggleRequired() {
        this.setState(prevState => ({
            isRequired: !prevState.isRequired
        }));
    }

    toggleDisabled() {
        this.setState(prevState => ({
            isDisabled: !prevState.isDisabled
        }));
    }

    toggleLoading() {
        this.setState(prevState => ({
            isLoading: !prevState.isLoading
        }));
    }

    getOptions() {
        return (
            <div>
                <label className="control text-bold" htmlFor="requiredCheckbox">
                    <input
                        checked={this.state.isRequired}
                        id="requiredCheckbox"
                        onChange={this.toggleRequired}
                        type="checkbox"
                    />
                    Required
                </label>
                <label className="control text-bold" htmlFor="disabledCheckbox">
                    <input
                        checked={this.state.isDisabled}
                        id="disabledCheckbox"
                        onChange={this.toggleDisabled}
                        type="checkbox"
                    />
                    Disabled
                </label>
                <label className="control text-bold" htmlFor="loadingCheckbox">
                    <input
                        checked={this.state.isLoading}
                        id="loadingCheckbox"
                        onChange={this.toggleLoading}
                        type="checkbox"
                    />
                    Loading
                </label>
            </div>
        );
    }


    renderComponent() {
        return (
            <CnFormSelectAdvanced
                dataList={[
                    {
                        id: 1,
                        name: 'A',
                        friendlyName: 'A Item',
                        descriptions: ['Item 1'],
                        notification: 'Hello World'
                    },
                    {
                        id: 2,
                        name: 'B',
                        friendlyName: 'B Item',
                        description: 'Item 2'
                    },
                    { id: 3, name: 'C' },
                    { id: 4, name: 'D' },
                    { id: 5, name: 'E' },
                    {
                        id: 6,
                        name: 'F',
                        friendlyName: 'F Item',
                        descriptions: ['Item 6', 'Active User: 6']
                    },
                    {
                        id: 7,
                        name: 'G',
                        friendlyName: 'G Item',
                        descriptions: ['Item 7']
                    },
                    { id: 8, name: 'H' },
                    { id: 9, name: 'I' },
                    { id: 10, name: 'J' }
                ]}
                disabledItems={[
                    { id: 1, name: 'A' },
                    { id: 3, name: 'C' }
                ]}
                updateList={[]}
                onSelectedData={() => {}}
                isRequired={this.state.isRequired}
                isDisabled={this.state.isDisabled}
                isLoading={this.state.isLoading}
            />
        );
    }
}
