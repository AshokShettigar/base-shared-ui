import React from 'react';
import { shallow } from 'enzyme';

import SidebarBodySection from '../component';

const defaultProps = {
    children: (<span>12345</span>)
};

it('should render component', () => {
    const wrapper = shallow(<SidebarBodySection {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
});
