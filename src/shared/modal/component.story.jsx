import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';
import { withState } from '@dump247/storybook-state';
import faker from 'faker';

import readme from './readme.md';
import Modal from './container';
import { Button } from '../button';
import { ProgressTracker } from '../progress-tracker';
import { ModalFooterElement } from './elements/footer';

const STEPS = [{ title: 'First step' }, { title: 'Second step' }];

storiesOf('Modal', module)
    .addDecorator(withKnobs)
    .addDecorator(withReadme([readme]))
    .add('Default', withState({ isOpen: false, step: 0 })(({ store }) => {
        const props = {
            position: 'bottom',
            title: 'Modal title',
            isOpen: store.state.isOpen,
            sidebar: 'Modal sidebar',
            header: <ProgressTracker steps={STEPS} activeStep={store.state.step + 1} />,
            footer: (
                <ModalFooterElement
                    submitLabel={store.state.step ? 'Previous Step' : 'Next Step'}
                    dismissLabel="Cancel"
                    onSubmit={() => { store.set({ step: store.state.step === 0 ? 1 : 0 }); }}
                    onDismiss={() => store.set({ isOpen: false })}
                />
            ),
            onDismiss: () => store.set({ isOpen: false })
        };

        return (
            <div>
                <h4 className="story-title">Default</h4>
                <Button onClick={() => store.set({ isOpen: !store.state.isOpen })}>Open modal</Button>
                <Modal {...store.state} {...props}>
                    {store.state.step ? faker.lorem.paragraphs(100) : faker.lorem.sentences(1)}
                </Modal>
            </div>
        );
    }))
    .add('Playground', () => {
        const isALotOfText = boolean('A lot of text', false);
        const props = {
            position: select('Position', {
                middle: 'middle',
                bottom: 'bottom'
            }, 'middle'),
            title: text('Title', 'Modal title'),
            isOpen: boolean('isOpen', true),
            sidebar: text('Sidebar', 'Modal sidebar'),
            header: text('Header', 'Modal header'),
            footer: text('Footer', 'Modal footer'),
            rendered: boolean('Rendered', true)
        };

        return (
            <div>
                <h4 className="story-title">Default</h4>
                <Modal {...props}>
                    {isALotOfText ? faker.lorem.paragraphs(100) : faker.lorem.sentences(1)}
                </Modal>
            </div>
        );
    });
