import React from 'react';
import { Link } from 'react-router';


class Login extends React.Component {
  render() {
    return (
      <div className="login-page">
        <h2>Login Page</h2>
        <form>
          <input type="text" placeholder="Enter your username"></input>
          <input type="text" placeholder="Enter your password"></input>
          <button type="submit">Submit</button>
        </form>
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
