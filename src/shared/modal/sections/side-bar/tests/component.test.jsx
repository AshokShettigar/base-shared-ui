import React from 'react';
import { shallow } from 'enzyme';

import ModalSideBarSection from '../component';

const defaultProps = {
    children: (<span>content</span>)
};

it('should render component', () => {
    const wrapper = shallow(<ModalSideBarSection {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
});
