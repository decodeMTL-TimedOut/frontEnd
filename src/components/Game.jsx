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


    // <PartyList userId="hyowon19" member="true"/>
    // <PartyList userId="bryanLeBlanc" member="true"/>
    // <PartyList userId="terminator33" member="false"/>
    // <PartyList userId="bubba" member="false"/>
    // <PartyList userId="juked09" member="false"/>
    // <PartyList userId="someoneAwesome56" member="true"/>

  //     var Parent = React.createClass({
  //   getInitialState: function() {
  //     return {highlighted: false};
  //   },
  //   render: function() {
  //     var className = 'card' + (this.state.highlighted ? ' highlighted' : '');
  //     return (
  //       <div className={className}>
  //         <EditableTextarea onClick={this.toggleHighlight} />
  //       </div>
  //     );
  //   },
  //   toggleHighlight: function() {
  //     this.setState({highlighted: !this.state.highlighted});
  //   },
  // });

  componentDidMount() {
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

    // console.log(gamedata , "hello world")
    // console.log(this.state.gamedata, "i am over here now")
    // console.log(gamedata.parties, "yo yoyoy");

    var className_Create = "game-page-information-button" + (this.state.createButtonPressed ? "-pressed" : '');

    return (
      <div className="game-page">
        <div className="game-page-information"
          style={{
            backgroundImage: `url(${this.state.gamedata.art})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
          }}>
          <div className="game-page-information-art">
          </div>
          <div className="game-page-information-description">
            <div className="game-page-information-description-title">
              {this.state.gamedata.gameName}
            </div>
            <div className="game-page-information-description-platform">
              {this.state.gamedata.platform}
            </div>
            {/* <div className="game-page-information-description-info">
              {this.state.gamedata.description}
            </div> */}
          </div>
          <div className={className_Create} onClick={this.handleClick.bind(this)}>Create Party</div>
        </div>
        { !this.state.createFormClosed  ?
          <Create
            onClickBack={this.onClickBack_Create.bind(this)}
            onClickConfirm={this.onClickConfirm_Create.bind(this)}
            onClickDelete={this.onClickDelete_Create.bind(this)}
          />  : null }

        {gamedata.parties ? gamedata.parties.map((gamedata) => <PartyList partyData={gamedata} key={gamedata.gameId}/>) : null}
      </div>
    )
  }
}

export default Game;
