import React from 'react';
import { shallow } from 'enzyme';

import StaticSideBarContainer from '../component';

const defaultProps = {
    isExpand: true,
    title: 'default title',

    onCollapse: jest.fn(),
    onExpand: jest.fn(),
    children: <div>Children</div>
};

describe('Static side bar component', () => {
    it('should render component when its open', () => {
        const wrapper = shallow(<StaticSideBarContainer {...defaultProps} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component when its closed', () => {
        const wrapper = shallow(<StaticSideBarContainer {...defaultProps} isExpand={false} />);

        expect(wrapper).toMatchSnapshot();
    });
});
