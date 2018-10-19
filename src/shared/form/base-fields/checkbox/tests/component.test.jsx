import { shallow } from 'enzyme';

import Checkbox from '../component';

describe('Checkbox component', () => {
    describe('should render component with', () => {
        it('default props', () => {
            const wrapper = shallow(<Checkbox />);

            expect(wrapper).toMatchSnapshot();
        });

        it('id prop', () => {
            const wrapper = shallow(<Checkbox id="id" />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('name prop', () => {
            const wrapper = shallow(<Checkbox name="name" />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('value prop', () => {
            const wrapper = shallow(<Checkbox value="value" />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('children prop', () => {
            const wrapper = shallow(<Checkbox>Children</Checkbox>).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('error prop', () => {
            const wrapper = shallow(<Checkbox error="error" />).dive();

            expect(wrapper).toMatchSnapshot();
        });


        it('autoFocus prop', () => {
            const wrapper = shallow(<Checkbox autoFocus />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('readOnly prop', () => {
            const wrapper = shallow(<Checkbox readOnly />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('checked prop', () => {
            const wrapper = shallow(<Checkbox checked />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('disabled and checked props', () => {
            const wrapper = shallow(<Checkbox checked disabled />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('disabled prop', () => {
            const wrapper = shallow(<Checkbox disabled />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('multiple prop', () => {
            const wrapper = shallow(<Checkbox multiple />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('multiple and disabled props', () => {
            const wrapper = shallow(<Checkbox disabled multiple />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('multiple and checked props', () => {
            const wrapper = shallow(<Checkbox checked multiple />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('multiple and indeterminate props', () => {
            const wrapper = shallow(<Checkbox indeterminate multiple />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('indeterminate and disabled prop', () => {
            const wrapper = shallow(<Checkbox indeterminate disabled />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('indeterminate prop', () => {
            const wrapper = shallow(<Checkbox indeterminate />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('class names', () => {
            const wrapper = shallow(<Checkbox className="className" labelClassName="labelClassName" />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('refField prop', () => {
            const wrapper = shallow(<Checkbox refField={() => {}} />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('onChange prop', () => {
            const wrapper = shallow(<Checkbox onChange={() => {}} />).dive();

            expect(wrapper).toMatchSnapshot();
        });

        it('hidden component', () => {
            const wrapper = shallow(<Checkbox hidden />).shallow();

            expect(wrapper).toMatchSnapshot();
        });
    });

    it('shouldn\'t render component', () => {
        const wrapper = shallow(<Checkbox rendered={false} />);

        expect(wrapper).toMatchSnapshot();
    });

    describe('setRef', () => {
        it('should called innerRef', () => {
            const innerRef = jest.fn();
            const wrapper = shallow(<Checkbox innerRef={innerRef} />).shallow();

            wrapper.instance().setRef('DOMNode');

            expect(wrapper.instance().checkboxRef).toEqual('DOMNode');
            expect(innerRef).toHaveBeenCalled();
        });

        it('shouldn\'t called innerRef', () => {
            const innerRef = jest.fn();
            const wrapper = shallow(<Checkbox />).shallow();

            wrapper.instance().setRef();

            expect(wrapper.instance().checkboxRef).toBeUndefined();
            expect(innerRef).not.toHaveBeenCalled();
        });
    });

    describe('onChange', () => {
        it('should called', () => {
            const onChange = jest.fn();
            const wrapper = shallow(<Checkbox name="name" value="value" onChange={onChange} />).shallow();

            wrapper.instance().checkboxRef = 'DOMNode';
            wrapper.instance().onChange();

            expect(onChange).toHaveBeenCalled();
        });

        it('should\'t called', () => {
            const onChange = jest.fn();
            const wrapper = shallow(<Checkbox />).shallow();

            wrapper.instance().checkboxRef = 'DOMNode';
            wrapper.instance().onChange();

            expect(onChange).not.toHaveBeenCalled();
        });
    });
});
