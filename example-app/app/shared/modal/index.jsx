import React from 'react';
import { Button } from 'platform-common-ui';
import BaseComponentView from 'app/components/base-component-view';

import { Modal, ModalFooter, ProgressTracker } from '../index';

const STEPS = [{ title: 'Select targets' }, { title: 'Configure setup' }, { title: 'Schedule' }];

export default class ModalExample extends BaseComponentView {
    state = {
        isOpen: false,
        isOpenWithCustomTitle: false
    };

    handleOpen = state => {
        this.setState(state);
    };

    handleClose = () => {
        this.setState({
            isOpen: false,
            isOpenWithCustomTitle: false
        });
    };

    getOptions() {
        return (
            <div>
                <div>
                    <Button onClick={() => this.handleOpen({ isOpen: true })}>Open modal</Button>
                </div>
                <div>
                    <Button onClick={() => this.handleOpen({ isOpenWithCustomTitle: true })}>Open modal with custom title</Button>
                </div>
            </div>
        );
    }

    renderComponent() {
        return (
            <div>
                <Modal
                    position="bottom"
                    title="Modal title"
                    isOpen={this.state.isOpen}
                    onDismiss={this.handleClose}
                    sidebar={'Modal sidebar'}
                    header={<ProgressTracker steps={STEPS} activeStep={3} />}
                    footer={
                        <ModalFooter
                            submitLabel="Submit"
                            dismissLabel="Cancel"
                            onSubmit={() => {
                                alert('submit'); // eslint-disable-line no-alert
                            }}
                            onDismiss={this.handleClose}
                        />
                    }
                >
                    Modal content
                </Modal>
                <Modal
                    position="bottom"
                    title={<div>title</div>}
                    isOpen={this.state.isOpenWithCustomTitle}
                    onDismiss={this.handleClose}
                    sidebar={'Modal sidebar'}
                    header={<ProgressTracker steps={STEPS} activeStep={3} />}
                    footer={
                        <ModalFooter
                            submitLabel="Submit"
                            dismissLabel="Cancel"
                            onSubmit={() => {
                                alert('submit'); // eslint-disable-line no-alert
                            }}
                            onDismiss={this.handleClose}
                        />
                    }
                >
                    Modal content
                </Modal>
            </div>
        );
    }
}
