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

const routes = (
    <Router history={browserHistory}>
      <Route path="/login" component={Login}/>
      <Route path="/" component={App}>
        <IndexRoute component={Main}/> {/*signup/login*/}
        <Route path="game" component={Game}> {/*game listing page / user news/home page*/}
          <Route path="create" component={Create}/>
          <Route path="edit" component={Edit}/>
          <Route path="party" component={Party}/>
        </Route>
      </Route>
    </Router>
);

ReactDOM.render(routes, document.getElementById('root'));
