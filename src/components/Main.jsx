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

    // make a ternary to compare previous states
    return (
      <div className="main-page">
        {gamedata ? gamedata.map((gamedata) => <GameID gameData={gamedata} key={gamedata.gameId}/>) : null}
      </div>
    )
  }
}

export default Main;

  // 1.when fetch happens:
  // on click, componentDidMount
  // 2. if post, make a payload
  // 3. var that=this
  // 4. fetch





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






      // <div className="main-page">
      //   <ul className="main-page-gamelist">
      //     <li>
      //       <Link to="game">
      //         <img src="https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-272x380.jpg" alt="lol"/>
      //         <p>League of Legends</p>
      //       </Link>
      // //     </li>
      //      <li>
      //       <Link to="game">
      //         <img src="https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone-272x380.jpg" alt="hearth"/>
      //         <p>Hearthstone</p>
      //       </Link>
      //       </li>
      //       <li>
      //       <Link to="game">
      //         <img src="https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-272x380.jpg" alt="dota2"/>
      //         <p>Dota 2</p>
      //       </Link>
      //       </li>
      //       <li>
      //       <Link to="game">
      //         <img src="https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-272x380.jpg" alt="counterstrike"/>
      //         <p>Counter-Strike</p>
      //       </Link>
      //       </li>
      //       <li>
      //       <Link to="game">
      //         <img src="https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-272x380.jpg" alt="overwatch"/>
      //         <p>Overwatch</p>
      //       </Link>
      //       </li>
      //       <li>
      //       <Link to="game">
      //         <img src="https://static-cdn.jtvnw.net/ttv-boxart/For%20Honor-272x380.jpg" alt="honor"/>
      //         <p>For Honor</p>
      //       </Link>
      //       </li>
      //       <li>
      //       <Link to="game">
      //         <img src="https://static-cdn.jtvnw.net/ttv-boxart/Minecraft-272x380.jpg" alt="minecraft"/>
      //         <p>Minecraft</p>
      //       </Link>
      //       </li>
      //       <li>
      //       <Link to="game">
      //         <img src="https://static-cdn.jtvnw.net/ttv-boxart/H1Z1:%20King%20of%20the%20Kill-272x380.jpg" alt="king"/>
      //         <p>King of the Kill</p>
      //       </Link>
      //       </li>
      //       <li>
      //       <Link to="game">
      //         <img src="https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-272x380.jpg" alt="wow"/>
      //         <p>World of Warcraft</p>
      //       </Link>
      //       </li>
      //       <li>
      //       <Link to="game">
      //         <img src="https://static-cdn.jtvnw.net/ttv-boxart/Nioh-272x380.jpg" alt="nioh"/>
      //         <p>Nioh</p>
      //       </Link>
      //       </li>
      //       <li><Link to="game">
      //       <img src="https://static-cdn.jtvnw.net/ttv-boxart/Heroes%20of%20the%20Storm-272x380.jpg" alt="hots"/>
      //       <p>Heroes of the Storm</p>
      //       </Link></li>
      //       <li>
      //       <Link to="game">
      //         <img src="https://static-cdn.jtvnw.net/ttv-boxart/StarCraft%20II-272x380.jpg" alt="sc2"/>
      //         <p>Starcraft II</p>
      //       </Link>
      //       </li>
      //       <li>
      //       <Link to="game">
      //         <img src="https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Tanks-272x380.jpg" alt="wot"/>
      //         <p>World of Tanks</p>
      //       </Link>
      //       </li>
      //       <li>
      //       <Link to="game">
      //         <img src="https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2017-272x380.jpg"alt="fifa"/>
      //         <p>FIFA 2017</p>
      //       </Link>
      //       </li>
      //       <li>
      //       <Link to="game">
      //         <img src="https://static-cdn.jtvnw.net/ttv-boxart/Undertale-272x380.jpg" alt="undertale"/>
      //         <p>Undertale</p>
      //       </Link>
      //       </li>
      //       <li>
      //       <Link to="game">
      //         <img src="https://static-cdn.jtvnw.net/ttv-boxart/RuneScape-272x380.jpg"alt="rune"/>
      //         <p>Runescape</p>
      //       </Link>
      //       </li>
      //       <li>
      //       <Link to="game">
      //         <img src="https://static-cdn.jtvnw.net/ttv-boxart/Smite-272x380.jpg" alt="smite"/>
      //         <p>Smite</p>
      //       </Link>
      //       </li>
      //       <li>
      //       <Link to="game">
      //         <img src="https://static-cdn.jtvnw.net/ttv-boxart/Creative-272x380.jpg" alt="creative"/>
      //         <p>Creative</p>
      //       </Link>
      //       </li>
      //       <li>
      //       <Link to="game">
      //         <img src="https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-272x380.jpg" alt="sf5"/>
      //         <p>Street Fighter V</p>
      //       </Link>
      //       </li>
      //       <li>
      //       <Link to="game">
      //         <img src="https://static-cdn.jtvnw.net/ttv-boxart/Black%20Desert-272x380.jpg" alt="desert"/>
      //         <p>Black Desert</p>
      //       </Link>
      //       </li>
      //       <li>
      //       <Link to="game">
      //         <img src="https://static-cdn.jtvnw.net/ttv-boxart/Super%20Mario%20Maker-272x380.jpg" alt="supermario"/>
      //         <p>Super Mario Maker</p>
      //       </Link>
      //       </li>
      //       <li>
      //       <Link to="game">
      //         <img src="https://static-cdn.jtvnw.net/ttv-boxart/HITMAN-272x380.jpg" alt="hitman"/>
      //         <p>Hitman</p>
      //       </Link>
      //       </li>
      //       <li>
      //       <Link to="game">
      //         <img src="https://static-cdn.jtvnw.net/ttv-boxart/The%20Legend%20of%20Zelda:%20Twilight%20Princess%20HD-272x380.jpg" alt="zelda"/>
      //         <p>Legend of Zelda: Twilight Princess</p>
      //     </Link></li>
          //  <li>
          //    <Link to="game">
          //      <img src="https://static-cdn.jtvnw.net/ttv-boxart/Path%20of%20Exile-272x380.jpg" alt="exile"/>
          //      <p>Path of Exile</p>
          //    </Link>
          //  </li>
      //   </ul>
      // </div>
//     )
//   }
// }

// export default Main;
