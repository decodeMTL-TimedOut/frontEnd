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
    var userId = this.props.auth.getProfile().user_id;

    if(userId === this.props.partyData.users[0].userId) {
      this.setState ({
        isLeader: true
      })
    }
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
    // console.log(this.props.auth.getProfile().user_id)
    // console.log(this.props.auth.getProfile().name)


    var partyData = this.props.partyData;
    var gameDataGameId = this.props.gameDataGameId;

    var profileUserId = this.props.auth.getProfile().user_id;
    var profileUserName = this.props.auth.getProfile().name;
    // console.log(profileUserId)
    // console.log(profileUserName)

    return (
      <div>
        <div className="party-list">
          <div className="party-list-party">
            <div className="party-list-party-info">
              <div className="party-list-party-title">
                <p>{partyData.partyName}</p>
              </div>
              <div className="party-list-party-players">
                <div className="party-list-party-players-box">
                  <span>{partyData.size - partyData.users.length}</span>
                  <img src="/img/member50x50.png" alt=""/>
                  <span className="party-list-party-players-small">need</span>
                </div>
                <div className="party-list-party-players-box">
                  <span>{partyData.size}</span>
                  <img src="/img/party50x50.png" alt=""/>
                  <span className="party-list-party-players-small">max</span>
                </div>
              </div>
              <div className="party-list-party-other">
                <div className="party-list-party-other-time">
                  <p>{partyData.startTime}</p>
                </div>
                <div className="party-list-party-other-time">
                  <p>{partyData.endTime}</p>
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
            onClickEdit={this.onClickEdit_Party.bind(this)}
            onClickStart={this.onClickStart_Party.bind(this)}
            onClickDelete={this.onClickDelete_Party.bind(this)}
            onClickJoin={this.onClickJoin_Party.bind(this)}
            onClickLeave={this.onClickLeave_Party.bind(this)}
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
