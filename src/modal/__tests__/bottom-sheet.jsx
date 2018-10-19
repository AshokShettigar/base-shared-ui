import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import BottomSheet, { BottomSheetHOC } from 'platform-common-ui/modal/bottom-sheet';

const mockStore = configureStore();

describe('modal/bottom-sheet', function() {
    const ModalComponent = () => <div>modal</div>;
    const TestComponent = BottomSheetHOC(ModalComponent);
    const BottomSheetTest = BottomSheet(ModalComponent);
    const onClosePopup = jest.fn();

    it('should render the bottom-sheet component', function() {
        const wrapper = mount(
            <Provider store={mockStore()}>
                <BottomSheetTest
                    id="defaultBottomSheet"
                    onClosePopup={onClosePopup}
                />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the bottom-sheet HOC component', function() {
        const wrapper = shallow(
            <TestComponent
                id="defaultBottomSheet"
                title="Title"
                onClosePopup={onClosePopup}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the bottom-sheet HOC with layoverClassName', function() {
        const wrapper = shallow(
            <TestComponent
                id="defaultBottomSheet"
                title="Title"
                layoverClassName="layover-classname"
                onClosePopup={onClosePopup}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the bottom-sheet HOC with popupClassName', function() {
        const wrapper = shallow(
            <TestComponent
                id="defaultBottomSheet"
                title="Title"
                popupClassName="popup-classname"
                onClosePopup={onClosePopup}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the bottom-sheet HOC with width prop', function() {
        const wrapper = shallow(
            <TestComponent
                id="defaultBottomSheet"
                title="Title"
                width="650px"
                onClosePopup={onClosePopup}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the bottom-sheet HOC with height prop', function() {
        const wrapper = shallow(
            <TestComponent
                id="defaultBottomSheet"
                title="Title"
                height="400px"
                onClosePopup={onClosePopup}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    // it('should render the bottom-sheet HOC with onClose function', function() {
    //     const wrapper = shallow(
    //         <TestComponent
    //             id="defaultBottomSheet"
    //             title="Title"
    //             onClosePopup={onClosePopup}
    //         />
    //     );
    //     wrapper.find('.cn-bottom-sheet__navbar__close').simulate('click');
    //     expect(onClosePopup).toHaveBeenCalledTimes(1);
    //     expect(onClosePopup).toHaveBeenCalledWith('defaultBottomSheet');
    // });
});
