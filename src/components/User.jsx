import React from 'react';
import { Link } from 'react-router';

import Game from './Game';

class User extends React.Component {
  render() {
    return (
      <div>
        <h2>User Page</h2>
        <Link to="game">
          <p>Game</p>
        </Link>
      </div>
    )
  }
}

export default User;
