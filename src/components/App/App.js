import React from 'react';
//import { Route, Switch, useHistory } from 'react-router-dom';
import Menu from '../Menu/Menu.js';
import LeftBar from '../LeftBar/LeftBar.js';
import RightBar from '../RightBar/RightBar.js';
import Play from '../Play/Play';
import Net from '../Net/Net.js';
import Inventory from '../Inventory/Inventory.js';
import PopupWindow from '../PopupWindow/PopupWindow.js';
import TV from '../TV/TV.js';
import Settings from '../Settings/Settings.js';
import Statistic from '../Statistic/Statistic.js';
import StatisticPopup from '../StatisticPopup/StatisticPopup.js';


function App() {

  const [isMainVisible, setIsMainVisible] = React.useState(true);
  const [isPlayVisible, setIsPlayVisible] = React.useState(false);
  const [isNetVisible, setIsNetVisible] = React.useState(false);
  const [isInventoryVisible, setIsInventoryVisible] = React.useState(false);
  const [isTVVisible, setIsTVVisible] = React.useState(false);
  const [isStatisticVisible, setIsStatisticVisible] = React.useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = React.useState(false);
  const [isExitVisible, setIsExitVisible] = React.useState(false);

  const[isSearch, setIsSearch] = React.useState(false);

  const[isResetVisible, setIsResetVisible] = React.useState(false);

  const[isStatisticPopupVisible, setIsStatisticPopupVisible] = React.useState(false);

  //Обработчики нажатий кнопок на левом баре
  function handleMainClick() {
    setIsMainVisible(true);
    setIsPlayVisible(false);
    setIsNetVisible(false);
    setIsInventoryVisible(false);
    setIsTVVisible(false);
    setIsStatisticVisible(false);
    setIsSettingsVisible(false);
    setIsExitVisible(false);
  }

  function handlePlayClick() {
    setIsMainVisible(false);
    setIsPlayVisible(true);
    setIsNetVisible(false);
    setIsInventoryVisible(false);
    setIsTVVisible(false);
    setIsStatisticVisible(false);
    setIsSettingsVisible(false);
    setIsExitVisible(false);
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
    setIsExitVisible(false);
  }

  function handleTVClick() {
    setIsMainVisible(false);
    setIsPlayVisible(false);
    setIsNetVisible(false);
    setIsInventoryVisible(false);
    setIsTVVisible(true);
    setIsStatisticVisible(false);
    setIsSettingsVisible(false);
    setIsExitVisible(false);
  }

  function handleStatisticClick() {
    setIsMainVisible(false);
    setIsPlayVisible(false);
    setIsNetVisible(false);
    setIsInventoryVisible(false);
    setIsTVVisible(false);
    setIsStatisticVisible(true);
    setIsSettingsVisible(false);
    setIsExitVisible(false);
  }

  function handleSettingsClick() {
    setIsMainVisible(false);
    setIsPlayVisible(false);
    setIsNetVisible(false);
    setIsInventoryVisible(false);
    setIsTVVisible(false);
    setIsStatisticVisible(false);
    setIsSettingsVisible(true);
    setIsExitVisible(false);
  }

  function handleExitClick() {
    setIsExitVisible(true);
  }

  //Обработчик закрытия панели Net
  function handleNetClose() {
    setIsNetVisible(false);
  }

  //Обработчик поиска игрока
  function handleSearch(isSearch) {
    setIsSearch(isSearch);
  }

  //Обработчик закрытия панели Выход
  function handleExitClose() {
    setIsExitVisible(false);
  }

  //Обработчик клика на сброс настроек
  function handleResetSettingsClick() {
    setIsResetVisible(true);
  }

  //Обработчик закрытия попапа сброса настроек
  function handleResetSettingsClose() {
    setIsResetVisible(false);
  }

  //Обработчик клика на подписаться в статистике
  function handleStatisticPopupClick() {
    setIsStatisticPopupVisible(true);
  }

  //Обработчик закрытия попапа статистики
  function handleStatisticPopupClose() {
    setIsStatisticPopupVisible(false);
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
        handleExitClick={handleExitClick}
        isSearch={isSearch}
      />
      <RightBar />
      { isPlayVisible ? <Play isVisible={isPlayVisible} /> : < ></> }
      <Net isVisible={isNetVisible} handleClose={handleNetClose} handleSearch={handleSearch} />
      { isInventoryVisible ? <Inventory isVisible={isInventoryVisible} /> : <></> }
      { isTVVisible ? <TV isVisible={isTVVisible} /> : <></> }
      { isStatisticVisible ? <Statistic isVisible={isStatisticVisible} isStatisticPopupVisible={isStatisticPopupVisible} handleStatisticPopupClick={handleStatisticPopupClick} /> : <></> }
      { isSettingsVisible ? <Settings isVisible={isSettingsVisible} handleResetSettingsClick={handleResetSettingsClick} /> : <></> }
      { isExitVisible ? <PopupWindow isVisible={isExitVisible} title="Выход" text="Вы уверены что хотите выйти?" handleClose={handleExitClose} /> : <></> }
      { isResetVisible ? <PopupWindow isVisible={isResetVisible} title="Сбросить настройки" text="Вы уверены, что хотите сбросить настройки?" handleClose={handleResetSettingsClose} /> : <></> }
      { isStatisticPopupVisible ? <StatisticPopup isVisible={isStatisticPopupVisible} handleClose={handleStatisticPopupClose} /> : < ></> }
    </div>
  );

}

export default App;
