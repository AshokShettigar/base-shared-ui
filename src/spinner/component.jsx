import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Spinner(props) {
    const className = classNames('spinner', props.className, {
        [`spinner--color-${props.color}`]: props.color,
        [`spinner--size-${props.size}`]: props.size
    });

    return <i className={className} />;
}

Spinner.propTypes = {
    className: PropTypes.string,
    color: PropTypes.oneOf([
        'azure-radiance'
    ]),
    size: PropTypes.oneOf([
        'ultra-small',
        'extra-small',
        'small',
        'medium',
        'large',
        'extra-large'
    ])
};

Spinner.defaultProps = {
    color: undefined,
    size: 'extra-large'
};

export default Spinner;
