import React from 'react';

var moment = require('moment');
var Datetime = require('react-datetime');

var date = new Date();

class Create extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
    <div className="party-compose">
      <div className="party-compose-base">
        <p>CREATE PARTY</p>
        <div className="party-compose-base-title">
          <p>Title</p>
          <input type="text" placeholder="Enter your game name"/>
        </div>
        <div className="party-compose-base-party">
          <p>Number of Players</p>
          <select>
            <option>Select Number</option>
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
        <span>PRO</span>
        <span>BGN</span>
        <span>EXP</span>
        <span>PVP</span>
        <span>PVE</span>
        <span>FARM</span>
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
