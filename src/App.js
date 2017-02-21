import React, { Component } from 'react';
// import logo from './logo.svg';
import './css/App.css';
import './css/search-bar.css';
import './css/main.css';

import SearchBar from './components/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="main-header">
        {/* <h2>Timed Out Project</h2>
        <div className="main-link"> */}
        {/* <h1><Link to="/">Go to Home Page</Link></h1> */}
        {/* </div> */}
        <div className="main-content">
          <SearchBar/>
          {this.props.children}
        </div>
        <div className="footer">
          <p>This is the footer area. Leave me alone. I will reach the bottom eventually!</p>
        </div>
      </div>
    )
  }
}

export default App;
