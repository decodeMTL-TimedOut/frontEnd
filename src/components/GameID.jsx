import React from 'react';
import { Link } from 'react-router';

class GameID extends React.Component {
  constructor() {
    super();

    this.state ={
    };
  }

  render() {
    return (
      <div className="main-page-gamelist">
        <li>
          <img src="https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-272x380.jpg" alt="lol"/>
          <p>League of Legends</p>
        </li>
      </div>
    )
  }
}

export default GameID;
