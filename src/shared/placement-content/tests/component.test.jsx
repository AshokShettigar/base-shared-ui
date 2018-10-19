import { shallow } from 'enzyme';

import PlacementContent from '../component';

describe('PlacementContent component', () => {
    const requiredProps = {
        position: 'bottom-start',
        children: <div>Children</div>
    };

    it('should render component with default props', () => {
        const wrapper = shallow(<PlacementContent {...requiredProps} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with offset prop', () => {
        const wrapper = shallow(<PlacementContent {...requiredProps} offset="10px" />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with className prop', () => {
        const wrapper = shallow(<PlacementContent {...requiredProps} className="className" />);

        expect(wrapper).toMatchSnapshot();
    });
});
