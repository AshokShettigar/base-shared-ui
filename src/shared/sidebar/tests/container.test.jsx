import { shallow } from 'enzyme';

import Sidebar from '../container';

const defaultProps = {
    title: 'Title',
    isOpen: false,
    onAfterOpen: jest.fn(),
    onDismiss: jest.fn()
};

describe('Sidebar', () => {
    it('should render component', () => {
        const wrapper = shallow(<Sidebar {...defaultProps}>Modal Content</Sidebar>);

        expect(wrapper).toMatchSnapshot();
    });

    it('should set isOpen state to true', () => {
        const wrapper = shallow(<Sidebar {...defaultProps}>Modal Content</Sidebar>);

        wrapper.setProps({
            isOpen: true
        });
        expect(wrapper.state().isOpen).toBeTruthy();
    });

    it('should set isOpen state to false and trigger onDismiss method', () => {
        defaultProps.onDismiss.mockReset();
        const wrapper = shallow(<Sidebar {...defaultProps} isOpen>Modal Content</Sidebar>);

        wrapper.setProps({
            isOpen: false
        });
        expect(wrapper.state().isOpen).toBeFalsy();
        expect(defaultProps.onDismiss).toHaveBeenCalled();
    });

    it('nothing should happen', () => {
        defaultProps.onDismiss.mockReset();
        const wrapper = shallow(<Sidebar {...defaultProps}>Modal Content</Sidebar>);

        wrapper.setProps({
            isOpen: false
        });
        expect(defaultProps.onDismiss).not.toHaveBeenCalled();
    });

    it('should set isOpen state to false', () => {
        defaultProps.onDismiss.mockReset();
        const wrapper = shallow(
            <Sidebar {...defaultProps} onDismiss={undefined} isOpen>Modal Content</Sidebar>
        );

        wrapper.setProps({
            isOpen: false
        });
        expect(wrapper.state().isOpen).toBeFalsy();
    });
});
