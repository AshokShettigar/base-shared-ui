import { shallow } from 'enzyme';
import Sidebar from 'platform-common-ui/modal/sidebar';

describe('modal/sidebar', function() {
    it('should render the component', function() {
        const wrapper = shallow(<Sidebar>Sidebar content</Sidebar>);
        expect(wrapper).toMatchSnapshot();
    });
});
