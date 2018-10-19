import { shallow } from 'enzyme';
import Toast from './component';


const defaultProps = {
    position: 'top-right'
};

describe('Toast', () => {
    it('default renders', () => {
        const wrapper = shallow(<Toast {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders with custom position', () => {
        const wrapper = shallow(<Toast {...defaultProps} position="bottom-left" />);
        expect(wrapper).toMatchSnapshot();
    });
});
