import { storiesOf } from '@storybook/react';
import { boolean, text, select, withKnobs } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';
import { Table } from 'reactstrap';

import readme from '../readme.md';
import Icon from '../component';
import styles from './component.scss';
import { glyphsList, getGlyphs } from './helpers';

storiesOf('Icon', module)
    .addDecorator(withKnobs)
    .addDecorator(withReadme([readme]))
    .add('Glyphs', () => (
        <div>
            <h4 className="story-title">Glyphs</h4>
            <Table className={styles.table}>
                <tbody>
                    {getGlyphs(glyphsList)}
                </tbody>
            </Table>
        </div>
    ))
    .add('Sizes', () => (
        <div>
            <h4 className="story-title">Sizes</h4>
            <div className={styles.item}>
                <Icon glyph="calendar" />
                <span className={styles.label}>16px default</span>
            </div>
            <div className={styles.item}>
                <Icon size="mini" glyph="calendar" />
                <span className={styles.label}>10px mini</span>
            </div>
            <div className={styles.item}>
                <Icon size="tiny" glyph="calendar" />
                <span className={styles.label}>12px tiny</span>
            </div>
            <div className={styles.item}>
                <Icon size="small" glyph="calendar" />
                <span className={styles.label}>14px small</span>
            </div>
            <div className={styles.item}>
                <Icon size="medium" glyph="calendar" />
                <span className={styles.label}>16px medium</span>
            </div>
            <div className={styles.item}>
                <Icon size="large" glyph="calendar" />
                <span className={styles.label}>18px large</span>
            </div>
            <div className={styles.item}>
                <Icon size="big" glyph="calendar" />
                <span className={styles.label}>20px big</span>
            </div>
            <div className={styles.item}>
                <Icon size="huge" glyph="calendar" />
                <span className={styles.label}>22px huge</span>
            </div>
            <div className={styles.item}>
                <Icon size="massive" glyph="calendar" />
                <span className={styles.label}>24px massive</span>
            </div>
            <div className={styles.item}>
                <Icon size="banner" glyph="calendar" />
                <span className={styles.label}>48px banner</span>
            </div>
        </div>
    ))
    .add('States', () => (
        <div>
            <h4 className="story-title">States</h4>
            <div className={styles.item}>
                <Icon glyph="calendar" />
                <span className={styles.label}>default</span>
            </div>
            <div className={styles.item}>
                <Icon glyph="calendar" active />
                <span className={styles.label}>active</span>
            </div>
            <div className={styles.item}>
                <Icon glyph="calendar" disabled />
                <span className={styles.label}>disabled</span>
            </div>
        </div>
    ))
    .add('Static', () => (
        <div>
            <h4 className="story-title">Static</h4>
            <div className={styles.item}>
                <Icon glyph="calendar" />
                <span className={styles.label}>default</span>
            </div>
            <div className={styles.item}>
                <Icon glyph="calendar" controlled />
                <span className={styles.label}>controlled</span>
            </div>
            <div className={styles.item}>
                <Icon glyph="calendar" controlled={false} />
                <span className={styles.label}>uncontrolled</span>
            </div>
        </div>
    ))
    .add('Playground', () => {
        const states = select('States', {
            none: 'none',
            active: 'active',
            disabled: 'disabled'
        });

        const props = {
            glyph: text('Glyph', 'calendar'),
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
            active: states === 'active',
            disabled: states === 'disabled',
            controlled: boolean('Controlled', true),
            rendered: boolean('Rendered', true),
            hidden: boolean('Hidden', false),
            onClick: boolean('onClick', false) ? () => {} : undefined
        };

        return (
            <div>
                <h4 className="story-title">Playground</h4>
                <Icon {...props} />
            </div>
        );
    });

