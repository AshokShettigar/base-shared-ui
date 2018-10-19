import { shallow } from 'enzyme';

import DaysOfWeek from '../component';

describe('DaysOfWeek: ', () => {
    describe('component', () => {
        const requiredProps = {
            onChange: jest.fn()
        };

        it('should render component with default props', () => {
            const wrapper = shallow(<DaysOfWeek {...requiredProps} />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('should render component with id prop', () => {
            const wrapper = shallow(<DaysOfWeek {...requiredProps} id="id" />);

            expect(wrapper).toMatchSnapshot();
        });

        it('should render component with label prop', () => {
            const wrapper = shallow(<DaysOfWeek {...requiredProps} label="label" />);

            expect(wrapper).toMatchSnapshot();
        });

        it('should render component with name prop', () => {
            const wrapper = shallow(<DaysOfWeek {...requiredProps} name="name" />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('should render component with selected days', () => {
            const wrapper = shallow(<DaysOfWeek {...requiredProps} value={[1, 2, 3]} />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('should render component with full names of days', () => {
            const wrapper = shallow(<DaysOfWeek {...requiredProps} format="long" />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('should render component with required prop', () => {
            const wrapper = shallow(<DaysOfWeek {...requiredProps} isRequired />);

            expect(wrapper).toMatchSnapshot();
        });

        it('should render component with isDisabled prop', () => {
            const wrapper = shallow(<DaysOfWeek {...requiredProps} isDisabled />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('should render component with class names props', () => {
            const wrapper = shallow(<DaysOfWeek
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
            const selectedDayOfWeek = 4;
            const onChange = jest.fn();
            const selectedDaysOfWeek = [...props.value, selectedDayOfWeek];

            const wrapper = shallow(<DaysOfWeek {...props} onChange={onChange} />).dive();

            wrapper.instance().handleChange(selectedDayOfWeek);

            expect(onChange).toBeCalledWith(props.name, selectedDaysOfWeek);
        });

        it('trigger handleChange on unselected cell', () => {
            const props = {
                name: 'name',
                value: [1, 2, 3, 4]
            };
            const selectedDayOfWeek = 4;
            const onChange = jest.fn();
            const selectedDaysOfWeek = props.value.filter(day => day !== selectedDayOfWeek);

            const wrapper = shallow(<DaysOfWeek {...props} onChange={onChange} />).dive();

            wrapper.instance().handleChange(selectedDayOfWeek);

            expect(onChange).toBeCalledWith(props.name, selectedDaysOfWeek);
        });
    });
});
