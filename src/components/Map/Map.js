import React  from 'react';
import competitiveIcon from '../../images/csgo_map_icon.png';

function Map(props) {
  return (
    <li className='map'>
      <img className='map__logo' src={props.logo} alt="logo"/>
      <img className='map__icon' src={props.icon} alt="icon"/>
      <p className='map__title'>{props.name}</p>
      <p className='map__time'>{props.time}</p>
      <div className='map__checkbox'></div>
      <img className={"map__competitive" + (props.isCompetitive ? " map__competitive_visible" : " ")} src={competitiveIcon} alt="icon"/>
    </li>
  )
}

export default Map;