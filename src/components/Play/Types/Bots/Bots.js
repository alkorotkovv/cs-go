import React  from 'react';
import Competitive from './Regyms/Competitive/Competitive';
import Dual from './Regyms/Dual/Dual';
import Usual from './Regyms/Usual/Usual';
import Deathmatch from './Regyms/Deathmatch/Deathmatch';
import Military from './Regyms/Military/Military';
/*
import Deathmatch from './Regyms/Deathmatch/Deathmatch';

import Military from './Regyms/Military/Military';

*/

function Bots(props) {

  const [isCompetitive, setIsCompetitive] = React.useState(true)
  const [isDual, setIsDual] = React.useState(false)
  const [isUsual, setIsUsual] = React.useState(false)
  const [isDeathmatch, setIsDeathmatch] = React.useState(false)
  const [isMilitary, setIsMilitary] = React.useState(false)

  //Обработчики режимов игры
  function handleCompetitiveClick() {
    setIsCompetitive(true);
    setIsDual(false);
    setIsUsual(false);
    setIsDeathmatch(false);
    setIsMilitary(false);
  }

  function handleDualClick() {
    setIsCompetitive(false);
    setIsDual(true);
    setIsUsual(false);
    setIsDeathmatch(false);
    setIsMilitary(false);
  }

  function handleUsualClick() {
    setIsCompetitive(false);
    setIsDual(false);
    setIsUsual(true);
    setIsDeathmatch(false);
    setIsMilitary(false);
  }

  function handleDeathmatchClick() {
    setIsCompetitive(false);
    setIsDual(false);
    setIsUsual(false);
    setIsDeathmatch(true);
    setIsMilitary(false);
  }

  function handleMilitaryClick() {
    setIsCompetitive(false);
    setIsDual(false);
    setIsUsual(false);
    setIsDeathmatch(false);
    setIsMilitary(true);
  }

  
  return (
    <div className={"type type_bots" + (props.isVisible ? " type_visible" : " ")}>
      <ul className='type__regyms'>
        <li className={"type__regym" + (isCompetitive ? " type__regym_active" : " ")} onClick={handleCompetitiveClick}><p className='type__regym-text'>Соревновательный</p></li>
        <li className={"type__regym" + (isDual ? " type__regym_active" : " ")} onClick={handleDualClick}><p className='type__regym-text'>Напарники</p></li>
        <li className={"type__regym" + (isUsual ? " type__regym_active" : " ")} onClick={handleUsualClick}><p className='type__regym-text'>Обычный</p></li>
        <li className={"type__regym" + (isDeathmatch ? " type__regym_active" : " ")} onClick={handleDeathmatchClick}><p className='type__regym-text'>Бой насмерть</p></li>
        <li className={"type__regym" + (isMilitary ? " type__regym_active" : " ")} onClick={handleMilitaryClick}><p className='type__regym-text'>Военные игры</p></li>
        <li className={"type__regym type__regym_unactive"} ><p className='type__regym-text type__regym-text_unactive'>Запретная зона</p></li>
      </ul>
      <div className='type__main'>
        { isCompetitive ? <Competitive isVisible={isCompetitive} /> : <></>}
        { isDual ? <Dual isVisible={isDual} /> : <></>}
        { isUsual ? <Usual isVisible={isUsual} /> : <></>}
        { isDeathmatch ? <Deathmatch isVisible={isDeathmatch} /> : <></>}
        { isMilitary ? <Military isVisible={isMilitary} /> : <></>}
      </div>
      <div className='type__bottom'>
        <div className='type__button'>
          <p className='type__button-text'>НАЧАТЬ </p>
          <div className='type__button-color'></div>
        </div>
      </div>
    </div>
  )
}

export default Bots;