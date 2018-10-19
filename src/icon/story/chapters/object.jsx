import { Container } from 'platform-common-ui';
import IconGrid from './icon-grid';
import ICON_MAP from '../../../utils/icon-map';

// Object Icons
const ObjectIcons = () => (
    <Container fluid>
        <h4 className="story-title">Object Icons</h4>
        <h6 className="icon-description">
            These icons are used to represent objects.</h6>
        <IconGrid
            iconMap={ICON_MAP.OBJECT}
        />
    </Container>
);

export default ObjectIcons;
