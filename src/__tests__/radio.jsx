import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Radio } from 'platform-common-ui/radio';

describe('radio', function() {
    const onChange = () => true;

    it('should render the radio', function() {
        const tree = renderer.create(
            <Radio id="rd1" onChange={onChange} value="rd1_value">Check me!</Radio>
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the radio with classname', function() {
        const tree = renderer.create(
            <Radio
                className="my-class"
                id="rd1"
                onChange={onChange}
                value="rd1_value"
            >
                Check me!
            </Radio>
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the radio with disabled', function() {
        const tree = renderer.create(
            <Radio id="rd1" isDisabled onChange={onChange} value="rd1_value">Check me!</Radio>
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the checkbox with no label', function() {
        const tree = renderer.create(
            <Radio id="rd1" hideLabel onChange={onChange} value="rd1_value">Check me!</Radio>
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the radio with checked', function() {
        const tree = renderer.create(
            <Radio id="rd1" isChecked onChange={onChange} value="rd1_value">Check me!</Radio>
        );
        expect(tree).toMatchSnapshot();
    });

    it('should trigger onChange handler', function(done) {
        const onChangeHandler = value => {
            expect(value).toBe('rd1_value');
            done();
        };

        const event = {
            target: { value: 'rd1_value' }
        };
        const wrapper = mount(
            <Radio id="rd1" onChange={onChangeHandler} value="rd1_value">Check me!</Radio>
        );
        wrapper.find('input').simulate('change', event);
    });

    it('should throw console error when there is no children', function() {
        // eslint-disable-next-line no-console
        console.error = jest.fn();
        renderer.create(<Radio id="rd1" onChange={onChange} value="rd1_value" />);
        // eslint-disable-next-line no-console
        expect(console.error).toHaveBeenCalled();
    });
});
