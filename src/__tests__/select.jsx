import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Select } from 'platform-common-ui/select';

describe('select', function() {
    const onChange = () => true;
    const options = [
        { label: 'A', value: 'a' },
        { label: 'B', value: 'b' },
        { label: 'C', value: 'c' },
        { label: 'D', value: 'd' },
        { label: 'E', value: 'e' }
    ];

    it('should render the select', function() {
        const tree = renderer.create(
            <Select
                className="my-class"
                label="Select me"
                onChange={onChange}
                options={options}
                value="A"
            />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the select with disabled option', function() {
        const tree = renderer.create(
            <Select
                isDisabled
                label="Select me"
                onChange={onChange}
                options={options}
                value="A"
            />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the select with the first property disabled', function() {
        const tree = renderer.create(
            <Select
                label="Select me"
                onChange={onChange}
                options={[
                    { label: 'A', value: 'a', isDisabled: true },
                    { label: 'B', value: 'b' }
                ]}
                value="A"
            />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the select with empty option', function() {
        const tree = renderer.create(
            <Select
                label="Select me"
                onChange={onChange}
                options={options}
                showEmptyOption
                value="A"
            />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the select with empty option and label', function() {
        const tree = renderer.create(
            <Select
                emptyOptionLabel="Choose..."
                label="Select me"
                onChange={onChange}
                options={options}
                showEmptyOption
                value="A"
            />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the select with empty option and label with required', function() {
        const tree = renderer.create(
            <Select
                emptyOptionLabel="Choose..."
                isRequired
                label="Select me"
                onChange={onChange}
                options={options}
                showEmptyOption
                value="A"
            />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should trigger onChange handler', function(done) {
        const onChangeHandler = value => {
            expect(value).toBe('newValue');
            done();
        };

        const event = {
            target: { value: 'newValue' }
        };
        const wrapper = shallow(
            <Select
                className="my-class"
                label="Select me"
                onChange={onChangeHandler}
                options={options}
                value="A"
            />
        );
        wrapper.find('select').simulate('change', event);
    });
});
