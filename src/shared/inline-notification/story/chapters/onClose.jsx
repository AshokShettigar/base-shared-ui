import { Container } from 'platform-common-ui';
import Palette from './palette';

const handleOnClose = () => {
};

const isTitleEnable = true;
// Breadcrumbs
const onCloseState = () => (
    <div>
        <Container fluid>
            <h4 className="story-title">Inline Notifications With onClose Enabled</h4>
            <Palette handleOnClose={handleOnClose} isTitle={isTitleEnable} />
        </Container>
    </div>
);
export default onCloseState;
