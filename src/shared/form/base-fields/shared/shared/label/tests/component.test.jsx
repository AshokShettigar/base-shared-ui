import { shallow } from 'enzyme';

import Label from '../component';

describe('Label component', () => {
    const requiredProps = {
        children: (<span>children</span>)
    };

    it('should render component with default props', () => {
        const wrapper = shallow(<Label {...requiredProps} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with id prop', () => {
        const wrapper = shallow(<Label {...requiredProps} id="id" />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with class names props', () => {
        const props = {
            ...requiredProps,
            className: 'className',
            descriptionClassName: 'descriptionClassName'
        };
        const wrapper = shallow(<Label {...props} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with description prop', () => {
        const wrapper = shallow(<Label {...requiredProps} description={<div>description</div>} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('shouldn\'t render component', () => {
        const wrapper = shallow(<Label {...requiredProps} rendered={false} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with required prop', () => {
        const wrapper = shallow(<Label {...requiredProps} required />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with hidden prop', () => {
        const wrapper = shallow(<Label {...requiredProps} hidden />);

        expect(wrapper).toMatchSnapshot();
    });
});
