import { Container } from 'platform-common-ui';
import { StaticSidebar } from '../../index';

const States = () => (
    <Container fluid>
        <h4 className="story-title">Static sidebar states</h4>
        <h5>Expanded</h5>
        <div style={{ height: '250px' }}>
            <StaticSidebar
                isExpand
                title="TASK AND SEQUENCES RUN FOR LAST 48 HOURS"
            >
                <div>Content</div>
            </StaticSidebar>
        </div>
        <br />
        <h5>Collapsed</h5>
        <div style={{ height: '250px' }}>
            <StaticSidebar
                title="TASK AND SEQUENCES RUN FOR LAST 48 HOURS"
            >
                <div>Content</div>
            </StaticSidebar>
        </div>
        <br />
        <h5>On the next step</h5>
        <div style={{ height: '250px' }}>
            <StaticSidebar
                isExpand
                title="PARTICULAR TASK"
                onBack={() => {}}
            >
                <div>Next content</div>
            </StaticSidebar>
        </div>
    </Container>
);

export default States;
