import React  from 'react';

function Gun(props) {

  return (
    <li className='gun'>
      <img className={'gun__image'} src={props.image} alt="gun-img" draggable="false"/>
      <p className='gun__weapon'>{props.weapon}</p>
      <p className='gun__name'>{props.name}</p>
    </li>
  )
}

export default Gun;