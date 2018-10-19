import { shallow } from 'enzyme';
import { Icon } from 'platform-common-ui';

describe('icon', function() {
    it('should render the component', function() {
        const wrapper = shallow(<Icon icon="some-icon" />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with class name', function() {
        const wrapper = shallow(<Icon className="my-class" icon="some-icon" />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should set custom spriteUrl', function() {
        const wrapper = shallow(<Icon spriteUrl="diff_url/sprite.svg" icon="some-icon" />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should trigger onClick function', function() {
        const handleClick = jest.fn();
        const wrapper = shallow(<Icon icon="some-icon" onClick={handleClick} />);

        wrapper.find('i').simulate('click');

        expect(handleClick).toHaveBeenCalled();
    });
});
