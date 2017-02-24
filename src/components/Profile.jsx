import React, { PropTypes as T }  from 'react';
import { Link } from 'react-router';
import AuthService from '../utils/AuthService';


export class Profile extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      profile: props.route.auth.getProfile()
    };
    //listen to profile_updated events to update internal state
    props.route.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile});
    });
  }

  render() {
    const { profile } = this.state;
    console.log(profile);
    return (
        <div className="profileAll">
          <div className="profileRow">
             <img className="profilePic" src={profile.picture} alt="Your profile" />
             <div className="textAll">
              <p><strong>Name: </strong> {profile.name}</p>
              <p><strong>Nickname: </strong> {profile.nickname}</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Profile;
