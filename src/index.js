import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Main from './components/Main';
import Game from './components/Game';
import Party from './components/Party';
import Create from './components/Create';
import Edit from './components/Edit';
import Login from './components/Login';


// - MH ----------------------------------
import Profile from './components/Profile';
import AuthService from './utils/AuthService';
const auth = new AuthService('4PGOhC8qx2XmYBnE3uYFAxiKp30b8jrh', 'bertha.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' });
  }
};
// - MH ----------------------------------



const routes = (
    <Router history={browserHistory}>
      <Route path="/login" component={Login} auth={auth}/>
      <Route path="/profile" component={Profile} onEnter={requireAuth} auth={auth}/>
      <Route path="/" component={App} onEnter={requireAuth} auth={auth} >
        <IndexRoute component={Main} onEnter={requireAuth} auth={auth} />
        <Route path="game/:id" component={Game} onEnter={requireAuth} auth={auth} >
          <Route path="create" component={Create} onEnter={requireAuth} auth={auth}/>
        </Route>
      </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
