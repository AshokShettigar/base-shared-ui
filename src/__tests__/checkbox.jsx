import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { CheckBox } from 'platform-common-ui/checkbox';

describe('checkbox', function() {
    const onChange = () => true;

    it('should render the checkbox', function() {
        const tree = renderer.create(
            <CheckBox id="ck1" onChange={onChange} value="ck1_value">Check me!</CheckBox>
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the checkbox with classname', function() {
        const tree = renderer.create(
            <CheckBox
                className="my-class"
                id="ck1"
                onChange={onChange}
                value="ck1_value"
            >
                Check me!
            </CheckBox>
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the checkbox with disabled', function() {
        const tree = renderer.create(
            <CheckBox id="ck1" isDisabled onChange={onChange} value="ck1_value">Check me!</CheckBox>
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the checkbox with no label', function() {
        const tree = renderer.create(
            <CheckBox id="ck1" hideLabel onChange={onChange} value="ck1_value">Check me!</CheckBox>
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the checkbox with checked', function() {
        const tree = renderer.create(
            <CheckBox id="ck1" isChecked onChange={onChange} value="ck1_value">Check me!</CheckBox>
        );
        expect(tree).toMatchSnapshot();
    });

    it('should trigger onChange handler', function(done) {
        const onChangeHandler = value => {
            expect(value).toBe('ck1_value');
            done();
        };

        const event = {
            target: { value: 'ck1_value' }
        };
        const wrapper = shallow(
            <CheckBox id="ck1" onChange={onChangeHandler} value="ck1_value">Check me!</CheckBox>
        );
        wrapper.find('input').simulate('change', event);
    });

    it('should throw console error when there is no children', function() {
        // eslint-disable-next-line no-console
        console.error = jest.fn();
        renderer.create(<CheckBox id="ck1" onChange={onChange} value="ck1_value" />);
        // eslint-disable-next-line no-console
        expect(console.error).toHaveBeenCalled();
    });
});
