import { isEmpty } from 'lodash';

import { translate } from '../../helpers';
import i18n from './i18n';
import { emailRegExpPattern, IPv4RegExpPattern } from './helpers';

export const email = msg => value => {// eslint-disable-line
    if (!isEmpty(value) && !emailRegExpPattern.test(value)) {
        return msg || translate(i18n.email);
    }
};

export const required = msg => value => {// eslint-disable-line
    if (isEmpty(value)) {
        return msg || translate(i18n.required);
    }
};

export const IPv4 = msg => value => {// eslint-disable-line
    if (!isEmpty(value) && !new RegExp(IPv4RegExpPattern).test(value)) {
        return msg || translate(i18n.IPAddress);
    }
};

export const IPv4Range = msg => (start = '', end = '') => {// eslint-disable-line
    const isValidValues = new RegExp(IPv4RegExpPattern).test(start) && new RegExp(IPv4RegExpPattern).test(end);
    const isInvalid = start === end || start.replace(/\./g, '') > end.replace(/\./g, '') || start > end;

    if (isValidValues && isInvalid) {
        return msg || translate(i18n.IPAddressRange);
    }
};
