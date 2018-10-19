import { Container } from 'platform-common-ui';
import IconGrid from './icon-grid';
import ICON_MAP from '../../../utils/icon-map';

// Action Icons
const ActionIcons = () => (
    <Container fluid>
        <h4 className="story-title">Action Icons</h4>
        <h6 className="icon-description">
            These icons are used for actions.</h6>
        <IconGrid
            iconMap={ICON_MAP.ACTION}
            showStates
            className="action-icons"
        />
    </Container>
);

export default ActionIcons;
