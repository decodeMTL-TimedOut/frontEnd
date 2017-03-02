import React from 'react';
import { Link } from 'react-router';
import AuthService from '../utils/AuthService';

import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class Login extends React.Component {
  render() {
    const { auth } = this.props.route;
    return (
      <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
        {/* <div className="button-row">
          <a href="#" className="button" onClick={this.saveAndContinue}>Request Invite</a>
        </div> */}
        <div className="login-page">
          <div className="login-logo">
            <img src="./img/TimedOut.svg" alt="" />
          </div>
          <span className="login-spacer"></span>
          <button className="login-button" onClick={auth.login.bind(this)}>LOGIN</button>
          <div className="giantbomber">Powered by the GiantBomb API!!</div>
        </div>
      </ReactCSSTransitionGroup>
      // <div className="login-page">
      //   <ReactCSSTransitionGroup transitionName="exampleLogo" transitionAppear={true}>
      //     <div className="login-logo">
      //       <img src="./img/TimedOut.svg" alt="" />
      //     </div>
      //   </ReactCSSTransitionGroup>
      //
      //   <ReactCSSTransitionGroup transitionName="exampleSpacer" transitionAppear={true}>
      //     <span className="login-spacer"></span>
      //   </ReactCSSTransitionGroup>
      //
      //   <ReactCSSTransitionGroup transitionName="exampleButton" transitionAppear={true}>
      //     <button className="login-button" onClick={auth.login.bind(this)}>LOGIN</button>
      //   </ReactCSSTransitionGroup>
      // </div>
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
