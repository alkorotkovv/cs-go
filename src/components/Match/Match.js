import React  from 'react';
import { allMapsArray, matchesArray } from '../../utils/constants';
import competitiveIcon from '../../images/csgo_map_icon.png';
import timeIcon from '../../images/map_time_icon.png';

function Match(props) {

  function handleMatchClick() {
    props.handleMatchClick(props.index);
  }

  return (
    <li className={"match" + (props.object.checked ? " match_checked" : "") + (props.object.result === "Победа" ? " match_green" : " match_red")} onClick={handleMatchClick}>
      <img className='match__logo' src={allMapsArray.find((e) => e.name === props.object.map).icon} alt="logo" draggable="false"/>
      <p className='match__name'>{allMapsArray.find((e) => e.name === props.object.map).name}</p>
      <p className='match__score'>{props.object.score}</p>
      <p className='match__time'>{props.object.time}</p>
      <p className='match__result'>{props.object.result}</p>
    </li>
  )
}

export default Match;