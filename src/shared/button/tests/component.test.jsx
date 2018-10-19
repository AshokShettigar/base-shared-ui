import { shallow } from 'enzyme';

import Button from '../component';

describe('Button component', () => {
    const requiredProps = {
        children: 'children',
        onClick: jest.fn()
    };

    it('should render component with default props', () => {
        const wrapper = shallow(<Button {...requiredProps} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with kind prop', () => {
        const wrapper = shallow(<Button {...requiredProps} kind="secondary" />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with icon prop', () => {
        const wrapper = shallow(<Button {...requiredProps} icon="calendar" />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with class size prop', () => {
        const wrapper = shallow(<Button {...requiredProps} size="tiny" />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with loading prop', () => {
        const wrapper = shallow(<Button {...requiredProps} loading />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with active prop', () => {
        const wrapper = shallow(<Button {...requiredProps} active />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with disabled prop', () => {
        const wrapper = shallow(<Button {...requiredProps} disabled />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with className prop', () => {
        const wrapper = shallow(<Button {...requiredProps} className="className" />);

        expect(wrapper).toMatchSnapshot();
    });

    it('shouldn\'t render component', () => {
        const wrapper = shallow(<Button {...requiredProps} rendered={false} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render hidden component', () => {
        const wrapper = shallow(<Button {...requiredProps} hidden />);

        expect(wrapper).toMatchSnapshot();
    });
});
