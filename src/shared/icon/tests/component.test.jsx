import { shallow } from 'enzyme';

import Icon from '../component';

describe('Icon component', () => {
    const requiredProps = {
        glyph: 'calendar'
    };

    it('should render component with default props', () => {
        const wrapper = shallow(<Icon {...requiredProps} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with class size prop', () => {
        const wrapper = shallow(<Icon {...requiredProps} size="tiny" />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with onClick prop', () => {
        const wrapper = shallow(<Icon {...requiredProps} onClick={() => {}} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with controlled prop', () => {
        const wrapper = shallow(<Icon {...requiredProps} controlled />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with active prop', () => {
        const wrapper = shallow(<Icon {...requiredProps} active />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with disabled prop', () => {
        const wrapper = shallow(<Icon {...requiredProps} disabled />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with required prop', () => {
        const wrapper = shallow(<Icon {...requiredProps} required />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with class names props', () => {
        const wrapper = shallow(<Icon {...requiredProps} className="className" glyphClassName="glyphClassName" />);

        expect(wrapper).toMatchSnapshot();
    });

    it('shouldn\'t render component', () => {
        const wrapper = shallow(<Icon {...requiredProps} rendered={false} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render hidden component', () => {
        const wrapper = shallow(<Icon {...requiredProps} hidden />);

        expect(wrapper).toMatchSnapshot();
    });
});
