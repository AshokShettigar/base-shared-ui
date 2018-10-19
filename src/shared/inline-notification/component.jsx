import { node, func, string, bool, oneOf } from 'prop-types';
import { Icon, Button } from 'platform-common-ui';
import classNames from 'classnames';

import InlineNotificationTitle from './title';
import InlineNotificationMessage from './message';

import { NOTIFICATION_ICON_TYPES, ROOT_CLASS } from './constants';

const InlineNotification = ({ children, isOpen, onClose, type, ...props }) => {
    const {
        buttonCloseClassName,
        contentClassName,
        className,
        iconTypeClassName,
        iconCloseClassName
    } = props;

    const iconTypeClassNameProp = classNames(`${ROOT_CLASS}__icon`, `${ROOT_CLASS}__icon--${type}`, iconTypeClassName);
    const iconCloseClassNameProp = classNames(`${ROOT_CLASS}__icon`, `${ROOT_CLASS}__icon--close`, iconCloseClassName);
    const buttonCloseClassNameProp = classNames('cn-link', `${ROOT_CLASS}__button-close`, buttonCloseClassName);

    return !isOpen ? null : (
        <div className={classNames(ROOT_CLASS, `${ROOT_CLASS}--${type}`, className)}>
            <Icon icon={NOTIFICATION_ICON_TYPES[type]} className={iconTypeClassNameProp} />
            <div className={classNames(`${ROOT_CLASS}__content`, contentClassName)}>{children}</div>
            {onClose &&
                <Button onClick={onClose} className={buttonCloseClassNameProp}>
                    <Icon icon="close" className={iconCloseClassNameProp} />
                </Button>}
        </div>
    );
};

InlineNotification.propTypes = {
    buttonCloseClassName: string,
    children: node.isRequired,
    className: string,
    contentClassName: string,
    iconTypeClassName: string,
    iconCloseClassName: string,
    isOpen: bool,
    onClose: func,
    type: oneOf(Object.keys(NOTIFICATION_ICON_TYPES)).isRequired
};

InlineNotification.defaultProps = {
    buttonCloseClassName: undefined,
    contentClassName: undefined,
    className: undefined,
    isOpen: true,
    iconTypeClassName: undefined,
    iconCloseClassName: undefined,
    onClose: undefined,
    type: 'message'
};


InlineNotification.Title = InlineNotificationTitle;
InlineNotification.Message = InlineNotificationMessage;


export default InlineNotification;
