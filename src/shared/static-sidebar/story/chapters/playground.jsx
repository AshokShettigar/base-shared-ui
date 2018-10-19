import { Container } from 'platform-common-ui';
import { text, boolean } from '@storybook/addon-knobs/react';
import * as faker from 'faker';
import { StaticSidebar } from '../../index';

const ComplexTitle = () => (<div>
    <span style={{ backgroundColor: 'black', color: 'white', padding: '4px', borderRadius: '10px' }}>Complex title</span>
</div>);

const Playground = () => {
    let title = text('Title text', 'TASKS AND SEQUENCES');
    const titleAsComponent = boolean('Complex title', false);
    title = titleAsComponent ? <ComplexTitle title={title} /> : title;

    const isExpand = boolean('Is sidebar exanded', false);
    const onBack = boolean('Is next step', false) ? () => {} : undefined;

    let content = onBack ? 'Next content' : 'Content';
    const isALotOfContent = boolean('A lot of content', false);
    content = !isALotOfContent ? content : faker.lorem.paragraphs(20);

    return (
        <Container fluid>
            <h4 className="story-title">Static Sidebar Playground</h4>
            <div style={{ height: '250px', display: 'flex' }}>
                <div style={{ flex: '1 1 auto', backgroundColor: 'white' }}>Content</div>
                <StaticSidebar
                    isExpand={isExpand}
                    title={title}
                    onBack={onBack}
                >
                    <div>{content}</div>
                </StaticSidebar>
            </div>
        </Container>
    );
};

export default Playground;
