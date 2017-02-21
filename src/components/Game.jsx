import React from 'react';
import { Link } from 'react-router';


class Game extends React.Component {
  render() {
    return (
      <div>
        <h2>Game Page</h2>
        <Link to="/">Main page</Link>
        <Link to="/game/create">Create Page</Link>
        {this.props.children}
      </div>
    )
  }
}

export default Game;
