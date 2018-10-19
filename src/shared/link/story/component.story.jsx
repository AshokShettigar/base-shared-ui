import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Container, Row, Col } from 'platform-common-ui';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';
import Link from '../component';
import linkReadMe from '../readme.md';

// Different states of Hyperlink
const ContextualVariations = () => (
    <Container fluid>
        <h4 className="story-title">Different states of Hyperlink</h4>
        <Row>
            <Col sm="2" md="3" xs="6" lg="3"><Link>Link</Link></Col>
            <Col sm="2" md="2" xs="6" lg="2"><div className="margin-top-5 margin-left-5">normal</div></Col>
        </Row>
        <Row>
            <Col sm="2" md="3" xs="6" lg="3"><Link active>Active Link</Link></Col>
            <Col sm="2" md="2" xs="6" lg="2"><div className="margin-top-5 margin-left-5">hover/active</div></Col>
        </Row>
        <Row>
            <Col sm="2" md="3" xs="6" lg="3"><Link disabled>Disabled Link</Link></Col>
            <Col sm="2" md="2" xs="6" lg="2"><div className="margin-top-5 margin-left-5">disabled</div></Col>
        </Row>
    </Container>
);

// Playground
const Playground = () => {
    const linkLabel = text('Link Text', 'Link');
    const options = {
        Select: 'Enabled',
        active: 'Hover/Active',
        disabled: 'Disabled'
    };
    const defaultValue = 'Enabled';
    const stateSelect = select('State', options, defaultValue);
    const stateProps = {
        active: stateSelect === 'active',
        disabled: stateSelect === 'disabled'
    };
    return (
        <Container fluid>
            <h4 className="story-title">Link Playground</h4>
            <Row>
                <Col sm="2" md="3" xs="6" lg="3"><Link {...stateProps}>{linkLabel}</Link></Col>
            </Row>
        </Container>
    );
};

storiesOf('Link', module)
    .addDecorator(withKnobs)
    .addDecorator(withReadme([linkReadMe]))
    .add('States', withInfo({
        propTablesExclude: [
            Container,
            Row,
            Col,
            Link
        ]
    })(ContextualVariations))
    .add('Playground', withInfo({
        propTablesExclude: [
            Container,
            Row,
            Col,
            Link
        ]
    })(Playground));
