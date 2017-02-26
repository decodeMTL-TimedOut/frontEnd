import React from 'react';

var moment = require('moment');
var Datetime = require('react-datetime');

var date = new Date();

class Create extends React.Component {
  constructor() {
    super();

    this.state = {
      lvlPressed: false,
      raidPressed: false,
      proPressed: false,
      bgnPressed: false,
      expPressed: false,
      pvpPressed: false,
      pvePressed: false,
      farmPressed: false,
      deleteButtonPressed: false,
      backButtonPressed: false,
      confirmButtonPressed: false
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

  handleClickBack() {
    this.props.onClickBack();
  }

  handleClickDelete(event) {
    this.props.onClickDelete();
  }

  handleClickTag_lvl() {
    this.setState({
      lvlPressed: !this.state.lvlPressed
    })
  }

  handleClickTag_raid() {
    this.setState({
      raidPressed: !this.state.raidPressed
    })
  }

  handleClickTag_pro() {
    this.setState({
      proPressed: !this.state.proPressed
    })
  }

  handleClickTag_bgn() {
    this.setState({
      bgnPressed: !this.state.bgnPressed
    })
  }

  handleClickTag_exp() {
    this.setState({
      expPressed: !this.state.expPressed
    })
  }

  handleClickTag_pvp() {
    this.setState({
      pvpPressed: !this.state.pvpPressed
    })
  }

  handleClickTag_pve() {
    this.setState({
      pvePressed: !this.state.pvePressed
    })
  }

  handleClickTag_farm() {
    this.setState({
      farmPressed: !this.state.farmPressed
    })
  }

  setDate(time) {
    console.log(time);
  }

  render() {

    var tagLevel = "party-tag-lvl" + (this.state.lvlPressed ? "-pressed" : '');
    var tagRaid = "party-tag-raid" + (this.state.raidPressed ? "-pressed" : '');
    var tagPro = "party-tag-pro" + (this.state.proPressed ? "-pressed" : '');
    var tagBgn = "party-tag-bgn" + (this.state.bgnPressed ? "-pressed" : '');
    var tagExp = "party-tag-exp" + (this.state.expPressed ? "-pressed" : '');
    var tagPvp = "party-tag-pvp" + (this.state.pvpPressed ? "-pressed" : '');
    var tagPve = "party-tag-pve" + (this.state.pvePressed ? "-pressed" : '');
    var tagFarm = "party-tag-farm" + (this.state.farmPressed ? "-pressed" : '');

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
        <div className={tagLevel} onClick={this.handleClickTag_lvl.bind(this)}>LVL</div>
        <div className={tagRaid} onClick={this.handleClickTag_raid.bind(this)}>RAID</div>
        <div className={tagPro} onClick={this.handleClickTag_pro.bind(this)}>PRO</div>
        <div className={tagBgn} onClick={this.handleClickTag_bgn.bind(this)}>BGN</div>
        <div className={tagExp} onClick={this.handleClickTag_exp.bind(this)}>EXP</div>
        <div className={tagPvp} onClick={this.handleClickTag_pvp.bind(this)}>PVP</div>
        <div className={tagPve} onClick={this.handleClickTag_pve.bind(this)}>PVE</div>
        <div className={tagFarm} onClick={this.handleClickTag_farm.bind(this)}>FARM</div>
      </div>
      <div className="party-compose-decision">
        <span className="party-compose-decision-confirm" onClick={this.handleClickConfirm.bind(this)}>CONFIRM</span>
        <span className="party-compose-decision-cancel" onClick={this.handleClickBack.bind(this)}>BACK</span>
        <span className="party-compose-decision-delete" onClick={this.handleClickDelete.bind(this)}>DELETE</span>
      </div>
    </div>
    )
  }
}

export default Create;
