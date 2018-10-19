import React from 'react';
import { bool, string, node } from 'prop-types';
import classNames from 'classnames';

import { withRender } from '../../../../shared';
import styles from './component.scss';

const WithErrorField = props => {
    const rootClassName = classNames({
        [styles.withError]: props.error && props.hideErrorMessages,
        [styles.withErrorMessage]: props.error && !props.hideErrorMessages
    }, props.className);

    return (
        <div className={rootClassName}>
            {props.children}
            {props.error && !props.hideErrorMessages &&
            <span className={classNames(styles.error, 'withError')}>{props.error}</span>
            }
        </div>
    );
};

WithErrorField.propTypes = {
    error: string,
    hideErrorMessages: bool,

    className: string,
    children: node.isRequired
};

WithErrorField.defaultProps = {
    classNames: undefined,

    hideErrorMessages: false,
    error: undefined
};

export default withRender()(WithErrorField);
