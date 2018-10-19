import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Container } from 'platform-common-ui';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';
import InlineNotification from '../component';
import labelReadMe from '../readme.md';
import {
    Playground,
    Palette,
    Types,
    onCloseState
} from './chapters';

storiesOf('Inline Notification', module)
    .addDecorator(withKnobs)
    .addDecorator(withReadme([labelReadMe]))
    .addDecorator(withKnobs)
    .add('Types', withInfo({
        propTablesExclude: [
            Container,
            InlineNotification,
            Palette
        ]
    })(Types))
    .add('OnClose', withInfo({
        propTablesExclude: [
            Container,
            InlineNotification,
            Palette
        ]
    })(onCloseState))
    .add('Playground', withInfo({
        propTablesExclude: [
            Container,
            InlineNotification,
            InlineNotification.Title,
            InlineNotification.Message,
            Palette
        ]
    })(Playground));
