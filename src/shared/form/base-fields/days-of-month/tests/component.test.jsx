import { shallow } from 'enzyme';

import DaysOfMonth from '../component';

describe('DaysOfMonth: ', () => {
    describe('component', () => {
        const requiredProps = {
            onChange: jest.fn()
        };

        it('should render component with default props', () => {
            const wrapper = shallow(<DaysOfMonth {...requiredProps} />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('should render component with id prop', () => {
            const wrapper = shallow(<DaysOfMonth {...requiredProps} id="id" />);

            expect(wrapper).toMatchSnapshot();
        });

        it('should render component with label prop', () => {
            const wrapper = shallow(<DaysOfMonth {...requiredProps} label="label" />);

            expect(wrapper).toMatchSnapshot();
        });

        it('should render component with name prop', () => {
            const wrapper = shallow(<DaysOfMonth {...requiredProps} name="name" />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('should render component with selected days', () => {
            const wrapper = shallow(<DaysOfMonth {...requiredProps} value={[1, 2, 3]} />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('should render component with description prop', () => {
            const wrapper = shallow(<DaysOfMonth {...requiredProps} description="Days of month component" />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('should render component with required prop', () => {
            const wrapper = shallow(<DaysOfMonth {...requiredProps} required />);

            expect(wrapper).toMatchSnapshot();
        });

        it('should render component with isDisabled prop', () => {
            const wrapper = shallow(<DaysOfMonth {...requiredProps} isDisabled />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('should render component with class names props', () => {
            const wrapper = shallow(<DaysOfMonth
                {...requiredProps}
                className="className"
                labelClassName="labelClassName"
                cellClassName="cellClassName"
            />).dive();

            expect(wrapper).toMatchSnapshot();
        });
    });

    describe('method', () => {
        it('trigger handleChange on selected cell', () => {
            const props = {
                name: 'name',
                value: [1, 2, 3]
            };
            const selectedDayOfMonth = 4;
            const onChange = jest.fn();
            const selectedDaysOfMonth = [...props.value, selectedDayOfMonth];

            const wrapper = shallow(<DaysOfMonth {...props} onChange={onChange} />).dive();

            wrapper.instance().handleChange(selectedDayOfMonth);

            expect(onChange).toBeCalledWith(props.name, selectedDaysOfMonth);
        });

        it('trigger handleChange on unselected cell', () => {
            const props = {
                name: 'name',
                value: [1, 2, 3, 4]
            };
            const selectedDayOfMonth = 4;
            const onChange = jest.fn();
            const selectedDaysOfMonth = props.value.filter(day => day !== selectedDayOfMonth);

            const wrapper = shallow(<DaysOfMonth {...props} onChange={onChange} />).dive();

            wrapper.instance().handleChange(selectedDayOfMonth);

            expect(onChange).toBeCalledWith(props.name, selectedDaysOfMonth);
        });
    });
});
