import { mount } from 'enzyme';
import { Coachmark } from 'platform-common-ui';

describe('coachmark', () => {
    const onTourEnd = jest.fn();
    const onStepNext = jest.fn();
    const onTourStart = jest.fn();
    const handleDocumentClick = jest.fn();

    const tour = {
        id: 'desktop-summary-tour',
        steps: [],
        scrollTopMargin: 100,
        bubblePadding: 0,
        arrowWidth: 10,
        customRenderer: 'rmm_bubble',
        wrapperClass: 'rmm-hopscotch',
        i18n: {
            prevBtn: 'Back',
            nextBtn: 'Next',
            doneBtn: 'Close',
            closeTooltip: 'Close'
        }
    };

    const steps = [
        {
            target: 'coachmark-step1',
            title: 'Welcome to CoachMarks!',
            content: 'Hey there! This is an example CoachMarks tour.',
            placement: 'bottom',
            arrowOffset: 60
        },
        {
            target: 'coachmark-step2',
            title: 'This is the title for step 2',
            content: 'Content for step 2 goes here',
            placement: 'left',
            showPrevButton: true,
            yOffset: 10,
            width: 235
        },
        {
            target: 'coachmark-step3',
            placement: 'bottom',
            title: 'This is the title for step 3',
            content: 'Content for step 3 goes here',
            arrowColor: '#0D3560',
            showPrevButton: true
        },
        {
            target: 'coachmark-step4',
            placement: 'right',
            title: 'Tour ends here',
            content: 'If you want to say anything, here is your last chance',
            showPrevButton: true
        }
    ];

    it('should render the coachmark tour', function() {
        const tree = mount(
            <Coachmark
                tour={tour}
                steps={steps}
                type="tour"
                showCoachmark
                onTourStart={onTourStart}
                onTourEnd={onTourEnd}
                onStepNext={onStepNext}
                handleDocumentClick={handleDocumentClick}
            />
        );
        expect(tree).toMatchSnapshot();
    });
});

