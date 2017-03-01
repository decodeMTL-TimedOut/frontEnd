import React from 'react';
import { browserHistory as history } from 'react-router';
import { Link } from 'react-router';

import GameID from './GameID';

var c9 = 'https://timedout-leblancbryan.c9users.io/'
var cors = 'https://cors-anywhere.herokuapp.com/'

var baseUrl = `${cors}${c9}`;

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      gamedata: []
    };
  }

  fetchData() {
    if(this.props.router.location.query.q) { // if a query has been detected, this fetch will happen
      var query = this.props.router.location.query.q;
      var searchUrl = `${baseUrl}search?q=${query}`;

    }
    else { // if no search is detected, this fetch will default
      var searchUrl = `${baseUrl}main`;
    }

    console.log("hello" ,searchUrl)
    fetch(searchUrl)
      .then(response => response.json())
      .then(
        gamedata => {
          this.setState ({
            gamedata: gamedata.result
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
    console.log(this.state.gamedata)
    const gamedata = this.state.gamedata;

    return (
      <div className="main-page">
        {gamedata ? gamedata.map((gamedata) => <GameID gameData={gamedata} key={gamedata.gameId}/>) : null}
      </div>
    )
  }
}

export default Main;






//post
// componentDidMount() {
//   var payload = {
//     userId: this.state.profile.user_id
//   }
//   var data = new FormData();
//   data.append("json", JSON.stringify(payload));
//    //get back to me on this when you get here
//   var that = this;
//   fetch(url, {
//     method: 'POST',
//     body: data
//   })
//     .then( (response) => {
//       return response.json() })
//         .then( (json) => {
//           that.setState({
//             gamedata: json
//           });
//   });
// }
//regular get
// componentDidMount() {
//   var url = `https://timedout-leblancbryan.c9users.io/main`; //get back to me on this when you get here
//   var that = this;
//   fetch(url)
//     .then( (response) => {
//       return response.json() })
//         .then( (json) => {
//           that.setState({
//             gamedata: json
//           });
//   });
// }


//   fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/<YOUR API KEY HERE>/37.8267,-122.4233')
// .then(response => response.json())
// .then(data => console.log(data))
