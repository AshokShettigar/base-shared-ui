import React from 'react';
import { shallow } from 'enzyme';

import ModalBodySection from '../component';

const defaultProps = {
    sidebar: (<span>sidebar content</span>),
    children: (<span>children content</span>),
    node: (<span>node content</span>)
};

it('should render component', () => {
    const wrapper = shallow(<ModalBodySection {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
});
