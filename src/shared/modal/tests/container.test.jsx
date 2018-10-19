import { shallow } from 'enzyme';

import Modal from '../container';

describe('Modal component', () => {
    it('should render component with default props', () => {
        const wrapper = shallow(<Modal />).shallow();

        expect(wrapper).toMatchSnapshot();
    });

    it('shouldn\'t render component', () => {
        const wrapper = shallow(<Modal rendered={false} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render opened modal', () => {
        const wrapper = shallow(<Modal isOpen />).shallow();

        expect(wrapper.state().isOpen).toBeTruthy();

        wrapper.setProps({ isOpen: false });
        wrapper.setProps({ isOpen: true });

        expect(wrapper.state().isOpen).toBeTruthy();

        expect(wrapper).toMatchSnapshot();
    });

    it('should render closed modal', () => {
        const wrapper = shallow(<Modal />).shallow();

        expect(wrapper.state().isOpen).toBeFalsy();

        wrapper.setProps({ isOpen: true });
        wrapper.setProps({ isOpen: false });

        expect(wrapper.state().isOpen).toBeFalsy();

        expect(wrapper).toMatchSnapshot();
    });

    it('shouldn\'t called onDismiss', () => {
        const handleDismiss = jest.fn();
        const wrapper = shallow(<Modal onDismiss={handleDismiss} />).shallow();

        wrapper.setProps({ isOpen: false });

        expect(handleDismiss).not.toHaveBeenCalled();
    });

    it('should render with classes', () => {
        const props = {
            className: 'className',
            overlayClassName: 'overlayClassName',
            contentClassName: 'contentClassName',
            bodyOpenClassName: 'bodyOpenClassName'
        };
        const wrapper = shallow(<Modal {...props} />).shallow();

        expect(wrapper).toMatchSnapshot();
    });

    it('should render with children', () => {
        const wrapper = shallow(<Modal>Modal Content</Modal>).shallow();

        expect(wrapper).toMatchSnapshot();
    });

    it('should render with position', () => {
        const wrapper = shallow(<Modal position="middle" />).shallow();

        expect(wrapper).toMatchSnapshot();
    });

    it('should render with sections', () => {
        const props = {
            title: <span>Title Content</span>,
            header: <span>Header Content</span>,
            sidebar: <span>Sidebar Content</span>,
            footer: <span>Footer Content</span>
        };
        const wrapper = shallow(<Modal {...props} />).shallow();

        expect(wrapper).toMatchSnapshot();
    });

    it('should render with sections', () => {
        const props = {
            onAfterOpen: jest.fn(),
            onDismiss: jest.fn()
        };
        const wrapper = shallow(<Modal {...props} />).shallow();

        expect(wrapper).toMatchSnapshot();
    });
});

