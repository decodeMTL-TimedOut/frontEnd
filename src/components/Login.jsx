import React from 'react';
import { Link } from 'react-router';
import AuthService from '../utils/AuthService';


class Login extends React.Component {
  render() {
    const { auth } = this.props.route;
    return (
      <div className="login-page">
        <h2>Login Page</h2>
        <button className="loginButton" onClick={auth.login.bind(this)}>Login</button>
      </div>
    )
  }
}

export default Login;


// const checkForLogin = (nextState, replace, callback) => {
//   if (user_is_loged_in) {
//     // do nothing
//   } else {
//     replace(`/login`)
//   }
// }
//
// <Route path="/users/:userId/teams" onEnter={checkForLogin} />
