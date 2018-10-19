import { defineMessages } from 'react-intl';

export default defineMessages({
    email: {
        id: 'commonUI.validate.email',
        defaultMessage: 'Invalid email address'
    },
    required: {
        id: 'commonUI.validate.required',
        defaultMessage: 'This field is required'
    },
    IPAddress: {
        id: 'commonUI.validation.IPAddress',
        defaultMessage: 'Invalid IP address'
    },
    IPAddressRange: {
        id: 'commonUI.validation.IPAddressRange',
        defaultMessage: 'The start IP address should be less than the end IP address'
    }
});
