import { shallow } from 'enzyme';
import Cell from 'platform-common-ui/table/cell';

describe('table/cell', function() {
    it('should render the cell', function() {
        const wrapper = shallow(<Cell />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the cell with class name', function() {
        const wrapper = shallow(<Cell className="my-class">Some data</Cell>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the cell with data', function() {
        const wrapper = shallow(<Cell>Some data</Cell>);
        expect(wrapper).toMatchSnapshot();
    });
});
