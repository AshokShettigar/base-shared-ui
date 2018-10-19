import BaseComponentView from 'app/components/base-component-view';
import { CheckBox } from 'platform-common-ui';
import { VerticalNav } from '../index';

export default class VerticalNavExample extends BaseComponentView {
    constructor(props) {
        super(props);

        this.items = [{
            id: '1',
            title: 'Item 1',
            onClick: this.handleItemClick
        }, {
            id: '2',
            title: 'Item 2',
            onClick: this.handleItemClick
        }, {
            id: '3',
            title: 'Item 3',
            onClick: this.handleItemClick
        }];
        const [activeItem] = this.items;

        this.state = {
            activeItem
        };
    }

    handleItemClick = ({ item }) => {
        const { id } = item;

        if (this.state.activeItem.id !== id) {
            this.setState({ activeItem: item });
        }
    };

    getOptions() {
        const { activeItem } = this.state;

        return (
            <div>
                <b>Active item:</b> { activeItem.title }
            </div>
        );
    }

    renderComponent() {
        const { activeItem: { id } } = this.state;

        return (
            <VerticalNav
                activeId={id}
                items={this.items}
                className="vertical-nav"
                title="Navigation title"
                titleClassName="vertical-nav--title"
                itemClassName="vertical-nav--item"
                linkClassName="vertical-nav--link"
            />
        );
    }
}
