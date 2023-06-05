import React  from 'react';
import { allMapsArray } from '../../utils/constants';


function MatchOnline(props) {

  //console.log(props)

  function handleMatchClick() {
    props.handleMatchClick(props.object.id);
  }

  return (
    <li className={"match-online" + (props.object.id === props.id ? " match-online_checked" : "")} onClick={handleMatchClick}>
      <img className='match-online__logo' src={allMapsArray.find((e) => e.name === props.object.map).icon} alt="logo" draggable="false"/>
      <p className='match-online__name'>{allMapsArray.find((e) => e.name === props.object.map).name}</p>
      <img className='match-online__rank' src={props.object.rank} alt="rank" draggable="false"/>
      <div className='match-online__score-block'>
        <p className='match-online__score match-online__score_ct'>{props.object.scoreCT}</p>
        <p className='match-online__score'>&ensp;-&ensp;</p>
        <p className='match-online__score match-online__score_t'>{props.object.scoreT}</p>
      </div>      
      <p className='match-online__viewers'>{props.object.viewers}</p>
    </li>
  )
}

export default MatchOnline;