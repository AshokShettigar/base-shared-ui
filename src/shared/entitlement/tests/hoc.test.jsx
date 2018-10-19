import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { defaultInitialState } from '../../api';
import withEntitlement from '../hoc';

const mockStore = configureMockStore([thunk]);

describe('withEntitlement', () => {
    let wrapper;
    const Component = () => (<div>component</div>);
    const ComponentWithEntitlement = withEntitlement({ predicates: ['TASKING_BASIC'] })(Component);

    it('should render with prop negative entitlementPermissions', () => {
        const storeMock = {
            entitlement: {
                features: {
                    ...defaultInitialState,
                    entities: []
                }
            }
        };

        const store = mockStore(storeMock);

        wrapper = shallow(<ComponentWithEntitlement store={store} />).shallow();

        expect(wrapper).toMatchSnapshot();
    });

    it('should render with prop positive entitlementPermissions', () => {
        const storeMock = {
            entitlement: {
                features: {
                    ...defaultInitialState,
                    loaded: true,
                    entities: [{ name: 'TASKING_BASIC' }]
                }
            }
        };

        const store = mockStore(storeMock);

        wrapper = shallow(<ComponentWithEntitlement store={store} />).shallow();

        expect(wrapper).toMatchSnapshot();
    });
});
