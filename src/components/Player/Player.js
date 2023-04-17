import primeIcon from '../../images/prime.png';
import messageLogo from '../../images/message.png';

function Friend(props) {

  return (
    <li className={"player" + (props.isProgressShow ? " player_animated" : "")}>
      <img className="player__avatar" src={props.avatar} alt="игрок"/>
      <p className='player__name'>{props.name}</p>
      <img className="player__prime" src={primeIcon} alt="игрок"/>
      <img className="player__rank" src={props.rank} alt="звание"/>
      <img className="player__country" src={props.country} alt="страна"/>
      <img className='player__message' src={messageLogo} alt="приглашение"/>
    </li>
  );

}

export default Friend;