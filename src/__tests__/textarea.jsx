import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Textarea } from 'platform-common-ui/textarea';

describe('textarea', function() {
    const onChangeHandler = () => true;

    it('should render the textarea', function() {
        const tree = renderer.create(
            <Textarea label="textarea" onChange={onChangeHandler} />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the textarea with className', function() {
        const tree = renderer.create(
            <Textarea label="textarea" className="my-class-name" onChange={onChangeHandler} />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the textarea with value', function() {
        const tree = renderer.create(
            <Textarea label="textarea" value="myValue" onChange={onChangeHandler} />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the textarea with error', function() {
        const tree = renderer.create(
            <Textarea label="textarea" hasError onChange={onChangeHandler} />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render with disabled', function() {
        const tree = renderer.create(
            <Textarea label="textarea" isDisabled onChange={onChangeHandler} />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render with textarea required', function() {
        const tree = renderer.create(
            <Textarea label="textarea" isRequired onChange={onChangeHandler} />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render with no label', function() {
        const tree = renderer.create(
            <Textarea label="textarea" hideLabel onChange={onChangeHandler} />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render with placeholder', function() {
        const tree = renderer.create(
            <Textarea label="textarea" placeholder="abc" onChange={onChangeHandler} />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render rows', function() {
        const tree = renderer.create(
            <Textarea label="textarea" onChange={onChangeHandler} rows={2} />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render cols', function() {
        const tree = renderer.create(
            <Textarea label="textarea" onChange={onChangeHandler} cols={3} />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should trigger onChange handler', function(done) {
        const onChange = value => {
            expect(value).toBe('newValue');
            done();
        };

        const event = {
            target: { value: 'newValue' }
        };
        const wrapper = shallow(<Textarea label="test" onChange={onChange} />);
        wrapper.find('textarea').simulate('change', event);
    });
});
