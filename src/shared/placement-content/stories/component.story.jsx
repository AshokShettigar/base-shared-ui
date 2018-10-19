import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';
import { withState } from '@dump247/storybook-state';
import { withReadme } from 'storybook-readme';
import * as faker from 'faker';

import { Button } from '../../button';
import { Placement } from '../../index';
import PlacementContent from '../component';

import styles from './component.scss';
import readme from '../readme.md';

const mockContent = faker.lorem.paragraphs(1);

storiesOf('PlacementContent', module)
    .addDecorator(withKnobs)
    .addDecorator(withReadme([readme]))
    .add('Default', withState({ isOpen: false })(({ store }) => {
        const targetProps = {
            size: 'small',
            onClick: () => store.set({ isOpen: !store.state.isOpen })
        };

        return (
            <div className={styles.root}>
                <h4 className="story-title">Default</h4>
                <Placement
                    isOpen={store.state.isOpen}
                    position="bottom"
                    className={styles.placement}
                    target={<Button {...targetProps}>Placement</Button>}
                    onDismiss={() => store.set({ isOpen: false })}
                >
                    {({ position }) => (<PlacementContent position={position}>{mockContent}</PlacementContent>)}
                </Placement>
            </div>
        );
    }))
    .add('Positions', () => {
        class ComponentWithRef extends Component {
            state = {
                buttonRef: null
            };

            innerRef = buttonRef => {
                this.setState({ buttonRef });
            };

            render() {
                const requiredProps = {
                    isOpen: true,
                    target: this.state.buttonRef,
                    children: ({ position }) => <PlacementContent position={position}>{position}</PlacementContent>,
                    onDismiss: () => {}
                };

                return (
                    <div className={styles.root}>
                        <h4 className="story-title">Positions</h4>
                        <div className={styles.placement}>
                            <Button innerRef={this.innerRef} size="small" onClick={() => {}}>With Placement Content</Button>
                            <Placement {...requiredProps} position="top" />
                            <Placement {...requiredProps} position="left" />
                            <Placement {...requiredProps} position="right" />
                            <Placement {...requiredProps} position="bottom" />
                        </div>
                    </div>
                );
            }
        }

        return <ComponentWithRef />;
    })
    .add('Playground', () => {
        const offset = text('Offset', '8px');
        const requiredProps = {
            isOpen: boolean('isOpen', false),
            target: (
                <Button size="small" onClick={() => {}}>
                    {text('Target Content', 'Placement')}
                </Button>
            ),
            offset,
            className: styles.placement,
            children: ({ position }) => (// eslint-disable-line
                <PlacementContent position={position} offset={offset}>
                    {text('Placement Content', 'Placement Content')}
                </PlacementContent>
            ),
            onDismiss: () => {}
        };

        const props = {
            position: select('Position', {
                'auto-start': 'auto-start',
                auto: 'auto',
                'auto-end': 'auto-end',
                'top-start': 'top-start',
                top: 'top',
                'top-end': 'top-end',
                'right-start': 'right-start',
                right: 'right',
                'right-end': 'right-end',
                'bottom-end': 'bottom-end',
                bottom: 'bottom',
                'bottom-start': 'bottom-start',
                'left-end': 'left-end',
                left: 'left',
                'left-start': 'left-start'
            }, 'bottom'),
            rendered: boolean('Rendered', true),
            hidden: boolean('Hidden', false)
        };

        return (
            <div className={styles.root}>
                <h4 className="story-title">Playground</h4>
                <Placement {...requiredProps} {...props} />
            </div>
        );
    });

