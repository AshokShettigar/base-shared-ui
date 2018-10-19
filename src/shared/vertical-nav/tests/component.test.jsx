import { mount } from 'enzyme';

import VerticalNav from '../component';

describe('Vertical Nav component', () => {
    const items = [{
        id: '1',
        title: 'Item 1',
        onClick: jest.fn()
    }, {
        id: '2',
        title: 'Item 2',
        onClick: jest.fn()
    }];
    const [activeItem] = items;
    const props = {
        activeItem,
        items
    };
    const wrapper = mount(<VerticalNav {...props} />);

    it('should render component', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call "onClick" method', () => {
        jest.spyOn(activeItem, 'onClick');
        wrapper.find('.nav-link').first().simulate('click');
        expect(activeItem.onClick).toHaveBeenCalled();
    });
});
