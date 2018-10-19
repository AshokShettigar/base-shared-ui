import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Container, SignalPopupWrapper } from 'platform-common-ui';
import { withReadme } from 'storybook-readme';
import readme from '../readme.md';
import { Default } from './chapters';

const configuredWithInfo = withInfo({
    propTablesExclude: [
        Container,
        SignalPopupWrapper,
        Default
    ]
});

storiesOf('Signal Popup', module)
    .addDecorator(withReadme([readme]))
    .add('Default', configuredWithInfo(() => <Default />));
