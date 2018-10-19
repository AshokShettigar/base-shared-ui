import { Button, Sidebar, SidebarGroup, SidebarGroupItem } from 'platform-common-ui';
import BaseComponentView from 'app/components/base-component-view';

export default class SidebarExample extends BaseComponentView {
    constructor(props) {
        super(props);
        this.state = {
            isCollapsed: false,
            isSidebarOpen: true
        };
    }

    toggleExpandCollapse() {
        this.setState({ isCollapsed: !this.state.isCollapsed });
    }

    toggleSidebarHandler() {
        this.setState({ isSidebarOpen: !this.state.isSidebarOpen });
    }

    getOptions() {
        return (
            <div>
                <Button onClick={() => this.toggleSidebarHandler()}>Open/Close</Button>
            </div>
        );
    }

    renderComponent() {
        return (
            <div style={{ display: 'flex', height: '500px', width: '100%' }}>
                <Sidebar
                    isOpen={this.state.isSidebarOpen}
                    onToggleSidebar={() => this.toggleSidebarHandler()}
                >
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
                </Sidebar>
                <div style={{ flexGrow: 1, height: '500px', width: '100%' }}>content</div>
            </div>
        );
    }
}
