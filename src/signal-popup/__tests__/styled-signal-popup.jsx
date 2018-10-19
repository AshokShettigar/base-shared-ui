import { shallow } from 'enzyme';
import StyledSignalPopup from 'platform-common-ui/signal-popup/styled-signal-popup';

describe('platform-common-ui/signal-popup/styled-signal-popup', function() {
    const props = {
        data: {
            ticketsCnt: 10
        },
        popupConfig: {
            Component: ''
        },
        buttonConfig: {
            buttonLabelField: 'ticketsCnt',
            className: 'wrapper',
            iconName: 'critical-alert'
        },
        colDef: {
            cellRendererParams: {
                LayoutComponent: <div />
            }
        },
        position: 'top-end'
    };

    it('should render the StyledSignalPopup', function() {
        const wrapper = shallow(
            <StyledSignalPopup
                {...props}
                onPositionChanged={jest.fn()}
            />
            );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render blank div if Component is not passed', function() {
        const newProps = {
            ...props,
            popupConfig: {}
        };

        const wrapper = shallow(
            <StyledSignalPopup
                {...newProps}
                onPositionChanged={jest.fn()}
            />
            );
        expect(wrapper).toMatchSnapshot();
    });

    it('should call updatePositionChanged when new position is passed', function() {
        const mockUpdatePositionChanged = jest.fn().mockImplementationOnce(calledWith => {
            expect(calledWith).toEqual('bottom-end');
        });
        const newProps = {
            ...props,
            popupConfig: {}
        };

        const wrapper = shallow(
            <StyledSignalPopup
                {...newProps}
                onPositionChanged={mockUpdatePositionChanged}
            />
            );
        wrapper.instance().componentWillReceiveProps({ position: 'bottom-end' });
    });

    it('should call updatePosition when component updates', function() {
        const mockUpdatePosition = jest.fn();
        const newProps = {
            ...props,
            popupConfig: {}
        };

        const wrapper = shallow(
            <StyledSignalPopup
                {...newProps}
                onPositionChanged={jest.fn()}
                updatePosition={mockUpdatePosition}
            />
            );
        wrapper.instance().componentDidUpdate();
        expect(mockUpdatePosition).toHaveBeenCalled();
    });
});
