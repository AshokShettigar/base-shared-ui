import { CnDropdownBasic, Radio } from 'platform-common-ui';
import BaseComponentView from 'app/components/base-component-view';

export default class CnDropdownBasicExample extends BaseComponentView {
    constructor(props) {
        super(props);

        this.state = {
            type: 'context',
            label: '3dot-horizontal',
            isFormatted: false
        };

        this.options = [
            {
                name: 'Learn React',
                onClick: () => {
                    alert('Learn React'); // eslint-disable-line no-alert
                }
            },
            {
                name: 'Learn Redux',
                onClick: () => {
                    alert('Learn Redux'); // eslint-disable-line no-alert
                }
            },
            {
                name: 'abc'
            },
            {
                name: '1'
            },
            {
                name: '2'
            }
        ];

        this.toggleDropdownType = this.toggleDropdownType.bind(this);
        this.toggleDropdownLabel = this.toggleDropdownLabel.bind(this);
        this.toggleFormatted = this.toggleFormatted.bind(this);
    }

    toggleDropdownType(type) {
        this.setState({
            type
        });
    }

    toggleDropdownLabel(label) {
        this.setState({
            label
        });
    }

    toggleFormatted() {
        this.setState(prevState => ({
            isFormatted: !prevState.isFormatted
        }));
    }

    getOptions() {
        return (
            <div>
                <label className="control text-bold" htmlFor="formattedCheckbox">
                    <input
                        checked={this.state.isFormatted}
                        id="formattedCheckbox"
                        onChange={this.toggleFormatted}
                        type="checkbox"
                    />
                    Formatted (for Sites Dropdown Only)
                </label>
                <span className="control text-bold">Dropdowns:</span>
                <Radio
                    id="sitesRadio"
                    isChecked={this.state.type === 'sites'}
                    onChange={() => this.toggleDropdownType('sites')}
                    value="sites"
                >
                    Sites dropdown
                </Radio>
                <Radio
                    id="contextRadio"
                    isChecked={this.state.type === 'context'}
                    onChange={() => this.toggleDropdownType('context')}
                    value="context"
                >
                    Context dropdown
                </Radio>
                <div>
                    <span className="control text-bold">Labels:</span>
                    <Radio
                        id="dotRadio"
                        isChecked={this.state.label === '3dot-horizontal'}
                        onChange={() => this.toggleDropdownLabel('3dot-horizontal')}
                        value="3dot-horizontal"
                    >
                        3dot-horizontal
                    </Radio>
                    <Radio
                        id="triangleRadio"
                        isChecked={this.state.label === 'triangle-down'}
                        onChange={() => this.toggleDropdownLabel('triangle-down')}
                        value="triangle-down"
                    >
                        triangle-down
                    </Radio>
                </div>
            </div>
        );
    }

    renderComponent() {
        return (
            <div className="pull-right">
                <CnDropdownBasic
                    type={this.state.type}
                    label={this.state.label}
                    options={this.options}
                    isFormatted={this.state.isFormatted}
                />
            </div>
        );
    }
}
