import { shallow } from 'enzyme';
import Widget from '../component';

describe('Widget', () => {
    const defaultProps = {
        className: '',
        actualCount: 1,
        totalCount: 30,
        title: 'Title',
        icon: 'alert',
        isActive: false,
        isDisabled: false,
        onToggle: jest.fn()
    };

    it('should render with default props', () => {
        const wrapper = shallow(<Widget {...defaultProps} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render with default props and active', () => {
        const wrapper = shallow(<Widget {...defaultProps} isActive />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render with default props and disabled', () => {
        const wrapper = shallow(<Widget {...defaultProps} isDisabled />);

        expect(wrapper).toMatchSnapshot();
    });
});
