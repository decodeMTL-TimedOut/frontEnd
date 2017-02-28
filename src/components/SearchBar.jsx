import React from 'react';
import { browserHistory as history } from 'react-router';
import { Link } from 'react-router';

// var c9 = 'https://timedout-leblancbryan.c9users.io/'
// var cors = 'https://cors-anywhere.herokuapp.com/'
//
// var url = `${cors}${c9}main`;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
        // Why do we need to do this?? Make sure you understand!!!
        this.state={
          currentInput: ""
          // query: ""
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

    // this.setState({
    //   query: this.state.currentInput
    // })
    history.replace(`/?q=${this.state.currentInput}`)
  }

  // componentDidMount() {
  //   var payload = {
  //     userId: this.state.profile.user_id
  //   }
  //   var data = new FormData();
  //   data.append("json", JSON.stringify(payload));
  //    //get back to me on this when you get here
  //   var that = this;
  //   fetch(url, {
  //     method: 'POST',
  //     body: data
  //   })
  //     .then( (response) => {
  //       return response.json() })
  //         .then( (json) => {
  //           that.setState({
  //             gamedata: json
  //           });
  //   });
  // }



  render() {
    console.log(this.state.currentInput)
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
