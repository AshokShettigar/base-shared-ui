import {
    Container,
    Coachmark,
    Icon
} from 'platform-common-ui';
import { Component } from 'react';
import { CALLOUT } from './tour-config';

// Callout
class Callout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayCallout: true
        };
    }

    componentWillUnmount() {
        this.setState({
            displayCallout: false
        });
    }

    render() {
        return (
            <Container fluid>
                <h4 className="story-title">Coachmarks (Callout)</h4>
                <div>
                    If the user closes out the feature tour, or reaches
                    the end of the tour and clicks “End,” then the system
                    displays the coach marks icon with an info message about
                    how they can return to the feature tour at any time.
                    After a couple of seconds, the message goes away on its own,
                    and the message only reappears if the user hovers
                    over the icon.
                </div><br /><br />
                <div className="mt-2">
                    <Icon className="btn-icon active-icon" size="extra-small" icon="bulb-with-question-mark" />
                </div>
                <Coachmark
                    type="callout"
                    showCoachmark={this.state.displayCallout}
                    callout={CALLOUT}
                />
            </Container>
        );
    }
}

export default Callout;
