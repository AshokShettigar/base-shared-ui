import { shallow } from 'enzyme';

import WithLabelField from '../component';

describe('WithLabelField component', () => {
    const requiredProps = {
        children: <span>children</span>
    };

    it('should render component with default props', () => {
        const wrapper = shallow(<WithLabelField {...requiredProps} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with id prop', () => {
        const wrapper = shallow(<WithLabelField {...requiredProps} id="id" />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with description prop', () => {
        const wrapper = shallow(<WithLabelField {...requiredProps} description="description" />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with descriptionClassName prop', () => {
        const wrapper = shallow(<WithLabelField {...requiredProps} descriptionClassName="descriptionClassName" />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with label prop', () => {
        const wrapper = shallow(<WithLabelField {...requiredProps} label="label" />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with className prop', () => {
        const wrapper = shallow(<WithLabelField {...requiredProps} className="className" />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with labelClassName prop', () => {
        const wrapper = shallow(<WithLabelField {...requiredProps} labelClassName="labelClassName" />);

        expect(wrapper).toMatchSnapshot();
    });

    it('shouldnt render component', () => {
        const wrapper = shallow(<WithLabelField {...requiredProps} rendered={false} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with required prop', () => {
        const wrapper = shallow(<WithLabelField {...requiredProps} required />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with hidden prop', () => {
        const wrapper = shallow(<WithLabelField {...requiredProps} hidden />);

        expect(wrapper).toMatchSnapshot();
    });
});
