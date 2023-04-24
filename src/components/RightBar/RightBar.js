import React from 'react';

import Friends from '../Friends/Friends';

import { medalsArray, 
         friendsArray, 
         searchArray_mm, 
         searchArray_dual,
         searchArray_zone, 
         lastArray, 
         messagesArray } from '../../utils/constants';

import avatar from '../../images/avatar.png';
import experienceLogo from '../../images/experienceLogo.png';
import rankLogo from '../../images/rankLogo.png';
import rankOld from '../../images/rankOld.png';
import rankZona from '../../images/rankZona.png';
import arrowDown from '../../images/arr_down.png';

import Medals from '../Medals/Medals';
import Messages from '../Messages/Messages';
import Frame from '../Frame/Frame';
import Search from '../Search/Search';
import Tools from '../Tools/Tools';


function RightBar() {
  
  const [isRankVisible, setIsRankVisible] = React.useState(false);
  const [countMedalsBlock, setCountMedalsBlock] = React.useState(0);

  const [isFriensVisible, setIsFriensVisible] = React.useState(true);
  const [isSearchVisible, setIsSearchVisible] = React.useState(false);
  const [isLastVisible, setIsLastVisible] = React.useState(false);
  const [isMessageVisible, setIsMessageVisible] = React.useState(false);

  const [isMmActive, setIsMmActive] = React.useState(true);
  const [isDualActive, setIsDualActive] = React.useState(false);
  const [isZoneActive, setIsZoneActive] = React.useState(false);
  const [isUpdateActive, setIsUpdateActive] = React.useState(false);
  const [isProgressShow, setIsProgressShow] = React.useState(false);
  const [isMedalsSwipingLeft, setIsMedalsSwipingLeft] = React.useState(false);
  const [isMedalsSwipingRight, setIsMedalsSwipingRight] = React.useState(false);
  const [searchArray, setSearchArray] = React.useState(searchArray_mm);

  const rankArrowClassName = (`rank__arrow ${isRankVisible === true ? " rank__arrow_up" :  ""}`);
  const rankFirstSubClassName = (`rank rank_first ${isRankVisible === true ? " rank_first-visible" :  ""}`);
  const rankSecondSubClassName = (`rank rank_second ${isRankVisible === true ? " rank_second-visible" :  ""}`);

//Показать или скрыть звание
  function handleRankClick() {
    setIsRankVisible(!isRankVisible);
  }
  //Функция запускает прогресс бар под тулзами при поиске
  function Reload() {
    window.scrollTo(0, 0);
    setIsProgressShow(false);
    setTimeout(function() {
      console.log(`Через секунду показываем`)
      setIsProgressShow(true)
    }, 100)
    setTimeout(function() {
      console.log(`Через 3секунды скрываем`)
      setIsProgressShow(false)
    }, 3000)
  }

  //Функции свайпа медалей влево и вправо
  function SwipeLeft() {
    setIsMedalsSwipingLeft(true);
    setTimeout(function() {
      setIsMedalsSwipingLeft(false)
    }, 200)
  }

  function SwipeRight() {
    setIsMedalsSwipingRight(true);
    setTimeout(function() {
      setIsMedalsSwipingRight(false)
    }, 200)
  }

//Функции обработки нажатия на стрелки влево и вправо
  function handleArrLeftClick() {
    
    if (countMedalsBlock > 0) {
      SwipeLeft();
      setCountMedalsBlock(countMedalsBlock - 1);
    }      
  }

  function handleArrRightClick() {
    
    if (countMedalsBlock < Math.floor(medalsArray.length/5)) {
      SwipeRight();
      setCountMedalsBlock(countMedalsBlock + 1);
    }      
  }

//Функции для работы Tools
  function handleFriendsClick() {
    setIsFriensVisible(true);
    setIsSearchVisible(false);
    setIsLastVisible(false);
    setIsMessageVisible(false);
  }

  function handleSearchClick() {
    Reload();
    setIsFriensVisible(false);
    setIsSearchVisible(true);
    setIsLastVisible(false);
    setIsMessageVisible(false);    
  }

  function handleLastClick() {
    setIsFriensVisible(false);
    setIsSearchVisible(false);
    setIsLastVisible(true);
    setIsMessageVisible(false);
  }

  function handleMessageClick() {
    setIsFriensVisible(false);
    setIsSearchVisible(false);
    setIsLastVisible(false);
    setIsMessageVisible(true);
  }

//Функции для работы Search
  function handleMmClick() {
    setSearchArray(searchArray_mm);
    Reload();
    setIsMmActive(true);
    setIsDualActive(false);
    setIsZoneActive(false);
    setIsUpdateActive(false);
  }

  function handleDualClick() {
    setSearchArray(searchArray_dual);
    Reload();
    setIsMmActive(false);
    setIsDualActive(true);
    setIsZoneActive(false);
    setIsUpdateActive(false);
  }

  function handleZoneClick() {
    setSearchArray(searchArray_zone);
    Reload();
    setIsMmActive(false);
    setIsDualActive(false);
    setIsZoneActive(true);
    setIsUpdateActive(false);
  }

  function handleUpdateClick() {
    Reload();
  }





  return (
    <div className="rightBar">
      <div className='rightBar__main'>

        <div className='profile'>
          <img className='profile__avatar' src={avatar} alt="аватар"></img>
          <h2 className='profile__name'>ВЕЛЬМОЖА</h2>
          <div className='profile__medals'>
            <Medals countMedalsBlock={countMedalsBlock} isMedalsSwipingLeft={isMedalsSwipingLeft} isMedalsSwipingRight={isMedalsSwipingRight}/>
            <ul className='profile__arrows'>
              <li className={"profile__arrow" + ((countMedalsBlock > 0) ? " profile__arrow_active" : "")}>
                <img className='rank__arrow rank__arrow_left' src={arrowDown} alt="arrow" onClick={handleArrLeftClick}/>
              </li>
              <li className={"profile__arrow" + ((countMedalsBlock < Math.floor(medalsArray.length/5)) ? " profile__arrow_active" : "")}>
                <img className='rank__arrow rank__arrow_right' src={arrowDown} alt="arrow" onClick={handleArrRightClick}/>
              </li>
            </ul>
          </div>
        </div>
        <div className='experience'>
          <img className='experience__logo' src={experienceLogo} alt="csgo"></img>
          <p className='experience__title'>Ранг: Лейтенант, 22</p>
          <div className='experience__progress'>
            <div className='experience__progress-bar'></div>
          </div>
        </div>
        <div className='rank rank_visible'>
          <img className='rank__logo' src={rankLogo} alt="rank"></img>
          <p className='rank__title'>Великий Магистр Высшего Ранга</p>
          <img className={rankArrowClassName} src={arrowDown} alt="arrow" onClick={handleRankClick}/>
        </div>
        <div className={rankFirstSubClassName}>
          <img className='rank__logo' src={rankOld} alt="rank"></img>
          <p className='rank__title'>"Напарники": звание устарело</p>
        </div>
        <div className={rankSecondSubClassName}>
          <img className='rank__logo' src={rankZona} alt="rank"></img>
          <p className='rank__title'>Лис-охотник |||</p>
        </div>
      </div>
      <div className='rightBar__sub'>
        <Tools 
          handleFriendsClick={handleFriendsClick} 
          handleSearchClick={handleSearchClick} 
          handleLastClick={handleLastClick} 
          handleMessageClick={handleMessageClick}
          isFriensVisible={isFriensVisible}
          isSearchVisible={isSearchVisible}
          isLastVisible={isLastVisible}
          isMessageVisible={isMessageVisible}
        />
        <Frame component={Friends} isVisible={isFriensVisible} isRankVisible={isRankVisible} friendsArray={friendsArray} />
        <Frame 
          component={Search}
          isVisible={isSearchVisible}
          isRankVisible={isRankVisible}
          isMmActive={isMmActive}
          isDualActive={isDualActive}
          isZoneActive={isZoneActive}
          isUpdateActive={isUpdateActive}
          handleMmClick={handleMmClick}
          handleDualClick={handleDualClick}
          handleZoneClick={handleZoneClick}
          handleUpdateClick={handleUpdateClick}
          isProgressShow={isProgressShow}
          setIsProgressShow={setIsProgressShow}
          Reload={Reload}/>
        <Frame component={Friends} isVisible={isLastVisible} isRankVisible={isRankVisible} friendsArray={lastArray} />
        <Frame component={Messages} isVisible={isMessageVisible} isRankVisible={isRankVisible} friendsArray={messagesArray} />

      </div>
    </div>
  );

}

export default RightBar;
