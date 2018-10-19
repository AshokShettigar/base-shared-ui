import find from 'lodash/find';
import keys from 'lodash/keys';
import reduce from 'lodash/reduce';
import includes from 'lodash/includes';

export const getPermissions = (predicates = [], featuresNames = []) =>
    reduce(predicates, (result, predicate) => ({
        ...result,
        [predicate]: includes(featuresNames, predicate)
    }), {});

export const hasEntitlement = (permissions, feature) =>
    Boolean(
        find(
            keys(permissions),
            featureFromPermission =>
                featureFromPermission === feature && permissions[feature]
        )
    );
