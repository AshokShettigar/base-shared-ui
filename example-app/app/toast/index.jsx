import React from 'react';
import {
    Button,
    Spinner,
    toast,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'platform-common-ui';
import BaseComponentView from 'app/components/base-component-view';

import data from './data';

export default class ToastExample extends BaseComponentView {
    componentWillUnmount() {
        toast.removeByType('message');
    }

    getOptions() {
        return (
            <div>
                <div>
                    <Button
                        onClick={() => toast.message(data.short.title, data.short.message)}
                    >trigger message toast</Button>
                </div>
                <div>
                    <Button
                        onClick={() => toast.success(data.short.title, data.short.message)}
                    >trigger success toast</Button>
                </div>
                <div>
                    <Button
                        onClick={() => toast.removeByType('success')}
                    >clear success toast</Button>
                </div>
                <div>
                    <Button onClick={() => toast.warning(data.short.title, data.short.message)}>
                        trigger warning toast
                    </Button>
                </div>
                <div>
                    <Button onClick={() => toast.info(data.short.title, data.short.message)}>
                        trigger info toast
                    </Button>
                </div>
                <div>
                    <Button onClick={() => toast.error(data.short.title, data.short.message)}>
                        trigger error toast
                    </Button>
                </div>
                <div>
                    <Button onClick={() => toast.error(data.short.title, data.short.message, {
                        /* eslint-disable no-alert */
                        onShowComplete: () => alert('onShowComplete'),
                        onHideComplete: () => alert('onHideComplete'),
                        onCloseButtonClick: () => alert('onCloseButtonClick')
                        /* eslint-disable no-alert */
                    })}
                    >handlers</Button>

                </div>
                <div>
                    <Button onClick={() => toast.success(data.long.title, data.long.message)}>
                        a lot of text
                    </Button>
                </div>
                <div>
                    <Button onClick={() => toast.success(
                        data.short.title,
                        <img src={data.img.url} alt={data.img.alt} />)}
                    >custom html</Button>
                </div>
                <div>
                    <Button onClick={() => toast.success(
                        data.short.title,
                        <Spinner color="azure-radiance" size="medium" />)}
                    >react component</Button>
                </div>
                <div>
                    <Button onClick={() => toast.success(
                        data.short.title,
                        <Spinner color="azure-radiance" size="medium" />, {
                            showCloseButton: false
                        })}
                    >without close button</Button>
                </div>
                <div>
                    <UncontrolledDropdown>
                        <DropdownToggle caret>
                            trigger toast with position:
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem onClick={() => toast.message(data.short.title, data.short.message, {position: 'top-left'})}>
                                'top-left'
                            </DropdownItem>
                            <DropdownItem onClick={() => toast.message(data.short.title, data.short.message, {position: 'top-center'})}>
                                'top-center'
                            </DropdownItem>
                            <DropdownItem onClick={() => toast.message(data.short.title, data.short.message, {position: 'top-right'})}>
                                'top-right'
                            </DropdownItem>
                            <DropdownItem onClick={() => toast.message(data.short.title, data.short.message, {position: 'bottom-left'})}>
                                'bottom-left'
                            </DropdownItem>
                            <DropdownItem onClick={() => toast.message(data.short.title, data.short.message, {position: 'bottom-center'})}>
                                'bottom-center'
                            </DropdownItem>
                            <DropdownItem onClick={() => toast.message(data.short.title, data.short.message, {position: 'bottom-right'})}>
                                'bottom-right'
                            </DropdownItem>
                        </DropdownMenu>

                    </UncontrolledDropdown>
                </div>
            </div>
        );
    }

    renderComponent() {
        return null;
    }
}
