import { shallow } from 'enzyme';
import Cell from 'platform-common-ui/table/cell';
import Row from 'platform-common-ui/table/row';

describe('table/row', function() {
    it('should render the row', function() {
        const wrapper = shallow(
            <Row>
                <Cell>Data 1</Cell>
                <Cell>Data 2</Cell>
            </Row>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the row with isSelected', function() {
        const wrapper = shallow(
            <Row isSelected>
                <Cell>Data 1</Cell>
                <Cell>Data 2</Cell>
            </Row>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the row with class name', function() {
        const wrapper = shallow(
            <Row className="my-class">
                <Cell>Data 1</Cell>
                <Cell>Data 2</Cell>
            </Row>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should test onClick on row', function(done) {
        const onClickHandler = () => {
            expect(true).toBeTruthy();
            done();
        };

        const wrapper = shallow(
            <Row onClick={onClickHandler}>
                <Cell>Data 1</Cell>
                <Cell>Data 2</Cell>
            </Row>
        );
        wrapper.simulate('click');
    });
});
