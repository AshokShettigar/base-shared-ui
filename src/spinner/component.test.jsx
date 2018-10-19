import { shallow } from 'enzyme';
import { Spinner } from 'platform-common-ui';

describe('Spinner', () => {
    it('renders', () => {
        const wrapper = shallow(<Spinner />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders with className', () => {
        const wrapper = shallow(<Spinner className="className" />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders with azure radiance', () => {
        const wrapper = shallow(<Spinner color="azure-radiance" />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders extra-small size', () => {
        const wrapper = shallow(<Spinner small="extra-small" />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders small size', () => {
        const wrapper = shallow(<Spinner small="small" />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders medium size', () => {
        const wrapper = shallow(<Spinner small="medium" />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders large size', () => {
        const wrapper = shallow(<Spinner small="large" />);
        expect(wrapper).toMatchSnapshot();
    });

    it('renders extra-large size', () => {
        const wrapper = shallow(<Spinner small="extra-large" />);
        expect(wrapper).toMatchSnapshot();
    });
});
