import { shallow } from 'enzyme';
import { DefaultTab, HigherOrderTabComponent } from 'platform-common-ui/tab';


describe('tab', function() {
    // eslint-disable-next-line no-console
    const origConsoleError = console.error;

    afterEach(function() {
        // eslint-disable-next-line no-console
        console.error = origConsoleError;
    });

    it('should require label property for DefaultTab', function() {
        // eslint-disable-next-line no-console
        console.error = jest.fn();
        shallow(<DefaultTab href="#" />);

        // eslint-disable-next-line no-console
        expect(console.error).toHaveBeenCalled();
    });

    it('should require href property for DefaultTab', function() {
        // eslint-disable-next-line no-console
        console.error = jest.fn();
        shallow(<DefaultTab label="abc" />);
        // eslint-disable-next-line no-console
        expect(console.error).toHaveBeenCalled();
    });

    it('should render the default tab', function() {
        const tree = shallow(
            <DefaultTab href="#" label="Tab1" />
        );

        expect(tree).toMatchSnapshot();
    });

    it('should render the default tab with active', function() {
        const tree = shallow(
            <DefaultTab href="#" label="Tab1" isActive />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the default tab with custom class name', function() {
        const tree = shallow(
            <DefaultTab className="my-class" href="#" label="Tab1" />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render the default tab with custom tab class name', function() {
        const tree = shallow(
            <DefaultTab href="#" label="Tab1" tabClassName="my-tab-class" />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render with higher order component', function() {
        const CustomTab = HigherOrderTabComponent(props =>
            <span className={props.className}>{props.label}</span>
        );
        const tree = shallow(
            <CustomTab label="Tab1" />
        );
        expect(tree).toMatchSnapshot();
    });

    it('should render with higher order component and custom class name', function() {
        const CustomTab = HigherOrderTabComponent(props =>
            <span className={props.className}>{props.label}</span>
        );
        const tree = shallow(
            <CustomTab className="my-class" label="Tab1" />
        );
        expect(tree).toMatchSnapshot();
    });
});
