import {
    objectOf,
    string,
    oneOfType,
    arrayOf,
    bool
} from 'prop-types';
import classNames from 'classnames';
import Palette from './palette';
import {
    ICONS_WITH_WHITE_STATE,
    ICONS_WITH_FILLED_STATE
} from '../../../utils/icon-map';

const IconGrid = props => {
    const { iconMap, showStates } = props;
    const iconList = Object.keys(iconMap).map(icon => {
        const iconID = iconMap[icon];
        const icons = typeof iconID === 'string'
            ? iconID.split()
            : iconID;
        const showWhiteState = ICONS_WITH_WHITE_STATE
            .indexOf(iconID) >= 0;
        const filledIcon = ICONS_WITH_FILLED_STATE[iconID];
        const hoverStateLabel = filledIcon ? 'hover' : 'hover/active';

        return (
            <div key={icon} className={classNames('icon-col', props.className)}>
                <h5 className="icon-sub-header">{icon}</h5>
                {
                    showStates
                    ? (
                        <div>
                            {showWhiteState && (
                                <Palette
                                    icons={icons}
                                    iconState="white"
                                />
                            )}
                            <Palette
                                icons={icons}
                                iconState="disabled"
                            />
                            <Palette
                                icons={icons}
                                iconState="enabled"
                            />
                            <Palette
                                icons={icons}
                                iconState={hoverStateLabel}
                            />
                            {filledIcon && (
                                <Palette
                                    icons={filledIcon.split()}
                                    iconState="active"
                                />
                            )}
                        </div>
                    )
                    : (
                        <Palette
                            header={icon}
                            icons={icons}
                        />
                    )
                }
            </div>
        );
    });

    return (
        <div>
            {iconList}
        </div>
    );
};

IconGrid.propTypes = {
    iconMap: objectOf(oneOfType([
        string,
        arrayOf(string)
    ])).isRequired,
    showStates: bool,
    className: string
};

IconGrid.defaultProps = {
    iconMap: {}
};

export default IconGrid;
