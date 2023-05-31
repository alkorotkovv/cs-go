import React  from 'react';
import Popup from '../Popup/Popup';

function SetupPopup(props) {

  function chengeValue(evt) {
    props.handleCheck(evt.target.value);
  }
  
  return (
    <Popup name="setup-popup" isVisible={props.isVisible}>
      <div className='popup__container'>
        <h2 className='popup__title'>{props.title}</h2>
        <div className='popup__main'>
          <p className='popup__text'>{props.text}</p>

          <fieldset className="setup-popup__fieldset">
            <label className="setup-popup__label">
              <input className='setup-popup__input' type="radio" name="checkbox1" value="1" id="checkbox1" checked={props.value === '1' ? true : false} onChange={chengeValue} />
              <p className='setup-popup__input-title'>ЛЮБАЯ</p>
              <p className='setup-popup__input-subtitle'>Искать игру любой длительности</p>
            </label>
            <label className="setup-popup__label">
              <input className='setup-popup__input' type="radio" name="checkbox2" value="2" id="checkbox2" checked={props.value === '2' ? true : false} onChange={chengeValue}/>
              <p className='setup-popup__input-title'>КОРОТКАЯ ИГРА</p>
              <p className='setup-popup__input-subtitle'>Победите в 9 раундах, чтобы выиграть</p>
            </label>
            <label className="setup-popup__label">
              <input className='setup-popup__input' type="radio" name="checkbox3" value="3" id="checkbox3" checked={props.value === '3' ? true : false} onChange={chengeValue}/>
              <p className='setup-popup__input-title'>ДЛИННАЯ ИГРА</p>
              <p className='setup-popup__input-subtitle'>Победите в 16 раундах, чтобы выиграть (классический режим)</p>
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