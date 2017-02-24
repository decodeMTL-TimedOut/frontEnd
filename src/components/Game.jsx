import React from 'react';

import PartyList from './PartyList';
import Party from './Party';
import Edit from './Edit';
import Create from './Create';

class Game extends React.Component {
  constructor() {
    super();

    this.state = {
      party: ''
    };
  }

  handleClick(event) {
    event.preventDefault();

    this.setState({
      party: 'create'
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
              <span onClick={this.handleClick.bind(this)}>Create Party</span>
            </div>
          </div>
        </div>
        <PartyList />
        <PartyList />
        <PartyList />
        <PartyList />
        <PartyList />
        <PartyList />
        <Party />
        <Edit />
        <Create />
      </div>
    )
  }
}

export default Game;
