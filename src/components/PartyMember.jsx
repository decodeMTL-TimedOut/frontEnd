import React from 'react';

class PartyMember extends React.Component {
  constructor() {
    super();

    this.state ={
    };
  }

  handleClickRemove_Member(){
    
  }

  render() {

    var memberData = this.props.memberData;
    // console.log(memberData , "<<<<<<<<<<<<<<<<<<<")
    // console.log(typeof memberData, "members over here")
    return(
      <div className="party-member-list">
        <div className="party-member-info">
          <div className="party-member-info-role"></div>
          <div className="party-member-info-name">{memberData.username}</div>
          <div className="party-member-remove">
            <img src="/img/remove50x50.png" alt="" onClick={this.handleClickRemove_Member.bind(this)}/>
          </div>
        </div>
        <span className="party-member-info-breaker"></span>
      </div>
    )
  }
}

export default PartyMember;
