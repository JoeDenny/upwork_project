import * as React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { routes } from './constants';
import Dashboard from './containers/DashboardNews';
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import Profile from './containers/Profile';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';

store.subscribe(() => {
    const st: any = store.getState();

    localStorage.setItem('store', JSON.stringify({
        auth: st.auth
    }));
});

const getPath = (url: string) => `/${url}`;

export const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact={true} path={getPath('')}>
                    <Redirect to={routes.LOGIN_PATH} />
                </Route>
                <Route exact={true} path={getPath(routes.LOGIN_PATH)} component={Login} />
                <Route exact={true} path={getPath(routes.REGISTER_PATH)} component={Register} />
                <Route exact={true} path={getPath(routes.DASHBOARD_PATH)} component={Dashboard} />
                <Route exact={true} path={getPath(routes.PROFILE_PATH)} component={Profile} />
            </Switch>
        </BrowserRouter>
    </Provider>
);