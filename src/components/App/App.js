import React from 'react';
//import { Route, Switch, useHistory } from 'react-router-dom';
import Menu from '../Menu/Menu.js';
import LeftBar from '../LeftBar/LeftBar.js';
import RightBar from '../RightBar/RightBar.js';
import Play from '../Play/Play';
import Inventary from '../Inventary/Inventary.js';

function App() {

  const [isMainVisible, setIsMainVisible] = React.useState(true);
  const [isPlayVisible, setIsPlayVisible] = React.useState(false);
  const [isNetVisible, setIsNetVisible] = React.useState(false);
  const [isInventoryVisible, setIsInventoryVisible] = React.useState(false);
  const [isTVVisible, setIsTVVisible] = React.useState(false);
  const [isStatisticVisible, setIsStatisticVisible] = React.useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = React.useState(false);

  function handleMainClick() {
    setIsMainVisible(true);
    setIsPlayVisible(false);
    setIsNetVisible(false);
    setIsInventoryVisible(false);
    setIsTVVisible(false);
    setIsStatisticVisible(false);
    setIsSettingsVisible(false);
  }

  function handlePlayClick() {
    setIsMainVisible(false);
    setIsPlayVisible(true);
    setIsNetVisible(false);
    setIsInventoryVisible(false);
    setIsTVVisible(false);
    setIsStatisticVisible(false);
    setIsSettingsVisible(false);
  }

  function handleNetClick() {
    setIsMainVisible(false);
    setIsPlayVisible(false);
    setIsNetVisible(true);
    setIsInventoryVisible(false);
    setIsTVVisible(false);
    setIsStatisticVisible(false);
    setIsSettingsVisible(false);
  }

  function handleInventoryClick() {
    setIsMainVisible(false);
    setIsPlayVisible(false);
    setIsNetVisible(false);
    setIsInventoryVisible(true);
    setIsTVVisible(false);
    setIsStatisticVisible(false);
    setIsSettingsVisible(false);
  }

  function handleTVClick() {
    setIsMainVisible(false);
    setIsPlayVisible(false);
    setIsNetVisible(false);
    setIsInventoryVisible(false);
    setIsTVVisible(true);
    setIsStatisticVisible(false);
    setIsSettingsVisible(false);
  }

  function handleStatisticClick() {
    setIsMainVisible(false);
    setIsPlayVisible(false);
    setIsNetVisible(false);
    setIsInventoryVisible(false);
    setIsTVVisible(false);
    setIsStatisticVisible(true);
    setIsSettingsVisible(false);
  }

  function handleSettingsClick() {
    setIsMainVisible(false);
    setIsPlayVisible(false);
    setIsNetVisible(false);
    setIsInventoryVisible(false);
    setIsTVVisible(false);
    setIsStatisticVisible(false);
    setIsSettingsVisible(true);
  }

  return (
    <div className="page">
      <Menu 
        isMainVisible={isMainVisible} 
        isPlayVisible={isPlayVisible}
        isNetVisible={isNetVisible}
        isInventoryVisible={isInventoryVisible}
        isTVVisible={isTVVisible}
        isStatisticVisible={isStatisticVisible}
        isSettingsVisible={isSettingsVisible}
      />  
      <LeftBar 
        isMainVisible={isMainVisible}
        isPlayVisible={isPlayVisible}
        isNetVisible={isNetVisible}
        isInventoryVisible={isInventoryVisible}
        isTVVisible={isTVVisible}
        isStatisticVisible={isStatisticVisible}
        isSettingsVisible={isSettingsVisible}
        handleMainClick={handleMainClick} 
        handlePlayClick={handlePlayClick} 
        handleNetClick={handleNetClick}
        handleInventoryClick={handleInventoryClick}
        handleTVClick={handleTVClick}
        handleStatisticClick={handleStatisticClick}
        handleSettingsClick={handleSettingsClick}
      />
      <RightBar />
      { isPlayVisible ? <Play isVisible={isPlayVisible} /> : < ></> }
      { isInventoryVisible ? <Inventary isVisible={isInventoryVisible} /> : <></> }
    </div>
  );

}

export default App;
