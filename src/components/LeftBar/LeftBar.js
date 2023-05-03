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

function LeftBar(props) {

  console.log(props)

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

  return (
    <div className="leftBar">
      <ul className='leftBar__list'>
        <li className='leftBar__item'><img className={"leftBar__icon leftBar__icon_first" + (props.isMainVisible ? " leftBar__icon_active" : "")} src={csgoLogo} alt="csgo" onClick={handleMainClick} draggable="false"/></li>
        <li className='leftBar__item'><img className={"leftBar__icon" + (props.isPlayVisible ? " leftBar__icon_active" : "")} src={playLogo} alt="csgo" onClick={handlePlayClick} draggable="false"/></li>
        <li className='leftBar__item'><img className={"leftBar__icon" + (props.isSearch ? " leftBar__icon_search" : "")} src={(props.isSearch ? netLogoGreen : netLogo)} alt="csgo" onClick={handleNetClick} draggable="false"/></li>
        <li className='leftBar__item'><img className={"leftBar__icon" + (props.isInventoryVisible ? " leftBar__icon_active" : "")} src={inventoryLogo} alt="csgo" onClick={handleInventoryClick} draggable="false"/></li>
        <li className='leftBar__item'><img className="leftBar__icon" src={tvLogo} alt="csgo" onClick={handleTVClick} draggable="false"/></li>
        <li className='leftBar__item'><img className="leftBar__icon" src={statisticLogo} alt="csgo" onClick={handleStatisticClick} draggable="false"/></li>
        <li className='leftBar__item'><img className="leftBar__icon" src={settingsLogo} alt="csgo" onClick={handleSettingsClick} draggable="false"/></li>
        <li className='leftBar__item'><img className="leftBar__icon" src={exitLogo} alt="csgo" onClick={handleExitClick} draggable="false"/></li>
      </ul>
    </div>
  );

}

export default LeftBar;
