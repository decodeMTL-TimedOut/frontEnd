import React from 'react';
import { Link } from 'react-router';

// var c9 = 'https://timedout-leblancbryan.c9users.io/'
// var cors = 'https://cors-anywhere.herokuapp.com/'
//
// var baseUrl = `${cors}${c9}`;

class GameID extends React.Component {
  constructor() {
    super();

    this.state ={
    };
  }

  render() {
    var gameData = this.props.gameData;
    var gameLink =`/game/${gameData.gameId}`;
    return (
      <div className="main-page-gamelist">
        <div className="main-page-gamelist-container">
          <div className="main-page-gamelist-art">
            <Link to={gameLink}><img src={gameData.art} alt="lol"/></Link>
          </div>
        </div>
        <div className="main-page-gamelist-title">
          <Link to={gameLink}>{gameData.gameName}</Link>
        </div>
      </div>
    )
  }
}

export default GameID;
