import { Container } from 'platform-common-ui';
import IconGrid from './icon-grid';
import ICON_MAP from '../../../utils/icon-map';

// Status Icons
const StatusIcons = () => (
    <Container fluid>
        <h4 className="story-title">Status Icons</h4>
        <h6 className="icon-description">
            These icons are used to help emphasize the status of something.
             If these icons are displayed in table, they should be 14px by 14px</h6>
        <IconGrid
            iconMap={ICON_MAP.STATUS}
        />
    </Container>
);

export default StatusIcons;
