import React  from 'react';
import { allMapsArray, matchesArray } from '../../utils/constants';
import cupIcon from '../../images/match_cup.png';

function Match(props) {

  console.log(props.object)

  function handleMatchClick() {
    props.handleMatchClick(props.index);
  }

  return (
    <li className={"match" + (props.object.checked ? " match_checked" : "") + (props.object.result === "Победа" ? " match_green" : props.object.result === "Ничья" ? " match_lightgreen" : " match_red")} onClick={handleMatchClick}>
      <img className='match__logo' src={allMapsArray.find((e) => e.name === props.object.map).icon} alt="logo" draggable="false"/>
      <p className='match__name'>{allMapsArray.find((e) => e.name === props.object.map).name}</p>
      <div className='match__score-block'>
        <p className={'match__score' + (props.object.side === "T" ? " match__score_t" : " match__score_ct")}>{(props.object.side === "T" ? props.object.scoreT : props.object.scoreCT)}</p>
        <p className='match__score'>&ensp;-&ensp;</p>
        <p className={'match__score' + (props.object.side === "T" ? " match__score_ct" : " match__score_t")}>{(props.object.side === "T" ? props.object.scoreCT : props.object.scoreT)}</p>
      </div>      
      <p className='match__time'>{props.object.time}</p>
      <div className='match__result-block'>
        <img className={'match__cup' + (props.object.result === "Победа" ? " match__cup_visible" : "")}  src={cupIcon} alt="logo" draggable="false"/>
        <p className='match__result'>{props.object.result}</p>
      </div>      
    </li>
  )
}

export default Match;