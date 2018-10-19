import { shallow, mount } from 'enzyme';
import { Table } from 'platform-common-ui/table';

describe('table/index', function() {
    const origAddEventListener = window.addEventListener;
    const origRemoveEventListener = window.removeEventListener;
    const origRequestAnimationFrame = window.requestAnimationFrame;
    const origSetTimeout = window.setTimeout;
    const origAdjustColumnWidths = Table.prototype.adjustColumnWidths;
    const origAdjustHeight = Table.prototype.adjustHeight;
    const origInitializeTableBodyTop = Table.prototype.initializeTableBodyTop;
    const origInitialize = Table.prototype.initialize;
    const origSyncScroll = Table.prototype.syncScroll;
    const origSetState = Table.prototype.setState;

    const columns = [
        <Table.Column id="1" key="1">Head 1</Table.Column>,
        <Table.Column id="2" key="2">Head 2</Table.Column>
    ];

    const data = [(
        <Table.Row key="1">
            <Table.Cell>Data 1-1</Table.Cell>
            <Table.Cell>Data 1-2</Table.Cell>
        </Table.Row>
    ), (
        <Table.Row key="2">
            <Table.Cell>Data 2-1</Table.Cell>
            <Table.Cell>Data 2-2</Table.Cell>
        </Table.Row>
    )];

    afterEach(function() {
        window.addEventListener = origAddEventListener;
        window.removeEventListener = origRemoveEventListener;
        window.requestAnimationFrame = origRequestAnimationFrame;
        window.setTimeout = origSetTimeout;
        Table.prototype.adjustColumnWidths = origAdjustColumnWidths;
        Table.prototype.adjustHeight = origAdjustHeight;
        Table.prototype.initialize = origInitialize;
        Table.prototype.initializeTableBodyTop = origInitializeTableBodyTop;
        Table.prototype.syncScroll = origSyncScroll;
        Table.prototype.setState = origSetState;
    });

    it('should render the component', function() {
        const wrapper = shallow(
            <Table columns={columns}>{data}</Table>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with height', function() {
        const wrapper = shallow(
            <Table columns={columns} height={500}>{data}</Table>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should render the component with footer', function() {
        const footer = <div>Footer</div>;
        const wrapper = shallow(
            <Table columns={columns} footer={footer}>{data}</Table>
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('should call did mount', function() {
        window.addEventListener = jest.fn();
        window.setTimeout = jest.fn(init => init());
        Table.prototype.initialize = jest.fn();
        const wrapper = mount(
            <Table columns={columns}>{data}</Table>
        );
        const resizeHandler = wrapper.instance().resizeHandler;
        expect(window.addEventListener).toHaveBeenCalledWith('resize', resizeHandler);
        expect(window.setTimeout).toHaveBeenCalledWith(expect.any(Function), 0);
        expect(Table.prototype.initialize).toHaveBeenCalledTimes(1);
    });

    it('should call did mount with footer', function() {
        window.addEventListener = jest.fn();
        window.setTimeout = jest.fn();
        const wrapper = mount(
            <Table columns={columns} footer="Footer">{data}</Table>
        );
        const resizeHandler = wrapper.instance().resizeHandler;
        expect(window.addEventListener).toHaveBeenCalledWith('resize', resizeHandler);
        expect(window.setTimeout).toHaveBeenCalledWith(expect.any(Function), 0);
    });

    it('should call initialize', function() {
        Table.prototype.adjustColumnWidths = jest.fn();
        Table.prototype.adjustHeight = jest.fn();
        Table.prototype.initializeTableBodyTop = jest.fn();
        const table = new Table({ height: 10 });
        table.initialize();
        expect(Table.prototype.adjustHeight).toHaveBeenCalledWith(10);
        expect(Table.prototype.adjustColumnWidths).toHaveBeenCalledTimes(1);
        expect(Table.prototype.initializeTableBodyTop).toHaveBeenCalledTimes(1);
    });

    it('should remove event listener on unmount', function() {
        window.removeEventListener = jest.fn();
        const wrapper = mount(
            <Table columns={columns}>{data}</Table>
        );
        const resizeHandler = wrapper.instance().resizeHandler;
        wrapper.unmount();
        expect(window.removeEventListener).toHaveBeenCalledWith('resize', resizeHandler);
    });

    it('should adjust the height after the height change', function() {
        Table.prototype.adjustHeight = jest.fn();
        const wrapper = mount(
            <Table columns={columns}>{data}</Table>
        );
        wrapper.setProps({ height: 500 });
        expect(Table.prototype.adjustHeight).toHaveBeenCalledWith(500);
    });

    it('should adjust the height with the footer', function() {
        Table.prototype.setState = jest.fn();
        const table = new Table();
        table.footer = {
            getBoundingClientRect: () => ({ height: 5 })
        };
        table.tableBody = {
            getBoundingClientRect: () => ({ top: 10 })
        };
        table.adjustHeight();
        expect(Table.prototype.setState).toHaveBeenCalledWith({
            height: window.document.body.clientHeight - 35
        });
    });

    it('should adjust the height without the footer', function() {
        Table.prototype.setState = jest.fn();
        const table = new Table();
        table.tableBody = {
            getBoundingClientRect: () => ({ top: 10 })
        };
        table.adjustHeight();
        expect(Table.prototype.setState).toHaveBeenCalledWith({
            height: window.document.body.clientHeight - 30
        });
    });

    it('should not call adjust the height if the height is same', function() {
        const wrapper = mount(
            <Table columns={columns} height={500} >{data}</Table>
        );
        Table.prototype.adjustHeight = jest.fn();
        wrapper.setProps({ height: 500 });
        expect(Table.prototype.adjustHeight).toHaveBeenCalledTimes(0);
    });

    it('should call resize handler on window resize', function() {
        window.requestAnimationFrame = function(callback) {
            callback();
        };
        Table.prototype.adjustHeight = jest.fn();
        const wrapper = mount(
            <Table columns={columns}>{data}</Table>
        );
        window.dispatchEvent(new Event('resize'));
        expect(wrapper.instance().adjustHeight).toHaveBeenCalled();
    });

    it('should call sync scroll handler on scroll', function() {
        window.requestAnimationFrame = function(callback) {
            callback();
        };
        const wrapper = mount(
            <Table columns={columns}>{data}</Table>
        );
        const instance = wrapper.instance();
        Table.prototype.setState = jest.fn();
        instance.tableBody = { scrollLeft: 20 };
        wrapper.find('.cn-table__body').simulate('scroll');
        expect(instance.setState).toHaveBeenCalledWith({ left: -20 });
    });

    it('should call custom onScroll function when it scrolls', function() {
        window.requestAnimationFrame = function(callback) {
            callback();
        };
        const onScrollHandler = jest.fn();
        const wrapper = mount(
            <Table columns={columns} onScroll={onScrollHandler}>{data}</Table>
        );
        const instance = wrapper.instance();
        Table.prototype.setState = jest.fn();
        instance.tableBody = { scrollLeft: 20 };
        wrapper.find('.cn-table__body').simulate('scroll');
        expect(onScrollHandler).toHaveBeenCalledTimes(1);
    });

    it('should initialize table body top', function() {
        Table.prototype.setState = jest.fn();
        const table = new Table();
        table.hiddenHeaders = {
            getBoundingClientRect: () => ({ height: 20 })
        };
        table.initializeTableBodyTop();
        expect(Table.prototype.setState).toHaveBeenCalledWith({ top: -19 });
    });

    it('should call adjustColumnWidths on columns property update', function() {
        const wrapper = mount(
            <Table columns={columns}>{data}</Table>
        );
        Table.prototype.adjustColumnWidths = jest.fn();
        wrapper.setProps({ columns: [] });
        expect(Table.prototype.adjustColumnWidths).toHaveBeenCalledTimes(1);
    });

    it('should call adjustColumnWidths on columns property update', function() {
        const wrapper = mount(
            <Table columns={columns}>{data}</Table>
        );
        Table.prototype.adjustColumnWidths = jest.fn();
        wrapper.setProps({ columns: [] });
        expect(Table.prototype.adjustColumnWidths).toHaveBeenCalledTimes(1);
    });

    it('should not call adjustColumnWidths on other property or state changes', function() {
        const wrapper = mount(
            <Table columns={columns}>{data}</Table>
        );
        Table.prototype.adjustColumnWidths = jest.fn();
        wrapper.setProps({ height: 100 });
        expect(Table.prototype.adjustColumnWidths).toHaveBeenCalledTimes(0);
        wrapper.setState({});
        expect(Table.prototype.adjustColumnWidths).toHaveBeenCalledTimes(0);
    });

    it('should test adjustColumnWidths', function() {
        Table.prototype.setState = jest.fn();
        const table = new Table();
        table.hiddenHeaders = {
            children: [
                { clientWidth: 5 },
                { clientWidth: 6 },
                { clientWidth: 7 }
            ]
        };
        table.adjustColumnWidths();
        expect(Table.prototype.setState).toHaveBeenCalledWith({ columnWidths: [5, 6, 7] });
    });
});
