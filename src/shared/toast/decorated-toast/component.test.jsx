import { shallow } from 'enzyme';
import DecoratedToast from './component';
import { TOAST_TYPES } from '../constants';

const defaultProps = {
    message: 'Toast Message',
    onClose: jest.fn(),
    type: TOAST_TYPES.MESSAGE
};

describe('Decorated Toast', () => {
    it('default renders', () => {
        const wrapper = shallow(<DecoratedToast {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders with props title', () => {
        const wrapper = shallow(<DecoratedToast {...defaultProps} title="Toast Title" />);
        expect(wrapper).toMatchSnapshot();
    });
});
