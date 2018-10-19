import decorateToastAction from './helpers';
import { TOAST_TYPES } from './constants';

const REMOVE_BY_TYPE = 'removeByType';

const message = decorateToastAction.bind(null, TOAST_TYPES.MESSAGE);
const success = decorateToastAction.bind(null, TOAST_TYPES.SUCCESS);
const info = decorateToastAction.bind(null, TOAST_TYPES.INFO);
const warning = decorateToastAction.bind(null, TOAST_TYPES.WARNING);
const error = decorateToastAction.bind(null, TOAST_TYPES.ERROR);
const removeByType = decorateToastAction.bind(null, REMOVE_BY_TYPE);

export default {
    message,
    success,
    info,
    warning,
    error,
    removeByType
};
