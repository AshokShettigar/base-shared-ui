import { storiesOf } from '@storybook/react';
import { boolean, text, select, withKnobs } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';

import readme from '../readme.md';
import { KINDS } from '../../constants';
import { getButtonAsset } from './helpers';
import Button from '../component';

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .addDecorator(withReadme([readme]))
    .add('Primary', () => getButtonAsset(KINDS.PRIMARY))
    .add('Secondary', () => getButtonAsset(KINDS.SECONDARY))
    .add('Playground', () => {
        const props = {
            kind: select('Kind', {
                primary: 'primary',
                secondary: 'secondary'
            }),
            icon: text('Icon', 'calendar'),
            size: select('Sizes', {
                small: 'small',
                medium: 'medium',
                large: 'large'
            }),
            rendered: boolean('Rendered', true),
            hidden: boolean('Hidden', false),
            loading: boolean('Loading', false),
            disabled: boolean('Disabled', false),
            active: boolean('Active', false)
        };

        return (
            <div>
                <h4 className="story-title">Playground</h4>
                <Button {...props} onClick={() => console.info('CLICK!')} />
            </div>
        );
    });
