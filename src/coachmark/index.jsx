import {
    arrayOf,
    bool,
    func,
    shape,
    string,
    oneOf,
    number
} from 'prop-types';
import { Component } from 'react';
import { COACHMARKS_TYPE, COACHMARKS_POSITION } from './constants';

export class Coachmark extends Component {
    constructor(props) {
        super(props);

        this.configureTour = this.configureTour.bind(this);
        this.startTour = this.startTour.bind(this);
        this.endTour = this.endTour.bind(this);
        this.createCallout = this.createCallout.bind(this);
        this.removeCallout = this.removeCallout.bind(this);
        this.onTourStart = this.onTourStart.bind(this);
        this.onTourEnd = this.onTourEnd.bind(this);
        this.onStepNext = this.onStepNext.bind(this);
        this.onDocumentClick = this.onDocumentClick.bind(this);
    }

    componentDidMount () {
        document.addEventListener('mousedown', this.onDocumentClick);
        if (this.props.type === COACHMARKS_TYPE.TOUR) {
            this.configureTour();
            if (this.props.showCoachmark) {
                this.startTour();
            }
        } else if (this.props.type === COACHMARKS_TYPE.CALLOUT) {
            this.createCallout();
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.type === COACHMARKS_TYPE.CALLOUT) {
            if (nextProps.showCoachmark) {
                this.createCallout();
            } else {
                this.removeCallout();
            }
        } else if (this.props.type === COACHMARKS_TYPE.TOUR) {
            if (nextProps.showCoachmark) {
                this.startTour();
            } else {
                this.endTour();
            }
        }
    }

    componentWillUnmount () {
        document.removeEventListener('mousedown', this.onDocumentClick);
        if (this.props.type === COACHMARKS_TYPE.CALLOUT) {
            this.removeCallout();
        } else if (this.props.type === COACHMARKS_TYPE.TOUR) {
            this.endTour();
        }
    }

    onStepNext () {
        const currentStepNumber = hopscotch.getCurrStepNum() + 1;
        if (this.props.onStepNext) {
            this.props.onStepNext(currentStepNumber);
        }
    }

    onTourStart() {
        this.props.onTourStart();
    }

    onTourEnd () {
        this.props.onTourEnd();
    }

    onDocumentClick() {
        this.props.onDocumentClick(event);
    }

    configureTour () {
        this.props.tour.steps = this.props.steps;
        this.props.tour.onStart = this.onTourStart;
        this.props.tour.onEnd = this.onTourEnd;
        this.props.tour.onClose = this.onTourEnd;
        this.props.tour.onNext = this.onStepNext;
    }

    startTour () {
        const calloutMgr = hopscotch.getCalloutManager();
        calloutMgr.removeAllCallouts();
        if (!hopscotch.getCurrTour()) {
            hopscotch.startTour(this.props.tour);
        }
    }

    endTour () {
        if (hopscotch.getCurrTour()) {
            hopscotch.endTour();
        }
    }

    createCallout () {
        const calloutMgr = hopscotch.getCalloutManager();
        if (!calloutMgr.getCallout(this.props.callout.id)) {
            calloutMgr.createCallout(this.props.callout);
        }
    }

    removeCallout () {
        const calloutMgr = hopscotch.getCalloutManager();
        calloutMgr.removeAllCallouts();
    }

    render () {
        return (
            null
        );
    }
}

Coachmark.displayName = 'Coachmark';

Coachmark.propTypes = {
    type: oneOf(Object.values(COACHMARKS_TYPE)).isRequired,
    showCoachmark: bool,
    tour: shape({
        id: string.isRequired,
        bubblePadding: number,
        arrowWidth: number,
        bubbleWidth: number,
        customRenderer: string,
        wrapperClass: string,
        showPrevButton: bool
    }),
    callout: shape({
        id: string.isRequired,
        target: string.isRequired,
        content: string,
        placement: oneOf(Object.values(COACHMARKS_POSITION)),
        bubblePadding: number,
        bubbleWidth: number,
        arrowWidth: number,
        xOffset: number,
        yOffset: number,
        customRenderer: string,
        wrapperClass: string,
        showCloseButton: bool,
        arrowColor: string
    }),
    steps: arrayOf(shape({
        target: string.isRequired,
        title: string,
        content: string,
        placement: oneOf(Object.values(COACHMARKS_POSITION)),
        arrowColor: string,
        yOffset: number,
        xOffset: number
    })),
    onTourStart: func,
    onTourEnd: func,
    onDocumentClick: func,
    onStepNext: func
};

Coachmark.defaultProps = {
    type: COACHMARKS_TYPE.TOUR,
    showCoachmark: false,
    onTourStart: () => {},
    onStepNext: () => {},
    onDocumentClick: () => {},
    onTourEnd: () => {}
};

export default Coachmark;
