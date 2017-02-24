import React from 'react';

class PartyMember extends React.Component {
  constructor() {
    super();

    this.state ={

    };
  }
  render() {
    return(
      <div className="party-member-list">
        <div className="party-member-info">
          <div className="party-member-info-role">Leader</div>
          <div className="party-member-info-name">Member_User_Name</div>
          <div className="party-member-remove">
            <img src="/img/remove50x50.png" alt=""/>
          </div>
        </div>
        <span className="party-member-info-breaker"></span>
      </div>
    )
  }
}

export default PartyMember;
