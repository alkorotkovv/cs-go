import React  from 'react';
import { allMapsArray } from '../../utils/constants';
import competitiveIcon from '../../images/csgo_map_icon.png';
import timeIcon from '../../images/map_time_icon.png';

function Match(props) {

  console.log(props)

  allMapsArray.find((e) => e.name === "Canals")
  return (
    <li className="match">
      <img className='match__logo' src={allMapsArray.find((e) => e.name === props.object.map).icon} alt="logo" draggable="false"/>
      <p className='match__name'>{allMapsArray.find((e) => e.name === props.object.map).name}</p>
      <p className='match__score'>{props.object.score}</p>
      <p className='match__time'>{props.object.time}</p>
      <p className='match__result'>{props.object.result}</p>
    </li>
  )
}

export default Match;