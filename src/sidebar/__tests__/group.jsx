import { shallow } from 'enzyme';
import { SidebarGroup } from 'platform-common-ui';

describe('sidebar/group', function() {
    it('should render the sidebar group', function() {
        const wrapper = shallow(
            <SidebarGroup onChangeExpandCollapse={() => true} title="Group1">
                <div>Item 1</div>
            </SidebarGroup>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the sidebar group with collapsed state', function() {
        const wrapper = shallow(
            <SidebarGroup isCollapsed onChangeExpandCollapse={() => true} title="Group1">
                <div>Item 1</div>
            </SidebarGroup>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the sidebar group with custom class names', function() {
        const wrapper = shallow(
            <SidebarGroup
                className="my-class"
                onChangeExpandCollapse={() => true}
                title="Group1"
                titleClassName="my-title=class"
            >
                <div>Item 1</div>
            </SidebarGroup>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should call onChangeExpandCollapse function when title is clicked', function() {
        const handler = jest.fn();
        const wrapper = shallow(
            <SidebarGroup onChangeExpandCollapse={handler} title="Group1">
                <div>Item 1</div>
            </SidebarGroup>
        );
        wrapper.find('.cn-sidebar-group__title').simulate('click');
        expect(handler).toHaveBeenCalledTimes(1);
    });
});
