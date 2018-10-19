import { combineReducers, compose, createStore } from 'redux';
import { reducer as toastReducer } from 'react-redux-toastr';
import { popupReducer } from 'react-redux-popup';

const reducers = combineReducers({
    popup: popupReducer,
    toastr: toastReducer
});
const createStoreWithMiddleware = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore);
export default createStoreWithMiddleware(reducers);
