import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';
import faker from 'faker';

import readme from '../readme.md';
import Checkbox from '../component';
import styles from './component.scss';

storiesOf('Checkbox', module)
    .addDecorator(withKnobs)
    .addDecorator(withReadme([readme]))
    .add('Default', withState({ checked: undefined })(({ store }) => (
        <div>
            <h4 className="story-title">Default</h4>
            <Checkbox
                {...store.state}
                onChange={({ checked }) => !console.info(checked) && store.set({ checked })}
            >
                Default
            </Checkbox>
        </div>
    )))
    .add('Single', () => (
        <div className={styles.root}>
            <h4 className="story-title">Single</h4>
            <div className={styles.item}><Checkbox>Default</Checkbox></div>
            <div className={styles.item}><Checkbox checked>Checked</Checkbox></div>
            <div className={styles.item}><Checkbox disabled>Disabled</Checkbox></div>
            <div className={styles.item}><Checkbox disabled checked>Disabled and checked</Checkbox></div>
            <div className={styles.item}><Checkbox indeterminate>Indeterminate</Checkbox></div>
            <div className={styles.item}><Checkbox disabled indeterminate>Disabled and indeterminate</Checkbox></div>
        </div>
    ))
    .add('Multi', () => (
        <div className={styles.root}>
            <h4 className="story-title">Multi</h4>
            <div className={styles.item}><Checkbox multiple>Multiple</Checkbox></div>
            <div className={styles.item}><Checkbox multiple indeterminate>Multiple and indeterminate</Checkbox></div>
            <div className={styles.item}><Checkbox multiple checked>Multiple and Checked</Checkbox></div>
            <div className={styles.item}><Checkbox multiple disabled>Multiple and Disabled</Checkbox></div>
        </div>
    ))
    .add('A lot of text', () => (
        <div className={styles.root}>
            <h4 className="story-title">A lot of text</h4>
            <div className={styles.item}>
                <Checkbox>{faker.lorem.paragraphs(1)}</Checkbox>
            </div>
            <div className={styles.item}>
                <Checkbox checked>{faker.lorem.paragraphs(3)}</Checkbox>
            </div>
            <div className={styles.item}>
                <Checkbox>{faker.lorem.paragraphs(1)}</Checkbox>
            </div>
        </div>
    ))
    .add('Playground', () => {
        const states = select('State', {
            none: 'none',
            checked: 'Checked',
            disabled: 'Disabled',
            readOnly: 'Read Only'
        });
        const props = {
            error: text('Error msg', ''),
            checked: states === 'checked',
            disabled: states === 'disabled',
            readOnly: states === 'readOnly',
            multiple: boolean('Multiple', false),
            indeterminate: boolean('Indeterminate', false),
            rendered: boolean('Rendered', true),
            hidden: boolean('Hidden', false)
        };

        return (
            <div className={styles.root}>
                <h4 className="story-title">Playground</h4>
                <Checkbox {...props}>{text('Children', 'Children')}</Checkbox>
            </div>
        );
    });
