import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';

import readme from './readme.md';
import Spinner from './component';

storiesOf('Spinner', module)
    .addDecorator(withKnobs)
    .addDecorator(withReadme([readme]))
    .add('Sizes', () => (
        <div>
            <h4 className="story-title">Sizes</h4>
            <div><Spinner /> 16px default</div>
            <div><Spinner size="mini" /> 10px mini</div>
            <div><Spinner size="tiny" /> 12px tiny</div>
            <div><Spinner size="small" /> 14px small</div>
            <div><Spinner size="medium" /> 16px medium</div>
            <div><Spinner size="large" /> 18px large</div>
            <div><Spinner size="big" /> 20px big</div>
            <div><Spinner size="huge" /> 22px huge</div>
            <div><Spinner size="massive" /> 24px massive</div>
            <div><Spinner size="banner" /> 48px banner</div>
        </div>
    ))
    .add('Colors', () => (
        <div>
            <h4 className="story-title">Colors</h4>
            <div style={{ color: 'red' }}><Spinner /> default</div>
            <div style={{ color: 'green' }}><Spinner /> default</div>
            <div><Spinner color="white" /> white</div>
            <div><Spinner color="black" /> black</div>
            <div><Spinner color="azure" /> azure</div>
        </div>
    ))
    .add('Centered', () => (
        <div>
            <h4 className="story-title">Centered</h4>
            <Spinner centered size="massive" />
        </div>
    ))
    .add('Playground', () => {
        const props = {
            color: select('Colors', {
                none: 'none',
                white: 'white',
                black: 'black',
                azure: 'azure'
            }),
            size: select('Sizes', {
                none: 'none',
                mini: 'mini',
                tiny: 'tiny',
                small: 'small',
                medium: 'medium',
                large: 'large',
                big: 'big',
                huge: 'huge',
                massive: 'massive',
                banner: 'banner'
            }),
            rendered: boolean('Rendered', true),
            hidden: boolean('Hidden', false),
            centered: boolean('Centered', false)
        };

        return (
            <div>
                <h4 className="story-title">Playground</h4>
                <Spinner {...props} />
            </div>
        );
    });
