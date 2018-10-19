import { shallow } from 'enzyme';
import InlineNotificationMessage from './component';


const defaultProps = {
    children: 'Inline Notification Message'
};

describe('Inline Notification Message', () => {
    it('default renders', () => {
        const wrapper = shallow(<InlineNotificationMessage {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders with prop className', () => {
        const customProps = {
            className: 'class-name'
        };

        const wrapper = shallow(<InlineNotificationMessage {...defaultProps} {...customProps} />);

        expect(wrapper).toMatchSnapshot();
    });
});

