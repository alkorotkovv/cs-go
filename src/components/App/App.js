import React from 'react';
//import { Route, Switch, useHistory } from 'react-router-dom';
import Menu from '../Menu/Menu.js';
import LeftBar from '../LeftBar/LeftBar.js';
import RightBar from '../RightBar/RightBar.js';
import Play from '../Play/Play';
import Net from '../Net/Net.js';
import Inventory from '../Inventory/Inventory.js';


function App() {

  const [isMainVisible, setIsMainVisible] = React.useState(true);
  const [isPlayVisible, setIsPlayVisible] = React.useState(false);
  const [isNetVisible, setIsNetVisible] = React.useState(false);
  const [isInventoryVisible, setIsInventoryVisible] = React.useState(false);
  const [isTVVisible, setIsTVVisible] = React.useState(false);
  const [isStatisticVisible, setIsStatisticVisible] = React.useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = React.useState(false);

  const[isSearch, setIsSearch] = React.useState(false);

  //Обработчики нажатий кнопок на левом баре
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
    setIsNetVisible(true);
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

  //Обработчик закрытия панели Net
  function handleNetClose() {
    setIsNetVisible(false);
  }

  function handleSearch(isSearch) {
    setIsSearch(isSearch);
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
        isSearch={isSearch}
      />
      <RightBar />
      { isPlayVisible ? <Play isVisible={isPlayVisible} /> : < ></> }
      <Net isVisible={isNetVisible} handleClose={handleNetClose} handleSearch={handleSearch} />
      { isInventoryVisible ? <Inventory isVisible={isInventoryVisible} /> : <></> }      
    </div>
  );

}

export default App;
