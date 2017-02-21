import React from 'react';
import { Link } from 'react-router';

class Create extends React.Component {
  render() {
    return (
      <div>
        <h4>Create Page</h4>
        <p>Enter parameters for your party:</p>
        <button><Link to="/game/party">Confirm</Link></button>
        <button>Cancel</button>
      </div>
    )
  }
}

export default Create;
