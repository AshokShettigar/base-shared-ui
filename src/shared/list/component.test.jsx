import { shallow } from 'enzyme';

import List from './component';

const testName = 'test';
const defaultProps = {
    subList: jest.fn(),
    onSelect: jest.fn(),
    list: [
        {
            name: testName,
            icon: testName,
            id: 'id'
        }
    ],
    title: testName
};
const wrapper = shallow(
    <List
        {...defaultProps}
    />
);

it('should render component', () => {
    expect(wrapper).toMatchSnapshot();
});
