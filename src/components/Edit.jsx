import React from 'react';

var moment = require('moment');
var Datetime = require('react-datetime');

var date = new Date();

var c9 = 'https://timedout-leblancbryan.c9users.io/'
var cors = 'https://cors-anywhere.herokuapp.com/'

var baseUrl = `${cors}${c9}`;

class Edit extends React.Component {
  constructor() {
    super();

    this.state = {
      pvp: false,
      pve: false,
      exp: false,
      farm: false,
      pro: false,
      noob: false,
      comp: false,
      casual: false,
      pvpValue: "",
      pveValue: "",
      expValue: "",
      farmValue: "",
      proValue: "",
      noobValue: "",
      compValue: "",
      casualValue: "",
      // deleteButtonPressed: false,
      backButtonPressed: false,
      confirmButtonPressed: false,
      currentInputTitle: "",
      numOfPlayers: "",
      endTime: "",
      startTime: ""
    };
  }

  changeNumOfPlayers(event){
    this.setState({
      numOfPlayers: event.target.value
    });
  }

  handleClickConfirm_Edit() {
    this.props.onClickConfirm_Edit();

    var userId = this.props.auth.getProfile().user_id;

    var username = this.props.auth.getProfile().name;

    var gameData = this.props.gameData;
    var editUrl = `${baseUrl}games/${gameData.gameId}/parties/create`

    var payload = {
      userId: userId,
      username: username,
      gameName: this.state.currentInputTitle,
      numOfPlayers: this.state.numOfPlayers,
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      tags: {
        pvp: this.state.pvp,
        pve: this.state.pve,
        exp: this.state.exp,
        farm: this.state.farm,
        pro: this.state.pro,
        noob: this.state.noob,
        comp: this.state.comp,
        casual: this.state.casual
      }
    }
    fetch(editUrl, {
      method: 'post',
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
      .then( (response) => {
        return response.json() })
          .then( (json) => {
            this.setState({
              gamedata: json
            });
          });
  }

  handleClickBac_Edit() {
    this.props.onClickBack();
  }


  handleClickDelete_Edit(event) {
    this.props.onClickDelete();
  }

  handleClickTag_pvp_Edit() {
    this.setState({
      pvp: !this.state.pvp
    })
    if(!this.state.pvp === true) {
      this.setState ({
        pvpValue: "#PVP "
      })
    }
    else {
      this.setState ({
        pvpValue: ""
      })
    }
  }

  handleClickTag_pve_Edit() {
    this.setState({
      pve: !this.state.pve
    })
    if(!this.state.pve === true) {
      this.setState ({
        pveValue: "#PVE "
      })
    }
    else {
      this.setState ({
        pveValue: ""
      })
    }
  }

  handleClickTag_exp_Edit() {
    this.setState({
      exp: !this.state.exp
    })
    if(!this.state.exp === true) {
      this.setState ({
        expValue: "#EXP "
      })
    }
    else {
      this.setState ({
        expValue: ""
      })
    }
  }

  handleClickTag_farm_Edit() {
    this.setState({
      farm: !this.state.farm
    })
    if(!this.state.farm === true) {
      this.setState ({
        farmValue: "#FARM "
      })
    }
    else{
      this.setState ({
        farmValue: ""
      })
    }
  }

  handleClickTag_pro_Edit() {
    this.setState({
      pro: !this.state.pro
    })
    if(!this.state.pro === true) {
      this.setState ({
        proValue: "#PRO "
      })
    }
    else {
      this.setState ({
        proValue: ""
      })
    }
  }

  handleClickTag_noob_Edit() {
    this.setState({
      noob: !this.state.noob
    })
    if(!this.state.noob === true) {
      this.setState ({
        noobValue: "#NOOB "
      })
    }
    else {
      this.setState ({
        noobValue: ""
      })
    }
  }

  handleClickTag_comp_Edit() {
    this.setState({
      comp: !this.state.comp
    })
    if(!this.state.comp === true) {
      this.setState ({
        compValue: "#COMP "
      })
    }
    else {
      this.setState ({
        compValue: ""
      })
    }
  }

  handleClickTag_casual_Edit() {
    this.setState({
      casual: !this.state.casual
    })
    if(!this.state.casual === true) {
      this.setState ({
        casualValue: "#CASUAL "
      })
    }
    else {
      this.setState ({
        casualValue: ""
      })
    }
  }

  setStartTime_Edit(startTime) {
    this.setState ({
      startTime: startTime._d
    })
  }

  setEndTime_Edit(endTime) {
    this.setState ({
      endTime: endTime._d
    })
  }

  handleInput_Title_Edit(event) {
    var value = event.target.value;
    this.setState ({
      currentInputTitle: value
    })
  }


  render() {
    var gameData = this.props.gameData;

    var gameTitle = this.state.currentInputTitle;
    var tagsPressed = this.state.pvpValue + this.state.pveValue + this.state.expValue + this.state.farmValue + this.state.proValue + this.state.noobValue + this.state.compValue + this.state.casualValue;
    // var gameName = gameTitle + " " + tagsPressed;
    var tagPvp = "party-tag-pvp" + (this.state.pvp ? "-pressed" : '');
    var tagPve = "party-tag-pve" + (this.state.pve ? "-pressed" : '');
    var tagExp = "party-tag-exp" + (this.state.exp ? "-pressed" : '');
    var tagFarm = "party-tag-farm" + (this.state.farm ? "-pressed" : '');
    var tagPro = "party-tag-pro" + (this.state.pro ? "-pressed" : '');
    var tagNoob = "party-tag-noob" + (this.state.noob ? "-pressed" : '');
    var tagComp = "party-tag-comp" + (this.state.comp ? "-pressed" : '');
    var tagCasual = "party-tag-casual" + (this.state.casual ? "-pressed" : '');

    return (
    <div className="party-compose">
      <div className="party-compose-base">
        <p>Edit Party</p>
        <div className="party-compose-base-title">
          <p>Title</p>
          <input type="text" placeholder="Enter your game name" onInput={this.handleInput_Title.bind(this)} value={this.state.currentInputTitle}/>
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
          <Datetime onChange={this.setStartTime_Edit.bind(this)} Datetime dateFormat="YYYY-MM-DD" timeFormat={true}/>
        </div>
        <div className="party-compose-base-time">
          <span>End Time</span>
          <Datetime onChange={this.setEndTime_Edit.bind(this)} Datetime dateFormat="YYYY-MM-DD" timeFormat={true}/>
        </div>
      </div>
      <div className="party-compose-tag">
        <div className={tagPvp} onClick={this.handleClickTag_pvp_Edit.bind(this)}>#PVP</div>
        <div className={tagPve} onClick={this.handleClickTag_pve_Edit.bind(this)}>#PVE</div>
        <div className={tagExp} onClick={this.handleClickTag_exp_Edit.bind(this)}>#EXP</div>
        <div className={tagFarm} onClick={this.handleClickTag_farm_Edit.bind(this)}>#FARM</div>
        <div className={tagPro} onClick={this.handleClickTag_pro_Edit.bind(this)}>#PRO</div>
        <div className={tagNoob} onClick={this.handleClickTag_noob_Edit.bind(this)}>#NOOB</div>
        <div className={tagComp} onClick={this.handleClickTag_comp_Edit.bind(this)}>#COMP</div>
        <div className={tagCasual} onClick={this.handleClickTag_casual_Edit.bind(this)}>#CASUAL</div>
      </div>
      <div className="party-compose-preview">
        <div className="party-compose-preview-header">PREVIEW TITLE</div>
        <div className="party-compose-preview-title">{gameTitle}</div>
        <div className="party-compose-preview-tags">{tagsPressed}</div>
      </div>
      <div className="party-compose-decision">
        <span className="party-compose-decision-confirm" onClick={this.handleClickConfirm_Edit.bind(this)}>CONFIRM</span>
        <span className="party-compose-decision-cancel" onClick={this.handleClickBack_Edit.bind(this)}>BACK</span>
        <span className="party-compose-decision-delete" onClick={this.handleClickDelete_Edit.bind(this)}>DELETE</span>
      </div>
    </div>
    )
  }
}

export default Edit;
