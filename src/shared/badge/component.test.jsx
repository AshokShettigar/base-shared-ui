import { shallow } from 'enzyme';

import Badge from './component';

const defaultProps = {
    children: <div>Child</div>,
    color: 'red',
    href: 'http://test.com'
};

it('should render component', () => {
    const wrapper = shallow(<Badge {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
});
