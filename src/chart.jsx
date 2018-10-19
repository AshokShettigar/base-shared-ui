import { Component } from 'react';
import PropTypes from 'prop-types';

export default class ChartWrapper extends Component {
    componentDidMount() {
        const ctx = this.canvas.getContext('2d');
        // eslint-disable-next-line no-undef
        this.chart = new Chart(ctx, {
            data: this.props.data,
            options: this.props.options,
            type: this.props.type
        });
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.data !== this.props.data;
    }

    componentDidUpdate() {
        this.chart.data = this.props.data;
        this.chart.update();
    }

    componentWillUnmount() {
        this.chart.destroy();
        this.chart = null;
    }

    render() {
        return (
            <canvas
                className="cn-chart"
                ref={c => { this.canvas = c; }}
            />
        );
    }
}

ChartWrapper.propTypes = {
    data: PropTypes.shape({
        datasets: PropTypes.arrayOf(PropTypes.object)
    }).isRequired,
    options: PropTypes.shape({
        scales: PropTypes.object
    }).isRequired,
    type: PropTypes.string.isRequired
};

ChartWrapper.defaultProps = {
    data: {},
    options: {},
    type: 'line'
};
