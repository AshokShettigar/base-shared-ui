import classNames from 'classnames';
import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { closePopup, openPopup } from 'react-redux-popup';
import CalendarPopup from 'platform-common-ui/datepicker/calendar';
import { Icon } from 'platform-common-ui';
import { Input } from 'platform-common-ui/input';

const VALID_DATE_REGEX = /^(\d|\d{2})\/(\d|\d{2})\/(\d{4})$/;
const ARROW_KEY_CODE = {
    37: -1,
    38: -7,
    39: 1,
    40: 7
};

export function padLeft(value) {
    if (value > 9) { return value; }
    return `0${value}`;
}

export function formatDate(date) {
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const day = date.getDate();
    return `${padLeft(month)}/${padLeft(day)}/${year}`;
}

export function isValidDate(value) {
    return VALID_DATE_REGEX.test(value) && !isNaN(Date.parse(value));
}

export class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = this.getInitialState(this.props.value);
        this.getRect = () => this.inputElem.textInput.getBoundingClientRect();
        this.onChangeMonthAndYear = this.onChangeMonthAndYearHandler.bind(this);
        this.onChangeSelectedDate = this.onChangeSelectedDateHandler.bind(this);
        this.onClosePopup = this.onClosePopupHandler.bind(this);
        this.onKeyDown = this.onKeyDownHandler.bind(this);
        this.onValueChange = this.onValueChangeHandler.bind(this);
        this.setDatePickerElemRef = component => { this.datePickerElem = component; };
        this.setInputElemRef = component => { this.inputElem = component; };
    }

    getInitialState(selectedDate) {
        const formattedDate = selectedDate ? formatDate(selectedDate) : '';
        const highlightedDate = selectedDate || new Date();
        const month = highlightedDate.getMonth();
        const year = highlightedDate.getFullYear();
        return {
            formattedDate,
            highlightedDate,
            month,
            selectedDate,
            year,
            isPopupOpen: false
        };
    }

    componentDidUpdate() {
        // this condition is to take care of a case when the property value is changed
        // outside of this component
        if (this.props.value !== this.state.selectedDate) {
            // unfortunately, this isn't possible because when componentWillReceiveProps is
            // called, the state is not yet updated
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState(this.getInitialState(this.props.value));
        }
    }

    onClickHandler(id) {
        return () => {
            if (this.props.isDisabled) { return; }
            this.setState({ isPopupOpen: true });
            this.props.openPopup(id);
        };
    }

    onKeyDownHandler(keyCode) {
        if (!this.state.isPopupOpen) { return; }

        if (keyCode > 36 && keyCode < 41) {
            const highlightedDate = new Date(
                this.state.highlightedDate.getFullYear(),
                this.state.highlightedDate.getMonth(),
                this.state.highlightedDate.getDate() + ARROW_KEY_CODE[keyCode]);
            this.setState({
                highlightedDate,
                month: highlightedDate.getMonth(),
                year: highlightedDate.getFullYear()
            });
        } else if (keyCode === 13) {
            this.inputElem.blur();
            this.onChangeSelectedDate(this.state.highlightedDate);
        } else if (keyCode === 27) {
            this.inputElem.blur();
            this.onClosePopupHandler();
        }
    }

    onChangeMonthAndYearHandler(month, year) {
        this.setState({ month, year });
        this.inputElem.focus();
    }

    onChangeSelectedDateHandler(selectedDate) {
        const formattedDate = formatDate(selectedDate);
        const month = selectedDate.getMonth();
        const year = selectedDate.getFullYear();
        this.setState({
            formattedDate,
            month,
            selectedDate,
            year,
            highlightedDate: selectedDate,
            isPopupOpen: false
        });
        this.props.onChange(selectedDate);
        this.props.closePopup(this.props.id);
    }

    onClosePopupHandler() {
        const formattedDate = this.state.selectedDate ? formatDate(this.state.selectedDate) : '';
        const highlightedDate = this.state.selectedDate || new Date();
        const month = highlightedDate.getMonth();
        const year = highlightedDate.getFullYear();
        this.setState({
            formattedDate,
            highlightedDate,
            month,
            year,
            isPopupOpen: false
        });
        this.props.closePopup(this.props.id);
    }

    onValueChangeHandler(value) {
        if (value && !isValidDate(value)) {
            this.setState({ formattedDate: value });
            return;
        }

        const selectedDate = value ? new Date(value) : null;
        const highlightedDate = selectedDate || new Date();
        const month = highlightedDate.getMonth();
        const year = highlightedDate.getFullYear();
        this.setState({
            highlightedDate,
            month,
            selectedDate,
            year,
            formattedDate: value
        });
        this.props.onChange(selectedDate);
    }

    stopEvent(event) {
        event.stopPropagation();
    }

    render() {
        const className = classNames('cn-date-picker', this.props.className);
        const iconClassName = classNames({
            'cn-date-picker__icon': true,
            'cn-date-picker__icon--is-active': this.state.isPopupOpen
        });

        return (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div
                className={className}
                onClick={this.onClickHandler(this.props.id)}
                onMouseUp={this.stopEvent}
                ref={this.setDatePickerElemRef}
            >
                <Input
                    className="cn-date-picker__input"
                    hasError={this.props.hasError}
                    hideLabel={this.props.hideLabel}
                    id={this.props.id}
                    isDisabled={this.props.isDisabled}
                    isRequired={this.props.isRequired}
                    label={this.props.label}
                    labelClassName="cn-date-picker__label"
                    onChange={this.onValueChange}
                    onKeyDown={this.onKeyDown}
                    placeholder={this.props.placeholder}
                    ref={this.setInputElemRef}
                    value={this.state.formattedDate}
                >
                    <Icon className={iconClassName} icon="calendar" />
                </Input>
                <CalendarPopup
                    closePopup={this.onClosePopup}
                    getRect={this.getRect}
                    highlightedDate={this.state.highlightedDate}
                    id={this.props.id}
                    month={this.state.month}
                    popupClassName="cn-date-picker__popup"
                    offset={3}
                    onChange={this.onChangeSelectedDate}
                    onChangeMonthAndYear={this.onChangeMonthAndYear}
                    selectedDate={this.state.selectedDate}
                    year={this.state.year}
                />
            </div>
        );
    }
}

DatePicker.propTypes = {
    className: PropTypes.string,
    closePopup: PropTypes.func.isRequired,
    hasError: PropTypes.bool.isRequired,
    hideLabel: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isRequired: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    openPopup: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.instanceOf(Date)
};

DatePicker.defaultProps = {
    hasError: false,
    hideLabel: false,
    isDisabled: false,
    isRequired: false,
    placeholder: 'mm/dd/yyyy'
};

export const ConnectedDatePicker = connect(null, { closePopup, openPopup })(DatePicker);
