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

  changeNumOfPlayers(event){
    this.setState({
      value: event.target.value
    });
  }

  handleClickConfirm() {
    this.props.onClickConfirm();
  }

  handleClickCancel() {
    this.props.onClickCancel();
  }

  handleClickDelete(event) {
    this.props.onClickDelete();
  }

  handleClickTag() {
    
  }

  setDate(time) {
    console.log(time);
  }

  // setStartTime(time) {
  //   console.log(time);
  // }
  //
  // setEndTime(time) {
  //   console.log(time);
  // }

  render() {
    return (
    <div className="party-compose">
      <div className="party-compose-base">
        <p>EDIT PARTY</p>
        <div className="party-compose-base-title">
          <p>Title</p>
          <input type="text" placeholder="Enter your game name"/>
        </div>
        <div className="party-compose-base-party">
          <p>Number of Players</p>
          <select onChange={this.changeNumOfPlayers.bind(this)} value={this.state.value}>
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
          <Datetime onChange={this.setDate.bind(this)}/>
        </div>
        <div className="party-compose-base-time">
          <span>End Time</span>
          <Datetime onChange={this.setDate.bind(this)}/>
        </div>
      </div>
      <div className="party-compose-tag">
        <span onClick={this.handleClickTag.bind(this)}>LVL</span>
        <span onClick={this.handleClickTag.bind(this)}>RAID</span>
        <span onClick={this.handleClickTag.bind(this)}>PRO</span>
        <span onClick={this.handleClickTag.bind(this)}>BGN</span>
        <span onClick={this.handleClickTag.bind(this)}>EXP</span>
        <span onClick={this.handleClickTag.bind(this)}>PVP</span>
        <span onClick={this.handleClickTag.bind(this)}>PVE</span>
        <span onClick={this.handleClickTag.bind(this)}>FARM</span>
      </div>
      <div className="party-compose-decision">
        <span className="party-compose-decision-confirm" onClick={this.handleClickConfirm.bind(this)}>CONFIRM</span>
        <span className="party-compose-decision-cancel" onClick={this.handleClickCancel.bind(this)}>CANCEL</span>
        <span className="party-compose-decision-delete" onClick={this.handleClickDelete.bind(this)}>DELETE</span>
      </div>
    </div>
    )
  }
}

export default Create;
