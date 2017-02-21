import React from 'react';
import { Link } from 'react-router';

class Edit extends React.Component {
  render() {
    return (
      <div>
        <h4>Edit Page</h4>
        <p>Edit parameters for your created party!</p>
        <button><Link to="/game/party">Confirm</Link></button>
        <button>Cancel</button>
        <button>Delete</button>
      </div>
    )
  }
}

export default Edit;
