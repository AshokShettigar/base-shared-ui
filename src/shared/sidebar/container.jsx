import React, { Component } from 'react';
import { string, bool, node, func, oneOf } from 'prop-types';
import ReactModal from 'react-modal';
import classNames from 'classnames';
import { isEmpty } from 'lodash';

import {
    SidebarHeaderSection,
    SidebarBodySection
} from './sections';
import styles from './container.scss';

class Sidebar extends Component {
    static propTypes = {
        title: string,
        isOpen: bool,
        shouldCloseOnOverlayClick: bool,
        onAfterOpen: func,
        onDismiss: func,
        onNavigateToNext: func,
        onNavigateToPrevious: func,
        className: string,
        headerClassName: string,
        overlayClassName: string,
        contentClassName: string,
        bodyOpenClassName: string,
        children: node,
        parentRef: node,
        position: oneOf(['left', 'right']),

        sidebarBodyRef: func
    };

    static defaultProps = {
        title: undefined,
        isOpen: false,
        shouldCloseOnOverlayClick: false,
        onAfterOpen: undefined,
        onDismiss: undefined,
        onNavigateToNext: undefined,
        onNavigateToPrevious: undefined,
        className: undefined,
        headerClassName: undefined,
        overlayClassName: undefined,
        contentClassName: undefined,
        bodyOpenClassName: 'sidebar-open',
        children: undefined,
        parentRef: undefined,
        position: 'right',
        sidebarBodyRef: undefined
    };

    state = {
        isOpen: this.props.isOpen
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.isOpen !== this.state.isOpen) {
            if (nextProps.isOpen) {
                this.handleOpen();
            } else {
                this.handleClose();
            }
        }
    }

    handleClose = () => {
        this.setState({ isOpen: false });

        if (this.props.onDismiss) {
            this.props.onDismiss();
        }
    };

    handleOpen() {
        this.setState({ isOpen: true });
    }

    parentSelector = () => this.props.parentRef;

    render() {
        const toggleClass = this.state.isOpen
            ? styles[`show-${this.props.position}`]
            : styles[`hide-${this.props.position}`];
        const overlayClass = isEmpty(this.props.parentRef)
            ? styles[`overlay-${this.props.position}`]
            : styles[`overlay-parent-${this.props.position}`];

        return (
            <ReactModal
                isOpen={this.state.isOpen}
                onAfterOpen={this.props.onAfterOpen}
                bodyOpenClassName={this.props.bodyOpenClassName}
                contentLabel={this.props.title}
                onRequestClose={this.handleClose}
                parentSelector={this.props.parentRef && this.parentSelector}
                portalClassName={classNames(styles.root, this.props.className)}
                overlayClassName={
                    classNames(
                        overlayClass,
                        styles[`sidebar-position-${this.props.position}`],
                        this.props.overlayClassName)
                }
                className={classNames(styles.content, this.props.contentClassName, toggleClass)}
                role="dialog"
                ariaHideApp={false}
                closeTimeoutMS={300}
                shouldCloseOnEsc
                shouldReturnFocusAfterClose
                shouldCloseOnOverlayClick={this.props.shouldCloseOnOverlayClick}
            >
                <SidebarHeaderSection
                    className={this.props.headerClassName}
                    onDismiss={this.handleClose}
                    onNavigateToNext={this.props.onNavigateToNext}
                    onNavigateToPrevious={this.props.onNavigateToPrevious}
                >
                    {this.props.title}
                </SidebarHeaderSection>
                <SidebarBodySection sidebarBodyRef={this.props.sidebarBodyRef}>
                    {this.props.children}
                </SidebarBodySection>
            </ReactModal>
        );
    }
}

export default Sidebar;
