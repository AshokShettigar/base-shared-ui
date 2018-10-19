import { shallow } from 'enzyme';
import { Item } from 'platform-common-ui/sidebar/group-item';

describe('sidebar/group-item', function() {
    it('should render the group item component', function() {
        const wrapper = shallow(<Item>Item 1</Item>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the group item with custom item class name', function() {
        const wrapper = shallow(<Item className="my-class">Item 1</Item>);
        expect(wrapper).toMatchSnapshot();
    });
});
