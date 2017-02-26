import React from 'react';

import PartyList from './PartyList';
import Party from './Party';
import Create from './Create';

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      createFormClosed: true,
      createButtonPressed: false
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



  render() {
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
    var className_Create = "game-page-information-button" + (this.state.createButtonPressed ? "-pressed" : '');

    return (
      <div className="game-page">
        <div className="game-page-information"
          style={{
            backgroundImage: 'url(http://siliconangle.com/files/2015/11/overwatch-heroes-background-blizzard-1080x623.png)',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
          }}>
          <div className="game-page-information-art">
          </div>
          <div className="game-page-information-description">
            <div className="game-page-information-description-title">
              <h1>Overwatch</h1>
            </div>
            <div className="game-page-information-description-info">
              <p>Overwatch ended the crisis, and helped maintain peace in the decades that followed, inspiring an era of exploration, innovation, and discovery.</p>
            </div>
            <div className={className_Create} onClick={this.handleClick.bind(this)}>Create Party</div>
          </div>
        </div>
        { !this.state.createFormClosed  ?
          <Create
            onClickBack={this.onClickBack_Create.bind(this)}
            onClickConfirm={this.onClickConfirm_Create.bind(this)}
            onClickDelete={this.onClickDelete_Create.bind(this)}
          />  : null }
        <PartyList userId="hyowon19"/>
        <PartyList userId="bryanLeBlanc"/>
        <PartyList userId="terminator33"/>
        <PartyList userId="bubba"/>
        <PartyList userId="juked09"/>
        <PartyList userId="someoneAwesome56"/>
      </div>
    )
  }
}

export default Game;
