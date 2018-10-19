import { string, node, func } from 'prop-types';

import { InlineNotification } from 'platform-common-ui';

function DecoratedToast(props) {
    const InlineNotificationProps = {
        className: props.className,
        iconTypeClassName: props.iconTypeClassName,
        contentClassName: props.contentClassName,
        buttonCloseClassName: props.buttonCloseClassName,
        iconCloseClassName: props.iconCloseClassName,
        onClose: props.onClose
    };

    return (
        <InlineNotification type={props.type} {...InlineNotificationProps} isOpen>
            {props.title && <InlineNotification.Title>{props.title}</InlineNotification.Title>}
            <InlineNotification.Message>{props.message}</InlineNotification.Message>
        </InlineNotification>
    );
}

DecoratedToast.propTypes = {
    message: node.isRequired,
    onClose: func,
    type: string.isRequired,
    className: string,
    iconCloseClassName: string,
    contentClassName: string,
    buttonCloseClassName: string,
    title: string,
    iconTypeClassName: string
};

DecoratedToast.defaultProps = {
    onClose: undefined
};

export default DecoratedToast;
