import { Button, SidebarGroup, SidebarGroupItem } from 'platform-common-ui';
import BaseComponentView from 'app/components/base-component-view';

export default class SidebarGroupExample extends BaseComponentView {
    constructor(props) {
        super(props);
        this.state = {
            isCollapsed: false
        };
    }

    toggleExpandCollapse() {
        this.setState({ isCollapsed: !this.state.isCollapsed });
    }

    getOptions() {
        return (
            <div>
                <Button onClick={() => this.toggleExpandCollapse()}>Expand/Collapse</Button>
            </div>
        );
    }

    renderComponent() {
        return (
            <SidebarGroup
                isCollapsed={this.state.isCollapsed}
                onChangeExpandCollapse={() => this.toggleExpandCollapse()}
                title="Group"
            >
                <SidebarGroupItem>Item 1</SidebarGroupItem>
                <SidebarGroupItem>Item 2</SidebarGroupItem>
                <SidebarGroupItem>Item 3</SidebarGroupItem>
                <SidebarGroupItem>Item 4</SidebarGroupItem>
            </SidebarGroup>
        );
    }
}
