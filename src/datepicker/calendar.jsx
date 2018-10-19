import PropTypes from 'prop-types';
import { Popup } from 'react-redux-popup';
import CalendarBody from 'platform-common-ui/datepicker/calendar-body';
import CalendarMonth from 'platform-common-ui/datepicker/calendar-month';
import CalendarWeekHeader from 'platform-common-ui/datepicker/calendar-week-header';

const updateSelectedDateHandler =
    (year, month, onChange) => day => () => onChange(new Date(year, month, day));

export const Calendar = props => (
    <div className="cn-calendar">
        <CalendarMonth
            month={props.month}
            onChangeMonthAndYear={props.onChangeMonthAndYear}
            year={props.year}
        />
        <CalendarWeekHeader />
        <CalendarBody
            highlightedDate={props.highlightedDate}
            month={props.month}
            onUpdateSelectedDate={
                updateSelectedDateHandler(props.year, props.month, props.onChange)
            }
            selectedDate={props.selectedDate}
            year={props.year}
        />
    </div>
);

Calendar.propTypes = {
    highlightedDate: PropTypes.instanceOf(Date).isRequired,
    month: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    onChangeMonthAndYear: PropTypes.func.isRequired,
    selectedDate: PropTypes.instanceOf(Date),
    year: PropTypes.number.isRequired
};

export default Popup(Calendar);
