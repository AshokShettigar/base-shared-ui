import { shallow } from 'enzyme';
import Column, { SORT_DIRECTION } from 'platform-common-ui/table/column';

describe('table/column', function() {
    // eslint-disable-next-line no-console
    const origConsoleError = console.error;

    afterEach(function() {
        // eslint-disable-next-line no-console
        console.error = origConsoleError;
    });

    it('should render the component', function() {
        const wrapper = shallow(<Column id="col1">Header 1</Column>);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with ascending sort direction', function() {
        const wrapper = shallow(
            <Column id="col1" sortDirection={SORT_DIRECTION.ASC}>
                Header 1
            </Column>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with descending sort direction', function() {
        const wrapper = shallow(
            <Column id="col1" sortDirection={SORT_DIRECTION.DESC}>
                Header 1
            </Column>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with class name', function() {
        const wrapper = shallow(
            <Column className="my-class" id="col1">
                Header 1
            </Column>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with isSortable', function() {
        const wrapper = shallow(
            <Column id="col1" isSortable>
                Header 1
            </Column>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should test onClick on the component', function(done) {
        const onClickHandler = id => {
            expect(id).toBe('col1');
            done();
        };
        const wrapper = shallow(<Column id="col1" onClick={onClickHandler}>Header</Column>);
        wrapper.simulate('click');
    });

    it('should validate missing id', function() {
        /* eslint-disable no-console */
        console.error = jest.fn();
        shallow(<Column>Header</Column>);
        expect(console.error).toHaveBeenCalledTimes(1);
        expect(console.error).toHaveBeenCalledWith(
            expect.stringContaining('The prop `id` is marked as required'));
        /* eslint-disable no-console */
    });
});
