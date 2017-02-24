import React from 'react';

import Party from './Party';
import Edit from './Edit';

class PartyList extends React.Component {
  constructor() {
    super();

    this.state = {
      partyFormClosed: true,
      editFormClosed: true
    };
  }

  handleClick() {
    if (this.state.partyFormClosed === true) {
      this.setState({
        partyFormClosed: false
      })
    }
  }

  onClickCancel_Party(){
    this.setState({
      partyFormClosed: true
    })
  }

  onClickEdit_Party() {
    this.setState({
      partyFormClosed: true,
      editFormClosed: false
    })
  }

  onClickDelete_Party() {
    this.setState({
      partyFormClosed: true
    })
  }

  onClickJoin_Party() {
    this.setState({
      partyFormClosed: true
    })
  }

  onClickLeave_Party() {
    this.setState({
      partyFormClosed: true
    })
  }

  render() {
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
              <img src="/img/arrow.png" onClick={this.handleClick.bind(this)}/>
            </div>
          </div>

        </div>
        { !this.state.partyFormClosed ?
          <Party
            onClickCancel={this.onClickCancel_Party.bind(this)}
            onClickEdit={this.onClickEdit_Party.bind(this)}
            onClickStart={this.onClickDelete_Party.bind(this)}
            onClickJoin={this.onClickJoin_Party.bind(this)}
            onClickLeave={this.onClickLeave_Party.bind(this)}
          />  : null }
        { !this.state.editFormClosed ?
          <Edit
            
          /> : null}
      </div>

    )
  }
}

export default PartyList;
