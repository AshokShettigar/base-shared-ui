import React from 'react';

import { InlineNotification, CheckBox } from 'platform-common-ui';
import BaseComponentView from 'app/components/base-component-view';

import data from './data';

class InlineNotificationExample extends BaseComponentView {
    state = {
        type: 'info',
        onClose: 'none',
        isOpen: 'open',
        other: [],
        showCloseButton: ''
    };

    handleChangeRadioOptions = (name, value) => {
        this.setState({ [name]: value });
    };

    handleChangeCheckboxOptions = (name, value) => {
        const optionState = this.state[name];
        const hasOption = optionState.includes(value);
        const options = hasOption
            ? optionState.filter(option => option !== value)
            : [...optionState, value];

        this.setState({ [name]: options });
    };

    getRadio = params => {
        const { name, label, value } = params;

        return (
            <CheckBox
                type="radio"
                key={`${name}-${value}`}
                id={`${name}-${value}`}
                isChecked={this.state[name] === value}
                onChange={val => this.handleChangeRadioOptions(name, val)}
                value={value}
            >
                {label}
            </CheckBox>
        );
    };

    getCheckbox = params => {
        const { name, label, value } = params;

        return (
            <CheckBox
                key={`${name}-${value}`}
                id={`${name}-${value}`}
                isChecked={this.state[name].includes(value)}
                onChange={val => (
                    this.handleChangeCheckboxOptions(name, val, this.state[name] === value)
                )}
                value={value}
            >
                {label}
            </CheckBox>
        );
    };

    getEntityList(list, cb, opts) {
        return <div>{list.map(item => cb({ ...item, ...opts }))}</div>;
    }

    getTypeOptions() {
        const listTypes = [
            { label: 'Info', value: 'info' },
            { label: 'Warning', value: 'warning' },
            { label: 'Error', value: 'error' },
            { label: 'success', value: 'success' }
        ];

        const typeOptions = this.getEntityList(listTypes, this.getRadio, { name: 'type' });

        return (
            <div>
                <h3>Type</h3>
                {typeOptions}
            </div>
        );
    }

    getOnCloseOptions() {
        const listOnCloseOptions = [
            { label: 'None', value: 'none' },
            { label: '[Function]', value: 'fn' }
        ];

        const closeOptions = this.getEntityList(listOnCloseOptions, this.getRadio, { name: 'onClose' });

        return (
            <div>
                <h3>onClose</h3>
                {closeOptions}
            </div>
        );
    }

    getIsOpenOptions() {
        const listIsOpenOptions = [
            { label: 'Close', value: 'close' },
            { label: 'Open', value: 'open' }
        ];

        const isOpenOptions = this.getEntityList(listIsOpenOptions, this.getRadio, { name: 'isOpen' });

        return (
            <div>
                <h3>isOpen</h3>
                {isOpenOptions}
            </div>
        );
    }

    getOtherOptions() {
        const listOtherOptions = [
            { label: 'A lot of text', value: 'lotText' },
            { label: 'Title', value: 'title' }
        ];

        const otherOptions = this.getEntityList(listOtherOptions, this.getCheckbox, { name: 'other' });

        return (
            <div>
                <h3>Other</h3>
                {otherOptions}
            </div>
        );
    }

    getOptions() {
        const typeOptions = this.getTypeOptions();
        const onCloseOptions = this.getOnCloseOptions();
        const isOpenOptions = this.getIsOpenOptions();
        const otherOptions = this.getOtherOptions();

        return (
            <div>
                {typeOptions}
                {onCloseOptions}
                {isOpenOptions}
                {otherOptions}
            </div>
        );
    }

    handleClose = () => {
    };

    renderComponent() {
        const { isOpen, other, onClose, type } = this.state;
        const title = other.includes('title') && (other.includes('lotText') ? data.long.title : data.short.title);
        const message = other.includes('lotText') ? data.long.message : data.short.message;
        const handleClose = onClose === 'fn' ? this.handleClose : null;

        return (
            <div>
                <InlineNotification
                    type={type}
                    onClose={handleClose}
                    isOpen={isOpen === 'open'}
                >
                    {title && <InlineNotification.Title>{title}</InlineNotification.Title>}
                    <InlineNotification.Message>{message}</InlineNotification.Message>
                </InlineNotification>
            </div>
        );
    }
}

export default InlineNotificationExample;
