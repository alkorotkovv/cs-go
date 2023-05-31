import React  from 'react';
import Popup from '../Popup/Popup';

function SetupPopup(props) {
  
  return (
    <Popup name="setup-popup" isVisible={props.isVisible}>
      <div className='popup__container'>
        <h2 className='popup__title'>{props.title}</h2>
        <div className='popup__main'>
          <p className='popup__text'>{props.text}</p>

          <fieldset className="setup-popup__fieldset">
            <label className="setup-popup__label">
              <input className='setup-popup__input' type="radio" name="browser" value="ie" id="ie"/>
              <p className='setup-popup__input-title'>ЛЮБАЯ</p>
              <p className='setup-popup__input-subtitle'>Искать игру любой длительности</p>
            </label>
            <label className="setup-popup__label">
              <input className='setup-popup__input' type="radio" name="browser" value="ie" id="ie"/>
              <p className='setup-popup__input-title'>ЛЮБАЯ</p>
              <p className='setup-popup__input-subtitle'>Искать игру любой длительности</p>
            </label>
            <label className="setup-popup__label">
              <input className='setup-popup__input' type="radio" name="browser" value="ie" id="ie"/>
              <p className='setup-popup__input-title'>ЛЮБАЯ</p>
              <p className='setup-popup__input-subtitle'>Искать игру любой длительности</p>
            </label>
          </fieldset>

          <div className='popup__buttons'>
            <button className='popup__button'>ОК</button>
            <button className='popup__button' onClick={props.handleClose}>OТМЕНА</button>
          </div>
        </div>
      </div>
    </Popup>
  )
}

export default SetupPopup;