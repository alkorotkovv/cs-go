import React  from 'react';
import Popup from '../Popup/Popup';

function SetupPopup(props) {

  const [nowValue, setNowValue] = React.useState(props.value)

  function changeValue(evt) {
    setNowValue(evt.target.value)
    //props.handleCheck(evt.target.value);
  }

  function handleSaveValue() {
    props.handleSave(nowValue);
  }
  
  return (
    <Popup name="setup-popup" isVisible={props.isVisible}>
      <div className='popup__container'>
        <h2 className='popup__title'>{props.title}</h2>
        <div className='popup__main'>
          <p className='popup__text'>{props.text}</p>

          <fieldset className="setup-popup__fieldset">
            <label className="setup-popup__label">
              <input className='setup-popup__input' type="radio" name="checkbox1" value="1" id="checkbox1" checked={nowValue === '1' ? true : false} onChange={changeValue} />
              <p className='setup-popup__input-title'>{props.type === "length" ? "ЛЮБАЯ" : "КОМАНДА НА КОМАНДУ"}</p>
              <p className='setup-popup__input-subtitle'>{props.type === "length" ? "Искать игру любой длительности" : "Две команды, у каждой команды свой счёт"}</p>
            </label>
            <label className="setup-popup__label">
              <input className='setup-popup__input' type="radio" name="checkbox2" value="2" id="checkbox2" checked={nowValue === '2' ? true : false} onChange={changeValue}/>
              <p className='setup-popup__input-title'>{props.type === "length" ? "КОРОТКАЯ ИГРА" : "ВСЕ ПРОТИВ ВСЕХ"}</p>
              <p className='setup-popup__input-subtitle'>{props.type === "length" ? "Победите в 9 раундах, чтобы выиграть" : "Все враги, и у каждого свой счёт"}</p>
            </label>
            <label className="setup-popup__label">
              <input className='setup-popup__input' type="radio" name="checkbox3" value="3" id="checkbox3" checked={nowValue === '3' ? true : false} onChange={changeValue}/>
              <p className='setup-popup__input-title'>{props.type === "length" ? "ДЛИННАЯ ИГРА" : "КЛАССИЧЕСКИЙ"}</p>
              <p className='setup-popup__input-subtitle'>{props.type === "length" ? "Победите в 16 раундах, чтобы выиграть (классический режим)" : "Две команды, у каждого игрока свой счёт"}</p>
            </label>
          </fieldset>

          <div className='popup__buttons'>
            <button className='popup__button' onClick={handleSaveValue}>ОК</button>
            <button className='popup__button' onClick={props.handleClose}>OТМЕНА</button>
          </div>
        </div>
      </div>
    </Popup>
  )
}

export default SetupPopup;