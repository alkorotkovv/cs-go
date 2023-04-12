import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

import Friends from '../Friends/Friends';

import { friendsArray } from '../../utils/constants';
import avatar from '../../images/avatar.png';
import experienceLogo from '../../images/experienceLogo.png';
import rankLogo from '../../images/rankLogo.png';
import rankOld from '../../images/rankOld.png';
import rankZona from '../../images/rankZona.png';
import brokenFang from '../../images/broken_fang_medal.png';
import medal2023 from '../../images/2023.png';
import medalRio from '../../images/rio.png';
import medalChicken from '../../images/chicken.png';
import stockholm from '../../images/stockholm.png';
import arrowDown from '../../images/arr_down.png';

import friendsLogo from '../../images/friends.png';
import searchLogo from '../../images/search.png';
import lastLogo from '../../images/last.png';
import messageLogo from '../../images/message.png';


function RightBar() {
  
  const [isRankVisible, setIsRankVisible] = React.useState(false);

  const rankArrowClassName = (`rank__arrow ${isRankVisible === true ? " rank__arrow_up" :  ""}`);
  const rankFirstSubClassName = (`rank rank_first ${isRankVisible === true ? " rank_first-visible" :  ""}`);
  const rankSecondSubClassName = (`rank rank_second ${isRankVisible === true ? " rank_second-visible" :  ""}`);

  function handleRankClick() {
    setIsRankVisible(!isRankVisible);
  }

  function handleArrLeftClick() {
    console.log("fhhfhfhf");
  }

  function handleArrRightClick() {
    console.log("fhhfhfhf");
  }

  return (
    <div className="rightBar">
      <div className='rightBar__main'>
        <div className='profile'>
          <img className='profile__avatar' src={avatar} alt="csgo"></img>
          <h2 className='profile__name'>ВЕЛЬМОЖА</h2>
          <div className='profile__medals'>
            <ul className='profile__medal-list'>
              <li className='profile__medal'><img className='profile__logo' src={brokenFang} alt="медаль1"/></li>
              <li className='profile__medal'><img className='profile__logo' src={medal2023} alt="медаль2"/></li>
              <li className='profile__medal'><img className='profile__logo' src={medalRio} alt="медаль3"/></li>
              <li className='profile__medal'><img className='profile__logo' src={medalChicken} alt="медаль4"/></li>
              <li className='profile__medal'><img className='profile__logo' src={stockholm} alt="медаль5"/></li>
            </ul>
            <ul className='profile__arrows'>
              <li className='profile__arrow'><img className='rank__arrow rank__arrow_left' src={arrowDown} alt="arrow" onClick={handleArrLeftClick}/></li>
              <li className='profile__arrow'><img className='rank__arrow rank__arrow_right' src={arrowDown} alt="arrow" onClick={handleArrRightClick}/></li>
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
          <p className='rank__title'>Легендарный беркут-магистр</p>
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
          <li className='tools__item tools__item_active'><img className='tools__logo' src={friendsLogo} alt="друзья"/></li>
          <li className='tools__item'><img className='tools__logo' src={searchLogo} alt="поиск"/></li>
          <li className='tools__item'><img className='tools__logo' src={lastLogo} alt="недавние"/></li>
          <li className='tools__item'><img className='tools__logo' src={messageLogo} alt="приглашение"/></li>
        </ul>
        <Friends isRankVisible={isRankVisible} />

      </div>
    </div>
  );

}

export default RightBar;
