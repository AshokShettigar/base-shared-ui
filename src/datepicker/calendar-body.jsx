import classNames from 'classnames';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import { compareYearAndMonth } from 'platform-common-ui/datepicker/calendar-month';

const DURATION = 150;

export function getDaysInMonth(year, month) {
    if (month < 7) {
        if (month === 1) {
            return year % 4 === 0 ? 29 : 28;
        }
        return month % 2 === 0 ? 31 : 30;
    }
    return month % 2 === 0 ? 30 : 31;
}

export function renderDay(key, day, isSelected, isHighlighted, isDisabled, onUpdateSelectedDate) {
    const className = classNames({
        'cn-calendar__column': true,
        'cn-calendar__day': true,
        'cn-calendar__day--is-disabled': isDisabled,
        'cn-calendar__day--is-highlighted': isHighlighted,
        'cn-calendar__day--is-selected': isSelected
    });
    const onClick = isDisabled ? null : onUpdateSelectedDate(day);
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    return <div className={className} key={key} onClick={onClick}>{day}</div>;
}

export function renderPreviousMonth(currentYear, currentMonth, currentMonthStartDayOfWeek) {
    // fill out the dates from previous month before the 1st starts in the current month
    const prevMonth = new Date(currentYear, currentMonth - 1);
    const prevDaysInMonth = getDaysInMonth(prevMonth.getYear(), prevMonth.getMonth());
    const days = [];
    for (let i = currentMonthStartDayOfWeek - 1; i > -1; i--) {
        days.push(renderDay(`s_${i}`, prevDaysInMonth - i, false, false, true));
    }
    return days;
}

export function renderCurrentMonth(
    year,
    month,
    daysInMonth,
    selectedDate,
    highlightedDate,
    onUpdateSelectedDate
) {
    const selectedDay = selectedDate && selectedDate.getDate();
    const selectedMonth = selectedDate && selectedDate.getMonth();
    const selectedYear = selectedDate && selectedDate.getFullYear();
    const highlightedDay = highlightedDate.getDate();
    const highlightedMonth = highlightedDate.getMonth();
    const highlightedYear = highlightedDate.getFullYear();
    const days = [];
    for (let i = 0; i < daysInMonth; i++) {
        const day = i + 1;
        const isSelected = year === selectedYear
            && month === selectedMonth
            && day === selectedDay;
        const isHighlighted = year === highlightedYear
            && month === highlightedMonth
            && day === highlightedDay;
        days.push(renderDay(
            `d_${day}`,
            day,
            isSelected,
            isHighlighted,
            false,
            onUpdateSelectedDate
        ));
    }
    return days;
}

export function renderNextMonth(startDayOfWeek, daysInMonth) {
    // fill in the rest of the calendar block with date from next month
    const fillDaysNum = 7 - ((startDayOfWeek + daysInMonth) % 7);
    const days = [];
    if (fillDaysNum < 7) {
        for (let r = 0; r < fillDaysNum; r++) {
            days.push(renderDay(`r_${r}`, r + 1, false, false, true));
        }
    }
    return days;
}

export default class CalendarBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 120,
            transitionName: 'month-next'
        };
    }

    componentDidMount() {
        // eslint-disable-next-line react/no-did-mount-set-state
        this.setState({ height: this.elem.clientHeight });
    }

    componentWillReceiveProps(nextProps) {
        const comparedValue = compareYearAndMonth(
            nextProps.year,
            nextProps.month,
            this.props.year,
            this.props.month);
        if (comparedValue !== 0) {
            this.setState({
                transitionName: comparedValue > 0 ? 'month-next' : 'month-prev'
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.year !== this.props.year || prevProps.month !== this.props.month) {
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({ height: this.elem.clientHeight });
        }
    }

    render() {
        const {
            highlightedDate,
            month,
            onUpdateSelectedDate,
            selectedDate,
            year
        } = this.props;

        const date = new Date(year, month);
        const startDayOfWeek = date.getDay();
        const daysInMonth = getDaysInMonth(year, month);

        return (
            <div className="cn-calendar-body" style={{ height: this.state.height }}>
                <CSSTransitionGroup
                    transitionName={this.state.transitionName}
                    transitionEnterTimeout={DURATION}
                    transitionLeaveTimeout={DURATION}
                >
                    <div
                        className="cn-calendar-body__month"
                        key={`${year}_${month}`}
                        ref={c => { this.elem = c; }}
                    >
                        {renderPreviousMonth(year, month, startDayOfWeek)}
                        {renderCurrentMonth(
                            year,
                            month,
                            daysInMonth,
                            selectedDate,
                            highlightedDate,
                            onUpdateSelectedDate)}
                        {renderNextMonth(startDayOfWeek, daysInMonth)}
                    </div>
                </CSSTransitionGroup>
            </div>
        );
    }
}

CalendarBody.propTypes = {
    highlightedDate: PropTypes.instanceOf(Date).isRequired,
    month: PropTypes.number.isRequired,
    onUpdateSelectedDate: PropTypes.func.isRequired,
    selectedDate: PropTypes.instanceOf(Date),
    year: PropTypes.number.isRequired
};
