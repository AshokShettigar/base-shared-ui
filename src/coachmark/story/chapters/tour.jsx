import { Component } from 'react';
import {
    Container,
    Coachmark,
    Button
} from 'platform-common-ui';
import {
    TOUR,
    STORYBOOK_DEMO_STEPS
} from './tour-config';

// Tour
class Tour extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayCoachmark: false
        };

        this.startTour = this.startTour.bind(this);
        this.handleOnTourEnd = this.handleOnTourEnd.bind(this);
    }

    startTour() {
        this.setState({
            displayCoachmark: true
        });
    }

    handleOnTourEnd() {
        this.setState({
            displayCoachmark: false
        });
    }

    render() {
        return (
            <Container fluid>
                <h4 className="story-title">Coachmarks (Tour)</h4>
                <div>
                    This story will show you a demo of Coachmarks tour.
                    Please have a look at readme for
                    more information about usage of Coachmarks.
                </div><br />
                <div>
                    <Button onClick={this.startTour}>Start Tour</Button>
                </div><br />
                <div className="font-weight-bold mb-2">First Step</div>
                <div id="firstStep">
                    When the user arrives on the page,
                    the system displays the first coach mark.
                    This coach mark is an introduction to the tour,
                    and it informs the user that there are new
                    features on the page. At this point,
                    the user can close out the coach mark or
                    click next to take the tour.
                </div><br />
                <div className="font-weight-bold mb-2">Second Step</div>
                <div id="secondStep" className="w-50 text-justify">
                    After clicking next, the user gets taken to the
                    first feature in the tour. The user can click back
                    to return to the introductory coach mark, or click
                    next to go to the second feature in the tour.
                </div><br />
                <div className="clearfix">
                    <div className="font-weight-bold mb-2 text-right">Third Step</div>
                    <div id="thirdStep" className="w-50 text-justify float-right">
                        The user can continue to navigate to the next feature,
                        or return to the previous feature. They can choose to
                        exit out of the tour at any time.
                    </div>
                </div>
                <div className="clearfix">
                    <div className="font-weight-bold mb-2 mt-2">
                        Fourth Step
                    </div>
                    <div id="fourthStep" className="float-left">
                        Once the user researches the last feature, the system
                        displays an “End” option. This option will close out
                        the feature tour.
                    </div>
                </div>
                <Coachmark
                    type="tour"
                    showCoachmark={this.state.displayCoachmark}
                    tour={TOUR}
                    steps={STORYBOOK_DEMO_STEPS}
                    onTourEnd={this.handleOnTourEnd}
                />
            </Container>
        );
    }
}

export default Tour;
