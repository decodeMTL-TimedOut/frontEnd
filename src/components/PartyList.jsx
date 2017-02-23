import React from 'react';
import { Link } from 'react-router';

class PartyList extends React.Component {
  render() {
    return (
      <div className="party-list">
        <div className="party-list-party">
          <div className="party-list-party-info">
            <div className="party-list-party-title">
              <p>Lich King Raid Farm wed night fast runs! EXP Players only plz! Min DPS 300</p>
            </div>
            <div className="party-list-party-players">
              <div className="party-list-party-players-box">
                <span>2</span>
                <img src="/img/member50x50.png"/>
                <span className="party-list-party-players-small">need</span>
              </div>
              <div className="party-list-party-players-box">
                <span>5</span>
                <img src="/img/party50x50.png"/>
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
            <Link to="/game/party">
              <img src="/img/arrow.png"/>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default PartyList;
