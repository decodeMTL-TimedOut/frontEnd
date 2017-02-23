import React from 'react';
import { Link } from 'react-router';

var moment = require('moment');
var Datetime = require('react-datetime');

var date = new Date();

class Create extends React.Component {
  render() {
    return (
    <div className="party-compose">
      <div className="party-compose-base">
        <p>CREATE YOUR OWN PARTY!</p>
        <div className="party-compose-base-title">
          <p>Title</p>
          <input type="text" placeholder="Enter your game name"/>
        </div>
        <div className="party-compose-base-party">
          <p>Number of Players</p>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <div className="party-compose-base-time">
          <span>Start Time</span>
          <Datetime />
        </div>
        <div className="party-compose-base-time">
          <span>End Time</span>
          <Datetime />
        </div>
      </div>
      <div className="party-compose-tag">
        <span>LVL</span>
        <span>RAID</span>
        <span>Competitive</span>
        <span>Casual</span>
        <span>Dungeon</span>
        <span>PVP</span>
        <span>PVE</span>
        <span>Farm</span>
      </div>
      <div className="party-compose-decision">
        <span className="party-compose-decision-confirm">CONFIRM</span>
        <span className="party-compose-decision-cancel">CANCEL</span>
      </div>
    </div>
    )
  }
}

export default Create;
