export const TOUR = {
    id: 'storybook-demo-tour',
    steps: [],
    scrollTopMargin: 100,
    bubblePadding: 0,
    arrowWidth: 10,
    bubbleWidth: 300,
    customRenderer: 'rmm_bubble',
    wrapperClass: 'rmm-hopscotch',
    showPrevButton: true
};

export const CALLOUT = {
    id: 'storybook-demo-callout',
    target: '.btn-icon',
    placement: 'right',
    content: 'This is a callout that displays and information message to the user.',
    bubblePadding: 0,
    bubbleWidth: 300,
    arrowWidth: 10,
    yOffset: -15,
    customRenderer: 'rmm_bubble',
    wrapperClass: 'rmm-hopscotch',
    showCloseButton: false
};

export const STORYBOOK_DEMO_STEPS = [
    {
        target: 'firstStep',
        title: 'First Step',
        content: 'This is an introductory step that appears once user lands on the page',
        placement: 'top',
        arrowColor: '#0D3560',
        yOffset: -20
    },
    {
        target: 'secondStep',
        title: 'Second Step',
        content: 'This is second step that shows the first feature',
        placement: 'right'
    },
    {
        target: 'thirdStep',
        title: 'Third Step',
        content: 'This is a third step showing next feature. User can move previous or next from here',
        placement: 'left'
    },
    {
        target: 'fourthStep',
        title: 'Fourth Step',
        content: 'This is the last step. User can close the tour here.',
        placement: 'bottom',
        arrowColor: '#0D3560'
    }
];
