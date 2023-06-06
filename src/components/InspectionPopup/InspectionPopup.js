import React  from 'react';
import Popup from '../Popup/Popup';
import north from '../../images/collections/north.png';
import de from '../../images/inspect_guns/DesertEagle_Ermungand.png';

function InspectionPopup(props) {

  
  return (
    <Popup name="inspection-popup" isVisible={props.isVisible}>
      <div className='inspection-popup__background'>
        <div className='inspection-popup__background-circle'></div>
        <div className='inspection-popup__background-semicircle'></div>
      </div>
      <div className='inspection-popup__header'>
        <img className='inspection-popup__header-collection-logo' src={north} alt="collection" draggable="false"/>
        <h1 className='inspection-popup__header-title'>Desert Eagle | Изумрудный Ёрмунганд</h1>
        <p className='inspection-popup__header-subtitle'>Коллекция "Север"</p>
        <div className='inspection-popup__header-underline'></div>
      </div>
      <div className='inspection-popup__main'>
        <img className='inspection-popup__main-logo' src={de} alt="weapon" draggable="false"/>
      </div>
      <div className='inspection-popup__bottom'>
        <button className='inspection-popup__button' onClick={props.handleClose}>Закрыть</button>
      </div>
    </Popup>
  )
}

export default InspectionPopup;