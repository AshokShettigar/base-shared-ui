import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';
import { withReadme } from 'storybook-readme';
import { withState } from '@dump247/storybook-state';

import readme from './readme.md';
import IPv4Field from './component';
import { IPv4, IPv4Range } from '../../validate';
import { FieldWithError } from '../shared/with-error';

storiesOf('IPv4 Field', module)
    .addDecorator(withKnobs)
    .addDecorator(withReadme([readme]))
    .add('Default', withState({ IPAddress: undefined })(({ store }) => {
        const defaultProps = {
            label: 'Label',
            error: store.state.IPAddress && IPv4()(store.state.IPAddress),
            onChange: ({ target: { value } }) => console.warn('onChange ', IPv4()(value), value),
            onBlur: ({ target: { value } }) => store.set({ IPAddress: value })
        };

        return (
            <div>
                <h4 className="story-title">Default</h4>
                <IPv4Field {...store.state} {...defaultProps} />
            </div>
        );
    }))
    .add('Error', () => (
        <div>
            <h4 className="story-title">Default</h4>
            <IPv4Field label="Label" value="198.0.0" error={IPv4()('198.0.0')} readOnly onChange={() => {}} />

            <h4 className="story-title" style={{ marginTop: '40px' }}>Range</h4>
            <IPv4Field label="start address" value="198.0.1" error={IPv4()('198.0.1')} readOnly onChange={() => {}} >
                <span style={{ marginRight: '5px' }}>-</span>
            </IPv4Field>
            <IPv4Field label="end address" value="255.255.255" error={IPv4()('255.255.255')} readOnly onChange={() => {}} />

            <FieldWithError error={IPv4Range()('198.0.0.5', '198.0.0.1')}>
                <IPv4Field label="start address" value="198.0.0.5" readOnly onChange={() => {}} >
                    <span style={{ marginRight: '5px' }}>-</span>
                </IPv4Field>
                <IPv4Field label="end address" value="198.0.0.1" readOnly onChange={() => {}} />
            </FieldWithError>

            <FieldWithError error={IPv4Range()('198.0.0.5', '198.0.0.5')}>
                <IPv4Field label="start address" value="198.0.0.5" readOnly onChange={() => {}} >
                    <span style={{ marginRight: '5px' }}>-</span>
                </IPv4Field>
                <IPv4Field label="end address" value="198.0.0.5" readOnly onChange={() => {}} />
            </FieldWithError>

            <FieldWithError error={IPv4Range()('9.99.99.99', '99.9.99.99')}>
                <IPv4Field label="start address" value="9.99.99.99" readOnly onChange={() => {}} >
                    <span style={{ marginRight: '5px' }}>-</span>
                </IPv4Field>
                <IPv4Field label="end address" value="99.9.99.99" readOnly onChange={() => {}} />
            </FieldWithError>
        </div>
    ))
    .add('Playground', () => {
        const states = select('State', {
            none: 'none',
            disabled: 'Disabled',
            readOnly: 'Read Only',
            required: 'Required',
            hidden: 'Hidden'
        });
        const props = {
            label: text('Label', 'Label'),
            children: text('Children', ''),
            error: text('Error msg', ''),
            disabled: states === 'disabled',
            readOnly: states === 'readOnly',
            required: states === 'required',
            hidden: states === 'hidden'
        };

        return (
            <div>
                <h4 className="story-title">Playground</h4>
                <IPv4Field {...props} onChange={() => {}} />
            </div>
        );
    });
