import React from 'react';
import { Link } from 'react-router';

class Party extends React.Component {
  render() {
    return (
      <div>
        <h4>Party Page</h4>
        <p>View party page that you created OR from game listing here</p>
        <button>Join</button>
        <button>Leave</button>
        <button><Link to="/game/edit">Edit</Link></button>
      </div>
    )
  }
}

export default Party;
