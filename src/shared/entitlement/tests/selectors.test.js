import { defaultInitialState } from '../../api';

import EntitlementSelector from '../selectors';

describe('Entitlement selector', () => {
    it('empty entitlement selector ', () => {
        const store = {
            entitlement: {
                features: {
                    ...defaultInitialState,
                    entities: []
                }
            }
        };

        expect(EntitlementSelector(store)).toEqual({
            entitlementFeatureNames: [],
            entitlementFeatures: {
                ...defaultInitialState,
                entities: []
            }
        });
    });

    it('loaded entitlement selector ', () => {
        const store = {
            entitlement: {
                features: {
                    ...defaultInitialState,
                    entities: [
                        { name: 'TASKING_BASIC' },
                        { name: 'TASKING_DYNAMIC_GROUPS' }
                    ],
                    loaded: true
                }
            }
        };

        expect(EntitlementSelector(store)).toEqual({
            entitlementFeatureNames: ['TASKING_BASIC', 'TASKING_DYNAMIC_GROUPS'],
            entitlementFeatures: {
                ...defaultInitialState,
                entities: [
                    { name: 'TASKING_BASIC' },
                    { name: 'TASKING_DYNAMIC_GROUPS' }
                ],
                loaded: true
            }
        });
    });
});
