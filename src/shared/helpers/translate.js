import { IntlProvider } from 'react-intl';

const { intl } = new IntlProvider({ locale: 'en', messages: {} }, {}).getChildContext();

export const translate = intl.formatMessage;
