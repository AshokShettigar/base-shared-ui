import { shallow } from 'enzyme';

import Placement from '../component';

describe('Placement component', () => {
    const requiredProps = {
        isOpen: false,
        target: <span>target</span>,
        children: () => <div>Children</div>,
        onDismiss: jest.fn()
    };

    it('should render component with default props', () => {
        const wrapper = shallow(<Placement {...requiredProps} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with isPortal prop', () => {
        const wrapper = shallow(<Placement {...requiredProps} isPortal />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with open drop-down content', () => {
        const wrapper = shallow(<Placement {...requiredProps} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with target prop as ref', () => {
        const ref = document.createElement('div');
        const wrapper = shallow(<Placement {...requiredProps} target={ref} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with position prop', () => {
        const wrapper = shallow(<Placement {...requiredProps} position="auto" />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with class names', () => {
        const wrapper = shallow(
            <Placement
                {...requiredProps}
                className="className"
                targetClassName="targetClassName"
                contentClassName="contentClassName"
            />
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('shouldn\'t render component', () => {
        const wrapper = shallow(<Placement {...requiredProps} rendered={false} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render hidden component', () => {
        const wrapper = shallow(<Placement {...requiredProps} hidden />);

        expect(wrapper).toMatchSnapshot();
    });
});
