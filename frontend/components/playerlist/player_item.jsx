import React from 'react';

export default class PlayerItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSwap = this.handleSwap.bind(this);
  }

  handleSwap() {
    this.props.draftPlayer(this.props.player);
  }

  render() {
    const player = this.props.player;
    console.log(player.image_url);
    return(
      <li>
        <div className='headshot'>
          <img src={`${player.image_url}`} width='100' height='70'/>
        </div>
        <div className='player-name'>
          {player.name}
        </div>
        <div className='player-position'>
          {player.position}
        </div>
        <div className='height-weight'>
          {player.height} / {player.weight}
        </div>
        <button onClick={this.handleSwap}>Draft</button>
      </li>
    );
  }
}