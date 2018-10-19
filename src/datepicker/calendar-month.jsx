import { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import { Icon } from 'platform-common-ui';

const DURATION = 150;
const MONTHS = [
    'January',
    'Feburary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export function compareYearAndMonth(year, month, prevYear, prevMonth) {
    if (year === prevYear && month === prevMonth) { return 0; }
    if (year === prevYear && month > prevMonth) { return 1; }
    if (year > prevYear) { return 1; }
    return -1;
}

export default class CalendarMonth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transitionName: 'month-next'
        };

        this.onMouseDown = event => event.preventDefault();
        this.onNavigateToNextMonth = () =>
            this.updateYearAndMonth(this.props.year, this.props.month + 1);
        this.onNavigateToPreviousMonth = () =>
            this.updateYearAndMonth(this.props.year, this.props.month - 1);
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

    updateYearAndMonth(year, month) {
        const date = new Date(year, month);
        this.props.onChangeMonthAndYear(date.getMonth(), date.getFullYear());
    }

    render() {
        return (
            // eslint-disable-next-line jsx-a11y/interactive-supports-focus
            <div
                className="cn-calendar-month"
                onMouseDown={this.onMouseDown}
                role="button"
            >
                <Icon
                    className="cn-calendar-month__nav-month-btn"
                    icon="triangle-left"
                    onClick={this.onNavigateToPreviousMonth}
                />
                <div className="cn-calendar-month__animation-container">
                    <CSSTransitionGroup
                        className="cn-calendar-month__animation"
                        transitionName={this.state.transitionName}
                        transitionEnterTimeout={DURATION}
                        transitionLeaveTimeout={DURATION}
                    >
                        <div
                            className="cn-calendar-month__text"
                            key={`${this.props.year}_${this.props.month}`}
                        >
                            {`${MONTHS[this.props.month]} ${this.props.year}`}
                        </div>
                    </CSSTransitionGroup>
                </div>
                <Icon
                    className="cn-calendar-month__nav-month-btn"
                    icon="triangle-right"
                    onClick={this.onNavigateToNextMonth}
                />
            </div>
        );
    }
}

CalendarMonth.propTypes = {
    month: PropTypes.number.isRequired,
    onChangeMonthAndYear: PropTypes.func.isRequired,
    year: PropTypes.number.isRequired
};
