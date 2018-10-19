import * as actionTypes from './action-types';
import { API } from '../../index';

export const URL = '/entitlement/v1/partners/{{partnerId}}/features';

export const fetchEntitlementFeatures = () => dispatch => {
    dispatch({ type: actionTypes.LOAD_ENTITLEMENT_FEATURES });

    return API.load(API.getUrlByTemplate(URL, { partnerId: API.partnerId }))
        .then(entities => {
            dispatch({
                type: actionTypes.LOAD_ENTITLEMENT_FEATURES_SUCCESS,
                payload: { entities }
            });

            return Promise.resolve(entities);
        })
        .catch(error => {
            dispatch({
                type: actionTypes.LOAD_ENTITLEMENT_FAILURE,
                payload: { error }
            });

            return Promise.reject(error);
        });
};
