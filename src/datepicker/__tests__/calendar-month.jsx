import { mount, shallow } from 'enzyme';
import CalendarMonth, { compareYearAndMonth } from 'platform-common-ui/datepicker/calendar-month';

describe('datepicker/calendar-month', function() {
    it('should test comparing year and month util function', function() {
        expect(compareYearAndMonth(2017, 3, 2017, 3)).toBe(0);
        expect(compareYearAndMonth(2017, 3, 2017, 5)).toBe(-1);
        expect(compareYearAndMonth(2017, 3, 2017, 1)).toBe(1);
        expect(compareYearAndMonth(2017, 3, 2015, 3)).toBe(1);
        expect(compareYearAndMonth(2017, 3, 2019, 3)).toBe(-1);
        expect(compareYearAndMonth(2017, 11, 2019, 3)).toBe(-1);
        expect(compareYearAndMonth(2017, 11, 2015, 3)).toBe(1);
    });

    it('should render the component', function() {
        const onChangeMonthAndYear = () => true;
        const wrapper = shallow(
            <CalendarMonth month={2} onChangeMonthAndYear={onChangeMonthAndYear} year={2017} />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should change transition name state when month or year changes', function() {
        const origSetState = CalendarMonth.prototype.setState;

        const onChangeMonthAndYear = () => true;
        const wrapper = shallow(
            <CalendarMonth month={2} onChangeMonthAndYear={onChangeMonthAndYear} year={2017} />
        );

        // equal to current month/year
        let mockSetState = jest.fn();
        CalendarMonth.prototype.setState = mockSetState;
        wrapper.setProps({ month: 2, year: 2017 });
        expect(mockSetState).toHaveBeenCalledTimes(0);

        // less than current
        mockSetState = jest.fn();
        CalendarMonth.prototype.setState = mockSetState;
        wrapper.setProps({ month: 0, year: 2017 });
        expect(mockSetState).toHaveBeenCalledTimes(1);
        expect(mockSetState).toHaveBeenCalledWith({ transitionName: 'month-prev' });

        // more than current
        mockSetState = jest.fn();
        CalendarMonth.prototype.setState = mockSetState;
        wrapper.setProps({ month: 0, year: 2018 });
        expect(mockSetState).toHaveBeenCalledTimes(1);
        expect(mockSetState).toHaveBeenCalledWith({ transitionName: 'month-next' });

        CalendarMonth.prototype.setState = origSetState;
    });

    it('should call onChangeMonthAndYear callback when clicking previous arrow', function(done) {
        const onChangeMonthAndYear = (month, year) => {
            expect(month).toBe(11);
            expect(year).toBe(2016);
            done();
        };

        const wrapper = mount(
            <CalendarMonth month={0} onChangeMonthAndYear={onChangeMonthAndYear} year={2017} />
        );
        wrapper.find('.cn-calendar-month__nav-month-btn svg').at(0).simulate('click');
    });

    it('should call onChangeMonthAndYear callback when clicking next arrow', function(done) {
        const onChangeMonthAndYear = (month, year) => {
            expect(month).toBe(0);
            expect(year).toBe(2018);
            done();
        };

        const wrapper = mount(
            <CalendarMonth month={11} onChangeMonthAndYear={onChangeMonthAndYear} year={2017} />
        );
        wrapper.find('.cn-calendar-month__nav-month-btn svg').at(1).simulate('click');
    });

    it('should prevent default on mounse down event', function() {
        const onChangeMonthAndYear = () => true;
        const wrapper = mount(
            <CalendarMonth month={11} onChangeMonthAndYear={onChangeMonthAndYear} year={2017} />
        );
        const event = { preventDefault: jest.fn() };
        wrapper.find('.cn-calendar-month').simulate('mousedown', event);
        expect(event.preventDefault).toHaveBeenCalled();
    });
});
