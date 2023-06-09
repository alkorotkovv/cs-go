import React  from 'react';
import Switch from '../../../../../Switch/Switch';
import Map from '../../../../../Map/Map';
import add_all_icon from '../../../../../../images/add_all_icon.png';
import delete_all_icon from '../../../../../../images/delete_all_icon.png';
import save_icon from '../../../../../../images/save_icon.png';
import setup_setting_icon from '../../../../../../images/setup_setting_icon.png';
import { officialCompetitiveMapsArray } from '../../../../../../utils/constants';
import Setup from '../../../../../Setup/Setup';


function Competitive(props) {
  
  return (
    <div className={"regym regym_competitive-official" + (props.isVisible ? " regym_visible" : " ")}>
      <div className='regym__settings regym__settings_competitive-official'>
        <div className='wrapper wrapper_competitive-official'>
          <Switch span="Закрытый подбор" id="switch_competitive-official_1" isChecked={false} />
        </div>
        <div className='wrapper wrapper_competitive-official'>
          <Setup span="Короткая игра" id="setup_competitive-official_1" type="length" value={props.setupValue || "2"} image={setup_setting_icon} handleSetupClick={props.handleSetupClick}/>
        </div>
        <div className='wrapper wrapper_competitive-official'>
          <Switch span="Рейтинговые игры" id="switch_competitive-official_2" isChecked={true}/>
        </div>
        <div className='wrapper wrapper_competitive-official'>
          <Switch span="Открытая группа" id="switch_competitive-official_3" isChecked={true}/>
        </div>
      </div>
      <div className='regym__main-wrapper'>
        <div className='regym__main regym__main_competitive-official'>
          <div className='filters'>
            <div className='filters__templates-block'>
              <p className='filters__title'>Шаблоны</p>
              <ul className='filters__templates'>
                <li className='filters__template'><p className='filters__template-text'>Избранное</p></li>
                <li className='filters__template'><p className='filters__template-text'>Новые</p></li>
                <li className='filters__template filters__template_active'><p className='filters__template-text'>Премьер-режим</p></li>
                <li className='filters__template'><p className='filters__template-text'>Передовая</p></li>
                <li className='filters__template'><p className='filters__template-text'>Заложники</p></li>
              </ul>
            </div>
            <div className='filters__actions-block'>
              <ul className='filters__actions'>
                <li className='filters__action'>
                  <img className='filters__action-icon' src={add_all_icon} alt="icon" draggable="false"/>
                  <p className='filters__action-text'>Выбрать все</p>
                </li>
                <li className='filters__action'>
                  <img className='filters__action-icon' src={delete_all_icon} alt="icon" draggable="false"/>
                  <p className='filters__action-text'>Удалить все</p>
                </li>
                <li className='filters__action'>
                  <img className='filters__action-icon' src={save_icon} alt="icon" draggable="false"/>
                  <p className='filters__action-text'>Сохранить как ...</p>
                </li>
              </ul>
            </div>

          </div>
          <div className='maps'>
            <ul className="regym__maps regym__maps_competitive-official">
              {
                officialCompetitiveMapsArray.map((element, index) => 
                  <Map 
                    key={index}
                    logo={element.logo}
                    icon={element.icon}
                    name={element.name}
                    time={element.time}
                    isCompetitive={element.isCompetitive}
                    isCheckable={true}
                    isTimeVisible={true}
                    isIconVisible={true}
                  />
                )
              }  
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Competitive;