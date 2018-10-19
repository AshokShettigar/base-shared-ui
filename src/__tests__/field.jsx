import renderer from 'react-test-renderer';
import { Field, getFieldClassName, getFieldLabelClassName } from 'platform-common-ui/field';

describe('field', function() {
    // eslint-disable-next-line no-console
    const origConsoleError = console.error;

    afterEach(function() {
        // eslint-disable-next-line no-console
        console.error = origConsoleError;
    });

    it('should render the field', function() {
        const tree = renderer.create(
            <Field>Input</Field>
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the field with label', function() {
        const tree = renderer.create(
            <Field label="field label">Input</Field>
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the field with custom classname', function() {
        const tree = renderer.create(
            <Field className="my-class">Input</Field>
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the field with hasError', function() {
        const tree = renderer.create(
            <Field hasError>Input</Field>
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the field with disabled', function() {
        const tree = renderer.create(
            <Field isDisabled>Input</Field>
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the field with required', function() {
        const tree = renderer.create(
            <Field isRequired>Input</Field>
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the field with label and hideLabel option', function() {
        const tree = renderer.create(
            <Field hideLabel label="field label">Input</Field>
        );
        expect(tree).toMatchSnapshot();
    });

    it('should getFieldClassName', function() {
        expect(getFieldClassName()).toBe('cn-field');
        expect(getFieldClassName('my-class')).toContain('my-class');
        expect(getFieldClassName(null, true)).toContain('cn-field--invalid');
        expect(getFieldClassName(null, false, true)).toContain('cn-field--disabled');
        expect(getFieldClassName(null, false, false, true)).toContain('cn-field--required');
    });

    it('should getFieldLabelClassName', function() {
        expect(getFieldLabelClassName()).toBe('cn-field__label');
        expect(getFieldLabelClassName('my-class')).toContain('my-class');
        expect(getFieldLabelClassName(null, true)).toContain('a11y');
    });
});
