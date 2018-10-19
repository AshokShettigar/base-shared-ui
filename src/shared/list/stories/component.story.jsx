import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withState } from '@dump247/storybook-state';
import { withReadme } from 'storybook-readme';

import { List } from '../../list';

import styles from './component.scss';
import readme from '../readme.md';

const list = [
    {
        name: 'Run 1',
        scripts: [
            { name: 'Add Task' },
            { name: 'Edit Task' },
            { name: 'Delete Task' },
            { name: 'Add Task' },
            { name: 'Edit Task', label: 'task' },
            { name: 'Delete Task', disabled: true }
        ]
    },
    {
        type: 'delimiter'
    },
    {
        name: 'Run 2',
        scripts: [
            { name: 'Add Task', disabled: true },
            { name: 'Edit Task' },
            { name: 'Delete Task' },
            { name: 'Add Task' },
            { name: 'Edit Task' },
            { name: 'Delete Task' },
            { name: 'Add Task' },
            { name: 'Edit Task' },
            { name: 'Delete Task' },
            { name: 'Add Task' },
            { name: 'Edit Task' },
            { name: 'Delete Task' },
            { name: 'Add Task' },
            { name: 'Edit Task' },
            { name: 'Delete Task' },
            { name: 'Add Task' }
        ]
    },
    {
        name: 'Run 1',
        disabled: true,
        scripts: [
            { name: 'Add Task' },
            { name: 'Edit Task' },
            { name: 'Delete Task' },
            { name: 'Add Task' },
            { name: 'Edit Task' },
            { name: 'Delete Task' }
        ]
    }
];

storiesOf('List', module)
    .addDecorator(withKnobs)
    .addDecorator(withReadme([readme]))
    .add('Default', withState({ isOpen: false, isOpen2: false })(() => (
        <div className={styles.root}>
            <h4 className="story-title">Default</h4>
            <div
                className={styles.placement}
            >
                <List
                    className={styles.list}
                    list={list}
                    subList={({ scripts }) => scripts}
                    onSelect={console.log}
                    onDismiss
                />
            </div>
        </div>
        )));
