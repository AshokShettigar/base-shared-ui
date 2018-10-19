import { shallow } from 'enzyme';
import Column from 'platform-common-ui/table/column';
import Header from 'platform-common-ui/table/header';

describe('table/header', function() {
    const columns = [
        <Column id="1" key="1">Head 1</Column>,
        <Column id="2" key="2">Head 2</Column>
    ];

    it('should render the component', function() {
        const wrapper = shallow(<Header columns={columns} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with scrollLeft', function() {
        const wrapper = shallow(<Header columns={columns} scrollLeft={100} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with widths', function() {
        const widths = [80, 120];
        const wrapper = shallow(<Header columns={columns} widths={widths} />);
        expect(wrapper).toMatchSnapshot();
    });
});
