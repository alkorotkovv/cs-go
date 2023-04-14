import React  from 'react';

import Player from '../Player/Player';

function Players(props) {

  //Плавная прокрутка при рендере
  React.useEffect(() => {
    document.getElementById('players').scrollTo({ top: 0, behavior: 'smooth' });
  }, [props.isProgressShow]);

  
  return (
    <ul id="players"className={"players" + (props.isRankVisible ? " players_short" : " players_big")}>
      {
        props.friendsArray.map((element, index) => 
          <Player 
            key={index}
            avatar={element.avatar}
            name={element.name}
            rank={element.rank}
            country={element.country}
          />
        )
        }  
    </ul>
  )
}

export default Players;