import React  from 'react';

function Map(props) {
  return (
    <li className='map'>
      <img className='map__logo' src={props.logo} alt="logo"/>
      <img className='map__icon' src={props.icon} alt="icon"/>
      <p className='map__title'>{props.name}</p>
      <p className='map__time'>{props.time}</p>
    </li>
  )
}

export default Map;