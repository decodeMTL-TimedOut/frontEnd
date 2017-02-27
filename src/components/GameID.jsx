import React from 'react';
import { Link } from 'react-router';

class GameID extends React.Component {
  constructor() {
    super();

    this.state ={
    };
  }

  handleClick_GameID() {

  }

  render() {
    var gameData = this.props.gameData;
    return (
      <div className="main-page-gamelist" onClick={this.handleClick_GameID.bind(this)}>
        <div className="main-page-gamelist-container">
          <div className="main-page-gamelist-art">
            <a href=""><img src={gameData.art} alt="lol"/></a>
          </div>
        </div>
        <div className="main-page-gamelist-title">
          <a href="#">{gameData.gameName}</a>
        </div>
      </div>
    )
  }
}

export default GameID;
