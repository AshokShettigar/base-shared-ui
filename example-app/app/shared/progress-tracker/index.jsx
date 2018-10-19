import React from 'react';
import BaseComponentView from 'app/components/base-component-view';

import { ProgressTracker } from '../index';

const STEPS = {
    2: [{ title: 'Select targets' }, { title: 'Configure setup' }],
    3: [{ title: 'Select targets' }, { title: 'Configure setup' }, { title: 'Schedule' }],
    4: [{ title: 'Select targets' }, { title: 'Configure setup' }, { title: 'Schedule' }, { title: 'Select targets' }],
    5: [{ title: 'Select targets' }, { title: 'Configure setup' }, { title: 'Schedule' }, { title: 'Select targets' }, { title: 'Configure setup' }]
};

export default class ModalExample extends BaseComponentView {
    state = {
        activeStep: 1,
        steps: 2
    };

    handleSelectStep = e => {
        this.setState({ activeStep: e.target.value });
    };

    handleSelectCountOfSteps = e => {
        this.setState({ steps: e.target.value });
    };

    getOptions() {
        return (
            <div>
                <div>
                    <b>Select step:</b>
                    <select onChange={this.handleSelectStep}>
                        {STEPS[this.state.steps].map((step, idx) => (
                            <option value={(idx + 1)}>{(idx + 1)} step</option>
                        ))}
                    </select>
                </div>
                <div>
                    <b>Select count of items:</b>
                    <select onChange={this.handleSelectCountOfSteps}>
                        <option value="2">2 steps</option>
                        <option value="3">3 steps</option>
                        <option value="4">4 steps</option>
                        <option value="5">5 steps</option>
                    </select>
                </div>
            </div>
        );
    }

    renderComponent() {
        return (
            <ProgressTracker steps={STEPS[this.state.steps]} activeStep={this.state.activeStep} />
        );
    }
}
