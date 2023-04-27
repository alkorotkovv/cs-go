import React  from 'react';
import competitiveIcon from '../../images/csgo_map_icon.png';
import timeIcon from '../../images/map_time_icon.png';

function MapBig(props) {

  console.log(props);

  const [isChecked, setIsChecked] = React.useState(false);

  function handleClick() {
    setIsChecked(!isChecked);
  }


  return (
    <li className={"map-big" + (isChecked ? " map-big_checked" : " ")} onClick={handleClick}>
      <img className={"map-big__logo" + (isChecked ? " map-big__logo_checked" : " ")} src={props.maps[0].logo} alt="logo"/>
      <ul className='map-big__list'>
        {
          props.maps.map((element, index) => 
            <li key={index} className='map-big__item'><img className='map-big__icon' src={element.icon} alt="icon"/></li>
          )
        }  
      </ul>
      <p className='map-big__title'>{props.name}</p>
    </li>
  )
  
}

export default MapBig;