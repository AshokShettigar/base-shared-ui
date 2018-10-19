import { shallow } from 'enzyme';
import InlineNotification from './component';

import { ROOT_CLASS } from './constants';


const defaultProps = {
    isOpen: true,
    type: 'message'
};

describe('Inline Notification', () => {
    it('default renders', () => {
        const wrapper = shallow(
            <InlineNotification {...defaultProps}>
                Inline Notification Message
            </InlineNotification>
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('renders with type warning', () => {
        const wrapper = shallow(
            <InlineNotification {...defaultProps} type="warning">
                Inline Notification Warning Message
            </InlineNotification>
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('renders with type error', () => {
        const wrapper = shallow(
            <InlineNotification {...defaultProps} type="error">
                Inline Notification Error Message
            </InlineNotification>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders with type info', () => {
        const wrapper = shallow(
            <InlineNotification {...defaultProps} type="info">
                Inline Notification Info Message
            </InlineNotification>
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('renders with type success', () => {
        const wrapper = shallow(
            <InlineNotification {...defaultProps} type="success">
                Inline Notification Success Message
            </InlineNotification>
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('renders closed', () => {
        const wrapper = shallow(
            <InlineNotification {...defaultProps} isOpen={false}>
                Inline Notification Message
            </InlineNotification>
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('renders with custom className props', () => {
        const customProps = {
            buttonCloseClassName: 'button-close-class-name',
            className: 'class-name',
            contentClassName: 'content-class-name',
            iconTypeClassName: 'icon-type-class-name',
            iconCloseClassName: 'icon-close-class-name'
        };

        const wrapper = shallow(
            <InlineNotification {...defaultProps} {...customProps}>
                Inline Notification Message
            </InlineNotification>
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('renders with handler', () => {
        const props = {
            onClose: jest.fn()
        };

        const wrapper = shallow(
            <InlineNotification {...defaultProps} {...props}>
                Inline Notification Message
            </InlineNotification>
        );

        wrapper.find(`.${ROOT_CLASS}__button-close`).simulate('click');

        expect(props.onClose).toHaveBeenCalled();
        expect(wrapper).toMatchSnapshot();
    });
});

