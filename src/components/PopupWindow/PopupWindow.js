import React  from 'react';
import Popup from '../Popup/Popup';

function PopupWindow(props) {
  
  return (
    <Popup name="default-popup" isVisible={props.isVisible}>
      <div className='popup__container'>
        <h2 className='popup__title'>{props.title}</h2>
        <div className='popup__main'>
          <p className='popup__text'>{props.text}</p>
          <div className='popup__buttons'>
            <button className='popup__button'>ОК</button>
            <button className='popup__button' onClick={props.handleClose}>OТМЕНА</button>
          </div>
        </div>
      </div>
    </Popup>
  )
}

export default PopupWindow;