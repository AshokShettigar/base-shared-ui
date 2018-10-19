import { Component } from 'react';
import { Container, Coachmark } from 'platform-common-ui';
import {
    text,
    select,
    number,
    button
} from '@storybook/addon-knobs/react';
import {
    TOUR,
    STORYBOOK_DEMO_STEPS
} from './tour-config';

class Playground extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayCoachmark: true
        };

        this.handleOnTourEnd = this.handleOnTourEnd.bind(this);
        this.restartTour = this.restartTour.bind(this);
    }

    handleOnTourEnd() {
        this.setState({
            displayCoachmark: false
        });
    }

    restartTour() {
        this.setState({
            displayCoachmark: false
        });

        setTimeout((function(_this) {
            _this.setState({
                displayCoachmark: true
            });
        }(this)), 1000);
    }

    render() {
        const steps = STORYBOOK_DEMO_STEPS.slice();

        const stepOptions = {
            1: 'Step 1',
            2: 'Step 2',
            3: 'Step 3',
            4: 'Step 4'
        };
        const stepSelect = select('Step', stepOptions, '1');

        steps[stepSelect - 1].title = text('Title', steps[stepSelect - 1].title);
        steps[stepSelect - 1].content = text('Content', steps[stepSelect - 1].content);

        const placementOptions = {
            top: 'Top',
            bottom: 'Bottom',
            left: 'Left',
            right: 'Right'
        };
        steps[stepSelect - 1].placement = select(
            'Placement',
            placementOptions,
            steps[stepSelect - 1].placement
        );
        steps[stepSelect - 1].arrowColor = steps[stepSelect - 1].placement === 'top'
            ? '#0D3560'
            : '';

        steps[stepSelect - 1].xOffset = parseInt(number('X-offset', 0), 10);
        steps[stepSelect - 1].yOffset = parseInt(number('Y-offset', 0), 10);

        button('Restart tour', this.restartTour);

        return (
            <Container fluid>
                <h4 className="story-title">Coachmarks Playground</h4>
                <div className="mb-5">
                    You can use this playground to try different options available in tour.
                    Restart the tour using Restart tour button to see your changes in the tour.
                </div>
                <div className="text-center">
                    <div className="mx-auto mb-5 w-25">
                        <span id="firstStep">Step 1</span>
                    </div>
                    <div className="mx-auto mb-5 w-25">
                        <span id="secondStep">Step 2</span>
                    </div>
                    <div className="mx-auto mb-5 w-25">
                        <span id="thirdStep">Step 3</span>
                    </div>
                    <div className="mx-auto mb-5 w-25">
                        <span id="fourthStep">Step 4</span>
                    </div>
                </div>
                <Coachmark
                    type="tour"
                    showCoachmark={this.state.displayCoachmark}
                    tour={TOUR}
                    steps={steps}
                    onTourEnd={this.handleOnTourEnd}
                />
            </Container>
        );
    }
}

export default Playground;
