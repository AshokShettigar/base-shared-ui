import { shallow } from 'enzyme';

import { KEY_CODES } from '../../../../helpers';
import { IPv4RangeField } from '../component';

const defaultProps = {
    label: 'label',
    value: {
        start: null,
        end: null
    },
    onChange: jest.fn(),
    onBlur: jest.fn()
};

describe('IPv4RangeField Component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<IPv4RangeField {...defaultProps} />);
    });

    it('should render component with default props', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should return true', () => {
        const actual = wrapper.instance().isTabKeyPressed(KEY_CODES.ARROW_RIGHT);

        expect(actual).toBeTruthy();
    });

    it('should return false', () => {
        const actual = wrapper.instance().isBackKeyPressed(1);

        expect(actual).toBeFalsy();
    });

    describe('hasThreeDots', () => {
        it('should return true', () => {
            const actual = wrapper.instance().hasThreeDots('123.123.123.123');

            expect(actual).toBeTruthy();
        });

        it('should return false', () => {
            const actual = wrapper.instance().hasThreeDots('123.123.');

            expect(actual).toBeFalsy();
        });
    });

    it('should allow focusing to the second field', () => {
        const target = {
            value: '123.123.123.123',
            selectionStart: 15
        };
        const e = {
            keyCode: KEY_CODES.ARROW_RIGHT,
            target
        };
        wrapper.instance().startIPFieldRef = target;
        const actual = wrapper.instance().isAllowedFocusEndField(e, false);

        expect(actual).toBeTruthy();
    });

    it('should allow focusing to the first field', () => {
        const target = {
            value: '',
            selectionStart: 0,
            selectionEnd: 0
        };
        const e = {
            keyCode: KEY_CODES.ARROW_LEFT,
            target
        };
        wrapper.instance().endIPFieldRef = target;
        const actual = wrapper.instance().isAllowedFocusStartField(e);

        expect(actual).toBeTruthy();
    });

    it('should allow set value to the second field', () => {
        const e = {
            keyCode: 48
        };
        wrapper.instance().endIPFieldRef = {
            value: ''
        };
        const actual = wrapper.instance().isAllowedSetEndFieldValue(e);

        expect(actual).toBeTruthy();
    });

    describe('handleKeyDown()', () => {
        it('should trigger the isAllowedFocusEndField method', () => {
            const e = {
                keyCode: KEY_CODES.ARROW_RIGHT,
                key: 1,
                target: {
                    value: 'value',
                    selectionStart: 0
                },
                preventDefault: jest.fn()
            };
            wrapper.instance().endIPFieldRef = {
                focus: jest.fn()
            };
            wrapper.instance().isAllowedFocusEndField = jest.fn(() => true);
            wrapper.instance().isAllowedSetEndFieldValue = jest.fn(() => true);
            wrapper.instance().handleKeyDown(e, true);

            expect(wrapper.instance().isAllowedFocusEndField).toHaveBeenCalled();
            expect(wrapper.instance().endIPFieldRef.focus).toHaveBeenCalled();
            expect(wrapper.instance().isAllowedSetEndFieldValue).toHaveBeenCalled();
            expect(e.preventDefault).toHaveBeenCalled();
        });

        it('should trigger the isAllowedFocusStartField method', () => {
            const e = {
                keyCode: KEY_CODES.ARROW_LEFT,
                target: {
                    value: 'value',
                    selectionStart: 0
                },
                preventDefault: jest.fn()
            };
            wrapper.instance().startIPFieldRef = {
                focus: jest.fn()
            };
            wrapper.instance().isAllowedFocusStartField = jest.fn(() => true);
            wrapper.instance().handleKeyDown(e, true);

            expect(wrapper.instance().isAllowedFocusStartField).toHaveBeenCalled();
            expect(wrapper.instance().startIPFieldRef.focus).toHaveBeenCalled();
            expect(e.preventDefault).toHaveBeenCalled();
        });
    });

    it('should trigger the onChange method', () => {
        const target = {
            value: 'value',
            selectionStart: 0
        };
        const e = {
            target
        };
        wrapper.instance().getFieldsValues = jest.fn();
        wrapper.instance().handleChange(e);

        expect(defaultProps.onChange).toHaveBeenCalled();
    });

    it('should trigger the onBlur method', () => {
        wrapper.instance().getFieldsValues = jest.fn();
        wrapper.instance().handleBlur();

        expect(defaultProps.onBlur).toHaveBeenCalled();
    });

    it('should set the startIPFieldRef ref', () => {
        const ref = 'ref';
        wrapper.instance().setStartIPFieldInnerRef(ref);

        expect(wrapper.instance().startIPFieldRef).toEqual(ref);
    });

    it('should set the endIPFieldRef ref', () => {
        const ref = 'ref';
        wrapper.instance().setEndIPFieldInnerRef(ref);

        expect(wrapper.instance().endIPFieldRef).toEqual(ref);
    });

    it('should get values of fields', () => {
        const value = 'value';
        wrapper.instance().startIPFieldRef = {
            value
        };
        wrapper.instance().endIPFieldRef = {
            value
        };
        const actual = wrapper.instance().getFieldsValues();

        expect(actual).toEqual({ start: value, end: value });
    });
});
