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
      lvlValue: "",
      raidValue: "",
      proValue: "",
      bgnValue: "",
      expValue: "",
      pvpValue: "",
      pveValue: "",
      farmValue: "",
      deleteButtonPressed: false,
      backButtonPressed: false,
      confirmButtonPressed: false,
      currentInputTitle: ""
      // currentPressedTags: ""
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
    if(!this.state.lvlPressed === true) {
      this.setState ({
        lvlValue: "LVL "
      })
    }
    else {
      this.setState ({
        lvlValue: ""
      })
    }
  }

  handleClickTag_raid() {
    this.setState({
      raidPressed: !this.state.raidPressed
    })
    if(!this.state.raidPressed === true) {
      this.setState ({
        raidValue: "RAID "
      })
    }
    else {
      this.setState ({
        raidValue: ""
      })
    }
  }

  handleClickTag_pro() {
    this.setState({
      proPressed: !this.state.proPressed
    })
    if(!this.state.proPressed === true) {
      this.setState ({
        proValue: "PRO "
      })
    }
    else {
      this.setState ({
        proValue: ""
      })
    }
  }

  handleClickTag_bgn() {
    this.setState({
      bgnPressed: !this.state.bgnPressed
    })
    if(!this.state.bgnPressed === true) {
      this.setState ({
        bgnValue: "BGN "
      })
    }
    else {
      this.setState ({
        bgnValue: ""
      })
    }
  }

  handleClickTag_exp() {
    this.setState({
      expPressed: !this.state.expPressed
    })
    if(!this.state.expPressed === true) {
      this.setState ({
        expValue: "EXP "
      })
    }
    else {
      this.setState ({
        expValue: ""
      })
    }
  }

  handleClickTag_pvp() {
    this.setState({
      pvpPressed: !this.state.pvpPressed
    })
    if(!this.state.pvpPressed === true) {
      this.setState ({
        pvpValue: "PVP "
      })
    }
    else {
      this.setState ({
        pvpValue: ""
      })
    }
  }

  handleClickTag_pve() {
    this.setState({
      pvePressed: !this.state.pvePressed
    })
    if(!this.state.pvePressed === true) {
      this.setState ({
        pveValue: "PVE "
      })
    }
    else {
      this.setState ({
        pveValue: ""
      })
    }
  }

  handleClickTag_farm() {
    this.setState({
      farmPressed: !this.state.farmPressed
    })
    if(!this.state.farmPressed === true) {
      this.setState ({
        farmValue: "FARM "
      })
    }
    else {
      this.setState ({
        farmValue: ""
      })
    }
  }

  setDate(time) {
    console.log(time);
  }

  handleInput_Title(event) {
    var value = event.target.value;
    this.setState ({
      currentInputTitle: value
    })
  }

  // tagValue_lvl() {
  //   if(this.state.lvlPressed) {
  //     this.setState ({
  //       lvlValue: "LVL "
  //     })
  //   }
  //   else {
  //     this.setState ({
  //       lvlValue: ""
  //     })
  //   }
  // }
  //
  // tagValue_raid() {
  //   if(this.state.raidPressed) {
  //     this.setState ({
  //       raidValue: "RAID "
  //     })
  //   }
  //   else {
  //     this.setState ({
  //       raidValue: ""
  //     })
  //   }
  // }
  //
  // tagValue_pro() {
  //   if(this.state.proPressed) {
  //     this.setState ({
  //       proValue: "PRO "
  //     })
  //   }
  //   else {
  //     this.setState ({
  //       proValue: ""
  //     })
  //   }
  // }
  //
  // tagValue_bgn() {
  //   if(this.state.bgnPressed) {
  //     this.setState ({
  //       bgnValue: "BGN "
  //     })
  //   }
  //   else {
  //     this.setState ({
  //       bgnValue: ""
  //     })
  //   }
  // }
  //
  // tagValue_exp() {
  //   if(this.state.expPressed) {
  //     this.setState ({
  //       expValue: "EXP "
  //     })
  //   }
  //   else {
  //     this.setState ({
  //       expValue: ""
  //     })
  //   }
  // }
  //
  // tagValue_pvp() {
  //   if(this.state.pvpPressed) {
  //     this.setState ({
  //       pvpValue: "PVP "
  //     })
  //   }
  //   else {
  //     this.setState ({
  //       pvpValue: ""
  //     })
  //   }
  // }
  //
  // tagValue_pve() {
  //   if(this.state.pvePressed) {
  //     this.setState ({
  //       pveValue: "PVE "
  //     })
  //   }
  //   else {
  //     this.setState ({
  //       pveValue: ""
  //     })
  //   }
  // }
  //
  // tagValue_farm() {
  //   var farm = this.state.farmPressed;
  //   if(farm === true) {
  //     this.setState ({
  //       farmValue: "FARM "
  //     })
  //   }
  //   else {
  //     this.setState ({
  //       farmValue: ""
  //     })
  //   }
  // }

  // componentDidMount() {
    // console.log(this.state.farmPressed)
    // // var farm = this.state.farmPressed;
    // if(this.state.farmPressed === true) {
    //   this.setState ({
    //     farmValue: "FARM "
    //   })
    // }
    // else  {
    //   this.setState ({
    //     farmValue: ""
    //   })
    // }
    // console.log("inside mount" + this.state.farmValue)
    // if(3) {
    //   this.setState ({
    //     farmValue: "FARM "
    //   })
    //   console.log("if true then " +this.state.farmValue)
    // }
    //
    // else {
    //   this.setState ({
    //     farmValue: ""
    //   })
    // }
    // this.tagValue_lvl();
    // this.tagValue_raid();
    // this.tagValue_pro();
    // this.tagValue_bgn();
    // this.tagValue_exp();
    // this.tagValue_pvp();
    // this.tagValue_pve();
    // this.tagValue_farm();
  // }

  render() {
    var gameTitle = this.state.currentInputTitle;
    var tagsPressed = this.state.lvlValue + this.state.raidValue + this.state.proValue + this.state.bgnValue + this.state.expValue + this.state.pvpValue + this.state.pveValue + this.state.farmValue;

    var gameName = gameTitle + " " + tagsPressed;

    // console.log("farm is "+this.state.farmPressed);
    // console.log(this.state.farmValue);
    // console.log(this.state.currentInputTitle)
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
        <p>Create Party</p>
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
      <div className="party-compose-preview">
        <div className="party-compose-preview-header">PREVIEW TITLE</div>
        <div className="party-compose-preview-title">{gameName}</div>
        {/* <div className="party-compose-preview-tags">
          {tagsPressed}
        </div> */}
      </div>
      <div className="party-compose-decision">
        <span className="party-compose-decision-confirm" onClick={this.handleClickConfirm.bind(this)}>CONFIRM</span>
        <span className="party-compose-decision-cancel" onClick={this.handleClickBack.bind(this)}>BACK</span>
        {/* <span className="party-compose-decision-delete" onClick={this.handleClickDelete.bind(this)}>DELETE</span> */}
      </div>
    </div>
    )
  }
}

export default Create;
