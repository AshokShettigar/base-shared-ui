import { Icon } from 'platform-common-ui';
import classNames from 'classnames';
import {
    arrayOf,
    string
} from 'prop-types';

const Palette = props => {
    const icons = props.icons.map((icon, ind, iconList) => {
        const iconClassName = classNames(
            'btn-icon',
            {
                'margin-right-8': ind < iconList.length - 1,
                disabled: props.iconState === 'disabled',
                active: props.iconState === 'hover/active'
                    || props.iconState === 'hover',
                white: props.iconState === 'white'
            }
        );

        return (
            <Icon key={icon} className={iconClassName} size="extra-small" icon={icon} />
        );
    });

    return (
        <div className="margin-bottom-10">
            {icons}
            <div className="icon-state">{props.iconState}</div>
        </div>
    );
};

Palette.propTypes = {
    icons: arrayOf(string).isRequired,
    header: string,
    iconState: string
};

Palette.defaultProps = {
    icons: []
};

export default Palette;
