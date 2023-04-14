import React from 'react';

import { medalsArray, friendsArray, searchArray, lastArray, messagesArray } from '../../utils/constants';

import friendsLogo from '../../images/friends.png';
import searchLogo from '../../images/search.png';
import lastLogo from '../../images/last.png';
import messageLogo from '../../images/message.png';
function Tools() {
  
  const [isFriensVisible, setIsFriensVisible] = React.useState(true);
  const [isSearchVisible, setIsSearchVisible] = React.useState(false);
  const [isLastVisible, setIsLastVisible] = React.useState(false);
  const [isMessageVisible, setIsMessageVisible] = React.useState(false);

  function handleFriendsClick() {
    setIsFriensVisible(true);
    setIsSearchVisible(false);
    setIsLastVisible(false);
    setIsMessageVisible(false);
  }

  function handleSearchClick() {
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

  return (
    <ul className='tools'>
      <li className={"tools__item tools__item_1" + (isFriensVisible ? " tools__item_1_active" : "")} onClick={handleFriendsClick}><img className='tools__logo' src={friendsLogo} alt="друзья"/></li>
      <li className={"tools__item tools__item_2" + (isSearchVisible ? " tools__item_2_active" : "")} onClick={handleSearchClick}><img className='tools__logo' src={searchLogo} alt="поиск"/></li>
      <li className={"tools__item tools__item_3" + (isLastVisible ? " tools__item_3_active" : "")} onClick={handleLastClick}><img className='tools__logo' src={lastLogo} alt="недавние"/></li>
      <li className={"tools__item tools__item_4" + (isMessageVisible ? " tools__item_4_active" : "")} onClick={handleMessageClick}><img className='tools__logo' src={messageLogo} alt="приглашение"/></li>
    </ul>
  );

}

export default Tools;
