// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );







import './css/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import Main from './components/Main';
// import User from './User';
import Game from './components/Game';
import Party from './components/Party';
// import SearchBar from './SearchBar';
import Create from './components/Create';
import Edit from './components/Edit';
// import GameSearch from './GameSearch';
import Login from './components/Login';

// import Search from './components/Search';
// import User from './components/User';
// import Followers from './components/Followers';
// import Following from './components/Following';
// import GitHubRepos from './components/GitHubRepos';

/*
Rendering a router will output the right component tree based on the current URL.
Nested routes' components will be passed down to the parent as `this.props.children`

If the URL is /, then <App/> will be rendered, and this.props.children will be <Search/> (this is the IndexRoute)
If the URL is /user/ziad-saab then <App/> will be rendered, and this.props.children will be <User/>
The <User/> instance will be passed a prop called `params`. It will be an object with `{username: 'ziad-saab'}`
*/


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
