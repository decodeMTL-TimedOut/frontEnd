import React from 'react';
import { browserHistory as history } from 'react-router';
import { Link } from 'react-router';

import GameID from './GameID';

var c9 = 'https://timedout-leblancbryan.c9users.io/'
var cors = ''
// https://cors-anywhere.herokuapp.com/
var baseUrl = `${cors}${c9}`;

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      gamedata: []
    };
  }

  fetchData() {
    if(this.props.router.location.query.q) {
      var query = this.props.router.location.query.q;
      var searchUrl = `${baseUrl}search?q=${query}`;

    }
    else {
      var searchUrl = `${baseUrl}main`;
    }

    console.log("hello" ,searchUrl)
    fetch(searchUrl)
      .then(response => response.json())
      .then(
        gamedata => {
          console.log(gamedata, "gamedataover here")
          this.setState ({
            gamedata: gamedata.res
          })
        }
      )
  }

  componentDidMount() {
    this.fetchData();
  }

  componentWillReceiveProps(newProps) {
    this.fetchData();
  }

  render() {
    console.log(this.state.gamedata, "overherherhehrehrehrehrehreh this is main")
    const gamedata = this.state.gamedata;

    return (
      <div className="main-page">
        {gamedata ? gamedata.map((gamedata) => <GameID gameData={gamedata} key={gamedata.gameId}/>) : null}
      </div>
    )
  }
}

export default Main;
