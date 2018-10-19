import { shallow } from 'enzyme';

import WithErrorField from '../component';

describe('withError Component ', () => {
    const requiredProps = {
        children: (<div> Children </div>)
    };

    it('should render component with default props', () => {
        const wrapper = shallow(<WithErrorField {...requiredProps} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render with error', () => {
        const wrapper = shallow(<WithErrorField {...requiredProps} error="some error" />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render with hidden error', () => {
        const wrapper = shallow(<WithErrorField {...requiredProps} error="some error" hideErrorMessages />);

        expect(wrapper).toMatchSnapshot();
    });
});
