import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Container } from 'platform-common-ui';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';
import Label from '../component';
import labelReadMe from '../readme.md';

// Contextual variations

const ContextualVariations = () => (
    <Container fluid>
        <h4 className="story-title">Contextual Variations</h4>
        <Label color="secondary">Label</Label><br /><br />
        <Label color="danger">Label</Label><br /><br />
        <Label color="warning">Label</Label><br /><br />
        <Label color="intermediate">Label</Label><br /><br />
        <Label color="success">Label</Label><br /><br />
        <Label color="primary">Label</Label><br /><br />
        <Label color="dark">Label</Label>
    </Container>
);

// Playground
const Playground = () => {
    const labelText = text('Label Text', 'Label');
    const options = {
        secondary: 'secondary',
        danger: 'danger',
        warning: 'warning',
        intermediate: 'intermediate',
        success: 'success',
        primary: 'primary',
        dark: 'dark'
    };
    const defaultValue = 'secondary';
    const colorSelect = select('Color', options, defaultValue);

    return (
        <Container fluid>
            <h4 className="story-title">Label Playground</h4>
            <Label color={colorSelect}>{labelText}</Label><br />
        </Container>
    );
};

storiesOf('Label', module)
    .addDecorator(withReadme([labelReadMe]))
    .addDecorator(withKnobs)
    .add('Contextual Variations', withInfo({
        propTablesExclude: [
            Container,
            Label
        ]
    })(ContextualVariations))
    .add('Playground', withInfo({
        propTablesExclude: [
            Container,
            Label
        ]
    })(Playground));
