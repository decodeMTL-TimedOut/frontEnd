import React from 'react';
import { Link } from 'react-router';

import PartyMember from './PartyMember';

class Party extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  handleClickJoin() {
    this.props.onClickJoin();
  }

  handleClickEdit() {
    this.props.onClickEdit();
  }

  handleClickLeave() {
    this.props.onClickLeave();
  }

  handleClickBack() {
    this.props.onClickBack();
  }

  handleClickDelete() {
    this.props.onClickDelete();
  }

  handleClickStart(){
    this.props.onClickStart();
  }

  haveLeader() {
    this.props.checkIsLeader();
  }

  render() {

    return (
      <div className="party-view">
        <span>THE VIEW PARTY PAGE</span>
        <p>BASIC STATS</p>
        <div className="party-view-info">
          <div className="party-view-info-title">
            <div className="party-view-box-title">TITLE</div>
            <span className="party-view-breaker"></span>
            <div className="party-view-box-content">insert game name</div>
          </div>
          <div className="party-view-info-size">
            <div className="party-view-box-title">PARTY SIZE</div>
            <span className="party-view-breaker"></span>
            <div className="party-view-box-content">insert party size number</div>
          </div>
          <div className="party-view-info-time">
            <div className="party-view-box-title">START TIME</div>
            <span className="party-view-breaker"></span>
            <div className="party-view-box-content">insert start time here</div>
          </div>
          <div className="party-view-info-time">
            <div className="party-view-box-title">END TIME</div>
            <span className="party-view-breaker"></span>
            <div className="party-view-box-content">insert end time here</div>
          </div>
        </div>
        <div className="party-view-users">
          <span>PARTY MEMBERS</span>
          <span className="party-view-users-breaker"></span>
          <PartyMember />
          <PartyMember />
          <PartyMember />
          <PartyMember />
          <PartyMember />
        </div>
        <div className="party-view-decision">
          <div className="party-view-creator">
            <div className="party-view-decision-back" onClick={this.handleClickBack.bind(this)}>BACK</div>
            <div className="party-view-decision-edit" onClick={this.handleClickEdit.bind(this)}>EDIT</div>
            <div className="party-view-decision-delete" onClick={this.handleClickDelete.bind(this)}>DELETE</div>
            <div className="party-view-decision-start" onClick={this.handleClickStart.bind(this)}>START</div>
          </div>
          <div className="party-view-member">
            <div className="party-view-decision-back" onClick={this.handleClickBack.bind(this)}>BACK</div>
            <div className="party-view-decision-join" onClick={this.handleClickJoin.bind(this)}>JOIN</div>
            <div className="party-view-decision-leave" onClick={this.handleClickLeave.bind(this)}>LEAVE</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Party;
