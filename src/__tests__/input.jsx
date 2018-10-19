import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Input } from 'platform-common-ui/input';

describe('input', function() {
    // eslint-disable-next-line no-console
    const origConsoleError = console.error;

    const onChange = () => true;
    const onblur = () => true;

    afterEach(function() {
        // eslint-disable-next-line no-console
        console.error = origConsoleError;
    });

    it('should render the input', function() {
        const tree = renderer.create(
            <Input label="text" id="inputId" onChange={onChange} />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should require label property', function() {
        // eslint-disable-next-line no-console
        console.error = jest.fn();
        renderer.create(<Input id="inputId" onChange={onChange} />);
        // eslint-disable-next-line no-console
        expect(console.error).toHaveBeenCalled();
    });

    it('should render the input with className', function() {
        const tree = renderer.create(
            <Input label="text" id="inputId" className="my-class-name" onChange={onChange} />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the input with value', function() {
        const tree = renderer.create(
            <Input label="text" id="inputId" onChange={onChange} value="myValue" />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the input with error', function() {
        const tree = renderer.create(
            <Input label="text" id="inputId" hasError onChange={onChange} />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render with disabled', function() {
        const tree = renderer.create(
            <Input label="text" id="inputId" isDisabled onChange={onChange} />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render with input required', function() {
        const tree = renderer.create(
            <Input label="text" id="inputId" isRequired onChange={onChange} />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render with no label', function() {
        const tree = renderer.create(
            <Input label="text" id="inputId" hideLabel onChange={onChange} />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render with input focused', function() {
        const mockFocusFn = jest.fn();
        const mockSelectFn = jest.fn();
        const createNodeMock2 = () => ({
            focus: mockFocusFn,
            select: mockSelectFn
        });
        renderer.create(
            <Input label="text" id="inputId" isFocusOnMount onChange={onChange} />,
            { createNodeMock: createNodeMock2 }
        );
        expect(mockFocusFn).toHaveBeenCalled();
        expect(mockSelectFn).toHaveBeenCalled();
    });

    it('should render with input not focused', function() {
        const mockFocusFn = jest.fn();
        const mockSelectFn = jest.fn();
        const createNodeMock2 = () => ({
            focus: mockFocusFn,
            select: mockSelectFn
        });
        renderer.create(
            <Input label="text" id="inputId" isFocusOnMount={false} onChange={onChange} />,
            { createNodeMock: createNodeMock2 }
        );
        expect(mockFocusFn).not.toHaveBeenCalled();
        expect(mockSelectFn).not.toHaveBeenCalled();
    });

    it('should trigger onChange handler', function(done) {
        const onChangeHandler = value => {
            expect(value).toBe('newValue');
            done();
        };

        const event = {
            target: { value: 'newValue' }
        };
        const wrapper = shallow(<Input label="test" id="inputId" onChange={onChangeHandler} />);
        wrapper.find('input').simulate('change', event);
    });

    it('should trigger onKeyDown handler with callback', function(done) {
        const onKeyDownHandler = key => {
            expect(key).toBe(13);
            done();
        };
        const event = {
            keyCode: 13
        };
        const wrapper = shallow(<Input label="test" id="inputId" onChange={onChange} onKeyDown={onKeyDownHandler} />);
        wrapper.find('input').simulate('keydown', event);
    });

    it('should trigger onKeyDown handler with no callback', function() {
        const event = {
            keyCode: 13
        };
        const wrapper = shallow(<Input label="test" id="inputId" onChange={onChange} />);
        expect(() => {
            wrapper.find('input').simulate('keydown', event);
        }).not.toThrow();
    });

    it('should trigger onBlur with valid callback', function(done) {
        const onBlurHandler = event => {
            expect(event.target.value).toBe('newValue');
            done();
        };

        const event = {
            target: { value: 'newValue' }
        };
        const wrapper = shallow(<Input label="test" id="inputId" onChange={onChange} onBlur={onBlurHandler} />);
        wrapper.find('input').simulate('blur', event);
    });

    it('should trigger onBlur handler with no callback', function() {
        const event = {
            target: { value: 'newValue' }
        };
        const wrapper = shallow(<Input label="test" id="inputId" onBlur={onblur} />);
        expect(() => {
            wrapper.find('input').simulate('blur', event);
        }).not.toThrow();
    });

    it('should call blur', function() {
        const input = new Input({
            id: 'input1',
            label: 'input 1',
            onChange: () => true
        });

        const blur = jest.fn();
        input.textInput = { blur };

        input.blur();
        expect(blur).toHaveBeenCalledTimes(1);
    });
});
