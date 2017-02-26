import React from 'react';

import Party from './Party';
import Edit from './Edit';

class PartyList extends React.Component {
  constructor() {
    super();

    this.state = {
      partyFormClosed: true,
      editFormClosed: true,
      isLeader: false,
      isMember: false
    };
  }

  handleClick() {
    if (this.state.partyFormClosed === true) {
      this.setState ({
        partyFormClosed: false
      })
    }
  }

  onClickBack_Party(){
    this.setState ({
      partyFormClosed: true
    })
  }

  onClickEdit_Party() {
    this.setState ({
      partyFormClosed: true,
      editFormClosed: false
    })
  }

  onClickStart_Party() {
    this.setState ({
      partyFormClosed: true
    })
  }

  onClickDelete_Party() {
    this.setState ({
      partyFormClosed: true
    })
  }

  onClickJoin_Party() {
    this.setState ({
      partyFormClosed: true
    })
  }

  onClickLeave_Party() {
    this.setState ({
      partyFormClosed: true
    })
  }

  onClickConfirm_Edit(){
    this.setState ({
      editFormClosed: true,
      partyFormClosed: false
    })
  }

  onClickBack_Edit(){
    this.setState ({
      editFormClosed: true,
      partyFormClosed: false
    })
  }

  onClickDelete_Edit(){
    this.setState ({
      editFormClosed: true,
      partyFormClosed: false
    })
  }

  isLeader_Party() {
    var userId = this.props.userId;
    if(userId === "hyowon19") {
      this.setState ({
        isLeader: true
      })
    }
  }

  isMember_Party() {
    var partyMember = this.props.member;
    if(partyMember === "true") {
      this.setState ({
        isMember: true
      })
    }
  }

  componentDidMount() {
    this.isLeader_Party();
    this.isMember_Party();
  }

  render() {

    console.log("The user Id is the creator:" , this.props.userId ? this.props.userId : "not yet set")
    console.log(this.state.isLeader)
    console.log("The user Id is a member: ", this.props.member ? this.props.userId : "not yet set")
    console.log(this.state.isMember)
    return (
      <div>
        <div className="party-list">
          <div className="party-list-party">
            <div className="party-list-party-info">
              <div className="party-list-party-title">
                <p>Lich King Raid Farm wed night fast runs! EXP Players only plz! Min DPS 300</p>
              </div>
              <div className="party-list-party-players">
                <div className="party-list-party-players-box">
                  <span>2</span>
                  <img src="/img/member50x50.png" alt=""/>
                  <span className="party-list-party-players-small">need</span>
                </div>
                <div className="party-list-party-players-box">
                  <span>5</span>
                  <img src="/img/party50x50.png" alt=""/>
                  <span className="party-list-party-players-small">max</span>
                </div>
              </div>
              <div className="party-list-party-other">
                <div className="party-list-party-other-time">
                  <p>07:00 PM EST</p>
                </div>
                <div className="party-list-party-other-time">
                  <p>11:00 PM EST</p>
                </div>
              </div>
            </div>
            <div className="party-list-party-view">
              <img src="/img/arrow.png" alt="" onClick={this.handleClick.bind(this)}/>
            </div>
          </div>

        </div>
        { !this.state.partyFormClosed ?
          <Party
            checkIsLeader={this.state.isLeader}
            checkIsMember={this.state.isMember}
            onClickBack={this.onClickBack_Party.bind(this)}
            onClickEdit={this.onClickEdit_Party.bind(this)}
            onClickStart={this.onClickStart_Party.bind(this)}
            onClickDelete={this.onClickDelete_Party.bind(this)}
            onClickJoin={this.onClickJoin_Party.bind(this)}
            onClickLeave={this.onClickLeave_Party.bind(this)}
          />  : null }
        { !this.state.editFormClosed ?
          <Edit
            onClickBack={this.onClickBack_Edit.bind(this)}
            onClickConfirm={this.onClickConfirm_Edit.bind(this)}
            onClickDelete={this.onClickDelete_Edit.bind(this)}
          /> : null}
      </div>

    )
  }
}

export default PartyList;
