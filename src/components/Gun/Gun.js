import React  from 'react';

function Gun(props) {

  return (
    <li className='gun'>
      <div className={'gun__image-wrapper' + 
        ((props.rarity === "Covert") ? " gun__image-wrapper_red" : "") +
        ((props.rarity === "Classified") ? " gun__image-wrapper_pink" : "") +
        ((props.rarity === "Restricted") ? " gun__image-wrapper_purple" : "") +
        ((props.rarity === "Mil-Spec") ? " gun__image-wrapper_blue" : "") +
        ((props.rarity === "Industrial") ? " gun__image-wrapper_industrial" : "") +
        ((props.rarity === "Consumer") ? " gun__image-wrapper_Consumer" : "")     
      }>
        <img className={'gun__image'} src={props.image} alt="gun-img" draggable="false"/>
      </div>
      <p className='gun__weapon'>{props.weapon}</p>
      <p className='gun__name'>{props.name}</p>
    </li>
  )
}

export default Gun;