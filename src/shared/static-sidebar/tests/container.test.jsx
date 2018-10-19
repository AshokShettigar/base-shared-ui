import React from 'react';
import { shallow } from 'enzyme';

import StaticSideBarContainer from '../container';

const defaultProps = {
    isExpand: undefined,
    title: 'default title',

    onCollapse: jest.fn(),
    onExpand: jest.fn(),
    children: <div>Children</div>
};

describe('Static side bar container', () => {
    afterEach(() => {
        defaultProps.onCollapse.mockReset();
        defaultProps.onExpand.mockReset();
    });

    it('should render component', () => {
        const wrapper = shallow(<StaticSideBarContainer {...defaultProps} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should open sidebar and call onExpand function if provided', () => {
        const wrapper = shallow(<StaticSideBarContainer {...defaultProps} />);

        wrapper.instance().handleExpand();
        expect(defaultProps.onExpand).toHaveBeenCalled();
        expect(wrapper.instance().state.isExpand).toBeTruthy();
    });

    it('should close sidebar and call onCollapse function if provided', () => {
        const wrapper = shallow(<StaticSideBarContainer {...defaultProps} isExpand />);

        expect(wrapper.instance().state.isExpand).toBeTruthy();
        wrapper.instance().handleCollapse();
        expect(defaultProps.onCollapse).toHaveBeenCalled();
        expect(wrapper.instance().state.isExpand).toBeFalsy();
    });

    it('should react on isExpand props changing', () => {
        const wrapper = shallow(<StaticSideBarContainer {...defaultProps} />);

        expect(wrapper.instance().state.isExpand).toBeFalsy();
        wrapper.setProps({ isExpand: true });
        expect(wrapper.instance().state.isExpand).toBeTruthy();
    });
});
