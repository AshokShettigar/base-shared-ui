import React, { Component } from 'react';
import { string, bool, node, func, oneOf } from 'prop-types';
import ReactModal from 'react-modal';
import classNames from 'classnames';
import { isString } from 'lodash';

import { withRender } from '../shared';
import { ModalBodySection, ModalFooterSection } from './sections';
import { ModalTitleElement } from './elements';
import styles from './container.scss';

class Modal extends Component {
    static propTypes = {
        isOpen: bool,

        className: string,
        overlayClassName: string,
        contentClassName: string,
        bodyOpenClassName: string,

        children: node,
        position: oneOf(['bottom', 'middle']),

        title: node,
        header: node,
        sidebar: node,
        footer: node,

        onAfterOpen: func,
        onDismiss: func
    };

    static defaultProps = {
        isOpen: false,

        className: undefined,
        overlayClassName: undefined,
        contentClassName: undefined,
        bodyOpenClassName: 'modal-open',

        children: undefined,
        position: 'bottom',

        title: null,
        header: null,
        sidebar: null,
        footer: null,

        onAfterOpen: undefined,
        onDismiss: undefined
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

    render() {
        const toggleClass = this.state.isOpen ? styles.show : styles.hide;
        const overlayClassName = classNames(
            styles.overlay,
            styles[`modal-position-${this.props.position}`],
            this.props.overlayClassName
        );

        return (
            <ReactModal
                isOpen={this.state.isOpen}
                onAfterOpen={this.props.onAfterOpen}
                bodyOpenClassName={this.props.bodyOpenClassName}
                contentLabel={isString(this.props.title) ? this.props.title : ''}
                onRequestClose={this.handleClose}
                portalClassName={classNames(styles.root, this.props.className)}
                overlayClassName={overlayClassName}
                className={classNames(styles.content, this.props.contentClassName, toggleClass, {
                    [styles.bottomSheet]: this.props.position === 'bottom'
                })}
                role="dialog"
                ariaHideApp={false}
                closeTimeoutMS={300}
                shouldCloseOnEsc
                shouldReturnFocusAfterClose
                contentRef={this.setContentRef}
                shouldCloseOnOverlayClick={false}
            >
                {!isString(this.props.title) && this.props.title}
                {isString(this.props.title) &&
                    <ModalTitleElement onDismiss={this.handleClose}>
                        {this.props.title}
                    </ModalTitleElement>
                }
                {this.props.header}
                <ModalBodySection sidebar={this.props.sidebar}>
                    {this.props.children}
                </ModalBodySection>
                {this.props.footer && <ModalFooterSection>{this.props.footer}</ModalFooterSection>}
            </ReactModal>
        );
    }
}

export default withRender()(Modal);
