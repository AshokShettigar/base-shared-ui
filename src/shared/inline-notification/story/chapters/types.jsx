import { Container } from 'platform-common-ui';
import Palette from './palette';

const isTitleEnable = true;
// Breadcrumbs
const Types = () => (
    <div>
        <Container fluid>
            <h4 className="story-title">Inline Notifications Types</h4>
            <Palette isTitle={isTitleEnable} />
        </Container>
    </div>
);
export default Types;
