import React from 'react';
import { browserHistory as history } from 'react-router';



class Confirmation extends React.Component {
  constructor(){
    super();

    this.state ={

    };
  }

  handleClick() {
    alert()
    history.replace('/')
  }

  render() {
    return (
      <div className="confirmation-page">
        <div className="confirmation-message">
          <span>A confirmation email has been sent to you.</span>
          <span>Have fun in the game with your newfound friends!</span>
          <button onclick={this.handleClick.bind(this)}>OK</button>
        </div>
      </div>
    )
  }
}

export default Confirmation;
