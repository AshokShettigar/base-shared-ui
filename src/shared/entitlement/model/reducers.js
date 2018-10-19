import { API } from '../../index';
import * as actionTypes from './action-types';

const initialState = {
    ...API.defaultInitialState,
    entities: []
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
    case actionTypes.LOAD_ENTITLEMENT_FEATURES:
        return {
            ...state,
            loading: true
        };
    case actionTypes.LOAD_ENTITLEMENT_FEATURES_SUCCESS:
        return {
            ...state,
            loading: false,
            loaded: true,
            entities: payload.entities
        };
    case actionTypes.LOAD_ENTITLEMENT_FAILURE:
        return {
            ...state,
            loading: false,
            error: payload.error
        };

    default:
        return state;
    }
};
