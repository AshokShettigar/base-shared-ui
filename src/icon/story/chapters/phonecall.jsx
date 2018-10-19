import { Container } from 'platform-common-ui';
import IconGrid from './icon-grid';
import ICON_MAP from '../../../utils/icon-map';

// Phone Call Icons
const PhoneCallIcons = () => (
    <Container fluid>
        <h4 className="story-title">Phone Call Icons</h4>
        <h6 className="icon-description">
            These icons are used for phone calls.</h6>
        <IconGrid
            iconMap={ICON_MAP.PHONE_CALL}
        />
    </Container>
);

export default PhoneCallIcons;
