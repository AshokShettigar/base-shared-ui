import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs/react';
import { withState } from '@dump247/storybook-state';
import { withReadme } from 'storybook-readme';
import * as faker from 'faker';

import { DatePickerField } from '../../form';
import Placement from '../component';
import { Button } from '../../button';

import styles from './component.scss';
import readme from '../readme.md';

const mockContent = faker.lorem.paragraphs(1);

storiesOf('Placement', module)
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
                    {() => <div className={styles.content}>{mockContent}</div>}
                </Placement>
            </div>
        );
    }))
    .add('Ref', () => {
        class ComponentWithRef extends Component {
            state = {
                isOpen: false
            };

            innerRef = ref => {
                this.buttonRef = ref;
            };

            handleClick = () => this.setState({ isOpen: !this.state.isOpen });

            render() {
                return (
                    <div className={styles.root}>
                        <h4 className="story-title">Ref</h4>
                        <div className={styles.placement}>
                            <Button
                                innerRef={this.innerRef}
                                onClick={this.handleClick}
                                size="small"
                            >
                                Placement
                            </Button>
                            <Placement
                                isOpen={this.state.isOpen}
                                position="bottom"
                                target={this.buttonRef}
                                onDismiss={() => this.setState({ isOpen: false })}
                            >
                                {() => <div className={styles.content}>{mockContent}</div>}
                            </Placement>
                        </div>
                    </div>
                );
            }
        }

        return <ComponentWithRef />;
    })
    .add('Nested', withState({ isOpen: false, value: null })(({ store }) => {
        const targetProps = {
            size: 'small',
            onClick: () => store.set({ isOpen: !store.state.isOpen })
        };

        return (
            <div className={styles.root}>
                <h4 className="story-title">Nested</h4>
                <Placement
                    isOpen={store.state.isOpen}
                    position="bottom"
                    className={styles.placement}
                    target={<Button {...targetProps}>Date Picker</Button>}
                    onDismiss={() => store.set({ isOpen: false })}
                >
                    {() => (
                        <div className={styles.content}>
                            <DatePickerField
                                onChange={(name, value) => store.set({ value })}
                                field={{ name: 'datePicker', value: store.state.value }}
                            />
                        </div>
                    )}
                </Placement>
            </div>
        );
    }))
    .add('Playground', () => {
        const requiredProps = {
            isOpen: boolean('isOpen', false),
            target: (
                <Button size="small" onClick={() => {}}>
                    {text('Target Content', 'Placement')}
                </Button>
            ),
            className: styles.placement,
            children: () => <div className={styles.content}>{mockContent}</div>,
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
            isPortal: boolean('isPortal', false),
            rendered: boolean('Rendered', true),
            hidden: boolean('Hidden', false)
        };

        return (
            <div className={styles.root}>
                <h4 className="story-title">Playground</h4>
                <Placement {...requiredProps} {...props} />
            </div>
        );
    })
    .add('With context', () => {
        // eslint-disable-next-line react/no-multi-comp
        class ComponentWithRef extends Component {
            state = {
                isOpen: false
            };

            setContextRef = el => {
                this.contextRef = el;
            };

            innerRef = ref => {
                this.buttonRef = ref;
            };

            handleClick = () => this.setState({ isOpen: !this.state.isOpen });

            render() {
                return (
                    <div className={styles.root}>
                        <h4 className="story-title">Ref</h4>
                        <div className={styles.placement}>
                            <div className={styles.contextBlock} ref={this.setContextRef}>
                                <h3 className={styles.contextTitle}>Context area <br />Dismiss doesn&#39;t work here</h3>
                                <Button
                                    innerRef={this.innerRef}
                                    onClick={this.handleClick}
                                    size="small"
                                >
                                    Placement
                                </Button>
                                <Placement
                                    isOpen={this.state.isOpen}
                                    position="bottom"
                                    target={this.buttonRef}
                                    context={this.contextRef}
                                    onDismiss={() => this.setState({ isOpen: false })}
                                >
                                    {() => <div className={styles.content}>{mockContent}</div>}
                                </Placement>
                            </div>
                        </div>
                    </div>
                );
            }
        }

        return <ComponentWithRef />;
    });

