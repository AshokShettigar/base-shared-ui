import { createSelector } from 'reselect';
import map from 'lodash/map';

import { getEntitlementFeaturesSelector } from './model';

const getEntitlementFeatureNames = features => map(features, ({ name }) => name);

export default createSelector([
    getEntitlementFeaturesSelector
], ({ entities, loading, loaded, error }) => ({
    entitlementFeatureNames: getEntitlementFeatureNames(entities),
    entitlementFeatures: {
        entities,
        loading,
        loaded,
        error
    }
}));
