import { shallow } from 'enzyme';

import SubList from './component';

const testName = 'test';
const defaultProps = {
    onSelect: jest.fn(),
    list: [{
        name: testName,
        icon: testName
    }],
    title: testName
};
const wrapper = shallow(
    <SubList
        {...defaultProps}
    />
);

it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
});
