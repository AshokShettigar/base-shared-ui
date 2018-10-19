import { shallow } from 'enzyme';
import InlineNotificationTitle from './component';


const defaultProps = {
    children: 'Inline Notification Title'
};

describe('Inline Notification Title', () => {
    it('default renders', () => {
        const wrapper = shallow(<InlineNotificationTitle {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders with prop className', () => {
        const customProps = {
            className: 'class-name'
        };

        const wrapper = shallow(<InlineNotificationTitle {...defaultProps} {...customProps} />);

        expect(wrapper).toMatchSnapshot();
    });
});
