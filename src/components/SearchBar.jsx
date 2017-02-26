import React from 'react';
import { browserHistory as history } from 'react-router';
import { Link } from 'react-router';

/*
This component displays a form where the user can enter a GitHub username
When they submit the form either by pressing ENTER or clicking the button,
we will use react-router's history.push function to push a new URL to the history.

This will have as an effect to navigate to a new URL, which will display the User component
Why are we doing this instead of using a <Link>? The answer is straightforward, but make sure you understand!!!
*/
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
        // Why do we need to do this?? Make sure you understand!!!
        this.state={
          currentInput: ""
        }
  }

  handleInput(event){
    var value = event.target.value;
    this.setState({
      currentInput: value
    });
  }

  handleSubmit() {
    
    // var value = this.refs.userInput.value;
    //     // history.push(`/user/${this.refs.userInput.value}`)
    // console.log(value)
  }

  componentDidMount() {
    var url = `https://api.github.com/users/${this.props.user}`; //get back to me on this when you get here
    var that = this;
    fetch(url)
      .then( (response) => {
        return response.json() })
          .then( (json) => {
            that.setState({
              userData: json
      });
    });
  }

  render() {
    console.log(this.state.currentInput)
    return (
      <div className="search-bar">
        <Link to="/"><img className="search-bar-logo" src="https://image.flaticon.com/icons/png/512/61/61972.png" alt=""/></Link>
        <form className="search-bar-form" onSubmit={this.handleSubmit.bind(this)}>
          <input onInput={this.handleInput.bind(this)} ref="userInput" className="search-bar-input" type="text" placeholder="Enter anything you want!" />
          <button className="search-bar-button"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/490px-Magnifying_glass_icon.svg.png" alt=""/></button>
        </form>
      </div>
    );
  }
};

export default SearchBar;
