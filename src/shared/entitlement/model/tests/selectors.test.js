import { defaultInitialState } from '../../../api';
import { getEntitlementFeaturesSelector } from '../selectors';

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

        expect(getEntitlementFeaturesSelector(store)).toEqual({
            ...defaultInitialState,
            entities: []
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

        expect(getEntitlementFeaturesSelector(store)).toEqual({
            ...defaultInitialState,
            entities: [
                { name: 'TASKING_BASIC' },
                { name: 'TASKING_DYNAMIC_GROUPS' }
            ],
            loaded: true
        });
    });
});
