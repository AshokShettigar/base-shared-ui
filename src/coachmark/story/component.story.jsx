import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Container, Coachmark } from 'platform-common-ui';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';
import readme from '../readme.md';
import {
    Tour,
    Callout,
    Playground
} from './chapters';

const configuredWithInfo = withInfo({
    propTablesExclude: [
        Container,
        Coachmark
    ]
});

storiesOf('Coachmarks', module)
    .addDecorator(withKnobs)
    .addDecorator(withReadme([readme]))
    .add('Tour', configuredWithInfo(() => <Tour />))
    .add('Callout', configuredWithInfo(() => <Callout />))
    .add('Playground', configuredWithInfo(() => <Playground />));

