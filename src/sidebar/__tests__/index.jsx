import { shallow } from 'enzyme';
import { Sidebar } from 'platform-common-ui';

describe('sidebar', function() {
    it('should render the sidebar with open state', function() {
        const wrapper = shallow(
            <Sidebar onToggleSidebar={() => true} isOpen>
                <div>content</div>
            </Sidebar>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the sidebar with closed state', function() {
        const wrapper = shallow(
            <Sidebar onToggleSidebar={() => true} isOpen={false}>
                <div>content</div>
            </Sidebar>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should call toggleSidebarHandler function when Icon is clicked', function() {
        const toggleSidebarHandler = jest.fn();
        const wrapper = shallow(
            <Sidebar onToggleSidebar={toggleSidebarHandler} isOpen>
                <div>content</div>
            </Sidebar>
        );
        wrapper.find('.cn-sidebar__close-btn').simulate('click');
        expect(toggleSidebarHandler).toHaveBeenCalledTimes(1);
    });

    it('should call toggleSidebarHandler function when Icon is clicked', function() {
        const toggleSidebarHandler = jest.fn();
        const wrapper = shallow(
            <Sidebar onToggleSidebar={toggleSidebarHandler} isOpen={false}>
                <div>content</div>
            </Sidebar>
        );
        wrapper.find('.cn-sidebar__close-btn').simulate('click');
        expect(toggleSidebarHandler).toHaveBeenCalledTimes(1);
    });
});
