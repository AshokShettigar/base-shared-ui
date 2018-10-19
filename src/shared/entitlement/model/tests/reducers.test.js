import * as actionTypes from '../action-types';
import { defaultInitialState } from '../../../api';
import entitlementFeaturesReducers from '../reducers';

describe('Entitlement Features Reducers', () => {
    it('initialize & default', () => {
        const initialState = {
            ...defaultInitialState,
            entities: []
        };

        const action = {};

        expect(entitlementFeaturesReducers(initialState, action)).toEqual({
            ...initialState
        });
    });

    it('request', () => {
        const initialState = {
            ...defaultInitialState,
            entities: []
        };

        const action = {
            type: actionTypes.LOAD_ENTITLEMENT_FEATURES
        };

        expect(entitlementFeaturesReducers(initialState, action)).toEqual({
            ...initialState,
            loading: true
        });
    });

    it('success', () => {
        const initialState = {
            ...defaultInitialState,
            entities: []
        };

        const action = {
            type: actionTypes.LOAD_ENTITLEMENT_FEATURES_SUCCESS,
            payload: { entities: [{ param: 'example' }] }
        };

        expect(entitlementFeaturesReducers(initialState, action)).toEqual({
            ...initialState,
            loading: false,
            loaded: true,
            entities: [{ param: 'example' }]
        });
    });

    it('error', () => {
        const initialState = {
            ...defaultInitialState,
            entities: []
        };

        const action = {
            type: actionTypes.LOAD_ENTITLEMENT_FAILURE,
            payload: { error: 'error' }
        };

        expect(entitlementFeaturesReducers(initialState, action)).toEqual({
            ...initialState,
            loading: false,
            error: 'error'
        });
    });
});
