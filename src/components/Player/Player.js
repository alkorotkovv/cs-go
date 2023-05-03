import primeIcon from '../../images/prime.png';
import messageLogo from '../../images/message.png';

function Friend(props) {

  return (
    <li className={"player" + (props.isProgressShow ? "" : "") + (props.isVisible ? " player_animated" : "")}>
      <img className="player__avatar" src={props.avatar} alt="игрок" draggable="false"/>
      <p className='player__name'>{props.name}</p>
      <img className="player__prime" src={primeIcon} alt="прайм" draggable="false"/>
      <img className="player__rank" src={props.rank} alt="звание" draggable="false"/>
      <img className="player__country" src={props.country} alt="страна" draggable="false"/>
      <img className='player__message' src={messageLogo} alt="приглашение" draggable="false"/>
    </li>
  );

}

export default Friend;