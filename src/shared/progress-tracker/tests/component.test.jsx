import React from 'react';
import { shallow } from 'enzyme';

import ProgressTracker from '../component';

const defaultProps = {
    activeStep: 1,
    steps: [{ title: 'Select targets' }, { title: 'Configure setup' }, { title: 'Schedule' }],
    className: 'className',
    stepsClassName: 'stepsClassName',
    stepClassName: 'stepClassName',
    stepIconClassName: 'stepIconClassName',
    stepTitleClassName: 'stepTitleClassName'
};

describe('Progress Tracker component', () => {
    it('should render component', () => {
        const wrapper = shallow(<ProgressTracker {...defaultProps} />);

        expect(wrapper).toMatchSnapshot();
    });

    it('should render component with custom active step', () => {
        const wrapper = shallow(<ProgressTracker {...defaultProps} activeStep="2" />);

        expect(wrapper).toMatchSnapshot();
    });
});
