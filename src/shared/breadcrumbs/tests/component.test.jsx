import { shallow } from 'enzyme';
import PageBreadcrumb from '../component';

const defaultProps = {
    breadcrumbs: [{
        title: 'previous breadcrumb title',
        link: '/link'
    },
    {
        title: 'current breadcrumb title'
    }]
};

describe('Page breadcrumb', () => {
    it('renders with default props', () => {
        const wrapper = shallow(<PageBreadcrumb {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });
});
