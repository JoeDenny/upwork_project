import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import auth from '../containers/Auth/reducers';
import dashboard from '../containers/DashboardNews/reducers';
import StoreModel from '../store/StoreModel';
import { LOGOUT } from '../containers/Auth/actions';
import request from '../services/Request';

let initialState = undefined;
const localStorageState = localStorage.getItem('store');

if (localStorageState) {
    initialState = JSON.parse(localStorageState);

    if (initialState.auth.token) {
        request.saveToken(initialState.auth.token);
    }
}

const reducers = combineReducers({
    auth,
    dashboard
});

const rootReducer = (state: StoreModel, action: any) => {
    if (action.type === LOGOUT) {
        (state as any) = undefined;
    }

    return reducers(state, action);
};

const store = createStore(
    rootReducer,
    initialState,
    process.env.NODE_ENV === 'development' ?
    compose(
        applyMiddleware(thunk),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    ) :
    applyMiddleware(thunk),
);

export default store;