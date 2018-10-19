import React from 'react';
import { number, string, arrayOf, shape } from 'prop-types';
import classNames from 'classnames';
import uuidv4 from 'uuid';

import { Icon } from 'platform-common-ui';

import styles from './component.scss';

const ProgressTracker = props => {
    const activeStep = props.activeStep - 1;
    const getStepClassName = idx => classNames(
        styles.step,
        props.stepClassName,
        { [styles.previous]: activeStep > idx },
        { [styles.current]: activeStep === idx }
    );

    return (
        <div className={classNames(styles.root, props.className)}>
            <ul className={classNames(styles.steps, props.stepsClassName)}>
                {props.steps.map((step, idx) => (
                    <li key={uuidv4()} className={getStepClassName(idx)}>
                        <i className={classNames(styles.stepIcon, props.stepIconClassName)}>
                            {activeStep > idx ? <Icon icon="checkmark" /> : (idx + 1)}
                        </i>
                        <span className={classNames(styles.stepTitle, props.stepTitleClassName)}>
                            {step.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

ProgressTracker.propTypes = {
    activeStep: number,
    steps: arrayOf(shape({
        title: string
    })).isRequired,
    className: string,
    stepsClassName: string,
    stepClassName: string,
    stepIconClassName: string,
    stepTitleClassName: string
};

ProgressTracker.defaultProps = {
    activeStep: 1,
    className: undefined,
    stepsClassName: undefined,
    stepClassName: undefined,
    stepIconClassName: undefined,
    stepTitleClassName: undefined
};

export default ProgressTracker;
