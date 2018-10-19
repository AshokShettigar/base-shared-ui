import React from 'react';
import { shallow, mount } from 'enzyme';

import Dismissible from './component';

const requiredProps = {
    children: (<span>Content</span>),
    onDismiss: jest.fn()
};

it('should render component', () => {
    const wrapper = shallow(<Dismissible {...requiredProps} />);

    expect(wrapper).toMatchSnapshot();
});

it('should render with prop isEscape true', () => {
    const wrapper = shallow(<Dismissible {...requiredProps} />);

    expect(wrapper.props().isEscape).toBeFalsy();
});

it('should render with prop isEscape false', () => {
    const wrapper = shallow(<Dismissible {...requiredProps} isEscape={false} />);

    expect(wrapper.props().isEscape).toBeFalsy();
});

it('should trigger onDismiss on escape', () => {
    const wrapper = shallow(<Dismissible {...requiredProps} />);

    wrapper.instance().handleCloseOnEscape({ keyCode: 27 });

    expect(requiredProps.onDismiss).toHaveBeenCalled();
});

it('should set childrenNode', () => {
    const wrapper = shallow(<Dismissible {...requiredProps} />);
    const childrenElem = document.createElement('div');

    wrapper.instance().setChildrenNodeRef(childrenElem);

    expect(wrapper.instance().childrenNode).toBe(childrenElem);
});

it('should hide content', () => {
    const wrapper = shallow(<Dismissible {...requiredProps} />);
    const childrenElem = document.createElement('div');
    const outsideElem = document.createElement('div');

    wrapper.instance().childrenNode = childrenElem;
    wrapper.instance().handleClickOutside({ target: outsideElem });

    expect(requiredProps.onDismiss).toHaveBeenCalled();
});

it('shouldn\'t hide content', () => {
    const wrapper = shallow(<Dismissible {...requiredProps} />);
    const childrenElem = document.createElement('div');
    const outsideElem = childrenElem;

    wrapper.instance().childrenNode = childrenElem;
    wrapper.instance().handleClickOutside({ target: outsideElem });

    expect(requiredProps.onDismiss).toHaveBeenCalled();
});

it('should trigger onDismiss method when clicked outside', () => {
    mount(<Dismissible {...requiredProps} />);

    const event = new MouseEvent('click');
    document.dispatchEvent(event);

    expect(requiredProps.onDismiss).toHaveBeenCalled();
});
