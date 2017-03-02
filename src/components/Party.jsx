import React from 'react';
import { Link } from 'react-router';

import PartyMember from './PartyMember';

var c9 = 'https://timedout-leblancbryan.c9users.io/'
var cors = 'https://cors-anywhere.herokuapp.com/'

var baseUrl = `${cors}${c9}`;

class Party extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  handleClickJoin() {
    this.props.onClickJoin();

    var profileUserId= this.props.profileUserId
    var profileUserName= this.props.profileUserName

    // console.log(profileUserId);
    // console.log(profileUserName, "yo");

    var partyData = this.props.partyData;
    var gameDataGameId = this.props.gameDataGameId;
    var joinUrl = `${baseUrl}games/${gameDataGameId.gameId}/parties/${partyData.partyId}/join`
    // console.log(joinUrl)
    var payload = {
        // ask brian what does he look for here
        userId: profileUserId,
        username: profileUserName
    }
    fetch(joinUrl, {
      method:"post",
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

  handleClickEdit() {
    this.props.onClickEdit();

    var partyData = this.props.partyData;
    var gameDataGameId = this.props.gameDataGameId;
    var editUrl = `${baseUrl}games/${gameDataGameId.gameId}/parties/${partyData.partyId}/edit`

    var payload = {
        // ask brian what does he look for here

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

  handleClickLeave() {
    this.props.onClickLeave();

    var profileUserId= this.props.profileUserId
    var profileUserName= this.props.profileUserName

    var partyData = this.props.partyData;
    var gameDataGameId = this.props.gameDataGameId;
    var leaveUrl = `${baseUrl}games/${gameDataGameId.gameId}/parties/${partyData.partyId}/leave`

    var payload = {
      userId: profileUserId,
      username: profileUserName
    }
    fetch(leaveUrl, {
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

  handleClickBack() {
    this.props.onClickBack();
  }

  handleClickDelete() {
    this.props.onClickDelete();

    var partyData = this.props.partyData;
    var gameDataGameId = this.props.gameDataGameId;
    var deleteUrl = `${baseUrl}games/${gameDataGameId.gameId}/parties/${partyData.partyId}/delete`

    var payload = {
        // ask brian what does he look for here
    }
    fetch(deleteUrl, {
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

  handleClickStart(){
    this.props.onClickStart();

    var partyData = this.props.partyData;
    var gameDataGameId = this.props.gameDataGameId;
    var startUrl = `${baseUrl}games/${gameDataGameId.gameId}/parties/${partyData.partyId}/confirm` //this is probably confirm

    var payload = {
    }
    fetch(startUrl, {
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

  handleClickRemove_Member( member) {
    var profileUserId= this.props.profileUserId
    var profileUserName= this.props.profileUserName

    var partyData = this.props.partyData;
    var gameDataGameId = this.props.gameDataGameId;
    var leaveUrl = `${baseUrl}games/${gameDataGameId.gameId}/parties/${partyData.partyId}/leave`

    var payload = {
      userId: member.userId,
      username: profileUserName
    }
    fetch(leaveUrl, {
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

  render() {
    var isLeader = this.props.checkIsLeader;
    var isMember = this.props.checkIsMember;
    var partyData = this.props.partyData;

    var leader = this.props.checkIsLeader;
    var member = this.props.checkIsMember;

    return (
      <div>
        <div className="party-view">
          <div className="party-view-box-content-title">{partyData.partyName}</div>
          <div className="party-view-box-content-title-tags">
            {partyData.tags && partyData.tags.pvp ? <div className="box-tag"> #pvp </div> : null}
            {partyData.tags && partyData.tags.pve ? <div className="box-tag"> #pve </div> : null}
            {partyData.tags && partyData.tags.farm ? <div className="box-tag"> #farm </div> : null}
            {partyData.tags && partyData.tags.noob ? <div className="box-tag"> #noob </div> : null}
            {partyData.tags && partyData.tags.casual ? <div className="box-tag"> #casual </div> : null}
            {partyData.tags && partyData.tags.comp ? <div className="box-tag">#comp </div> : null}
            {partyData.tags && partyData.tags.farm ? <div className="box-tag"> #farm </div> : null}
            {partyData.tags && partyData.tags.exp ? <div className="box-tag"> #exp </div> : null}
          </div>
          <div className="party-view-users-breaker"></div>
          <div className="party-view-info">
            <div className="party-view-info-size">
              <div className="party-view-box-title">PARTY SIZE</div>
              <span className="party-view-breaker"></span>
              <div className="party-view-box-content">{partyData.size} PLAYERS</div>
            </div>
            <div className="party-view-info-time">
              <div className="party-view-box-title">START TIME</div>
              <span className="party-view-breaker"></span>
              <div className="party-view-box-content">{partyData.startTime}</div>
            </div>
            <div className="party-view-info-time">
              <div className="party-view-box-title">END TIME</div>
              <span className="party-view-breaker"></span>
              <div className="party-view-box-content">{partyData.endTime}</div>
            </div>
          </div>
          <div className="party-view-users">
            <div className="party-view-users-title">PARTY MEMBERS</div>
            <div className="party-view-users-breaker"></div>
            {partyData.users ? partyData.users.map((partyData) => <PartyMember
              leaderId={this.props.leaderId()}
              isLeader={isLeader}
              isMember={isMember}
              memberData={partyData}
              key={partyData.userId}
              onClickRemove={this.handleClickRemove_Member.bind(this)}/>)
            : null}
          </div>
          <div className="party-view-decision">
            { isLeader ?
              <div className="party-view-creator">
                <div className="party-view-decision-back" onClick={this.handleClickBack.bind(this)}>BACK</div>
                {/* <div className="party-view-decision-edit" onClick={this.handleClickEdit.bind(this)}>EDIT</div> */}
                <div className="party-view-decision-delete" onClick={this.handleClickDelete.bind(this)}>DELETE</div>
                <div className="party-view-decision-start" onClick={this.handleClickStart.bind(this)}>START</div>
              </div>
            : null }
            { !isLeader && isMember ?
              <div className="party-view-member">
                <div className="party-view-decision-back" onClick={this.handleClickBack.bind(this)}>BACK</div>
                <div className="party-view-decision-leave" onClick={this.handleClickLeave.bind(this)}>LEAVE</div>
              </div>
            : null }
            { !isMember ?
              <div className="party-view-member">
                <div className="party-view-decision-back" onClick={this.handleClickBack.bind(this)}>BACK</div>
                <div className="party-view-decision-join" onClick={this.handleClickJoin.bind(this)}>JOIN</div>
              </div>
            : null }
          </div>
        </div>
      </div>
    )
  }
}

export default Party;
