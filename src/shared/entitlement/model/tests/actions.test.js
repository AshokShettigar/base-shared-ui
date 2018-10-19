import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';

import API from '../../../api';

import * as actionTypes from '../action-types';
import * as actions from '../actions';

describe('entitlement actions', () => {
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    const mockedHttp = new MockAdapter(API.http);

    it('should successfully called fetchEntitlementFeatures ', () => {
        const url = API.getUrlByTemplate(actions.URL, { partnerId: API.partnerId });
        const mock = [{ property: 'property' }];

        mockedHttp.onGet(url).reply(200, mock);

        const expected = [
            { type: actionTypes.LOAD_ENTITLEMENT_FEATURES },
            {
                type: actionTypes.LOAD_ENTITLEMENT_FEATURES_SUCCESS,
                payload: { entities: mock }
            }
        ];

        const store = mockStore({});
        return store.dispatch(actions.fetchEntitlementFeatures()).then(() => {
            expect(store.getActions()).toEqual(expected);
        });
    });

    it('should not successfully called fetchEntitlementFeatures', () => {
        const url = API.getUrlByTemplate(actions.URL, { partnerId: API.partnerId });

        mockedHttp.onGet(url).reply(404);

        const expected = [
            { type: actionTypes.LOAD_ENTITLEMENT_FEATURES },
            { type: actionTypes.LOAD_ENTITLEMENT_FAILURE }
        ];

        const store = mockStore({});
        return store.dispatch(actions.fetchEntitlementFeatures()).catch(() => {
            const storeActions = store.getActions();

            expect(storeActions[0].type).toEqual(expected[0].type);
            expect(storeActions[1].type).toEqual(expected[1].type);
        });
    });
});
