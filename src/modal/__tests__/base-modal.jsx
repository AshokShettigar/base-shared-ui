import { shallow } from 'enzyme';
import BaseModal from 'platform-common-ui/modal/base-modal';

describe('modal/base-modal', function() {
    it('should render the component', function() {
        const wrapper = shallow(
            <BaseModal
                id="modal1"
                title="Modal Title"
            >
                Some content
            </BaseModal>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with onClose function', function() {
        const onClosePopup = jest.fn();
        const wrapper = shallow(
            <BaseModal
                id="modal1"
                title="Modal Title"
                onClosePopup={onClosePopup}
            >
                Some content
            </BaseModal>
        );
        expect(wrapper).toMatchSnapshot();
        wrapper.find('.cn-modal__navbar__close').simulate('click');
        expect(onClosePopup).toHaveBeenCalledTimes(1);
        expect(onClosePopup).toHaveBeenCalledWith('modal1');
    });

    it('should render the component with width and height', function() {
        const wrapper = shallow(
            <BaseModal
                height="200px"
                id="modal1"
                title="Modal Title"
                width="240px"
            >
                Some content
            </BaseModal>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
