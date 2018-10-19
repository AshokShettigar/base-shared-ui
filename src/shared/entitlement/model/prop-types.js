import { string, arrayOf, shape } from 'prop-types';
import { API } from '../../index';


export default {
    props: shape({
        ...API.defaultPropTypes,
        entities: arrayOf(
            shape({
                name: string.isRequired
            }).isRequired
        ).isRequired
    })
};
