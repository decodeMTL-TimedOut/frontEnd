import React from 'react';
import { Link } from 'react-router';


class PartyList extends React.Component {
  render() {
    return (
      <div className="partylist">
        <div className="partylist-party">
          <div className="partylist-party-info">
            <div className="partylist-party-title">
              <p>GameName</p>
            </div>
            <div className="partylist-party-other">
              <div className="partylist-party-other-info">
                <p>numPlayers</p>
              </div>
              <div className="partylist-party-other-info">
                <p>startTime</p>
              </div>
              <div className="partylist-party-other-info">
                <p>endTime</p>
              </div>
            </div>
          </div>
          <div className="partylist-party-view">
            <Link to="/game/party">View</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default PartyList;
