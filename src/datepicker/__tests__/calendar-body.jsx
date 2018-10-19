import { mount, shallow } from 'enzyme';
import CalendarBody, {
    getDaysInMonth,
    renderCurrentMonth,
    renderDay,
    renderNextMonth,
    renderPreviousMonth
} from 'platform-common-ui/datepicker/calendar-body';

describe('datepicker/calendar-body', function() {
    it('should get the number of days in a month', function() {
        // all months of 2017
        expect(getDaysInMonth(2017, 0)).toBe(31);
        expect(getDaysInMonth(2017, 1)).toBe(28);
        expect(getDaysInMonth(2017, 2)).toBe(31);
        expect(getDaysInMonth(2017, 3)).toBe(30);
        expect(getDaysInMonth(2017, 4)).toBe(31);
        expect(getDaysInMonth(2017, 5)).toBe(30);
        expect(getDaysInMonth(2017, 6)).toBe(31);
        expect(getDaysInMonth(2017, 7)).toBe(31);
        expect(getDaysInMonth(2017, 8)).toBe(30);
        expect(getDaysInMonth(2017, 9)).toBe(31);
        expect(getDaysInMonth(2017, 10)).toBe(30);
        expect(getDaysInMonth(2017, 11)).toBe(31);

        // leap years
        expect(getDaysInMonth(2000, 1)).toBe(29);
        expect(getDaysInMonth(2004, 1)).toBe(29);
        expect(getDaysInMonth(2008, 1)).toBe(29);
        expect(getDaysInMonth(2012, 1)).toBe(29);
        expect(getDaysInMonth(2016, 1)).toBe(29);
        expect(getDaysInMonth(2020, 1)).toBe(29);
        expect(getDaysInMonth(2024, 1)).toBe(29);
    });

    it('should render the day', function(done) {
        const onUpdateSelectedDate = day => {
            expect(day).toBe(1);
            done();
        };

        const isSelected = true;
        const isHighlighted = true;
        const isDisabled = false;
        const wrapper = shallow(renderDay(
            '1',
            1,
            isSelected,
            isHighlighted,
            isDisabled,
            onUpdateSelectedDate));
        wrapper.simulate('click');
    });

    it('should render the day with disabled', function() {
        const onUpdateSelectedDate = () => true;
        const isSelected = false;
        const isHighlighted = false;
        const isDisabled = true;
        const wrapper = shallow(renderDay(
            '1',
            1,
            isSelected,
            isHighlighted,
            isDisabled,
            onUpdateSelectedDate));
        expect(wrapper.prop('onClick')).toBe(null);
    });

    it('should render the previous month', function() {
        expect(shallow(<div>{renderPreviousMonth(2017, 1, 0)}</div>)).toMatchSnapshot();
        expect(shallow(<div>{renderPreviousMonth(2017, 1, 1)}</div>)).toMatchSnapshot();
        expect(shallow(<div>{renderPreviousMonth(2017, 1, 5)}</div>)).toMatchSnapshot();
        expect(shallow(<div>{renderPreviousMonth(2017, 1, 6)}</div>)).toMatchSnapshot();
    });

    it('should render the current month', function() {
        const onUpdateSelectedDate = () => true;
        expect(shallow(
            <div>
                {renderCurrentMonth(
                    2017,
                    0,
                    31,
                    null,
                    new Date(2017, 0, 1),
                    onUpdateSelectedDate)
                }
            </div>
        )).toMatchSnapshot();
        expect(shallow(
            <div>
                {renderCurrentMonth(
                    2017,
                    0,
                    31,
                    new Date(2017, 0, 15),
                    new Date(2017, 0, 1),
                    onUpdateSelectedDate)
                }
            </div>
        )).toMatchSnapshot();
        expect(shallow(
            <div>
                {renderCurrentMonth(
                    2017,
                    0,
                    31,
                    new Date(2017, 2, 15),
                    new Date(2017, 2, 1),
                    onUpdateSelectedDate)
                }
            </div>
        )).toMatchSnapshot();
    });

    it('should render the next month', function() {
        expect(shallow(<div>{renderNextMonth(0, 28)}</div>)).toMatchSnapshot();
        expect(shallow(<div>{renderNextMonth(1, 28)}</div>)).toMatchSnapshot();
        expect(shallow(<div>{renderNextMonth(2, 28)}</div>)).toMatchSnapshot();
        expect(shallow(<div>{renderNextMonth(3, 28)}</div>)).toMatchSnapshot();
        expect(shallow(<div>{renderNextMonth(4, 28)}</div>)).toMatchSnapshot();
        expect(shallow(<div>{renderNextMonth(5, 28)}</div>)).toMatchSnapshot();
        expect(shallow(<div>{renderNextMonth(6, 28)}</div>)).toMatchSnapshot();
    });

    it('should render the component', function() {
        const highlightedDate = new Date(2017, 1, 1);
        const onUpdateSelectedDate = () => true;
        const wrapper = shallow(
            <CalendarBody
                highlightedDate={highlightedDate}
                month={1}
                onUpdateSelectedDate={onUpdateSelectedDate}
                year={2017}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should mount the component and change the height', function() {
        const origSetState = CalendarBody.prototype.setState;
        const mockSetState = jest.fn();
        CalendarBody.prototype.setState = mockSetState;
        const highlightedDate = new Date(2017, 1, 1);
        const onUpdateSelectedDate = () => () => true;
        mount(
            <CalendarBody
                highlightedDate={highlightedDate}
                month={1}
                onUpdateSelectedDate={onUpdateSelectedDate}
                year={2017}
            />
        );
        expect(mockSetState).toHaveBeenCalledTimes(1);
        expect(mockSetState).toHaveBeenCalledWith({ height: expect.any(Number) });

        CalendarBody.prototype.setState = origSetState;
    });

    it('should update the transition name and height states with month and year changes', function() {
        const origSetState = CalendarBody.prototype.setState;
        const highlightedDate = new Date(2017, 1, 1);
        const onUpdateSelectedDate = () => () => true;
        const wrapper = mount(
            <CalendarBody
                highlightedDate={highlightedDate}
                month={1}
                onUpdateSelectedDate={onUpdateSelectedDate}
                year={2017}
            />
        );

        // equal month and equal year
        let mockSetState = jest.fn();
        CalendarBody.prototype.setState = mockSetState;
        wrapper.setProps({ month: 1, year: 2017 });
        expect(mockSetState).toHaveBeenCalledTimes(0);

        // less than current
        mockSetState = jest.fn();
        CalendarBody.prototype.setState = mockSetState;
        wrapper.setProps({ month: 0, year: 2017 });
        expect(mockSetState).toHaveBeenCalledTimes(2);
        expect(mockSetState).toHaveBeenCalledWith({ transitionName: 'month-prev' });
        expect(mockSetState).toHaveBeenCalledWith({ height: expect.any(Number) });

        // more than current
        mockSetState = jest.fn();
        CalendarBody.prototype.setState = mockSetState;
        wrapper.setProps({ month: 0, year: 2018 });
        expect(mockSetState).toHaveBeenCalledTimes(2);
        expect(mockSetState).toHaveBeenCalledWith({ transitionName: 'month-next' });
        expect(mockSetState).toHaveBeenCalledWith({ height: expect.any(Number) });

        CalendarBody.prototype.setState = origSetState;
    });
});
