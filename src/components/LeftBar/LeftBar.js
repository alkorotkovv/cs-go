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

function LeftBar() {
  return (
    <div className="leftBar">
      <ul className='leftBar__list'>
        <li className='leftBar__item'><img className="leftBar__icon" src={csgoLogo} alt="csgo" /></li>
        <li className='leftBar__item'><img className="leftBar__icon" src={playLogo} alt="csgo" /></li>
        <li className='leftBar__item'><img className="leftBar__icon" src={netLogo} alt="csgo" /></li>
        <li className='leftBar__item'><img className="leftBar__icon" src={inventaryLogo} alt="csgo" /></li>
        <li className='leftBar__item'><img className="leftBar__icon" src={tvLogo} alt="csgo" /></li>
        <li className='leftBar__item'><img className="leftBar__icon" src={statisticLogo} alt="csgo" /></li>
        <li className='leftBar__item'><img className="leftBar__icon" src={settingsLogo} alt="csgo" /></li>
        <li className='leftBar__item'><img className="leftBar__icon" src={exitLogo} alt="csgo" /></li>
      </ul>
    </div>
  );

}

export default LeftBar;
