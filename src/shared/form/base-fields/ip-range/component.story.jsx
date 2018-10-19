import { storiesOf } from '@storybook/react';
import { select, text, withKnobs } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';
import { withState } from '@dump247/storybook-state';

import readme from './readme.md';
import IPv4RangeField from './component';
import { IPv4, IPv4Range } from '../../validate';

storiesOf('IPv4 Fields Range', module)
    .addDecorator(withKnobs)
    .addDecorator(withReadme([readme]))
    .add('Default', withState({ startAddress: '111.111.1.1', endAddress: '2.2.2.2' })(({ store }) => {
        const addressProps = {
            label: 'Range',
            onChange: ({ start, end }) => store.set({ startAddress: start, endAddress: end }),
            onBlur: ({ start, end }) => store.set(
                {
                    startAddress: start,
                    endAddress: end,
                    startIPRangeError: store.state.startAddress && IPv4()(store.state.startAddress),
                    endIPRangeError: store.state.endAddress && IPv4()(store.state.endAddress),
                    ipRangeError: store.state.startAddress && store.state.endAddress
                        && IPv4Range()(store.state.startAddress, store.state.endAddress)
                }
            )
        };

        return (
            <div>
                <h4 className="story-title">Default</h4>
                <IPv4RangeField
                    {...addressProps}
                    value={{
                        start: store.state.startAddress,
                        end: store.state.endAddress
                    }}
                    error={store.state.ipRangeError}
                    startIPRangeError={store.state.startIPRangeError}
                    endIPRangeError={store.state.endIPRangeError}
                    autoWidth
                />
            </div>
        );
    }))
    .add('Error', () => (
        <div>
            <h4 className="story-title">Error</h4>
            <IPv4RangeField
                error
                label="Fields errors"
                value={{ start: '198.0.0.', end: '198.0.0.13' }}
                startIPRangeError={IPv4()('198.0.0.')}
                readOnly
                onChange={() => {
                }}
            />
            <IPv4RangeField
                error
                label="Fields errors"
                value={{ start: '198.0.0.', end: '198.' }}
                startIPRangeError={IPv4()('198.0.0.')}
                endIPRangeError={IPv4()('198.')}
                readOnly
                onChange={() => {
                }}
            />
            <IPv4RangeField
                error={IPv4Range()('198.0.0.5', '198.0.0.1')}
                label="Range error"
                value={{ start: '198.0.0.5', end: '198.0.0.1' }}
                readOnly
                onChange={() => {
                }}
            />
        </div>
    ))
    .add('Playground', withState({
        startAddress: undefined,
        endAddress: undefined
    })(({ store }) => {
        const states = select('State', {
            none: 'none',
            disabled: 'Disabled',
            readOnly: 'Read Only',
            required: 'Required',
            hidden: 'Hidden',
            autoWidth: 'Auto width of fields'
        });
        const props = {
            label: text('Label', 'Label'),
            error: text('Error msg', ''),
            disabled: states === 'disabled',
            readOnly: states === 'readOnly',
            required: states === 'required',
            hidden: states === 'hidden',
            autoWidth: states === 'autoWidth',
            onChange: ({ start, end }) => store.set({ startAddress: start, endAddress: end }),
            onBlur: ({ start, end }) => store.set({ startAddress: start, endAddress: end })
        };

        return (
            <div>
                <h4 className="story-title">Playground</h4>
                <IPv4RangeField
                    {...props}
                    startIPRangeError={store.state.startAddress && IPv4()(store.state.startAddress)}
                    endIPRangeError={store.state.endAddress && IPv4()(store.state.endAddress)}
                    value={{
                        start: store.state.startAddress,
                        end: store.state.endAddress
                    }}
                />
            </div>
        );
    }));
