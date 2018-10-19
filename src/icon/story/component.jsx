import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Container, Icon } from 'platform-common-ui';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';
import iconReadme from '../readme.md';
import {
    StatusIcons,
    ActionIcons,
    ObjectIcons,
    PhoneCallIcons,
    Playground,
    IconGrid
} from './chapters';

const configuredWithInfo = withInfo({
    propTablesExclude: [
        Container,
        Icon,
        IconGrid
    ]
});

storiesOf('Icon', module)
    .addDecorator(withKnobs)
    .addDecorator(withReadme([iconReadme]))
    .add('Status', configuredWithInfo(StatusIcons))
    .add('Action', configuredWithInfo(ActionIcons))
    .add('Object', configuredWithInfo(ObjectIcons))
    .add('Phone Call', configuredWithInfo(PhoneCallIcons))
    .add('Playground', configuredWithInfo(Playground));
