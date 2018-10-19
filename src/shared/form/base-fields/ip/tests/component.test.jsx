import { mount, shallow } from 'enzyme';

import IPv4Field from '../component';

const defaultProps = {
    onChange: jest.fn()
};

const value = '198.100.230.30';

describe('IPv4Field Component', () => {
    it('should render component with default props', () => {
        const wrapper = shallow(<IPv4Field {...defaultProps} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with custom props', () => {
        const customProps = {
            label: 'Label',
            name: 'name',
            value: '198.0.0.1',
            children: '-',
            error: 'with error',

            autoFocus: true,
            disabled: true,
            readOnly: true,
            required: true,
            hidden: true,
            hideErrorMessages: false,

            className: 'className',
            labelClassName: 'labelClassName',
            fieldWrapperClassName: 'fieldWrapperClassName',
            fieldClassName: 'fieldClassName',
            contentClassName: 'contentClassName',

            onBlur: jest.fn(),
            ...defaultProps
        };
        const wrapper = shallow(<IPv4Field {...customProps} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should set up DOM element', () => {
        const wrapper = mount(<IPv4Field {...defaultProps} />);

        expect(wrapper.instance().fieldRef).toBeTruthy();
    });

    it('should return caret position', () => {
        const wrapper = shallow(<IPv4Field {...defaultProps} />);
        const target = document.createElement('input');

        target.value = value;
        target.setSelectionRange(3, 5);

        const caretPosition = wrapper.instance().getCaretPosition({ target });

        expect(caretPosition).toEqual({
            selectionStart: 3,
            selectionEnd: 5,
            selectionLength: 2
        });
    });

    it('should return dots count', () => {
        const wrapper = shallow(<IPv4Field {...defaultProps} />);
        const getDotsCount = wrapper.instance().getDotsCount;

        expect(getDotsCount('198.1.1')).toEqual(2);
        expect(getDotsCount('198.1.1.5')).toEqual(3);
    });

    it('should return replaced selection text', () => {
        const wrapper = shallow(<IPv4Field {...defaultProps} />);
        const target = document.createElement('input');
        const getReplacedSelectionText = wrapper.instance().getReplacedSelectionText;

        target.value = value;
        wrapper.instance().getCaretPosition = jest.fn().mockReturnValue({
            selectionStart: 4,
            selectionEnd: 7,
            selectionLength: 1
        });

        expect(getReplacedSelectionText({ target }, '200')).toEqual('198.200.230.30');
    });

    it('should return is selection pressed', () => {
        const wrapper = shallow(<IPv4Field {...defaultProps} />);
        const isSelectionPressed = wrapper.instance().isSelectionPressed;

        expect(isSelectionPressed({ keyCode: 65, metaKey: true })).toBeTruthy();
        expect(isSelectionPressed({ keyCode: 65, ctrlKey: true })).toBeTruthy();
        expect(isSelectionPressed({ keyCode: 65, ctrlKey: true, metaKey: true })).toBeTruthy();

        expect(isSelectionPressed({ keyCode: 65 })).toBeFalsy();
        expect(isSelectionPressed({ keyCode: 75, metaKey: true })).toBeFalsy();
        expect(isSelectionPressed({ keyCode: 75, ctrlKey: true })).toBeFalsy();
        expect(isSelectionPressed({ keyCode: 75, ctrlKey: true, metaKey: true })).toBeFalsy();
    });

    it('should return is copy or paste pressed', () => {
        const wrapper = shallow(<IPv4Field {...defaultProps} />);
        const isCopyOrPastePressed = wrapper.instance().isCopyOrPastePressed;

        expect(isCopyOrPastePressed({ keyCode: 67, metaKey: true })).toBeTruthy();
        expect(isCopyOrPastePressed({ keyCode: 67, ctrlKey: true })).toBeTruthy();
        expect(isCopyOrPastePressed({ keyCode: 67, ctrlKey: true, metaKey: true })).toBeTruthy();

        expect(isCopyOrPastePressed({ keyCode: 86, metaKey: true })).toBeTruthy();
        expect(isCopyOrPastePressed({ keyCode: 86, ctrlKey: true })).toBeTruthy();
        expect(isCopyOrPastePressed({ keyCode: 86, ctrlKey: true, metaKey: true })).toBeTruthy();

        expect(isCopyOrPastePressed({ keyCode: 67 })).toBeFalsy();
        expect(isCopyOrPastePressed({ keyCode: 86 })).toBeFalsy();

        expect(isCopyOrPastePressed({ keyCode: 68, metaKey: true })).toBeFalsy();
        expect(isCopyOrPastePressed({ keyCode: 68, ctrlKey: true })).toBeFalsy();
        expect(isCopyOrPastePressed({ keyCode: 68, ctrlKey: true, metaKey: true })).toBeFalsy();
    });

    it('should return is number pressed', () => {
        const wrapper = shallow(<IPv4Field {...defaultProps} />);
        const isNumberPressed = wrapper.instance().isNumberPressed;

        expect(isNumberPressed({ keyCode: 57, shiftKey: false })).toBeTruthy();
        expect(isNumberPressed({ keyCode: 57, shiftKey: true })).toBeFalsy();
    });

    it('should return is allowed keys pressed', () => {
        const wrapper = shallow(<IPv4Field {...defaultProps} />);
        const isAllowedKeys = wrapper.instance().isAllowedAction;

        wrapper.instance().isSelectionPressed = jest.fn().mockReturnValue(true);
        wrapper.instance().isCopyOrPastePressed = jest.fn().mockReturnValue(false);

        expect(isAllowedKeys({ keyCode: 37 })).toBeTruthy();
        expect(isAllowedKeys({ keyCode: 39 })).toBeTruthy();
        expect(isAllowedKeys({ keyCode: 35 })).toBeTruthy();
        expect(isAllowedKeys({ keyCode: 36 })).toBeTruthy();
        expect(isAllowedKeys({ keyCode: 9 })).toBeTruthy();

        wrapper.instance().isSelectionPressed = jest.fn().mockReturnValue(false);
        wrapper.instance().isCopyOrPastePressed = jest.fn().mockReturnValue(true);

        expect(isAllowedKeys({ keyCode: 37 })).toBeTruthy();
        expect(isAllowedKeys({ keyCode: 39 })).toBeTruthy();
        expect(isAllowedKeys({ keyCode: 35 })).toBeTruthy();
        expect(isAllowedKeys({ keyCode: 36 })).toBeTruthy();
        expect(isAllowedKeys({ keyCode: 9 })).toBeTruthy();
    });

    it('should return is allowed dot', () => {
        const wrapper = shallow(<IPv4Field {...defaultProps} />);
        const isAllowedDot = wrapper.instance().isAllowedDot;

        wrapper.instance().getDotsCount = jest.fn().mockReturnValue(0);
        expect(isAllowedDot({ target: { value: '18' } })).toBeTruthy();
        expect(isAllowedDot({ target: { value: '' } })).toBeFalsy();


        wrapper.instance().getDotsCount = jest.fn().mockReturnValue(1);
        expect(isAllowedDot({ target: { value: '198.10' } })).toBeTruthy();
        expect(isAllowedDot({ target: { value: '198.' } })).toBeFalsy();

        wrapper.instance().getDotsCount = jest.fn().mockReturnValue(2);
        expect(isAllowedDot({ target: { value: '198.10.10' } })).toBeTruthy();
        expect(isAllowedDot({ target: { value: '198.10.' } })).toBeFalsy();


        wrapper.instance().getDotsCount = jest.fn().mockReturnValue(3);
        expect(isAllowedDot({ target: { value: '198.1.1.1' } })).toBeFalsy();
    });

    it('should return is dot pressed', () => {
        const wrapper = shallow(<IPv4Field {...defaultProps} />);
        const isDotPressed = wrapper.instance().isDotPressed;

        expect(isDotPressed({ key: '.' })).toBeTruthy();
        expect(isDotPressed({ key: ',' })).toBeFalsy();
    });

    it('should return is allowed delete', () => {
        const wrapper = shallow(<IPv4Field {...defaultProps} />);
        const target = document.createElement('input');
        const isAllowedDelete = wrapper.instance().isAllowedDelete;

        target.value = value;

        wrapper.instance().getCaretPosition = jest.fn().mockReturnValue({
            selectionStart: 4,
            selectionEnd: 4,
            selectionLength: 0
        });

        wrapper.instance().isIPValid = jest.fn().mockReturnValue(true);
        expect(isAllowedDelete({ keyCode: 46, target })).toBeTruthy();
        expect(isAllowedDelete({ keyCode: 8, target })).toBeTruthy();

        wrapper.instance().isIPValid = jest.fn().mockReturnValue(false);
        expect(isAllowedDelete({ keyCode: 46, target })).toBeFalsy();
        expect(isAllowedDelete({ keyCode: 100, target })).toBeFalsy();
    });

    it('should return is IP valid', () => {
        const wrapper = shallow(<IPv4Field {...defaultProps} />);
        const isIPValid = wrapper.instance().isIPValid;

        wrapper.instance().getDotsCount = jest.fn().mockReturnValue(0);
        expect(isIPValid('')).toBeFalsy();

        wrapper.instance().getDotsCount = jest.fn().mockReturnValue(0);
        expect(isIPValid('0')).toBeTruthy();
        expect(isIPValid('1')).toBeTruthy();
        expect(isIPValid('09')).toBeTruthy();
        expect(isIPValid('19')).toBeTruthy();
        expect(isIPValid('99')).toBeTruthy();
        expect(isIPValid('099')).toBeTruthy();
        expect(isIPValid('199')).toBeTruthy();
        expect(isIPValid('255')).toBeTruthy();
        expect(isIPValid('255.')).toBeTruthy();

        expect(isIPValid('256')).toBeFalsy();
        expect(isIPValid('2555')).toBeFalsy();

        wrapper.instance().getDotsCount = jest.fn().mockReturnValue(1);
        expect(isIPValid('0.0')).toBeTruthy();
        expect(isIPValid('1.1')).toBeTruthy();
        expect(isIPValid('09.09')).toBeTruthy();
        expect(isIPValid('19.19')).toBeTruthy();
        expect(isIPValid('99.99')).toBeTruthy();
        expect(isIPValid('099.099')).toBeTruthy();
        expect(isIPValid('199.199')).toBeTruthy();
        expect(isIPValid('255.255')).toBeTruthy();
        expect(isIPValid('255.255.')).toBeTruthy();

        expect(isIPValid('255.0')).toBeTruthy();
        expect(isIPValid('199.1')).toBeTruthy();
        expect(isIPValid('099.09')).toBeTruthy();
        expect(isIPValid('99.19')).toBeTruthy();
        expect(isIPValid('19.99')).toBeTruthy();
        expect(isIPValid('09.099')).toBeTruthy();
        expect(isIPValid('1.199')).toBeTruthy();
        expect(isIPValid('0.255')).toBeTruthy();
        expect(isIPValid('255.255.')).toBeTruthy();

        expect(isIPValid('255.256')).toBeFalsy();
        expect(isIPValid('255.2555')).toBeFalsy();

        wrapper.instance().getDotsCount = jest.fn().mockReturnValue(2);
        expect(isIPValid('0.0.0')).toBeTruthy();
        expect(isIPValid('1.1.1')).toBeTruthy();
        expect(isIPValid('09.09.09')).toBeTruthy();
        expect(isIPValid('19.19.19')).toBeTruthy();
        expect(isIPValid('99.99.99')).toBeTruthy();
        expect(isIPValid('099.099.099')).toBeTruthy();
        expect(isIPValid('199.199.199')).toBeTruthy();
        expect(isIPValid('255.255.255')).toBeTruthy();
        expect(isIPValid('255.255.255.')).toBeTruthy();

        expect(isIPValid('255.0.255')).toBeTruthy();
        expect(isIPValid('199.1.199')).toBeTruthy();
        expect(isIPValid('099.09.099')).toBeTruthy();
        expect(isIPValid('99.19.99')).toBeTruthy();
        expect(isIPValid('19.99.19')).toBeTruthy();
        expect(isIPValid('09.099.09')).toBeTruthy();
        expect(isIPValid('1.199.1')).toBeTruthy();
        expect(isIPValid('0.255.0')).toBeTruthy();
        expect(isIPValid('255.255.255')).toBeTruthy();

        expect(isIPValid('256.255.255')).toBeFalsy();
        expect(isIPValid('255.256.255')).toBeFalsy();
        expect(isIPValid('255.255.256')).toBeFalsy();
        expect(isIPValid('255.255.2555')).toBeFalsy();

        wrapper.instance().getDotsCount = jest.fn().mockReturnValue(3);
        expect(isIPValid('0.0.0.0')).toBeTruthy();
        expect(isIPValid('1.1.1.1')).toBeTruthy();
        expect(isIPValid('09.09.09.09')).toBeTruthy();
        expect(isIPValid('19.19.19.19')).toBeTruthy();
        expect(isIPValid('99.99.99.99')).toBeTruthy();
        expect(isIPValid('099.099.099.099')).toBeTruthy();
        expect(isIPValid('199.199.199.199')).toBeTruthy();
        expect(isIPValid('255.255.255.255')).toBeTruthy();

        expect(isIPValid('255.0.255.0')).toBeTruthy();
        expect(isIPValid('199.1.199.1')).toBeTruthy();
        expect(isIPValid('099.09.099.09')).toBeTruthy();
        expect(isIPValid('99.19.99.19')).toBeTruthy();
        expect(isIPValid('19.99.19.99')).toBeTruthy();
        expect(isIPValid('09.099.09.099')).toBeTruthy();
        expect(isIPValid('1.199.1.199')).toBeTruthy();
        expect(isIPValid('0.255.0.255')).toBeTruthy();
        expect(isIPValid('255.255.255.255')).toBeTruthy();

        expect(isIPValid('256.255.255.255')).toBeFalsy();
        expect(isIPValid('255.256.255.255')).toBeFalsy();
        expect(isIPValid('255.255.256.255')).toBeFalsy();
        expect(isIPValid('255.255.255.256')).toBeFalsy();
        expect(isIPValid('255.255.255.2555')).toBeFalsy();
    });

    it('should handle past', () => {
        const wrapper = shallow(<IPv4Field {...defaultProps} />);
        const target = document.createElement('input');

        wrapper.instance().getReplacedSelectionText = jest.fn().mockReturnValue('198');
        wrapper.instance().isIPValid = jest.fn().mockReturnValue(true);
        wrapper.instance().handlePaste({ target });

        expect.assertions(2);
        expect(wrapper.instance().getReplacedSelectionText).toHaveBeenCalled();
        expect(wrapper.instance().isIPValid).toHaveBeenCalled();
    });

    describe('should handle key down', () => {
        let target;

        beforeAll(() => {
            target = document.createElement('input');
        });

        it('allow action', () => {
            const wrapper = shallow(<IPv4Field {...defaultProps} />);
            const preventDefault = jest.fn();

            wrapper.instance().getReplacedSelectionText = jest.fn().mockReturnValue('198');
            wrapper.instance().isAllowedAction = jest.fn().mockReturnValue(true);
            wrapper.instance().handleKeyDown({ target, preventDefault });

            expect(wrapper.instance().getReplacedSelectionText).toHaveBeenCalled();
            expect(wrapper.instance().isAllowedAction).toHaveBeenCalled();
            expect(preventDefault).not.toHaveBeenCalled();
            expect.assertions(3);
        });

        it('allow delete', () => {
            const wrapper = shallow(<IPv4Field {...defaultProps} />);
            const preventDefault = jest.fn();

            wrapper.instance().getReplacedSelectionText = jest.fn().mockReturnValue('198');
            wrapper.instance().isAllowedAction = jest.fn().mockReturnValue(false);
            wrapper.instance().isAllowedDelete = jest.fn().mockReturnValue(true);
            wrapper.instance().handleKeyDown({ target, preventDefault });

            expect(wrapper.instance().getReplacedSelectionText).toHaveBeenCalled();
            expect(wrapper.instance().isAllowedAction).toHaveBeenCalled();
            expect(wrapper.instance().isAllowedDelete).toHaveBeenCalled();
            expect(preventDefault).not.toHaveBeenCalled();
            expect.assertions(4);
        });

        it('allow put symbol', () => {
            const wrapper = shallow(<IPv4Field {...defaultProps} />);
            const preventDefault = jest.fn();

            wrapper.instance().getReplacedSelectionText = jest.fn().mockReturnValue('198');
            wrapper.instance().isAllowedAction = jest.fn().mockReturnValue(false);
            wrapper.instance().isAllowedDelete = jest.fn().mockReturnValue(false);
            wrapper.instance().isIPValid = jest.fn().mockReturnValue(true);
            wrapper.instance().handleKeyDown({ target, preventDefault });

            expect(wrapper.instance().getReplacedSelectionText).toHaveBeenCalled();
            expect(wrapper.instance().isAllowedAction).toHaveBeenCalled();
            expect(wrapper.instance().isAllowedDelete).toHaveBeenCalled();
            expect(wrapper.instance().isIPValid).toHaveBeenCalled();
            expect(preventDefault).not.toHaveBeenCalled();
            expect.assertions(5);
        });

        it('not allow add symbol', () => {
            const wrapper = shallow(<IPv4Field {...defaultProps} />);
            const preventDefault = jest.fn();

            wrapper.instance().getReplacedSelectionText = jest.fn().mockReturnValue('198');
            wrapper.instance().isAllowedAction = jest.fn().mockReturnValue(false);
            wrapper.instance().isAllowedDelete = jest.fn().mockReturnValue(false);
            wrapper.instance().isIPValid = jest.fn().mockReturnValue(false);
            wrapper.instance().handleKeyDown({ target, preventDefault });

            expect(wrapper.instance().getReplacedSelectionText).toHaveBeenCalled();
            expect(wrapper.instance().isAllowedAction).toHaveBeenCalled();
            expect(wrapper.instance().isAllowedDelete).toHaveBeenCalled();
            expect(wrapper.instance().isIPValid).toHaveBeenCalled();
            expect(preventDefault).toHaveBeenCalled();
            expect.assertions(5);
        });

        it('allow add dot symbol', () => {
            const wrapper = mount(<IPv4Field {...defaultProps} />);
            const preventDefault = jest.fn();
            wrapper.instance().fieldRef.value = '192';

            wrapper.instance().getReplacedSelectionText = jest.fn().mockReturnValue('198');
            wrapper.instance().isAllowedAction = jest.fn().mockReturnValue(false);
            wrapper.instance().isAllowedDelete = jest.fn().mockReturnValue(false);
            wrapper.instance().isIPValid = jest.fn().mockReturnValue(false);
            wrapper.instance().isNumberPressed = jest.fn().mockReturnValue(true);
            wrapper.instance().isAllowedDot = jest.fn().mockReturnValue(true);
            wrapper.instance().isDotPressed = jest.fn().mockReturnValue(false);
            wrapper.instance().handleKeyDown({ target, preventDefault });

            expect(wrapper.instance().getReplacedSelectionText).toHaveBeenCalled();
            expect(wrapper.instance().isAllowedAction).toHaveBeenCalled();
            expect(wrapper.instance().isAllowedDelete).toHaveBeenCalled();
            expect(wrapper.instance().isIPValid).toHaveBeenCalled();
            expect(wrapper.instance().isNumberPressed).toHaveBeenCalled();
            expect(wrapper.instance().isAllowedDot).toHaveBeenCalled();
            expect(wrapper.instance().isDotPressed).toHaveBeenCalled();
            expect(preventDefault).not.toHaveBeenCalled();
            expect(wrapper.instance().fieldRef.value).toEqual('192.');
            expect.assertions(9);
        });
    });
});
