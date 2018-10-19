import { Button, Chart } from 'platform-common-ui';
import * as moment from 'moment';
import BaseComponentView from 'app/components/base-component-view';

const TIME_FORMAT = 'MM/DD/YYYY HH:mm';
const OPTIONS = {
    title: {
        text: 'Time Scale'
    },
    scales: {
        xAxes: [{
            type: 'time',
            time: {
                format: TIME_FORMAT,
                // round: 'day'
                tooltipFormat: 'll HH:mm'
            },
            scaleLabel: {
                display: true,
                labelString: 'Date'
            }
        }],
        yAxes: [{
            scaleLabel: {
                display: true,
                labelString: 'value'
            }
        }]
    }
};

function newDate(days) {
    return moment().add(days, 'd').toDate();
}

export default class ChartExample extends BaseComponentView {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };

        this.setData = () => this.setState({
            data: {
                datasets: [{
                    label: 'time data',
                    borderColor: '#00ff00',
                    fill: false,
                    data: [{
                        x: newDate(2),
                        y: 3
                    }, {
                        x: newDate(6),
                        y: 4
                    }, {
                        x: newDate(13),
                        y: 7
                    }, {
                        x: newDate(18),
                        y: 10
                    }]
                }]
            }
        });
    }

    getOptions() {
        return <Button onClick={this.setData}>Set Data</Button>;
    }

    renderComponent() {
        return <Chart data={this.state.data} options={OPTIONS} type="line" />;
    }
}
