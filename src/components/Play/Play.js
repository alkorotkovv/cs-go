import React  from 'react';
import Panel from '../Panel/Panel';
import Select from '../Select/Select';
import Competitive from './Regyms/Competitive/Competitive';

function Play(props) {

  const [title, setTitle] = React.useState("Официальный подбор игр")

  const [isCompetitive, setIsCompetitive] = React.useState(true)
  const [isDual, setIsDual] = React.useState(false)
  const [isUsual, setIsUsual] = React.useState(false)
  const [isDeathmatch, setIsDeathmatch] = React.useState(false)
  const [isMilitary, setIsMilitary] = React.useState(false)
  const [isZone, setIsZone] = React.useState(false)

  //Обработчики селекта
  function handler1() {
    setTitle("Официальный подбор игр")
  }

  function handler2() {
    setTitle("Тренировка с ботами")
  }

  function handler3() {
    setTitle("Инструктаж")
  }

  function handler4() {
    setTitle("Карты из мастерской")
  }

  function handler5() {
    setTitle("Список серверов сообщества")
  }

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
  
  return (
    <Panel name="play" isVisible={props.isVisible}>
        <h1 className='play__title'>ИГРАТЬ</h1>
        <div className='play__select'>
        <Select 
          options={[
              {
                name:"Официальный подбор игр",
                handle: handler1
              },
              {
                name: "Тренировка с ботами", 
                handle: handler2
              },
              {
                name: "Инструктаж", 
                handle: handler3
              },
              {
                name: "Карты из мастерской", 
                handle: handler4
              },
              {
                name: "Список серверов сообщества", 
                handle: handler5
              }
            ]} 
            title={title}
            minwidth="300px"
        />
        </div>
        <ul className='play__regyms'>
            <li className={"play__regym" + (isCompetitive ? " play__regym_active" : " ")} onClick={handleCompetitiveClick}><p className='play__regym-text'>Соревновательный</p></li>
            <li className={"play__regym" + (isDual ? " play__regym_active" : " ")} onClick={handleDualClick}><p className='play__regym-text'>Напарники</p></li>
            <li className={"play__regym" + (isUsual ? " play__regym_active" : " ")} onClick={handleUsualClick}><p className='play__regym-text'>Обычный</p></li>
            <li className={"play__regym" + (isDeathmatch ? " play__regym_active" : " ")} onClick={handleDeathmatchClick}><p className='play__regym-text'>Бой насмерть</p></li>
            <li className={"play__regym" + (isMilitary ? " play__regym_active" : " ")} onClick={handleMilitaryClick}><p className='play__regym-text'>Военные игры</p></li>
            <li className={"play__regym" + (isZone ? " play__regym_active" : " ")} onClick={handleZoneClick}><p className='play__regym-text'>Запретная зона</p></li>
        </ul>
        <div className='play__settings'>
          
        </div>
        <Competitive isVisible={isCompetitive} />
        <div className='play__bottom'>

        </div>
    </Panel>
  )
}

export default Play;