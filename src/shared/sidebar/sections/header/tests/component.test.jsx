import React from 'react';
import { shallow } from 'enzyme';

import SidebarHeaderSection from '../component';

const defaultProps = {
    children: '',
    onDismiss: jest.fn()
};

it('should render component', () => {
    const wrapper = shallow(<SidebarHeaderSection {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
});
