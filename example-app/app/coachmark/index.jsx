import { callout, steps, tour } from 'app/coachmark/tour';
import BaseComponentView from 'app/components/base-component-view';
import { Coachmark, Button, BUTTON_SIZE } from 'platform-common-ui';
import isEmpty from 'lodash/isEmpty';
import { isAncestor } from 'app/coachmark/utils';


export default class CoachmarkExample extends BaseComponentView {

    constructor(props) {
        super(props);
        this.state = {
            displayCallout: true,
            displayCoachmark: false,
            stepNum: 0,
            isButtonDisabled: false
        };
        this.onStepNext = this.onStepNext.bind(this);
        this.onTourEnd = this.onTourEnd.bind(this);
        this.onTourStart = this.onTourStart.bind(this);
        this.startTour = this.startTour.bind(this);
        this.handleDocumentClick = this.handleDocumentClick.bind(this);
    }

    onStepNext (nextStepCount) {
        window.console.log('Current Step', nextStepCount);
    }

    onTourEnd () {
        this.setState({
            displayCoachmark: false,
            displayCallout: true,
            isButtonDisabled: false
        });
    }

    onTourStart() {
        window.console.log('Tour Started');
    }

    handleDocumentClick(event) {
        const CoachmarkWrapper = document.getElementsByClassName('rmm-hopscotch');
        if (!isEmpty(CoachmarkWrapper) && !isAncestor(event.target, CoachmarkWrapper[0])) {
            if (!this.state.displayCoachmark) {
                this.setState({ displayCallout: false });
            } else if (this.state.displayCoachmark) {
                this.setState({ displayCallout: true, displayCoachmark: false });
            }
        }
    }

    startTour() {
        this.setState({ displayCoachmark: true, isButtonDisabled: true, displayCallout: false });
    }

    getOptions() {
        return (
            <Button
                className={'callout-example'}
                isDark={false}
                isDisabled={this.state.isButtonDisabled}
                size={BUTTON_SIZE.SMALL}
                onClick={this.startTour}
            >
            Click here to start
            </Button>

        );
    }

    renderComponent () {
        return (
            <div>{
                <Coachmark
                    tour={tour}
                    steps={steps}
                    callout={callout}
                    onTourStart={this.onTourStart}
                    onTourEnd={this.onTourEnd}
                    onStepNext={this.onStepNext}
                    handleDocumentClick={this.handleDocumentClick}
                    displayCallout={this.state.displayCallout}
                    displayCoachmark={this.state.displayCoachmark}
                />
            }
                <button id="coachmark-step1">First Location</button>
                <button id="coachmark-step2">Second Location</button>
                <button id="coachmark-step3">Third Location</button>
                <button id="coachmark-step4">Fourth Location</button>
            </div>

        );
    }
}
