import React  from 'react';

function Gun(props) {

  return (
    <li className='gun'>
      <div className={'gun__image-wrapper' + 
        ((props.object.rarity === "Covert") ? " gun__image-wrapper_red" : "") +
        ((props.object.rarity === "Classified") ? " gun__image-wrapper_pink" : "") +
        ((props.object.rarity === "Restricted") ? " gun__image-wrapper_purple" : "") +
        ((props.object.rarity === "Mil-Spec") ? " gun__image-wrapper_blue" : "") +
        ((props.object.rarity === "Industrial") ? " gun__image-wrapper_industrial" : "") +
        ((props.object.rarity === "Consumer") ? " gun__image-wrapper_consumer" : "")     
      }>
        <img className={'gun__image'} src={props.object.image} alt="gun-img" draggable="false"/>
        <div className='gun__sides'>          
          <div className={'gun__side gun__side_ct' + (props.object.isCT ? " gun__side_visible" : "")}></div>
          <div className={'gun__side gun__side_t' + (props.object.isT ? " gun__side_visible" : "")}></div>
        </div>
      </div>
      <p className='gun__weapon'>{props.object.weapon}</p>
      <p className='gun__name'>{props.object.name}</p>
    </li>
  )
}

export default Gun;