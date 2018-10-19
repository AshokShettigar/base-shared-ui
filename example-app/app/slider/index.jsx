import { Slider, Input } from 'platform-common-ui';
import BaseComponentView from 'app/components/base-component-view';

export default class SliderExample extends BaseComponentView {
    constructor(props) {
        super(props);

        this.state = {
            value: 2,
            min: 1,
            max: 5,
            step: 1
        };

        this.onChangeMin = min => this.setState({ min: Number(min) });
        this.onChangeMax = max => this.setState({ max: Number(max) });
        this.onChangeStep = step => this.setState({ step: Number(step) });

        this.onChange = this.onChange.bind(this);
    }

    getOptions() {
        return (
            <div>
                <h5>Value is: {this.state.value}</h5>
                <Input
                    id="minValueInput"
                    label="Min:"
                    min={0}
                    type="number"
                    onChange={this.onChangeMin}
                    value={this.state.min}
                />
                <Input
                    id="maxValueInput"
                    label="Max:"
                    type="number"
                    min={1}
                    onChange={this.onChangeMax}
                    value={this.state.max}
                />
                <Input
                    id="stepValueInput"
                    label="Step:"
                    type="number"
                    min={1}
                    onChange={this.onChangeStep}
                    value={this.state.step}
                />
            </div>
        );
    }

    onChange(value) {
        this.setState({ value });
    }

    renderComponent() {
        const { value, min, max, step } = this.state;

        return (
            <Slider
                value={value}
                min={min}
                max={max}
                step={step}
                onChange={this.onChange}
            >
                <h6>Value</h6>
            </Slider>
        );
    }
}
