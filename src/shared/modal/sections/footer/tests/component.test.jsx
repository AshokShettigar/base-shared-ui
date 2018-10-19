import React from 'react';
import { shallow } from 'enzyme';

import ModalFooterSection from '../component';

const defaultProps = {
    children: (<span>content</span>)
};

it('should render component', () => {
    const wrapper = shallow(<ModalFooterSection {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
});
