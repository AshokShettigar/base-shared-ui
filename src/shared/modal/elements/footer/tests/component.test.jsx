import React from 'react';
import { shallow } from 'enzyme';

import ModalFooterElement from '../component';

const defaultProps = {
    submitLabel: '',
    dismissLabel: '',
    onSubmit: jest.fn(),
    onDismiss: jest.fn(),
    isDisabled: false,
    isLoading: false
};

it('should render component', () => {
    const wrapper = shallow(<ModalFooterElement {...defaultProps} />);

    expect(wrapper).toMatchSnapshot();
});
