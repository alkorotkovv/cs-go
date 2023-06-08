import React from 'react';
//import { Route, Switch, useHistory } from 'react-router-dom';
import TooltipContext from '../../context/TooltipContext';
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
import SetupPopup from '../SetupPopup/SetupPopup.js';
import Tooltip from '../Tooltip/Tooltip.js';
import InspectionPopup from '../InspectionPopup/InspectionPopup';
import Intro from '../Intro/Intro';


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

  const [isSetupPopupVisible, setIsSetupPopupVisible] = React.useState(false);
  const [setupType, setSetupType] = React.useState("");
  const [setupValue, setSetupValue] = React.useState(0);

  const[isInspectionPopupVisible, setIsInspectionPopupVisible] = React.useState(false);
  const[weapon, setWeapon] = React.useState({});

  const [tooltip, setTooltip] = React.useState({visible: false, text: "", x: "-100", y: "-100"});

  const [isAnyPopupVisible, setIsAnyPopupVisible] = React.useState(false);


  React.useEffect(() => {        
    setIsAnyPopupVisible(isExitVisible || isResetVisible || isStatisticPopupVisible || isInspectionPopupVisible || isSetupPopupVisible)
  }, [isExitVisible, isInspectionPopupVisible, isResetVisible, isSetupPopupVisible, isStatisticPopupVisible]);

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
    setIsStatisticPopupVisible(true);
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

  //Функция вводв/вывода в/из полноэкрана
  function fullscreen() {
    var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null);

    var docElm = document.documentElement;
    if (!isInFullScreen) {
        if (docElm.requestFullscreen) {
            docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
            docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
            docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
            docElm.msRequestFullscreen();
        }
    } 
    else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
  }

  //Обработчик выхода из игры
  function handleExitOK() {
    setIsExitVisible(false);
    fullscreen();
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

  //Обработчик клика по сетапу (в разделе Play)
  function handleSetupClick(type, value) {
    setSetupType(type);
    setSetupValue(value);
    setIsSetupPopupVisible(true);
  }

  //Обработчик сохранения попапа сетапа
  function handleSetupPopupSave(value) {
    setSetupValue(value);
    setIsSetupPopupVisible(false);
  }

  //Обработчик закрытия попапа сетапа
  function handleSetupPopupClose() {
    setIsSetupPopupVisible(false);
  }

  //Обработчик клика осмотра оружия
  function handleInspectClick(object) {
    setWeapon(object);
    setIsInspectionPopupVisible(true);
  }

  //Обработчик закрытия попапа осмотра оружия
  function handleInspectionPopupClose() {
    setIsInspectionPopupVisible(false);
  }

  //Обработчик показа всплывающей подсказки
  function showTooltip(tooltipObject) {
    setTooltip(tooltipObject);
  }


  return (
    <TooltipContext.Provider value={showTooltip}>
    <div className="page">
      <Intro handleFullscreen={fullscreen} />
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
        showTooltip={showTooltip}
      />
      <RightBar />

      { isPlayVisible ? 
        <Play 
          isVisible={isPlayVisible} 
          setupValue={setupValue} 
          handleSetupClick={handleSetupClick}
          handleMainClick={handleMainClick}
          isAnyPopupVisible={isAnyPopupVisible}
        /> : < ></> 
      }

      <Net 
        isVisible={isNetVisible} 
        handleClose={handleNetClose} 
        handleSearch={handleSearch}
        handleMainClick={handleMainClick}
        isAnyPopupVisible={isAnyPopupVisible}
      /> 

      { isInventoryVisible ? 
        <Inventory 
          isVisible={isInventoryVisible} 
          handleInspectClick={handleInspectClick} 
          handleMainClick={handleMainClick}
          isAnyPopupVisible={isAnyPopupVisible}
        /> : <></> 
      }

      { isTVVisible ? 
        <TV isVisible={isTVVisible} 
        handleMainClick={handleMainClick}
        isAnyPopupVisible={isAnyPopupVisible}
        /> : <></> 
      }

      { isStatisticVisible ? 
        <Statistic 
          isVisible={isStatisticVisible} 
          isStatisticPopupVisible={isStatisticPopupVisible} 
          handleStatisticPopupClick={handleStatisticPopupClick} 
          handleMainClick={handleMainClick}
          isAnyPopupVisible={isAnyPopupVisible}
        /> : <></> 
      }

      { isSettingsVisible ? 
        <Settings 
          isVisible={isSettingsVisible} 
          handleResetSettingsClick={handleResetSettingsClick} 
          handleMainClick={handleMainClick}
          isAnyPopupVisible={isAnyPopupVisible}
        /> : <></> 
      }

      { isExitVisible ? <PopupWindow isVisible={isExitVisible} title="Выход" text="Вы уверены что хотите выйти?" handleOK={handleExitOK} handleClose={handleExitClose} /> : <></> }
      { isResetVisible ? <PopupWindow isVisible={isResetVisible} title="Сбросить настройки" text="Вы уверены, что хотите сбросить настройки?" handleClose={handleResetSettingsClose} /> : <></> }
      { isStatisticPopupVisible ? <StatisticPopup isVisible={isStatisticPopupVisible} handleClose={handleStatisticPopupClose} /> : < ></> }
      {isSetupPopupVisible ? 
        <SetupPopup 
          isVisible={isSetupPopupVisible} 
          title={setupType === "length" ? "Длительность игры" : "Стиль боя насмерть"} 
          text={setupType === "length" ? "Выберите длительность игры" : "Выберите стиль режима «Бой насмерть»"} 
          type={setupType}
          value={setupValue}
          handleSave={handleSetupPopupSave}
          handleClose={handleSetupPopupClose}
        /> : < ></> }
        <Tooltip tooltip={tooltip} /> : <></>
        { isInspectionPopupVisible ? <InspectionPopup isVisible={isInspectionPopupVisible} weapon={weapon} handleClose={handleInspectionPopupClose} />:<></>}
    </div>
    </TooltipContext.Provider>
  );

}

export default App;
