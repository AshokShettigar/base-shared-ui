import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import {
    DatePicker,
    formatDate,
    isValidDate,
    padLeft
} from 'platform-common-ui/datepicker';

describe('datepicker/index', function() {
    const mockStore = configureStore();
    const origAddEventListener = window.addEventListener;
    const origRemoveEventListener = window.removeEventListener;
    const origSetState = DatePicker.prototype.setState;
    const dateValue = new Date(Date.parse('2017-07-08T11:22:33+0000'));

    afterEach(function() {
        window.addEventListener = origAddEventListener;
        window.removeEventListener = origRemoveEventListener;
        DatePicker.prototype.setState = origSetState;
    });

    it('should pad left', function() {
        expect(padLeft(0)).toBe('00');
        expect(padLeft(1)).toBe('01');
        expect(padLeft(9)).toBe('09');
        expect(padLeft(10)).toBe(10);
        expect(padLeft(11)).toBe(11);
    });

    it('should format date', function() {
        expect(formatDate(new Date(2016, 0, 1))).toBe('01/01/2016');
        expect(formatDate(new Date(2016, 11, 30))).toBe('12/30/2016');
        expect(formatDate(new Date(2017, 2, 9))).toBe('03/09/2017');
    });

    it('should validate the date', function() {
        expect(isValidDate('01/01/2017')).toBeTruthy();
        expect(isValidDate('1/1/2017')).toBeTruthy();
        expect(isValidDate('1/12/2017')).toBeTruthy();
        expect(isValidDate('13/1/2017')).toBeFalsy();
        expect(isValidDate('11/1/17')).toBeFalsy();
        expect(isValidDate('17')).toBeFalsy();
        expect(isValidDate('00/00/2018')).toBeFalsy();
    });

    it('should render the component', function() {
        const handler = () => true;
        const wrapper = shallow(
            <DatePicker
                closePopup={handler}
                id="date1"
                label="date picker"
                onChange={handler}
                openPopup={handler}
            />
        );
        wrapper.setState({
            highlightedDate: new Date(Date.UTC(2017, 0, 1)),
            month: 0,
            year: 2017
        });
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with value', function() {
        const handler = () => true;
        const wrapper = shallow(
            <DatePicker
                closePopup={handler}
                id="date1"
                label="date picker"
                onChange={handler}
                openPopup={handler}
                value={dateValue}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with custom classname', function() {
        const handler = () => true;
        const wrapper = shallow(
            <DatePicker
                className="my-class"
                closePopup={handler}
                id="date1"
                label="date picker"
                onChange={handler}
                openPopup={handler}
                value={dateValue}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with disabled', function() {
        const handler = () => true;
        const wrapper = shallow(
            <DatePicker
                closePopup={handler}
                id="date1"
                isDisabled
                label="date picker"
                onChange={handler}
                openPopup={handler}
                value={dateValue}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with hasError', function() {
        const handler = () => true;
        const wrapper = shallow(
            <DatePicker
                closePopup={handler}
                hasError
                id="date1"
                label="date picker"
                onChange={handler}
                openPopup={handler}
                value={dateValue}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with hideLabel', function() {
        const handler = () => true;
        const wrapper = shallow(
            <DatePicker
                closePopup={handler}
                hideLabel
                id="date1"
                label="date picker"
                onChange={handler}
                openPopup={handler}
                value={dateValue}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with isRequired', function() {
        const handler = () => true;
        const wrapper = shallow(
            <DatePicker
                closePopup={handler}
                id="date1"
                isRequired
                label="date picker"
                onChange={handler}
                openPopup={handler}
                value={dateValue}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with placeholder', function() {
        const handler = () => true;
        const wrapper = shallow(
            <DatePicker
                closePopup={handler}
                id="date1"
                label="date picker"
                onChange={handler}
                openPopup={handler}
                placeholder="My Placeholder"
                value={dateValue}
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should update the selected date when the value gets updated', function() {
        const mockSetState = jest.fn();
        DatePicker.prototype.setState = mockSetState;

        const handler = () => true;
        const value = new Date(2017, 0, 1);
        const datePicker = new DatePicker({
            value,
            closePopup: handler,
            id: 'date1',
            label: 'date picker',
            onChange: handler,
            openPopup: handler
        });
        const newValue = new Date(2018, 5, 26);
        datePicker.props.value = newValue;
        datePicker.componentDidUpdate();

        expect(mockSetState).toHaveBeenCalledTimes(1);
        expect(mockSetState).toHaveBeenCalledWith({
            formattedDate: '06/26/2018',
            highlightedDate: newValue,
            isPopupOpen: false,
            month: 5,
            selectedDate: newValue,
            year: 2018
        });
    });

    it('should not update the selected date when the value is same', function() {
        const mockSetState = jest.fn();
        DatePicker.prototype.setState = mockSetState;

        const handler = () => true;
        const value = new Date(2017, 0, 1);
        const datePicker = new DatePicker({
            value,
            closePopup: handler,
            id: 'date1',
            label: 'date picker',
            onChange: handler,
            openPopup: handler
        });
        datePicker.componentDidUpdate();
        expect(mockSetState).toHaveBeenCalledTimes(0);
    });

    it('should openPopup on click', function(done) {
        const mockSetState = jest.fn();
        DatePicker.prototype.setState = mockSetState;

        const openPopup = id => {
            expect(mockSetState).toHaveBeenCalledWith({ isPopupOpen: true });
            expect(id).toBe('date1');
            done();
        };

        const handler = () => true;
        const value = new Date(2017, 0, 1);
        const wrapper = mount(
            <Provider store={mockStore()}>
                <DatePicker
                    closePopup={handler}
                    id="date1"
                    label="date picker"
                    onChange={handler}
                    openPopup={openPopup}
                    value={value}
                />
            </Provider>
        );
        wrapper.find('.cn-date-picker').simulate('click');
    });

    it('should call getRect function', function() {
        const handler = () => true;
        const datePicker = new DatePicker({
            openPopup: handler,
            closePopup: handler,
            id: 'date1',
            label: 'date picker',
            onChange: handler
        });

        const getBoundingClientRect = jest.fn();
        datePicker.inputElem = {
            textInput: { getBoundingClientRect }
        };
        datePicker.getRect();
        expect(getBoundingClientRect).toHaveBeenCalledTimes(1);
    });

    it('should not openPopup on click when disabled', function() {
        const mockSetState = jest.fn();
        DatePicker.prototype.setState = mockSetState;

        const openPopup = jest.fn();
        const handler = () => true;
        const datePicker = new DatePicker({
            openPopup,
            closePopup: handler,
            isDisabled: true,
            id: 'date1',
            label: 'date picker',
            onChange: handler
        });
        datePicker.onClickHandler('date1')();
        expect(mockSetState).toHaveBeenCalledTimes(0);
        expect(openPopup).toHaveBeenCalledTimes(0);
    });

    it('should update highlighted date on up arrow', function() {
        const handler = () => true;
        const value = new Date(2017, 0, 1);
        const wrapper = shallow(
            <DatePicker
                closePopup={handler}
                id="date1"
                label="date picker"
                onChange={handler}
                openPopup={handler}
                value={value}
            />
        );
        // must open popup
        const instance = wrapper.instance();
        instance.state.isPopupOpen = true;

        const mockSetState = jest.fn();
        DatePicker.prototype.setState = mockSetState;
        instance.onKeyDownHandler(38);

        const highlightedDate = new Date(2016, 11, 25);
        expect(mockSetState).toHaveBeenCalledWith({
            highlightedDate,
            month: 11,
            year: 2016
        });
    });

    it('should update highlighted date on down arrow', function() {
        const handler = () => true;
        const value = new Date(2017, 0, 1);
        const wrapper = shallow(
            <DatePicker
                closePopup={handler}
                id="date1"
                label="date picker"
                onChange={handler}
                openPopup={handler}
                value={value}
            />
        );
        // must open popup
        const instance = wrapper.instance();
        instance.state.isPopupOpen = true;

        const mockSetState = jest.fn();
        DatePicker.prototype.setState = mockSetState;
        instance.onKeyDownHandler(40);

        const highlightedDate = new Date(2017, 0, 8);
        expect(mockSetState).toHaveBeenCalledWith({
            highlightedDate,
            month: 0,
            year: 2017
        });
    });

    it('should update highlighted date on left arrow', function() {
        const handler = () => true;
        const value = new Date(2017, 0, 1);
        const wrapper = shallow(
            <DatePicker
                closePopup={handler}
                id="date1"
                label="date picker"
                onChange={handler}
                openPopup={handler}
                value={value}
            />
        );
        // must open popup
        const instance = wrapper.instance();
        instance.state.isPopupOpen = true;

        const mockSetState = jest.fn();
        DatePicker.prototype.setState = mockSetState;
        instance.onKeyDownHandler(37);

        const highlightedDate = new Date(2016, 11, 31);
        expect(mockSetState).toHaveBeenCalledWith({
            highlightedDate,
            month: 11,
            year: 2016
        });
    });

    it('should update highlighted date on right arrow', function() {
        const handler = () => true;
        const value = new Date(2017, 0, 1);
        const wrapper = shallow(
            <DatePicker
                closePopup={handler}
                id="date1"
                label="date picker"
                onChange={handler}
                openPopup={handler}
                value={value}
            />
        );
        // must open popup
        const instance = wrapper.instance();
        instance.state.isPopupOpen = true;

        const mockSetState = jest.fn();
        DatePicker.prototype.setState = mockSetState;
        instance.onKeyDownHandler(39);

        const highlightedDate = new Date(2017, 0, 2);
        expect(mockSetState).toHaveBeenCalledWith({
            highlightedDate,
            month: 0,
            year: 2017
        });
    });

    it('should update selected date on enter key', function() {
        const blur = jest.fn();
        const closePopup = jest.fn();
        const onChange = jest.fn();
        const handler = () => true;
        const value = new Date(2017, 0, 1);
        const wrapper = shallow(
            <DatePicker
                closePopup={closePopup}
                id="date1"
                label="date picker"
                onChange={onChange}
                openPopup={handler}
                value={value}
            />
        );
        // must open popup
        const highlightedDate = new Date(2018, 4, 5);
        const instance = wrapper.instance();
        instance.state.isPopupOpen = true;
        instance.state.highlightedDate = highlightedDate;

        instance.inputElem = { blur };

        const mockSetState = jest.fn();
        DatePicker.prototype.setState = mockSetState;
        instance.onKeyDownHandler(13);

        expect(mockSetState).toHaveBeenCalledWith({
            highlightedDate,
            formattedDate: '05/05/2018',
            isPopupOpen: false,
            month: 4,
            selectedDate: highlightedDate,
            year: 2018
        });
        expect(blur).toHaveBeenCalledTimes(1);
        expect(closePopup).toHaveBeenCalledTimes(1);
        expect(closePopup).toHaveBeenCalledWith('date1');
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(highlightedDate);
    });

    it('should close popup on escape key', function() {
        const blur = jest.fn();
        const closePopup = jest.fn();
        const onChange = jest.fn();
        const openPopup = () => true;
        const value = new Date(2017, 0, 1);
        const datePicker = new DatePicker({
            closePopup,
            onChange,
            openPopup,
            value,
            id: 'date1',
            label: 'date picker'
        });

        // must open popup
        const highlightedDate = new Date(2018, 4, 5);
        datePicker.state.isPopupOpen = true;
        datePicker.state.highlightedDate = highlightedDate;
        datePicker.inputElem = { blur };

        const mockSetState = jest.fn();
        DatePicker.prototype.setState = mockSetState;
        datePicker.onKeyDownHandler(27);

        expect(mockSetState).toHaveBeenCalledWith({
            formattedDate: '01/01/2017',
            highlightedDate: value,
            isPopupOpen: false,
            month: 0,
            year: 2017
        });
        expect(blur).toHaveBeenCalledTimes(1);
        expect(closePopup).toHaveBeenCalledTimes(1);
        expect(closePopup).toHaveBeenCalledWith('date1');
        expect(onChange).toHaveBeenCalledTimes(0);
    });

    it('should do nothing for other keys', function() {
        const blur = jest.fn();
        const closePopup = jest.fn();
        const onChange = jest.fn();
        const openPopup = () => true;
        const value = new Date(2017, 0, 1);
        const datePicker = new DatePicker({
            closePopup,
            onChange,
            openPopup,
            value,
            id: 'date1',
            label: 'date picker'
        });
        // must open popup
        const highlightedDate = new Date(2018, 4, 5);
        datePicker.state.isPopupOpen = true;
        datePicker.state.highlightedDate = highlightedDate;
        datePicker.inputElem = { blur };

        const mockSetState = jest.fn();
        DatePicker.prototype.setState = mockSetState;
        datePicker.onKeyDownHandler(34);

        expect(mockSetState).toHaveBeenCalledTimes(0);
        expect(blur).toHaveBeenCalledTimes(0);
        expect(closePopup).toHaveBeenCalledTimes(0);
        expect(onChange).toHaveBeenCalledTimes(0);
    });

    it('should do nothing on keydown events if popup is closed', function() {
        const blur = jest.fn();
        const closePopup = jest.fn();
        const onChange = jest.fn();
        const handler = () => true;
        const value = new Date(2017, 0, 1);
        const wrapper = shallow(
            <DatePicker
                closePopup={closePopup}
                id="date1"
                label="date picker"
                onChange={onChange}
                openPopup={handler}
                value={value}
            />
        );
        // must open popup
        const instance = wrapper.instance();
        instance.state.isPopupOpen = false;

        const mockSetState = jest.fn();
        DatePicker.prototype.setState = mockSetState;
        instance.onKeyDownHandler(40);

        expect(mockSetState).toHaveBeenCalledTimes(0);
        expect(blur).toHaveBeenCalledTimes(0);
        expect(closePopup).toHaveBeenCalledTimes(0);
        expect(onChange).toHaveBeenCalledTimes(0);
    });

    it('should call onChangeMonthAndYearHandler', function() {
        const handler = () => true;
        const value = new Date(2017, 0, 1);
        const datePicker = new DatePicker({
            value,
            closePopup: handler,
            id: 'date1',
            label: 'date picker',
            onChange: handler,
            openPopup: handler
        });

        const focus = jest.fn();
        datePicker.inputElem = { focus };

        const mockSetState = jest.fn();
        DatePicker.prototype.setState = mockSetState;

        datePicker.onChangeMonthAndYearHandler(10, 2018);
        expect(mockSetState).toHaveBeenCalledTimes(1);
        expect(mockSetState).toHaveBeenCalledWith({ month: 10, year: 2018 });
        expect(focus).toHaveBeenCalledTimes(1);
    });

    it('should close popup with no selected date', function() {
        const handler = () => true;
        const datePicker = new DatePicker({
            closePopup: handler,
            id: 'date1',
            label: 'date picker',
            onChange: handler,
            openPopup: handler
        });
        datePicker.state.highlightedDate = new Date(2017, 0, 1);

        const mockSetState = jest.fn();
        DatePicker.prototype.setState = mockSetState;

        const today = new Date();
        datePicker.onClosePopupHandler();
        expect(mockSetState).toHaveBeenCalledTimes(1);
        expect(mockSetState).toHaveBeenCalledWith({
            formattedDate: '',
            highlightedDate: expect.any(Date),
            isPopupOpen: false,
            month: today.getMonth(),
            year: today.getFullYear()
        });
    });

    it('should close popup with selected date', function() {
        const handler = () => true;
        const datePicker = new DatePicker({
            closePopup: handler,
            id: 'date1',
            label: 'date picker',
            onChange: handler,
            openPopup: handler,
            value: new Date(2017, 11, 31)
        });
        datePicker.state.highlightedDate = new Date(2017, 0, 1);

        const mockSetState = jest.fn();
        DatePicker.prototype.setState = mockSetState;

        datePicker.onClosePopupHandler();
        expect(mockSetState).toHaveBeenCalledTimes(1);
        expect(mockSetState).toHaveBeenCalledWith({
            formattedDate: '12/31/2017',
            highlightedDate: new Date(2017, 11, 31),
            isPopupOpen: false,
            month: 11,
            year: 2017
        });
    });

    it('should update selected date on change input', function(done) {
        const mockSetState = jest.fn();
        DatePicker.prototype.setState = mockSetState;

        const onChange = selectedDate => {
            expect(selectedDate.getMonth()).toBe(2);
            expect(selectedDate.getFullYear()).toBe(2018);
            expect(selectedDate.getDate()).toBe(2);

            expect(mockSetState).toHaveBeenCalledTimes(1);
            expect(mockSetState).toHaveBeenCalledWith({
                selectedDate,
                formattedDate: '03/02/2018',
                highlightedDate: selectedDate,
                month: 2,
                year: 2018
            });
            done();
        };

        const handler = () => true;
        const value = new Date(2017, 0, 1);
        const wrapper = mount(
            <Provider store={mockStore()}>
                <DatePicker
                    closePopup={handler}
                    id="date1"
                    label="date picker"
                    onChange={onChange}
                    openPopup={handler}
                    value={value}
                />
            </Provider>
        );
        const event = {
            target: {
                value: '03/02/2018'
            }
        };
        wrapper.find('.cn-field__input').simulate('change', event);
    });

    it('should update selected date on change input with empty value', function(done) {
        const mockSetState = jest.fn();
        DatePicker.prototype.setState = mockSetState;

        const onChange = selectedDate => {
            const today = new Date();
            expect(selectedDate).toBe(null);
            expect(mockSetState).toHaveBeenCalledTimes(1);
            expect(mockSetState).toHaveBeenCalledWith({
                selectedDate,
                formattedDate: '',
                highlightedDate: expect.any(Date),
                month: today.getMonth(),
                year: today.getFullYear()
            });
            done();
        };

        const handler = () => true;
        const value = new Date(2017, 0, 1);
        const wrapper = mount(
            <Provider store={mockStore()}>
                <DatePicker
                    closePopup={handler}
                    id="date1"
                    label="date picker"
                    onChange={onChange}
                    openPopup={handler}
                    value={value}
                />
            </Provider>
        );
        const event = {
            target: {
                value: ''
            }
        };
        wrapper.find('.cn-field__input').simulate('change', event);
    });

    it('should update selected date on change input with invalid value', function() {
        const mockSetState = jest.fn();
        DatePicker.prototype.setState = mockSetState;

        const onChange = jest.fn();
        const handler = () => true;
        const value = new Date(2017, 0, 1);
        const wrapper = mount(
            <Provider store={mockStore()}>
                <DatePicker
                    closePopup={handler}
                    id="date1"
                    label="date picker"
                    onChange={onChange}
                    openPopup={handler}
                    value={value}
                />
            </Provider>
        );
        const event = {
            target: {
                value: 'Invalid value'
            }
        };
        wrapper.find('.cn-field__input').simulate('change', event);
        expect(mockSetState).toHaveBeenCalledTimes(1);
        expect(mockSetState).toHaveBeenCalledWith({ formattedDate: 'Invalid value' });
        expect(onChange).toHaveBeenCalledTimes(0);
    });

    it('should stop event propagation on mouseup', function() {
        const handler = () => true;
        const wrapper = mount(
            <Provider store={mockStore()}>
                <DatePicker
                    closePopup={handler}
                    id="date1"
                    label="date picker"
                    onChange={handler}
                    openPopup={handler}
                />
            </Provider>
        );
        const stopPropagation = jest.fn();
        const event = { stopPropagation };
        wrapper.find('.cn-date-picker').simulate('mouseup', event);
        expect(stopPropagation).toHaveBeenCalledTimes(1);
    });
});
