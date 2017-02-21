import React from 'react';
import { browserHistory as history } from 'react-router';
import { Link } from 'react-router';

class Main extends React.Component {
  render() {
    return (
      <div className="main-page">
        {/* <h2>Timed Out</h2> */}
        <ul className="main-page-gamelist">
          <li><Link to="game">Game 1</Link></li>
          <li><Link to="game">Game 2</Link></li>
          <li><Link to="game">Game 3</Link></li>
          <li><Link to="game">Game 4</Link></li>
          <li><Link to="game">Game 5</Link></li>
          <li><Link to="game">Game 6</Link></li>
          <li><Link to="game">Game 7</Link></li>
          <li><Link to="game">Game 8</Link></li>
          <li><Link to="game">Game 9</Link></li>
          <li><Link to="game">Game 10</Link></li>
          <li><Link to="game">Game 11</Link></li>
          <li><Link to="game">Game 12</Link></li>
          <li><Link to="game">Game 13</Link></li>
          <li><Link to="game">Game 14</Link></li>
          <li><Link to="game">Game 15</Link></li>
          <li><Link to="game">Game 16</Link></li>
          <li><Link to="game">Game 17</Link></li>
          <li><Link to="game">Game 18</Link></li>
          <li><Link to="game">Game 19</Link></li>
          <li><Link to="game">Game 20</Link></li>
          <li><Link to="game">Game 21</Link></li>
          <li><Link to="game">Game 22</Link></li>
          <li><Link to="game">Game 23</Link></li>
          <li><Link to="game">Game 24</Link></li>
        </ul>
      </div>
    )
  }
}

export default Main;
