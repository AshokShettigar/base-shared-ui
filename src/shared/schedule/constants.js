import { map } from 'lodash';
import { DAYS_OF_WEEK } from '../form';

export { SELECTED_FIELD } from '../form';

export const UNSPECIFIC_INDICATORS = [{
    label: 'First',
    value: 'first'
}, {
    label: 'Second',
    value: 'second'
}, {
    label: 'Third',
    value: 'third'
}, {
    label: 'Fourth',
    value: 'fourth'
}, {
    label: 'Fifth',
    value: 'fifth'
}, {
    label: 'Last',
    value: 'last'
}];

export const unspecificDaysOptions = map(DAYS_OF_WEEK, date => ({
    label: date.name,
    value: date.number
}));
