import Player from '../Player/Player';

function Players(props) {

  console.log(props)
  
  return (
    <ul className={"players" + (props.isRankVisible ? " players_short" : " players_big")}>
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