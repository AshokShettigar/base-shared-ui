import { mount, shallow } from 'enzyme';
import { Calendar } from 'platform-common-ui/datepicker/calendar';

describe('datepicker/calendar', function() {
    it('should render the component', function() {
        const onChange = () => true;
        const onChangeMonthAndYear = () => true;
        const highlightedDate = new Date(Date.UTC(2017, 0, 1));
        const wrapper = shallow(
            <Calendar
                highlightedDate={highlightedDate}
                month={0}
                onChange={onChange}
                onChangeMonthAndYear={onChangeMonthAndYear}
                year={2017}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should call onChange callback on selected date change', function(done) {
        const onChange = selectedDate => {
            expect(selectedDate.getFullYear()).toBe(2017);
            expect(selectedDate.getMonth()).toBe(0);
            expect(selectedDate.getDate()).toBe(1);
            done();
        };
        const onChangeMonthAndYear = () => true;
        const highlightedDate = new Date(2017, 0, 1);
        const wrapper = mount(
            <Calendar
                highlightedDate={highlightedDate}
                month={0}
                onChange={onChange}
                onChangeMonthAndYear={onChangeMonthAndYear}
                year={2017}
            />
        );
        wrapper.find('.cn-calendar__day--is-highlighted').simulate('click');
    });
});
