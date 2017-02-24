import React from 'react';
import { Link } from 'react-router';

import PartyMember from './PartyMember';

class Party extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  handleClickJoin(){
    this.props.onClickJoin();
  }

  handleClickEdit(){
    this.props.onClickEdit();
  }

  handleClickLeave(){
    this.props.onClickLeave();
  }

  handleClickCancel(){
    this.props.onClickCancel();
  }

  handleClickStart(){
    this.props.onClickStart();
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
        </div>
        <div className="party-view-decision">
          <span className="party-view-decision-join" onClick={this.handleClickJoin.bind(this)}>JOIN</span>
          <span className="party-view-decision-leave" onClick={this.handleClickLeave.bind(this)}>LEAVE</span>
          <span className="party-view-decision-edit" onClick={this.handleClickEdit.bind(this)}>EDIT</span>
          <span className="party-view-decision-cancel" onClick={this.handleClickCancel.bind(this)}>CANCEL</span>
          <span className="party-view-decision-start" onClick={this.handleClickStart.bind(this)}>START</span>
        </div>
      </div>
    )
  }
}

export default Party;
