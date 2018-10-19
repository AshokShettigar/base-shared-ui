import React from 'react';
import { string, bool, func, oneOf } from 'prop-types';
import classNames from 'classnames';

import { Button } from '../../../index';
import { KINDS, SIZES } from '../../../constants';

import styles from './component.scss';

const ModalFooterElement = props => (
    <div className={classNames(styles.root, props.className)}>
        <Button
            className={classNames(styles.previous, props.previousClassName)}
            hidden={!props.isPreviousButton}
            kind={props.previousKind}
            size={SIZES.MEDIUM}
            onClick={props.onPrevious}
        >
            {props.previousLabel}
        </Button>
        <Button
            type="submit"
            className={classNames(styles.submit, props.submitClassName)}
            kind={KINDS.PRIMARY}
            size={SIZES.MEDIUM}
            onClick={props.onSubmit}
            loading={props.isLoading}
            disabled={props.isDisabled}
        >
            {props.submitLabel}
        </Button>
        <Button
            className={classNames(styles.dismiss, props.dismissClassName)}
            hidden={!props.isCancelButton}
            kind={KINDS.SECONDARY}
            size={SIZES.MEDIUM}
            onClick={props.onDismiss}
        >
            {props.dismissLabel}
        </Button>
    </div>
);

ModalFooterElement.propTypes = {
    submitLabel: string,
    dismissLabel: string,
    previousLabel: string,
    previousKind: oneOf([KINDS.SECONDARY, KINDS.PRIMARY]),
    onSubmit: func.isRequired,
    onDismiss: func,
    onPrevious: func,
    isDisabled: bool,
    isLoading: bool,
    isPreviousButton: bool,
    isCancelButton: bool,
    className: string,
    submitClassName: string,
    dismissClassName: string,
    previousClassName: string
};

ModalFooterElement.defaultProps = {
    submitLabel: undefined,
    dismissLabel: undefined,
    previousLabel: undefined,
    previousKind: KINDS.SECONDARY,
    onSubmit: undefined,
    onDismiss: undefined,
    onPrevious: undefined,
    isDisabled: false,
    isLoading: false,
    isPreviousButton: false,
    isCancelButton: true,
    className: undefined,
    submitClassName: undefined,
    dismissClassName: undefined,
    previousClassName: undefined
};

export default ModalFooterElement;
