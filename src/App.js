import React, { Component } from 'react';

import './css/index.css';
import './css/App.css';
import './css/search-bar.css';
import './css/main.css';
import './css/game.css';
import './css/partylist.css';
import './css/react-datetime.css';
import './css/partycompose.css';
import './css/party.css';
import './css/partymember.css';
import './css/login.css';
import './css/example.css';

import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="main-header">
        <div className="main-content">
          <SearchBar />
          {this.props.children}
        </div>
        <div className="footer">
          <p>&copy; 2017 TimedOut</p>
        </div>
      </div>
    )
  }
}

export default App;
