import React  from 'react';
import Competitive from '../../Regyms/Competitive/Competitive';
import Deathmatch from '../../Regyms/Deathmatch/Deathmatch';
import Dual from '../../Regyms/Dual/Dual';
import Military from '../../Regyms/Military/Military';
import Usual from '../../Regyms/Usual/Usual';
import Zone from '../../Regyms/Zone/Zone';

function Official(props) {

  const [isCompetitive, setIsCompetitive] = React.useState(true)
  const [isDual, setIsDual] = React.useState(false)
  const [isUsual, setIsUsual] = React.useState(false)
  const [isDeathmatch, setIsDeathmatch] = React.useState(false)
  const [isMilitary, setIsMilitary] = React.useState(false)
  const [isZone, setIsZone] = React.useState(false)

  //Обработчики режимов игры
  function handleCompetitiveClick() {
    setIsCompetitive(true);
    setIsDual(false);
    setIsUsual(false);
    setIsDeathmatch(false);
    setIsMilitary(false);
    setIsZone(false);
  }

  function handleDualClick() {
    setIsCompetitive(false);
    setIsDual(true);
    setIsUsual(false);
    setIsDeathmatch(false);
    setIsMilitary(false);
    setIsZone(false);
  }

  function handleUsualClick() {
    setIsCompetitive(false);
    setIsDual(false);
    setIsUsual(true);
    setIsDeathmatch(false);
    setIsMilitary(false);
    setIsZone(false);
  }

  function handleDeathmatchClick() {
    setIsCompetitive(false);
    setIsDual(false);
    setIsUsual(false);
    setIsDeathmatch(true);
    setIsMilitary(false);
    setIsZone(false);
  }

  function handleMilitaryClick() {
    setIsCompetitive(false);
    setIsDual(false);
    setIsUsual(false);
    setIsDeathmatch(false);
    setIsMilitary(true);
    setIsZone(false);
  }

  function handleZoneClick() {
    setIsCompetitive(false);
    setIsDual(false);
    setIsUsual(false);
    setIsDeathmatch(false);
    setIsMilitary(false);
    setIsZone(true);
  }

  let block;
  if (isCompetitive)
    block = (
      <Competitive isVisible={isCompetitive} />
    )
  else if (isDual)
    block = (
      <Dual isVisible={isDual} />
    )
  else if (isUsual)
    block = (
      <Usual isVisible={isUsual} />
    )
  else if (isDual)
    block = (
      <Deathmatch isVisible={isDeathmatch} />
    )
  else if (isMilitary)
    block = (
      <Military isVisible={isMilitary} />
   )
  else if (isZone)
    block = (
      <Zone isVisible={isZone} />
    )
  
  return (
    <div className={"official" + (props.isVisible ? " official_visible" : " ")}>
      <ul className='official__regyms'>
        <li className={"official__regym" + (isCompetitive ? " official__regym_active" : " ")} onClick={handleCompetitiveClick}><p className='official__regym-text'>Соревновательный</p></li>
        <li className={"official__regym" + (isDual ? " official__regym_active" : " ")} onClick={handleDualClick}><p className='official__regym-text'>Напарники</p></li>
        <li className={"official__regym" + (isUsual ? " official__regym_active" : " ")} onClick={handleUsualClick}><p className='official__regym-text'>Обычный</p></li>
        <li className={"official__regym" + (isDeathmatch ? " official__regym_active" : " ")} onClick={handleDeathmatchClick}><p className='official__regym-text'>Бой насмерть</p></li>
        <li className={"official__regym" + (isMilitary ? " official__regym_active" : " ")} onClick={handleMilitaryClick}><p className='official__regym-text'>Военные игры</p></li>
        <li className={"official__regym" + (isZone ? " official__regym_active" : " ")} onClick={handleZoneClick}><p className='official__regym-text'>Запретная зона</p></li>
      </ul>
      <div className='official__main'>
        {
          block
          /*
        <Competitive isVisible={isCompetitive} />
        <Dual isVisible={isDual} />
        <Usual isVisible={isUsual} />
        <Deathmatch isVisible={isDeathmatch} />
        <Military isVisible={isMilitary} />
        <Zone isVisible={isZone} />
        */}
      </div>
      <div className='official__bottom'>
        <div className='official__button'>
          <p className='official__button-text'>НАЧАТЬ </p>
          <div className='official__button-color'></div>
        </div>
      </div>
    </div>
  )
}

export default Official;