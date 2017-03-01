import React from 'react';
import { browserHistory as history } from 'react-router';
import { Link } from 'react-router';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
        this.state={
          currentInput: ""
        }
  }

  handleInput_SearchBar(event){
    var value = event.target.value;
    this.setState({
      currentInput: value
    });
  }


  handleSubmit(event) {
    event.preventDefault();

    history.replace(`/?q=${this.state.currentInput}`)
  }

  render() {
    return (
      <div className="search-bar">
        <Link to="/"><img className="search-bar-logo" src="./img/TimedOutLetter.png" alt=""/></Link>
        <form className="search-bar-form" onSubmit={this.handleSubmit.bind(this)}>
          <input onInput={this.handleInput_SearchBar.bind(this)} ref="userInput" className="search-bar-input" type="text" placeholder="Enter anything you want!" />
          <button className="search-bar-button"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/490px-Magnifying_glass_icon.svg.png" alt=""/></button>
        </form>
      </div>
    );
  }
};

export default SearchBar;
