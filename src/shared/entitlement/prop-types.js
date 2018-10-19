import reduce from 'lodash/reduce';
import keys from 'lodash/keys';
import { shape, bool } from 'prop-types';

import { ENTITLEMENT_FEATURES } from './index';

export default shape(
    reduce(keys(ENTITLEMENT_FEATURES), (result, key) => ({ ...result, [key]: bool }), {})
);
