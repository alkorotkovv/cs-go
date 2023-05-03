import React  from 'react';
import Switch from '../../../../../Switch/Switch';
import { allMapsArray, zoneFriendsArray } from '../../../../../../utils/constants';
import updateIcon from '../../../../../../images/update_icon.png';
import timeIcon from '../../../../../../images/time_icon.png';

function Zone(props) {

  const [isChecked, setIsChecked] = React.useState(false);

  function handleClick() {
    setIsChecked(!isChecked);
  }
  
  return (
    <div className={"regym regym_zone" + (props.isVisible ? " regym_visible" : " ")}>
      <div className='regym__settings regym__settings_zone'>
        <div className='wrapper wrapper_zone'>
          <Switch span="Рейтинговые игры" id="switch_zone_1"/>
        </div>
        <div className='wrapper wrapper_zone'>
          <Switch span="Открытая группа" id="switch_zone_2"/>
        </div>
      </div>
      <div className='regym__main-wrapper'>
        <div className='regym__main regym__main_zone'>
          <div className='zone-map'>
            <img className='zone-map__image' src={allMapsArray.find((e) => e.name === "Sirocco").logo} alt="logo"/>
            <img className='zone-map__icon' src={allMapsArray.find((e) => e.name === "Sirocco").icon} alt="icon"/>
            <div className='zone-map__time'>
              <img className='zone-map__time-icon' src={timeIcon} alt="icon"/>
              <p className='zone-map__time-time'>02.08</p>
              <p className='zone-map__time-text'>до смены карты на</p>
              <p className='zone-map__time-map'>Sirocco</p>
            </div>
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
                <li className='row' key={index}>
                  <p className='row__number'>{element.number}</p>
                  <img className='row__avatar' src={element.avatar} alt="avatar"/>
                  <p className='row__name'>{element.name}</p>
                  <p className='row__wins'>{element.wins}</p>
                </li>
                )
              }  
            </ul>
            <div className='table__team' onClick={handleClick}>
              <div className={'table__checkbox' + (isChecked ? " " : " table__checkbox_unactive")}></div>
              <div className={'table__group' + (isChecked ? " " : " table__group_unactive")}></div>
              <p className={'table__team-text' + (isChecked ? " " : " table__team-text_unactive")}>НАЙТИ КОМАНДУ</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Zone;