import { Component } from 'react';
import RangeSlider from 'react-rangeslider';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { keyBy, range } from 'lodash';

class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value
        };

        this.changeHandler = this.changeHandler.bind(this);
        this.completeHandler = this.completeHandler.bind(this);
    }

    /**
     * Creates an array of numbers from min up to max with step.
     * Creates the composed aggregate object of keys from array.
     * @param {Number} min
     * @param {Number} max
     * @param {Number} step
     * @return {Object} Example:
     *     {1: 1, 2: 2, 3: 3, 4: 4, 5: 5}
     */
    getLabels(min, max, step) {
        return keyBy(range(min, max + step, step));
    }

    changeHandler(value) {
        this.setState({ value });
    }

    completeHandler() {
        this.props.onChange(this.state.value);
    }

    render() {
        const { low, high, min, max, step } = this.props;
        const className = classNames('slider', this.props.className);
        const labels = this.getLabels(min, max, step);

        return (
            <div className={className}>
                { this.props.children }
                <RangeSlider
                    min={min}
                    max={max}
                    step={step}
                    labels={labels}
                    tooltip={false}
                    value={this.state.value}
                    onChange={this.changeHandler}
                    onChangeComplete={this.completeHandler}
                />
                <div className="slider___hint">
                    <span className="slider__hint--low">
                        { low }
                    </span>
                    <span className="slider__hint--high">
                        { high }
                    </span>
                </div>
            </div>
        );
    }

}

Slider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    step: PropTypes.number,
    children: PropTypes.node,
    className: PropTypes.string,
    low: PropTypes.string,
    high: PropTypes.string
};
Slider.defaultProps = {
    value: 1,
    min: 1,
    max: 5,
    step: 1,
    low: 'low',
    high: 'high'
};

export default Slider;
