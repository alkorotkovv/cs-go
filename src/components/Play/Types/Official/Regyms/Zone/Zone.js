import React  from 'react';
import Switch from '../../../../../Switch/Switch';
import { allMapsArray, zoneFriendsArray } from '../../../../../../utils/constants';
import updateIcon from '../../../../../../images/update_icon.png';

function Zone(props) {
  
  return (
    <div className={"regym regym_zone" + (props.isVisible ? " regym_visible" : " ")}>
      <div className='regym__settings regym__settings_zone'>
        <Switch span="Рейтинговые игры" id="switch_zone_1"/>
        <Switch span="Открытая группа" id="switch_zone_2"/>
      </div>
      <div className='regym__main-wrapper'>
        <div className='regym__main regym__main_zone'>
          <div className='zone-map'>
            <img className='zone-map__image' src={allMapsArray.find((e) => e.name === "Sirocco").logo} alt="logo"/>
            <img className='zone-map__icon' src={allMapsArray.find((e) => e.name === "Sirocco").icon} alt="icon"/>
          </div>
          <div className='table'>
            <div className='table__header'>
              <p className='table__title'>Рекорды друзей в отрядах</p>
              <img className='table__update' src={updateIcon} alt="icon"/>
            </div>
            <div className='table__rows-header'>
              <p className='table__rows-header-text'>ДРУЗЬЯ</p>
              <p className='table__rows-header-text'>ПОБЕДЫ</p>
            </div>
            <ul className='table__rows'>
              {
                zoneFriendsArray.map((element, index) => 
                <li className='row'>
                  <p className='row__number'>{element.number}</p>
                  <img className='row__avatar' src={element.avatar} alt="avatar"/>
                  <p className='row__name'>{element.name}</p>
                  <p className='row__wins'>{element.wins}</p>
                </li>
                )
              }  
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Zone;