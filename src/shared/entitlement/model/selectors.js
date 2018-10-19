import { createSelector } from 'reselect';
import get from 'lodash/get';

export const getEntitlementFeatures = state => get(state, 'entitlement.features');

export const getEntitlementFeaturesSelector = createSelector([
    getEntitlementFeatures
], ({ entities, loading, loaded, error }) => ({
    entities,
    loading,
    loaded,
    error
}));
