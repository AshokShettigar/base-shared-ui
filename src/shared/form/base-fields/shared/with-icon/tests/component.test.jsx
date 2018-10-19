import { shallow } from 'enzyme';

import WithIcon from '../component';

describe('WithIcon component', () => {
    const requiredProps = {
        children: (<span>children</span>)
    };

    it('should render component with default props', () => {
        const wrapper = shallow(<WithIcon {...requiredProps} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with icon prop', () => {
        const wrapper = shallow(<WithIcon {...requiredProps} icon="icon" />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with class names props', () => {
        const props = {
            ...requiredProps,
            className: 'className',
            iconClassName: 'iconClassName'
        };
        const wrapper = shallow(<WithIcon {...props} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('shouldn\'t render component', () => {
        const wrapper = shallow(<WithIcon {...requiredProps} rendered={false} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with hidden prop', () => {
        const wrapper = shallow(<WithIcon {...requiredProps} hidden />);

        expect(wrapper).toMatchSnapshot();
    });
});
