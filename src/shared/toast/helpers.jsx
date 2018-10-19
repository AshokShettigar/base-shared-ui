import { toastr } from 'react-redux-toastr';
import classNames from 'classnames';

import ROOT_CLASS, { TOAST_TYPES } from './constants';
import DecoratedToast from './decorated-toast';

const decorateToastAction = (type, title, message, opts = {}) => {
    const {
        showCloseButton = true,
        shouldCloseByTimeOut = true,
        className,
        timeOut = 4000,
        ...toastProps
    } = opts;
    const decorateToastProps = { type, title, message };

    const handleClose = remove => () => {
        if (toastProps.onCloseButtonClick) {
            toastProps.onCloseButtonClick(toastProps.id);
        }

        remove();
    };

    if (type === TOAST_TYPES.MESSAGE) {
        decorateToastProps.className = `${ROOT_CLASS}__inline-notification`;
        decorateToastProps.iconTypeClassName = `${ROOT_CLASS}__icon-message`;
        decorateToastProps.contentClassName = `${ROOT_CLASS}__message`;
        decorateToastProps.buttonCloseClassName = `${ROOT_CLASS}__button-close`;
        decorateToastProps.iconCloseClassName = `${ROOT_CLASS}__icon-close`;
    }

    toastr[type](title, {
        ...toastProps,
        timeOut: shouldCloseByTimeOut ? timeOut : 0,
        showCloseButton: false,
        className: classNames(ROOT_CLASS, className),
        component: params => {
            const { remove } = params;
            return (<DecoratedToast
                {...decorateToastProps}
                onClose={showCloseButton ? handleClose(remove) : undefined}
            />);
        }
    });

    return toastr;
};

export default decorateToastAction;
