import { shallow } from 'enzyme';
import { MenuButton } from 'platform-common-ui/menu-button';

describe('menu-button', function() {
    // eslint-disable-next-line no-console
    const origConsoleErrorFunc = console.error;
    const handler = () => true;

    afterEach(() => {
        // eslint-disable-next-line no-console
        console.error = origConsoleErrorFunc;
    });

    it('should render the menu button', function() {
        const wrapper = shallow(
            <MenuButton onClick={handler}>
                MyButton
            </MenuButton>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the icon only', function() {
        const wrapper = shallow(<MenuButton icon="testIcon" onClick={handler} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render with the title', function() {
        const wrapper = shallow(<MenuButton icon="testIcon" onClick={handler} title="MyTitle" />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should require either children or icon prop types', function() {
        const mockError = jest.fn();
        // eslint-disable-next-line no-console
        console.error = mockError;
        shallow(<MenuButton onClick={handler} />);
        expect(mockError).toHaveBeenCalledTimes(1);
        expect(mockError).toHaveBeenCalledWith(
            expect.stringMatching("At least one of 'children' or 'icon' prop is required for MenuButton."));

        shallow(<MenuButton icon="filter" onClick={handler} />);
        expect(mockError).toHaveBeenCalledTimes(1);

        shallow(<MenuButton onClick={handler}>MyButton</MenuButton>);
        expect(mockError).toHaveBeenCalledTimes(1);
    });

    it('should call onClick handler on click', function() {
        const onClickHandler = jest.fn();
        const wrapper = shallow(<MenuButton onClick={onClickHandler}>MyButton</MenuButton>);
        wrapper.simulate('click');
        expect(onClickHandler).toHaveBeenCalledTimes(1);
    });

    it('should not call onClick handler when disabled', function() {
        const onClickHandler = jest.fn();
        const wrapper = shallow(
            <MenuButton isDisabled onClick={onClickHandler}>
                MyButton
            </MenuButton>
        );
        wrapper.simulate('click');
        expect(onClickHandler).toHaveBeenCalledTimes(0);
    });
});
