import React  from 'react';
import competitiveIcon from '../../images/csgo_map_icon.png';
import timeIcon from '../../images/map_time_icon.png';

function Map(props) {

  const [isChecked, setIsChecked] = React.useState(false);

  function handleClick() {
    setIsChecked(!isChecked);
  }


  return (
    <li className={"map" + (isChecked ? " map_checked" : " ")} onClick={handleClick}>
      <img className={"map__logo" + (isChecked ? " map__logo_checked" : " ")} src={props.logo} alt="logo"/>
      <img className='map__icon' src={props.icon} alt="icon"/>
      <p className='map__title'>{props.name}</p>
      <div className={"map__time" + (props.isTimeVisible ? " map__time_visible" : " ")}>
        <img className='map__time-icon' src={timeIcon} alt="icon"/>
        <p className='map__time-text'>{props.time}</p>
      </div>
      <div className={"map__checkbox" + (isChecked ? " map__checkbox_visible" : " ") + (props.isCheckable ? " " : " map__checkbox_unvisible")}></div>
      <img className={"map__competitive" + (props.isCompetitive ? " map__competitive_visible" : " ")} src={competitiveIcon} alt="icon"/>
    </li>
  )
}

export default Map;