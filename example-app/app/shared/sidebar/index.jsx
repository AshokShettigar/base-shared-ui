import React from 'react';
import { Button } from 'platform-common-ui';
import BaseComponentView from 'app/components/base-component-view';

import { Sidebar } from '../index';

export default class SidebarExample extends BaseComponentView {
    state = {
        isOpen: false
    };

    handleOpen = () => {
        this.setState({ isOpen: true });
    };

    handleClose = () => {
        this.setState({ isOpen: false });
    };

    getOptions() {
        return (
            <div>
                <Button onClick={this.handleOpen}>Open sidebar</Button>
            </div>
        );
    }

    renderComponent() {
        return (
            <Sidebar
                position="right"
                title="Sidebar title"
                isOpen={this.state.isOpen}
                onDismiss={this.handleClose}
                headerClassName="header-class-name"
            >
                Sidebar content
            </Sidebar>
        );
    }
}
