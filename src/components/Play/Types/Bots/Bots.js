import React  from 'react';
import Competitive from './Regyms/Competitive/Competitive';
/*
import Deathmatch from '../../Regyms/Deathmatch/Deathmatch';
import Dual from '../../Regyms/Dual/Dual';
import Military from '../../Regyms/Military/Military';
import Usual from '../../Regyms/Usual/Usual';
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
    <div className={"bots" + (props.isVisible ? " bots_visible" : " ")}>
      <ul className='official__regyms'>
        <li className={"official__regym" + (isCompetitive ? " official__regym_active" : " ")} onClick={handleCompetitiveClick}><p className='official__regym-text'>Соревновательный</p></li>
        <li className={"official__regym" + (isDual ? " official__regym_active" : " ")} onClick={handleDualClick}><p className='official__regym-text'>Напарники</p></li>
        <li className={"official__regym" + (isUsual ? " official__regym_active" : " ")} onClick={handleUsualClick}><p className='official__regym-text'>Обычный</p></li>
        <li className={"official__regym" + (isDeathmatch ? " official__regym_active" : " ")} onClick={handleDeathmatchClick}><p className='official__regym-text'>Бой насмерть</p></li>
        <li className={"official__regym" + (isMilitary ? " official__regym_active" : " ")} onClick={handleMilitaryClick}><p className='official__regym-text'>Военные игры</p></li>
        <li className={"official__regym official__regym_unactive"} ><p className='official__regym-text official__regym-text_unactive'>Запретная зона</p></li>
      </ul>
      <div className='official__main'>
        { isCompetitive ? <Competitive isVisible={isCompetitive} /> : <></>}
      </div>
    </div>
  )
}

export default Bots;