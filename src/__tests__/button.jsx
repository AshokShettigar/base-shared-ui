// import { Simulate, renderIntoDocument } from 'react-addons-test-utils';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { Button, BUTTON_SIZE, BUTTON_VARIATION } from 'platform-common-ui';

const defaultProps = {
    isDark: false,
    isDisabled: false,
    size: BUTTON_SIZE.MEDIUM,
    type: 'button',
    variation: BUTTON_VARIATION.DEFAULT,
    isLoading: undefined,
    onClick: jest.fn()
};

describe('button', function() {
    it('should render the button', function() {
        const onClickHandler = () => true;
        const tree = renderer.create(
            <Button
                onClick={onClickHandler}
            >
                MyButton
            </Button>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render a loading button', () => {
        const wrapper = shallow(<Button {...defaultProps} isLoading />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the button with any element', function() {
        const onClickHandler = () => true;
        const tree = renderer.create(
            <Button
                onClick={onClickHandler}
            >
                <div>My Custom Label</div>
            </Button>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render with a custom class name', function() {
        const onClickHandler = () => true;
        const tree = renderer.create(
            <Button
                className="my-class"
                onClick={onClickHandler}
            >
                MyButton
            </Button>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render a disabled button', function() {
        const onClickHandler = () => true;
        const tree = renderer.create(
            <Button
                onClick={onClickHandler}
                isDisabled
            >
                MyButton
            </Button>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render a primary button', function() {
        const onClickHandler = () => true;
        const tree = renderer.create(
            <Button
                onClick={onClickHandler}
                variation={BUTTON_VARIATION.PRIMARY}
            >
                MyButton
            </Button>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render a secondary button', function() {
        const onClickHandler = () => true;
        const tree = renderer.create(
            <Button
                onClick={onClickHandler}
                variation={BUTTON_VARIATION.SECONDARY}
            >
                MyButton
            </Button>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render a small size button', function() {
        const onClickHandler = () => true;
        const tree = renderer.create(
            <Button
                onClick={onClickHandler}
                size={BUTTON_SIZE.SMALL}
            >
                MyButton
            </Button>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render a medium size button', function() {
        const onClickHandler = () => true;
        const tree = renderer.create(
            <Button
                onClick={onClickHandler}
                size={BUTTON_SIZE.MEDIUM}
            >
                MyButton
            </Button>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render a large size button', function() {
        const onClickHandler = () => true;
        const tree = renderer.create(
            <Button
                onClick={onClickHandler}
                size={BUTTON_SIZE.LARGE}
            >
                MyButton
            </Button>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render a lighter button for dark background', function() {
        const onClickHandler = () => true;
        const tree = renderer.create(
            <Button
                onClick={onClickHandler}
                isDark
            >
                MyButton
            </Button>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    // it('should trigger onClick handler', function(done) {
    //     const onClickHandler = () => done();
    //     const component = renderIntoDocument(<Button onClick={onClickHandler}>MyButton</Button>);
    //     Simulate.click(component.refs.button);
    // });
});
