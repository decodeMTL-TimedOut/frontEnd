import React from 'react';

import PartyList from './PartyList';
import Party from './Party';
import Create from './Create';


var c9 = 'https://timedout-leblancbryan.c9users.io/'
var cors = 'https://cors-anywhere.herokuapp.com/'

var baseUrl = `${cors}${c9}`;

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      createFormClosed: true,
      createButtonPressed: false,
      gamedata: ""
    };
  }

  handleClick(event) {
    event.preventDefault();

    if (this.state.createFormClosed === true) {
      this.setState({
        createFormClosed: false,
        createButtonPressed: true
      })
    }
  }

  onClickBack_Create(){
    this.setState({
      createFormClosed: true,
      createButtonPressed: false
    })
  }

  onClickConfirm_Create() {
    this.setState({
      createFormClosed: true,
      createButtonPressed: false
    })
  }

  onClickDelete_Create() {
    this.setState({
      createFormClosed: true,
      createButtonPressed: false
    })
  }

  handlePress() {
    this.setState({
      createButtonPressed: false
    })
  }

  componentDidMount() {
    console.log("hello, i am voer here")
    var gameId = this.props.params.id;
    var gameUrl = `${baseUrl}games/${gameId}`;

    fetch(gameUrl)
      .then(response => response.json())
      .then(
        gamedata => {
          this.setState ({
            gamedata: gamedata.result
          })
        }
      )
  }

  render() {
    const gamedata = this.state.gamedata;
    const gameDataGameId = this.state.gamedata;

    console.log(gamedata, "over here this is the gamer")
    // console.log(this.props.auth)
    // var string1= "Hello how on this fine day #are #you #all #doing?";
    // var result = string1.substring(string1.indexOf('#') + 1);
    //
    // console.log(result)

    // style={{
      //   backgroundImage: `url(${this.state.gamedata.art})`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: "center center"
      // }}>

    var className_Create = "game-page-information-button" + (this.state.createButtonPressed ? "-pressed" : '');

    return (
      <div className="game-page">
        <div className="game-page-information">
          <div className="game-page-information-art">
            <img src={this.state.gamedata.art} alt=""/>
          </div>

          <div className="game-page-information-description">
            <div className="game-page-information-description-title">
              {this.state.gamedata.gameName}
            </div>
            <div className="game-page-information-description-platform">
              {this.state.gamedata.platform}
            </div>
            <div className="game-page-information-description-info">
              {this.state.gamedata.description}
            </div>
          </div>
          <div className={className_Create} onClick={this.handleClick.bind(this)}>Create Party</div>

        </div>
        { !this.state.createFormClosed  ?
          <Create
            gameData={gamedata}
            onClickBack={this.onClickBack_Create.bind(this)}
            onClickConfirm={this.onClickConfirm_Create.bind(this)}
            onClickDelete={this.onClickDelete_Create.bind(this)}
            auth={this.props.route.auth}
          />  : null }

        { gamedata.parties ? gamedata.parties.map((gamedata) => <PartyList gameDataGameId={gameDataGameId} auth={this.props.route.auth} partyData={gamedata} key={gamedata.gameId}/>) : null }
      </div>
    )
  }
}

export default Game;
