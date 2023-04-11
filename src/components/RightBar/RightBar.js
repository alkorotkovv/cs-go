import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
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

import friendAvatar from '../../images/friend_avatar.png';


function RightBar() {
  return (
    <div className="rightBar">
      <div className='rightBar__main'>
        <div className='profile'>
          <img className='profile__avatar' src={avatar} alt="csgo"></img>
          <h2 className='profile__name'>ВЕЛЬМОЖА</h2>
          <ul className='profile__medal-list'>
            <li className='profile__medal'><img className='profile__logo' src={brokenFang} alt="медаль1"/></li>
            <li className='profile__medal'><img className='profile__logo' src={medal2023} alt="медаль2"/></li>
            <li className='profile__medal'><img className='profile__logo' src={medalRio} alt="медаль3"/></li>
            <li className='profile__medal'><img className='profile__logo' src={medalChicken} alt="медаль4"/></li>
            <li className='profile__medal'><img className='profile__logo' src={stockholm} alt="медаль5"/></li>
            <li className='profile__arrows'></li>
          </ul>
        </div>
        <div className='experience'>
          <img className='experience__logo' src={experienceLogo} alt="csgo"></img>
          <p className='experience__title'>Ранг: Лейтенант, 22</p>
          <progress className='experience__progress' value="30" max="100"></progress>
        </div>
        <div className='rank'>
          <img className='rank__logo' src={rankLogo} alt="rank"></img>
          <p className='rank__title'>Легендарный беркут-магистр</p>
          <img className='rank__arrow' src={arrowDown} alt="arrow"></img>
        </div>
        <div className='rank'>
          <img className='rank__logo' src={rankOld} alt="rank"></img>
          <p className='rank__title'>"Напарники": звание устарело</p>
        </div>
        <div className='rank'>
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
        <ul className='friends'>
          <li className='friends__item'>
            <img className='friends__avatar' src={friendAvatar} alt="друг"/>
            <p className='friends__name'>дядя Федор</p>
            <p className='friends__status'>Играет в CS:GO</p>
          </li>
          <li className='friends__item'>
            <img className='friends__avatar' src={friendAvatar} alt="друг"/>
            <p className='friends__name'>#ЖирныйRust_Deluxe</p>
            <p className='friends__status'>Спит</p>
          </li>
          <li className='friends__item'>
            <img className='friends__avatar' src={friendAvatar} alt="друг"/>
            <p className='friends__name'>#ЖирныйRust_Deluxe</p>
            <p className='friends__status'>Спит</p>
          </li>
        </ul>

      </div>
    </div>
  );

}

export default RightBar;
