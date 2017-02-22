import React from 'react';
import { browserHistory as history } from 'react-router';
import { Link } from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div className="main-page">
        {/* <h2>Timed Out</h2> */}
        <ul className="main-page-gamelist">
          <li>
            <Link to="game">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/League%20of%20Legends-272x380.jpg" alt="lol"/>
              <p>League of Legends</p>
            </Link>
          </li>
          <li>
            <Link to="game">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/Hearthstone-272x380.jpg" alt="hearth"/>
              <p>Hearthstone</p>
            </Link>
          </li>
          <li>
            <Link to="game">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/Dota%202-272x380.jpg" alt="dota2"/>
              <p>Dota 2</p>
            </Link>
          </li>
          <li>
            <Link to="game">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/Counter-Strike:%20Global%20Offensive-272x380.jpg" alt="counterstrike"/>
              <p>Counter-Strike</p>
            </Link>
          </li>
          <li>
            <Link to="game">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/Overwatch-272x380.jpg" alt="overwatch"/>
              <p>Overwatch</p>
            </Link>
          </li>
          <li>
            <Link to="game">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/For%20Honor-272x380.jpg" alt="honor"/>
              <p>For Honor</p>
            </Link>
          </li>
          <li>
            <Link to="game">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/Minecraft-272x380.jpg" alt="minecraft"/>
              <p>Minecraft</p>
            </Link>
          </li>
          <li>
            <Link to="game">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/H1Z1:%20King%20of%20the%20Kill-272x380.jpg" alt="king"/>
              <p>King of the Kill</p>
            </Link>
          </li>
          <li>
            <Link to="game">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-272x380.jpg" alt="wow"/>
              <p>World of Warcraft</p>
            </Link>
          </li>
          <li>
            <Link to="game">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/Nioh-272x380.jpg" alt="nioh"/>
              <p>Nioh</p>
            </Link>
          </li>
          <li><Link to="game">
            <img src="https://static-cdn.jtvnw.net/ttv-boxart/Heroes%20of%20the%20Storm-272x380.jpg" alt="hots"/>
            <p>Heroes of the Storm</p>
          </Link></li>
          <li>
            <Link to="game">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/StarCraft%20II-272x380.jpg" alt="sc2"/>
              <p>Starcraft II</p>
            </Link>
          </li>
          <li>
            <Link to="game">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Tanks-272x380.jpg" alt="wot"/>
              <p>World of Tanks</p>
            </Link>
          </li>
          <li>
            <Link to="game">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/FIFA%2017-272x380.jpg"alt="fifa"/>
              <p>FIFA 2017</p>
            </Link>
          </li>
          <li>
            <Link to="game">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/Undertale-272x380.jpg" alt="undertale"/>
              <p>Undertale</p>
            </Link>
          </li>
          <li>
            <Link to="game">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/RuneScape-272x380.jpg"alt="rune"/>
              <p>Runescape</p>
            </Link>
          </li>
          <li>
            <Link to="game">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/Smite-272x380.jpg" alt="smite"/>
              <p>Smite</p>
            </Link>
          </li>
          <li>
            <Link to="game">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/Creative-272x380.jpg" alt="creative"/>
              <p>Creative</p>
            </Link>
          </li>
          <li>
            <Link to="game">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/Street%20Fighter%20V-272x380.jpg" alt="sf5"/>
              <p>Street Fighter V</p>
            </Link>
          </li>
          <li>
            <Link to="game">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/Black%20Desert-272x380.jpg" alt="desert"/>
              <p>Black Desert</p>
            </Link>
          </li>
          <li>
            <Link to="game">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/Super%20Mario%20Maker-272x380.jpg" alt="supermario"/>
              <p>Super Mario Maker</p>
            </Link>
          </li>
          <li>
            <Link to="game">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/HITMAN-272x380.jpg" alt="hitman"/>
              <p>Hitman</p>
            </Link>
          </li>
          <li>
            <Link to="game">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/The%20Legend%20of%20Zelda:%20Twilight%20Princess%20HD-272x380.jpg" alt="zelda"/>
              <p>Legend of Zelda: Twilight Princess</p>
            </Link></li>
          <li>
            <Link to="game">
              <img src="https://static-cdn.jtvnw.net/ttv-boxart/Path%20of%20Exile-272x380.jpg" alt="exile"/>
              <p>Path of Exile</p>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Main;
