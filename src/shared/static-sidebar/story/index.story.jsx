import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Container } from 'platform-common-ui';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';
import StaticSideBar from '../component';
import staticSideBarReadme from '../readme.md';
import {
    States,
    Playground
} from './chapters';

storiesOf('StaticSideBar', module)
    .addDecorator(withKnobs)
    .addDecorator(withReadme([staticSideBarReadme]))
    .add('States', withInfo({
        propTablesExclude: [
            States,
            StaticSideBar,
            Container
        ]
    })(States))
    .add('Playground', withInfo({
        propTablesExclude: [
            Playground,
            States,
            StaticSideBar,
            Container
        ]
    })(Playground));

