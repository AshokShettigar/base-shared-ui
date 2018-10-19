import classNames from 'classnames';
import { string, oneOf, func } from 'prop-types';

import { getSpriteUrl } from 'platform-common-ui/utils';
import ROOT_CLASS from './constants';

export const Icon = props => {
    const spriteUrl = props.spriteUrl || getSpriteUrl();
    const className = classNames(ROOT_CLASS, props.className, {
        [`${ROOT_CLASS}--size-${props.size}`]: props.size
    });

    /* eslint-disable jsx-a11y/no-static-element-interactions */
    return (
        <i onClick={props.onClick} className={className}>
            <svg>
                <use xlinkHref={`${spriteUrl}#${props.icon}`} />
            </svg>
        </i>
    );
};

Icon.propTypes = {
    className: string,
    icon: string.isRequired,
    onClick: func,
    size: oneOf([
        'ultra-small',
        'extra-small',
        'small',
        'medium',
        'large',
        'extra-large'
    ]),
    spriteUrl: string
};

Icon.defaultProps = {
    className: undefined,
    onClick: undefined,
    size: 'extra-small',
    spriteUrl: undefined
};

export default Icon;
