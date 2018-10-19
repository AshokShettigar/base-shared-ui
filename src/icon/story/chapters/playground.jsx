import { Container, Icon } from 'platform-common-ui';
import { select, selectV2 } from '@storybook/addon-knobs/react';
import ICON_MAP from '../../../utils/icon-map';

// Icon Playground
const Playground = () => {
    const sizeOptions = {
        'ultra-small': 'Ultra small',
        'extra-small': 'Extra small',
        small: 'Small',
        medium: 'Medium',
        large: 'Large',
        'extra-large': 'Extra large'
    };
    const defaultSizeValue = 'small';
    const sizeSelect = select('Size', sizeOptions, defaultSizeValue);

    const iconCategoryOptions = {
        status: 'Status',
        action: 'Action',
        object: 'Object',
        phonecall: 'Phone Call'
    };
    const iconCategorySelect = select('Category', iconCategoryOptions, 'status');

    const expandIconMap = iconMap => {
        const expandedMap = { ...iconMap };
        Object.keys(iconMap)
            .filter(icon => Array.isArray(iconMap[icon]))
            .forEach(icon => {
                delete expandedMap[icon];
                iconMap[icon].forEach(iconID => {
                    expandedMap[`${icon} (${iconID})`] = iconID;
                });
            });
        return expandedMap;
    };

    let iconOptions;
    let iconSelect;

    switch (iconCategorySelect) {
    case 'object':
        iconOptions = expandIconMap(ICON_MAP.OBJECT);
        iconSelect = 'home';
        break;
    case 'action':
        iconOptions = expandIconMap(ICON_MAP.ACTION);
        iconSelect = 'search';
        break;
    case 'phonecall':
        iconOptions = expandIconMap(ICON_MAP.PHONE_CALL);
        iconSelect = 'call-in';
        break;
    default:
        iconOptions = expandIconMap(ICON_MAP.STATUS);
        iconSelect = 'noc_working';
    }
    iconSelect = selectV2('Icon', iconOptions, iconSelect);

    return (
        <Container fluid>
            <h4 className="story-title">Icon Playground</h4>
            <Icon
                className="btn-icon"
                size={sizeSelect}
                icon={iconSelect}
            />
        </Container>
    );
};

export default Playground;
