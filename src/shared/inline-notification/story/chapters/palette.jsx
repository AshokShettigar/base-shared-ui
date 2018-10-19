import { func, bool } from 'prop-types';
import InlineNotification from '../../component';

const notificationTypes = [
    {
        type: 'info',
        title: 'Info'
    },
    {
        type: 'warning',
        title: 'Warning'
    },
    {
        type: 'error',
        title: 'Error'
    },
    {
        type: 'success',
        title: 'Success'
    },
    {
        type: 'message',
        title: 'Message'
    }
];

const Palette = props => (
    <div>
        {notificationTypes.map(ntype => (
            <div>
                <span>{ntype.title} Type</span>
                <InlineNotification
                    type={ntype.type}
                    onClose={props.handleOnClose}
                >
                    {props.isTitle && <InlineNotification.Title>{ntype.title} Title</InlineNotification.Title>}
                    <InlineNotification.Message>{ntype.title} Message</InlineNotification.Message>
                </InlineNotification>
            </div>
        ))}
        <br />
    </div>
);

Palette.propTypes = {
    handleOnClose: func,
    isTitle: bool
};

export default Palette;
