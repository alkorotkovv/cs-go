import React from 'react';

import friendsLogo from '../../images/friends.png';
import searchLogo from '../../images/search.png';
import lastLogo from '../../images/last.png';
import messageLogo from '../../images/message.png';

function Tools(props) {
  
  return (
    <ul className='tools'>
      <li className={"tools__item tools__item_1" + (props.isFriensVisible ? " tools__item_1_active" : "")} onClick={props.handleFriendsClick}>
        <img className='tools__logo' src={friendsLogo} alt="друзья" draggable="false"/>
        <div className={'tools__underline' + (props.isFriensVisible ? " tools__underline_active" : "")}></div>
      </li>
      <li className={"tools__item tools__item_2" + (props.isSearchVisible ? " tools__item_2_active" : "")} onClick={props.handleSearchClick}>
        <img className='tools__logo' src={searchLogo} alt="поиск" draggable="false"/>
        <div className={'tools__underline' + (props.isSearchVisible ? " tools__underline_active" : "")}></div>
      </li>
      <li className={"tools__item tools__item_3" + (props.isLastVisible ? " tools__item_3_active" : "")} onClick={props.handleLastClick}>
        <img className='tools__logo' src={lastLogo} alt="недавние" draggable="false"/>
        <div className={'tools__underline' + (props.isLastVisible ? " tools__underline_active" : "")}></div>
      </li>
      <li className={"tools__item tools__item_4" + (props.isMessageVisible ? " tools__item_4_active" : "")} onClick={props.handleMessageClick}>
        <img className='tools__logo' src={messageLogo} alt="приглашение" draggable="false"/>
        <div className={'tools__underline' + (props.isMessageVisible ? " tools__underline_active" : "")}></div>
      </li>
    </ul>
  );

}

export default Tools;
