import { shallow } from 'enzyme';
import SignalPopupWrapper from 'platform-common-ui/signal-popup';

describe('signal-popup/signal-popup-wrapper', () => {
    const props = {
        data: {
            ticketsCnt: '10'
        },
        popupConfig: {
            Component: ''
        },
        buttonConfig: {
            buttonLabelField: 'ticketsCnt',
            className: 'wrapper',
            iconName: 'critical-alert'
        }
    };

    it('WHEN the toggle button is rendered and Popup is not open', () => {
        const wrapper = shallow(
            <SignalPopupWrapper
                {...props}
            />);
        expect(wrapper).toMatchSnapshot();
    });

    it('WHEN the toggle button is clicked showPopup should be true', () => {
        const wrapper = shallow(
            <SignalPopupWrapper
                {...props}
            />);

        const instance = wrapper.instance();
        jest.spyOn(instance, 'onClick');
        instance.onClick();
        expect(wrapper.state('showPopup')).toBe(true);
        expect(wrapper).toMatchSnapshot();
    });

    it('WHEN the toggle button is clicked twice  showPopup should be false', () => {
        const wrapper = shallow(
            <SignalPopupWrapper
                {...props}
            />);

        const instance = wrapper.instance();
        instance.onClick();
        expect(wrapper.state('showPopup')).toBe(true);

        instance.onClick();
        expect(wrapper.state('showPopup')).toBe(false);
    });

    it('WHEN popup position is changed THEN handlePopupPositionChanged', () => {
        const wrapper = shallow(
            <SignalPopupWrapper
                {...props}
            />);

        const instance = wrapper.instance();
        jest.spyOn(instance, 'setState');

        instance.handlePopupPositionChanged('top-end');
        expect(instance.setState).toHaveBeenCalledWith({ popupPosition: 'top-end' });
    });

    it('WHEN buttonConfig is not provided THEN render a blank div', () => {
        const newProps = {
            data: {
                ticketsCnt: '10'
            },
            popupConfig: {
                Component: ''
            }
        };
        const wrapper = shallow(
            <SignalPopupWrapper
                {...newProps}
            />);
        expect(wrapper.find('.signal-cell__container').length).toEqual(0);
    });
});
