import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

const getStateWithToken = () => {
    return {
        profile: {
            token: localStorage.getItem("token"),
            logged: localStorage.getItem("logged")
        }
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, getStateWithToken(), composeEnhancers(applyMiddleware(thunk)));
export default store;

/**
 * Register async loaded reducers in store and replace
 * current state-reducer with the a new reducer
 *
 * @export
 * @param {Object} store - the store object
 * @param {Object} asyncReducer - async reducer modules
 */
store.asyncReducers = {};

function replaceReducers(defaultReducers) {
    const merged = Object.assign({}, defaultReducers, store.asyncReducers);
    const combined = combineReducers(merged);
    store.replaceReducer(combined);
}

export function injectAsyncReducers(asyncReducers) {
    const injectReducers = Object.keys(asyncReducers).reduce((all, item) => {
        if (store.asyncReducers[item]) {
            delete all[item];
        }

        return all;
    }, asyncReducers);

    store.asyncReducers = Object.assign({}, store.asyncReducers, injectReducers);
    replaceReducers(rootReducer);
}

// hot reloading for reducers
if (module.hot) {
    module.hot.accept('../reducers/rootReducer', () => {
        const nextReducer = require('../reducers/rootReducer').default; // eslint-disable-line

        replaceReducers(nextReducer);
    });
}