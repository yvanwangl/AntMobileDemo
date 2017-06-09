import React from 'react';
import {Router, Route, IndexRedirect, Redirect} from 'dva/router';
import IndexPage from '../routes/IndexPage/IndexPage';
import Login from '../routes/Login/Login';
import HomePage from '../routes/HomePage/HomePage';
import Customer from '../routes/Customer/Customer';
import Agent from '../routes/Agent/Agent';
import Store from '../routes/Store/Store';
import User from '../routes/User/User';
import NotFoundPage from '../routes/NotFoundPage/NotFoundPage';

function RouterConfig({history}) {
    return (
        <Router history={history}>
            <Route path='/' component={IndexPage}>
                <IndexRedirect to="/login"/>
                <Route path='/login' component={Login}/>
                <Route path='/home' component={HomePage}/>
                <Route component={HomePage}>
                    <Route path='/customer/:type' component={Customer}/>
                    <Route path='/agent/:type' component={Agent}/>
                    <Route path='/store/:type' component={Store}/>
                    <Route path='/user/:type' component={User}/>
                </Route>
                <Route path="/*" component={NotFoundPage}/>
            </Route>
        </Router>
    );
}

export default RouterConfig;
