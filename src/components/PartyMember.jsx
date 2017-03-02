import React from 'react';

class PartyMember extends React.Component {
  constructor() {
    super();

    this.state ={
    };
  }

  handleClickRemove_Member(event, member){
    this.props.onClickRemove(member)
  }



  render() {
    var isLeader = this.props.isLeader;
    var isMember = this.props.isMember;

    var memberData = this.props.memberData;
    return(
      <div className="party-member-list">
        <div className="party-member-info">
          {/* <div className="party-member-info-role"></div> */}
          <div className="party-member-info-name">{memberData.username}</div>
          <div className="party-member-remove">
            { isLeader && this.props.leaderId !== memberData.userId ?
              <img src="/img/remove50x50.png" alt="" onClick={(event) =>{ this.handleClickRemove_Member(event, memberData )}}/> : null }
          </div>
        </div>
        <span className="party-member-info-breaker"></span>
      </div>
    )
  }
}

export default PartyMember;
