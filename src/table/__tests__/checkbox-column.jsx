import { shallow } from 'enzyme';
import CheckBoxColumn from 'platform-common-ui/table/checkbox-column';

describe('table/checkbox-column', function() {
    const onClick = () => true;

    it('should render the component', function() {
        const wrapper = shallow(<CheckBoxColumn onClick={onClick} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with is all selected flag', function() {
        const wrapper = shallow(<CheckBoxColumn isAllSelected onClick={onClick} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should test onClick on the component', function(done) {
        const onClickHandler = () => {
            expect(true).toBeTruthy();
            done();
        };
        const wrapper = shallow(<CheckBoxColumn onClick={onClickHandler} />);
        wrapper.simulate('click');
    });

    it('should render with custom id', function() {
        const wrapper = shallow(<CheckBoxColumn id="new_id" onClick={onClick} />);
        expect(wrapper).toMatchSnapshot();
    });
});
