import React from 'react';
import { string, bool, oneOf } from 'prop-types';
import classNames from 'classnames';
import { values } from 'lodash';

import { withRender } from '../shared';
import { SIZES } from '../constants';
import styles from './component.scss';

const Spinner = props => {
    const className = classNames(styles.root, props.className, {
        [styles.centered]: props.centered
    });

    const spinnerClassName = classNames(styles.spinner, props.spinnerClassName, {
        [styles[props.color]]: props.color,
        [styles[props.size]]: props.size
    });

    return (
        <div className={className}>
            <i className={spinnerClassName} />
        </div>
    );
};

Spinner.propTypes = {
    color: oneOf([
        'black',
        'white',
        'azure'
    ]),
    size: oneOf(values(SIZES)),
    centered: bool,

    className: string,
    spinnerClassName: string
};

Spinner.defaultProps = {
    color: undefined,
    size: SIZES.MEDIUM,
    centered: false,

    className: undefined,
    spinnerClassName: undefined
};

export default withRender()(Spinner);
