import React from 'react';
import csgoLogo from '../../images/leftBar/csgoLogo.png';
import playLogo from '../../images/leftBar/playLogo.png';
import netLogo from '../../images/leftBar/netLogo.png';
import netLogoGreen from '../../images/leftBar/netLogoGreen.png';
import inventoryLogo from '../../images/leftBar/inventoryLogo.png';
import tvLogo from '../../images/leftBar/tvLogo.png';
import statisticLogo from '../../images/leftBar/statisticLogo.png';
import settingsLogo from '../../images/leftBar/settingsLogo.png';
import exitLogo from '../../images/leftBar/exitLogo.png';
import Tooltip from '../Tooltip/Tooltip';

function LeftBar(props) {

  function handleMainClick() {
    props.handleMainClick();
  }

  function handlePlayClick() {
    props.handlePlayClick();
  }

  function handleNetClick() {
    props.handleNetClick();
  }

  function handleInventoryClick() {
    props.handleInventoryClick();
  }

  function handleTVClick() {
    props.handleTVClick();
  }

  function handleStatisticClick() {
    props.handleStatisticClick();
  }

  function handleSettingsClick() {
    props.handleSettingsClick();
  }

  function handleExitClick() {
    props.handleExitClick();
  }

  //Обработчики наведения мыши для всплывающих подсказок

  function handleOnMouseEnter(object) {
    console.log(object);
    props.showTooltip(true, object);
  }

  function handleOnMouseLeave(object) {
    props.showTooltip(false, object);
  }

  return (
    <div className="leftBar">
      <ul className='leftBar__list'>
        <li className='leftBar__item'>
          <img className={"leftBar__icon leftBar__icon_first" + (props.isMainVisible ? " leftBar__icon_active" : "")} 
            src={csgoLogo} 
            alt="csgo" 
            onClick={handleMainClick} 
            onMouseEnter={() => handleOnMouseEnter({text:"Главное меню", x:"114", y:"23"})} 
            onMouseLeave={handleOnMouseLeave} 
            draggable="false"/>
        </li>
        <li className='leftBar__item'>
          <img className={"leftBar__icon" + (props.isPlayVisible ? " leftBar__icon_active" : "")} 
            src={playLogo} 
            alt="csgo" 
            onClick={handlePlayClick} 
            onMouseEnter={() => handleOnMouseEnter({text:"Играть в CS:GO", x:"114", y:"119"})} 
            onMouseLeave={handleOnMouseLeave} 
            draggable="false"/>
        </li>
        <li className='leftBar__item'>
          <img className={"leftBar__icon" + (props.isSearch ? " leftBar__icon_search" : "")} 
            src={(props.isSearch ? netLogoGreen : netLogo)} 
            alt="csgo" 
            onClick={handleNetClick} 
            onMouseEnter={() => handleOnMouseEnter({text:"Поиск команды", x:"114", y:"211"})} 
            onMouseLeave={handleOnMouseLeave} 
            draggable="false"/>
        </li>
        <li className='leftBar__item'>
          <img className={"leftBar__icon" + (props.isInventoryVisible ? " leftBar__icon_active" : "")} 
            src={inventoryLogo} 
            alt="csgo" 
            onClick={handleInventoryClick} 
            onMouseEnter={() => handleOnMouseEnter({text:"Инвентарь", x:"114", y:"311"})} 
            onMouseLeave={handleOnMouseLeave} 
            draggable="false"/>
        </li>
        <li className='leftBar__item'>
          <img className={"leftBar__icon" + (props.isTVVisible ? " leftBar__icon_active" : "")} 
            src={tvLogo} 
            alt="csgo" 
            onClick={handleTVClick} 
            onMouseEnter={() => handleOnMouseEnter({text:"Смотреть игры и турниры", x:"114", y:"407"})} 
            onMouseLeave={handleOnMouseLeave} 
            draggable="false"/>
        </li>
        <li className='leftBar__item'>
          <img className={"leftBar__icon" + (props.isStatisticVisible ? " leftBar__icon_active" : "")} 
            src={statisticLogo} 
            alt="csgo" 
            onClick={handleStatisticClick} 
            onMouseEnter={() => handleOnMouseEnter({text:"Вся статистика ваших игр в одном месте", x:"114", y:"503"})} 
            onMouseLeave={handleOnMouseLeave} 
            draggable="false"/>
        </li>
        <li className='leftBar__item'>
          <img className={"leftBar__icon" + (props.isSettingsVisible ? " leftBar__icon_active" : "")} 
            src={settingsLogo} 
            alt="csgo" 
            onClick={handleSettingsClick}
            onMouseEnter={() => handleOnMouseEnter({text:"Настройки", x:"114", y:"599"})} 
            onMouseLeave={handleOnMouseLeave} 
            draggable="false"/>
        </li>
        <li className='leftBar__item'>
          <img className="leftBar__icon" 
            src={exitLogo} 
            alt="csgo" 
            onClick={handleExitClick} 
            onMouseEnter={() => handleOnMouseEnter({text:"Выйти из игры", x:"114", y:"1007"})} 
            onMouseLeave={handleOnMouseLeave} 
            draggable="false"/>
        </li>
      </ul>
    </div>
  );

}

export default LeftBar;
