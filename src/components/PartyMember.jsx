import React from 'react';

class PartyMember extends React.Component {
  constructor() {
    super();

    this.state ={
    };
  }

  handleClickRemove_Member(){
    this.props.handleClickRemove_Member()
  }


  render() {

    var memberData = this.props.memberData;
    // console.log(memberData.userId)
    return(
      <div className="party-member-list">
        <div className="party-member-info">
          <div className="party-member-info-role"></div>
          <div className="party-member-info-name">{memberData.userId}</div>
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
