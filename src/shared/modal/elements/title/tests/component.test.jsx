import React from 'react';
import { shallow } from 'enzyme';

import ModalHeaderSection from '../component';

const defaultProps = {
    children: '',
    onDismiss: jest.fn()
};

it('should render component', () => {
    const wrapper = shallow(<ModalHeaderSection {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
});
