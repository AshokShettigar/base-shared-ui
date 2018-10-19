import { storiesOf } from '@storybook/react';
import { withState } from '@dump247/storybook-state';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';
import faker from 'faker';

import readme from '../readme.md';
import Radio from '../component';
import styles from './component.scss';

storiesOf('Radio', module)
    .addDecorator(withKnobs)
    .addDecorator(withReadme([readme]))
    .add('Default', withState({ checked: 'first' })(({ store }) => (
        <div>
            <h4 className="story-title">Default</h4>
            <Radio
                name="radio"
                value="first"
                className={styles.radio}
                checked={store.state.checked === 'first'}
                onChange={(name, value) => !console.info({ name, value }) && store.set({ checked: value })}
            >
                First
            </Radio>
            <Radio
                name="radio"
                value="second"
                className={styles.radio}
                checked={store.state.checked === 'second'}
                onChange={(name, value) => !console.info({ name, value }) && store.set({ checked: value })}
            >
                Second
            </Radio>
        </div>
    )))
    .add('A lot of text', () => (
        <div className={styles.root}>
            <h4 className="story-title">A lot of text</h4>
            <Radio className={styles.radio}>{faker.lorem.paragraphs(1)}</Radio>
            <Radio className={styles.radio} checked>{faker.lorem.paragraphs(3)}</Radio>
            <Radio className={styles.radio}>{faker.lorem.paragraphs(1)}</Radio>
        </div>
    ))
    .add('Playground', () => {
        const props = {
            error: text('Error msg', ''),
            checked: boolean('Checked', true),
            disabled: boolean('Disabled', false),
            rendered: boolean('Rendered', true),
            hidden: boolean('Hidden', false)
        };

        return (
            <div className={styles.root}>
                <h4 className="story-title">Playground</h4>
                <Radio {...props}>{text('Children', 'Radio')}</Radio>
            </div>
        );
    });
