import BaseComponentView from 'app/components/base-component-view';
import { Breadcrumbs } from '../index';

class BreadcrumbsExample extends BaseComponentView {
    state = {
        breadcrumbs: [
            {
                title: 'Tasks and sequences',
                link: '/'
            },
            {
                title: 'Clear Internet Explorer history'
            }
        ]
    };

    handleInputChanged = e => {
        if (e.target.value === '2') {
            this.setState({
                breadcrumbs: [
                    {
                        title: 'Tasks and sequences',
                        link: '/'
                    },
                    {
                        title: 'Clear Internet Explorer history'
                    }
                ]
            });
        } else {
            this.setState({
                breadcrumbs: [
                    {
                        title: 'Tasks and sequences',
                        link: '/'
                    },
                    {
                        title: 'Single task details'
                    },
                    {
                        title: 'ASDD-233-FFASXZ'
                    }
                ]
            });
        }
    };

    getOptions() {
        return (
            <div>
                <div>
                    <b>Choose amount of breadcrumbs: </b>
                    <select name="icon" onChange={this.handleInputChanged}>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                    </select>
                </div>
            </div>
        );
    }

    renderComponent() {
        return (
            <div>
                <Breadcrumbs
                    breadcrumbs={this.state.breadcrumbs}
                />
            </div>
        );
    }
}

export default BreadcrumbsExample;
