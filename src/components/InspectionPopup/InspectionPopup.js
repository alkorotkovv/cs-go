import React  from 'react';
import Popup from '../Popup/Popup';
import north from '../../images/collections/north.png';
import de from '../../images/inspect_guns/DesertEagle_Ermungand.png';

function InspectionPopup(props) {

  //console.log(props.weapon)

  const title = props.weapon.weapon + (props.weapon.name === "" ? "" : " | " + props.weapon.name)
  console.log(title);
  
  return (
    <Popup name="inspection-popup" isVisible={props.isVisible}>
      <div className='inspection-popup__background'>
        <div className='inspection-popup__background-circle'></div>
        <div className='inspection-popup__background-semicircle'></div>
      </div>
      <div className='inspection-popup__header'>
        <img className={'inspection-popup__icon' + (props.weapon.collection.image ? " inspection-popup__icon_visible" : "")} src={props.weapon.collection.image} alt="collection" draggable="false"/>
        <h1 className='inspection-popup__title'>{title}</h1>
        <p className='inspection-popup__header-subtitle'>{props.weapon.collection.name || ""}</p>
        <div className={'inspection-popup__underline' + 
          ((props.weapon.rarity === "Covert") ? " inspection-popup__underline_covert" : "") +
          ((props.weapon.rarity === "Classified") ? " inspection-popup__underline_classified" : "") +
          ((props.weapon.rarity === "Restricted") ? " inspection-popup__underline_retricted" : "") +
          ((props.weapon.rarity === "Mil-Spec") ? " inspection-popup__underline_milspec" : "") +
          ((props.weapon.rarity === "Industrial") ? " inspection-popup__underline_industrial" : "") +
          ((props.weapon.rarity === "Consumer") ? " inspection-popup__underline_consumer" : "")}>
        </div>
      </div>
      <div className={'inspection-popup__main' + (props.weapon.type === "Gloves" ? " inspection-popup__main_type_moto" : "")}>
        <img className='inspection-popup__image' src={props.weapon.image_inspect} alt="weapon" draggable="false"/>
        <p className='inspection-popup__description'>{props.weapon.description}</p>
      </div>
      <div className='inspection-popup__bottom'>
        <button className='inspection-popup__button' onClick={props.handleClose}>Закрыть</button>
      </div>
    </Popup>
  )
}

export default InspectionPopup;