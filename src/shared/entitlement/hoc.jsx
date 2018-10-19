import { Component } from 'react';
import { string, arrayOf, func, node } from 'prop-types';
import { connect } from 'react-redux';
import omit from 'lodash/omit';

import { getPermissions } from './helpers';
import { entitlementFeaturePropTypes, fetchEntitlementFeatures } from './model';
import mapStateToProps from './selectors';

export default ({ predicates }) => WrappedComponent => {
    class WithEntitlement extends Component {
        static propTypes = {
            entitlementFeatures: entitlementFeaturePropTypes.props,
            entitlementFeatureNames: arrayOf(string).isRequired,
            fetchEntitlementFeatures: func.isRequired,
            children: node
        };

        componentDidMount() {
            const { loading, loaded, error } = this.props.entitlementFeatures;

            if (!loading && !loaded && !error) {
                this.props.fetchEntitlementFeatures();
            }
        }

        render() {
            const permissions = getPermissions(predicates, this.props.entitlementFeatureNames);
            const props = omit(this.props, ['entitlementFeatures', 'fetchEntitlementFeatures', 'entitlementFeatureNames']);

            return (
                <WrappedComponent {...props} entitlementPermissions={permissions}>
                    {this.props.children}
                </WrappedComponent>
            );
        }
    }

    return connect(mapStateToProps, { fetchEntitlementFeatures })(WithEntitlement);
};
