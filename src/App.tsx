import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routes } from './constants';
import Dashboard from './containers/Dashboard';
import './App.css';

const getPath = (url: string) => `/${url}`;

export const App = () => (
    <BrowserRouter>
        <Switch>
            {/* <Route exact path={LOGIN_PATH} component={Login} />
            <Route exact path={REGISTER_PATH} component={Register} /> */}
            <Route exact={true} path={getPath(routes.DASHBOARD_PATH)} component={Dashboard} />
        </Switch>
    </BrowserRouter>
);