import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import csgoLogo from '../../images/csgoLogo.png';
import playLogo from '../../images/playLogo.png';
import netLogo from '../../images/netLogo.png';
import inventaryLogo from '../../images/inventaryLogo.png';
import tvLogo from '../../images/tvLogo.png';
import statisticLogo from '../../images/statisticLogo.png';
import settingsLogo from '../../images/settingsLogo.png';
import exitLogo from '../../images/exitLogo.png';

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

  function handleInventaryClick() {
    props.handleInventaryClick();
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
        <li className='leftBar__item'><img className={"leftBar__icon" + (props.isMainVisible ? " leftBar__icon_active" : "")} src={csgoLogo} alt="csgo" onClick={handleMainClick}/></li>
        <li className='leftBar__item'><img className={"leftBar__icon" + (props.isPlayVisible ? " leftBar__icon_active" : "")} src={playLogo} alt="csgo" onClick={handlePlayClick}/></li>
        <li className='leftBar__item'><img className="leftBar__icon" src={netLogo} alt="csgo" onClick={handleNetClick}/></li>
        <li className='leftBar__item'><img className="leftBar__icon" src={inventaryLogo} alt="csgo" onClick={handleInventaryClick}/></li>
        <li className='leftBar__item'><img className="leftBar__icon" src={tvLogo} alt="csgo" onClick={handleTVClick}/></li>
        <li className='leftBar__item'><img className="leftBar__icon" src={statisticLogo} alt="csgo" onClick={handleStatisticClick}/></li>
        <li className='leftBar__item'><img className="leftBar__icon" src={settingsLogo} alt="csgo" onClick={handleSettingsClick}/></li>
        <li className='leftBar__item'><img className="leftBar__icon" src={exitLogo} alt="csgo" onClick={handleExitClick}/></li>
      </ul>
    </div>
  );

}

export default LeftBar;
