import { mount, shallow } from 'enzyme';
import SelectRowCell from 'platform-common-ui/table/select-row-cell';

/* eslint-disable react/prop-types */
const TableWrapper = props => (
    <table>
        <tbody>
            <tr>{props.children}</tr>
        </tbody>
    </table>
);
/* eslint-disable react/prop-types */

describe('table/select-row-cell', function() {
    const onChange = () => true;

    it('should render the component', function() {
        const wrapper = shallow(
            <TableWrapper>
                <SelectRowCell id="ck" onChange={onChange} />
            </TableWrapper>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with selected flag', function() {
        const wrapper = shallow(
            <TableWrapper>
                <SelectRowCell id="ck" isSelected onChange={onChange} />
            </TableWrapper>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should test onClick on the component', function(done) {
        const onChangeHandler = () => {
            expect(true).toBeTruthy();
            done();
        };
        const wrapper = mount(
            <TableWrapper>
                <SelectRowCell id="ck" onChange={onChangeHandler} />
            </TableWrapper>
        );
        wrapper.find('input').simulate('change');
    });
});
