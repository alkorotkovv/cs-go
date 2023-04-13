import React from 'react';

import Friends from '../Friends/Friends';

import { medalsArray, friendsArray, lastArray } from '../../utils/constants';

import avatar from '../../images/avatar.png';
import experienceLogo from '../../images/experienceLogo.png';
import rankLogo from '../../images/rankLogo.png';
import rankOld from '../../images/rankOld.png';
import rankZona from '../../images/rankZona.png';
import arrowDown from '../../images/arr_down.png';

import friendsLogo from '../../images/friends.png';
import searchLogo from '../../images/search.png';
import lastLogo from '../../images/last.png';
import messageLogo from '../../images/message.png';
import Medals from '../Medals/Medals';


function RightBar() {
  
  const [isRankVisible, setIsRankVisible] = React.useState(false);
  const [countMedalsBlock, setCountMedalsBlock] = React.useState(0);

  const [isFriensVisible, setIsFriensVisible] = React.useState(true);
  const [isSearchVisible, setIsSearchVisible] = React.useState(false);
  const [isLastVisible, setIsLastVisible] = React.useState(false);
  const [isMessageVisible, setIsMessageVisible] = React.useState(false);

  const rankArrowClassName = (`rank__arrow ${isRankVisible === true ? " rank__arrow_up" :  ""}`);
  const rankFirstSubClassName = (`rank rank_first ${isRankVisible === true ? " rank_first-visible" :  ""}`);
  const rankSecondSubClassName = (`rank rank_second ${isRankVisible === true ? " rank_second-visible" :  ""}`);

  function handleRankClick() {
    setIsRankVisible(!isRankVisible);
  }

  function handleArrLeftClick() {
    if (countMedalsBlock > 0)
      setCountMedalsBlock(countMedalsBlock - 1);
  }

  function handleArrRightClick() {
    if (countMedalsBlock < Math.floor(medalsArray.length/5))
      setCountMedalsBlock(countMedalsBlock + 1);
  }

  function handleFriendsClick() {
    setIsFriensVisible(true);
    setIsSearchVisible(false);
    setIsLastVisible(false);
    setIsMessageVisible(false);
  }

  function handleLastClick() {
    setIsFriensVisible(false);
    setIsSearchVisible(false);
    setIsLastVisible(true);
    setIsMessageVisible(false);
  }

  return (
    <div className="rightBar">
      <div className='rightBar__main'>
        <div className='profile'>
          <img className='profile__avatar' src={avatar} alt="csgo"></img>
          <h2 className='profile__name'>ВЕЛЬМОЖА</h2>
          <div className='profile__medals'>
            <Medals countMedalsBlock={countMedalsBlock} />
            <ul className='profile__arrows'>
              <li className={"profile__arrow" + ((countMedalsBlock > 0) ? " profile__arrow_active" : "")}><img className='rank__arrow rank__arrow_left' src={arrowDown} alt="arrow" onClick={handleArrLeftClick}/></li>
              <li className={"profile__arrow" + ((countMedalsBlock < Math.floor(medalsArray.length/5)) ? " profile__arrow_active" : "")}><img className='rank__arrow rank__arrow_right' src={arrowDown} alt="arrow" onClick={handleArrRightClick}/></li>
            </ul>
          </div>
          
        </div>
        <div className='experience'>
          <img className='experience__logo' src={experienceLogo} alt="csgo"></img>
          <p className='experience__title'>Ранг: Лейтенант, 22</p>
          <progress className='experience__progress' value="30" max="100"></progress>
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
        <ul className='tools'>
          <li className={"tools__item" + (isFriensVisible ? " tools__item_active" : "")} onClick={handleFriendsClick}><img className='tools__logo' src={friendsLogo} alt="друзья"/></li>
          <li className='tools__item'><img className='tools__logo' src={searchLogo} alt="поиск"/></li>
          <li className={"tools__item" + (isLastVisible ? " tools__item_active" : "")} onClick={handleLastClick}><img className='tools__logo' src={lastLogo} alt="недавние"/></li>
          <li className='tools__item'><img className='tools__logo' src={messageLogo} alt="приглашение"/></li>
        </ul>
        <Friends isVisible={isFriensVisible} isRankVisible={isRankVisible} friendsArray={friendsArray}/>
        <Friends isVisible={isLastVisible} isRankVisible={isRankVisible} friendsArray={lastArray}/>

      </div>
    </div>
  );

}

export default RightBar;
