import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';

import withRender from './hoc';
import readme from './readme.md';

const ComponentToWrap = () => <div>Component</div>;
const ComponentToWrapWithRender = withRender()(ComponentToWrap);

storiesOf('withRender', module)
    .addDecorator(withKnobs)
    .addDecorator(withReadme([readme]))
    .add('Playground', () => (
        <ComponentToWrapWithRender
            hidden={boolean('hidden', false)}
            rendered={boolean('rendered', true)}
        />
    ));
