import { shallow } from 'enzyme';

import PlacementDropDown from '../component';

describe('PlacementDropDown component', () => {
    const requiredProps = {
        position: 'bottom-start',
        targetRef: document.createElement('div'),
        children: () => <div>Children</div>,
        onDismiss: jest.fn()
    };

    it('should render component with default props', () => {
        const wrapper = shallow(<PlacementDropDown {...requiredProps} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with class names', () => {
        const wrapper = shallow(
            <PlacementDropDown
                {...requiredProps}
                className="className"
                contentClassName="contentClassName"
            />
        );

        expect(wrapper).toMatchSnapshot();
    });

    it('shouldn\'t render component', () => {
        const wrapper = shallow(<PlacementDropDown {...requiredProps} rendered={false} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render hidden component', () => {
        const wrapper = shallow(<PlacementDropDown {...requiredProps} hidden />);

        expect(wrapper).toMatchSnapshot();
    });
});
