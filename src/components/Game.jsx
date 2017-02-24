import React from 'react';

import PartyList from './PartyList';
import Party from './Party';
import Create from './Create';

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      createFormClosed: true
    };
  }

  handleClick(event) {
    event.preventDefault();

    if (this.state.createFormClosed === true) {
      this.setState({
        createFormClosed: false
      })
    }
  }

  onClickCancel_Create(){
    this.setState({
      createFormClosed: true
    })
  }

  onClickConfirm_Create() {
    this.setState({
      createFormClosed: true
    })
  }

  onClickDelete_Create() {
    this.setState({
      createFormClosed: true
    })
  }

  render() {
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
            {/* <img src="http://siliconangle.com/files/2015/11/overwatch-heroes-background-blizzard-1080x623.png" alt="overwatch" /> */}
          </div>
          <div className="game-page-information-description">
            <div className="game-page-information-description-title">
              <h1>Overwatch</h1>
            </div>
            <div className="game-page-information-description-info">
              <p>Overwatch ended the crisis, and helped maintain peace in the decades that followed, inspiring an era of exploration, innovation, and discovery.</p>
            </div>
            <div className="game-page-information-description-link">
              <span className="game-page-information-ON" onClick={this.handleClick.bind(this)}>Create Party</span>
            </div>
          </div>
        </div>
        { !this.state.createFormClosed  ?
          <Create
            onClickCancel={this.onClickCancel_Create.bind(this)}
            onClickConfirm={this.onClickConfirm_Create.bind(this)}
            onClickDelete={this.onClickDelete_Create.bind(this)}
          />  : null }
        <PartyList />
        <PartyList />
        <PartyList />
        <PartyList />
        <PartyList />
        <PartyList />
      </div>
    )
  }
}

export default Game;
