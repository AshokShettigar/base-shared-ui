import { mount, shallow } from 'enzyme';
import Chart from 'platform-common-ui/chart';

describe('chart', function() {
    afterEach(function() {
        window.Chart = null;
    });

    it('should render the component', function() {
        const wrapper = shallow(<Chart />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should initialize the chart on mount', function() {
        const chartMock = jest.fn();
        window.Chart = chartMock;
        const data = {};
        const options = {};
        const type = 'chart_type';
        mount(<Chart data={data} options={options} type={type} />);
        expect(chartMock.mock.instances.length).toBe(1);
        expect(chartMock).toHaveBeenCalledWith(null, expect.objectContaining({
            data,
            options,
            type
        }));
    });

    it('should only update on data property change', function() {
        const data = {};
        const options = {};
        const type = 'some_type';
        const newData = {};
        const chart = new Chart({ data, options, type });
        expect(chart.shouldComponentUpdate({ data: newData, options, type })).toBeTruthy();
        expect(chart.shouldComponentUpdate({ data, options, type })).toBeFalsy();
        expect(chart.shouldComponentUpdate({ data, options: {}, type })).toBeFalsy();
        expect(chart.shouldComponentUpdate({ data, options, type: 'new_type' })).toBeFalsy();
    });

    it('should should update the chart on componentDidUpdate', function() {
        const data = {};
        const options = {};
        const type = 'some_type';
        const chart = new Chart({ data, options, type });
        const update = jest.fn();
        chart.chart = { update };
        chart.componentDidUpdate();
        expect(update).toHaveBeenCalledTimes(1);
        expect(chart.chart.data).toBe(data);
    });

    it('should should clean up on unmount', function() {
        const data = {};
        const options = {};
        const type = 'some_type';
        const chart = new Chart({ data, options, type });
        const destroy = jest.fn();
        chart.chart = { destroy };
        chart.componentWillUnmount();
        expect(destroy).toHaveBeenCalledTimes(1);
        expect(chart.chart).toBeFalsy();
    });
});
