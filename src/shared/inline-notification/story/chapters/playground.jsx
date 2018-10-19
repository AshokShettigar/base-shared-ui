import { Container } from 'platform-common-ui';
import {
    select,
    boolean,
    text
} from '@storybook/addon-knobs/react';
import InlineNotification from '../../component';

const handleOnClose = () => {
};

const Playground = () => {
    // Notification type
    const typeOptions = {
        info: 'Info',
        warning: 'Warning',
        error: 'Error',
        success: 'Success',
        message: 'Message'
    };
    const defaultType = 'message';
    const type = select('Breadcrumbs', typeOptions, defaultType);

    // Notification title
    const defaultTitle = 'Notification Title';
    const title = text('Title', defaultTitle);

    // Notification message
    const defaultMessage = 'Notification Message';
    const message = text('Message', defaultMessage);

    // Notification onClose Status
    const onCloseStatus = boolean('Enable onClone', false);

    return (
        <div>
            <Container fluid>
                <h4 className="story-title">Inline Notification Playground</h4>
                <InlineNotification
                    type={type}
                    onClose={onCloseStatus ? handleOnClose : null}
                >
                    {title && <InlineNotification.Title>{title}</InlineNotification.Title>}
                    <InlineNotification.Message>{message}</InlineNotification.Message>
                </InlineNotification>
            </Container>
        </div>
    );
};
export default Playground;
