import React from 'react';
import { browserHistory as history } from 'react-router';

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
    alert('hello');
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

  // onClickBack_Edit(){
  //   this.setState ({
  //     editFormClosed: true,
  //     partyFormClosed: false,
  //     pvp: this.state.pvp,
  //     pve: this.state.pve,
  //     exp: this.state.exp,
  //     farm: this.state.farm,
  //     pro: this.state.pro,
  //     noob: this.state.noob,
  //     comp: this.state.comp,
  //     casual: this.state.casual,
  //     gameName: this.state.currentInputTitle,
  //     // deleteButtonPressed: false,
  //     numOfPlayers: this.state.numOfPlayers,
  //     endTime: this.state.endTime,
  //     startTime: this.state.startTime
  //   })
  // }

  onClickDelete_Edit(){
    this.setState ({
      editFormClosed: true,
      partyFormClosed: false
    })
  }

  isLeader_Party() {
    var userId = this.props.auth.getProfile().user_id;

    if(userId === this.props.partyData.users[0].userId) {
      this.setState ({
        isLeader: true
      })
    }
  }

  getLeaderId() {
    return this.props.partyData.users[0].userId
  }

  isMember_Party() {
    var userId = this.props.auth.getProfile().user_id;
    var party = this.props.partyData.users;

    for (var i=0, l=party.length; i<l; i++ ) {
      if (party[i].userId === userId) {
        this.setState ({
           isMember: true
         })
        break;
      }
    }
  }

  componentDidMount() {
    this.isLeader_Party();
    this.isMember_Party();
  }

  render() {
    var partyData = this.props.partyData;
    var gameDataGameId = this.props.gameDataGameId;

    var profileUserId = this.props.auth.getProfile().user_id;
    var profileUserName = this.props.auth.getProfile().name;

    return (
      <div>
        <div className="party-list">
          <div className="party-list-party">
            <div className="party-list-party-info">
              <div className="party-list-party-title">
                <div className="party-list-party-title-lineOne">{partyData.partyName}</div>
                <div className="party-list-party-title-lineTwo">
                  {partyData.tags && partyData.tags.pvp ? <div className="pl-box-tag"> #pvp </div> : null}
                  {partyData.tags && partyData.tags.pve ? <div className="pl-box-tag"> #pve </div> : null}
                  {partyData.tags && partyData.tags.noob ? <div className="pl-box-tag"> #noob </div> : null}
                  {partyData.tags && partyData.tags.casual ? <div className="pl-box-tag"> #casual </div> : null}
                  {partyData.tags && partyData.tags.comp ? <div className="pl-box-tag"> #comp </div> : null}
                  {partyData.tags && partyData.tags.farm ? <div className="pl-box-tag"> #farm </div> : null}
                  {partyData.tags && partyData.tags.exp ? <div className="pl-box-tag"> #exp </div> : null}
                </div>
                <div className="title-block"></div>
              </div>
              <div className="party-list-game-info">
                <div className="party-list-party-players">
                  <div className="party-list-party-players-box">
                    <div className="party-player-box-title">NEED</div>
                    <div className="party-player-box-info">
                      <div className="party-player-box-number">{partyData.size - partyData.users.length}</div>
                      <div className="blocker"></div>
                      <div className="party-player-box-art"><img src="/img/member50x50.png" alt=""/></div>
                    </div>
                  </div>
                  <div className="party-list-party-players-box">
                    <div className="party-player-box-title">MAX</div>
                    <div className="party-player-box-info">
                      <div className="party-player-box-number">{partyData.size}</div>
                      <div className="blocker"></div>
                      <div className="party-player-box-art"><img src="/img/party50x50.png" alt=""/></div>
                    </div>
                  </div>
                </div>
                <div className="party-list-mobile-spacer"></div>
                <div className="party-list-party-other">
                  <div className="party-list-party-other-time">
                    <div className="party-list-time-title">START TIME</div>
                    <div className="party-list-time-info">{partyData.startTime}</div>
                  </div>
                  <div className="party-list-party-other-time">
                    <div className="party-list-time-title">END TIME</div>
                    <div className="party-list-time-info">{partyData.endTime}</div>
                  </div>
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
            profileUserId={profileUserId}
            profileUserName={profileUserName}
            gameDataGameId={gameDataGameId}
            partyData={partyData} key={partyData.partyId}
            checkIsLeader={this.state.isLeader}
            checkIsMember={this.state.isMember}
            onClickBack={this.onClickBack_Party.bind(this)}
            // onClickEdit={this.onClickEdit_Party.bind(this)}
            onClickStart={this.onClickStart_Party.bind(this)}
            onClickDelete={this.onClickDelete_Party.bind(this)}
            onClickJoin={this.onClickJoin_Party.bind(this)}
            onClickLeave={this.onClickLeave_Party.bind(this)}
            leaderId={this.getLeaderId.bind(this)}
          /> : null }
        { !this.state.editFormClosed ?
          <Edit
            onClickBack={this.onClickBack_Edit.bind(this)}
            onClickConfirm={this.onClickConfirm_Edit.bind(this)}
            onClickDelete={this.onClickDelete_Edit.bind(this)}
          /> : null }
      </div>

        )
        }
        }

        export default PartyList;
