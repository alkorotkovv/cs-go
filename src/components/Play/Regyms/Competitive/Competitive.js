import React  from 'react';
import Switch from '../../../Switch/Switch';
import Map from '../../../Map/Map';

import add_all_icon from '../../../../images/add_all_icon.png';
import delete_all_icon from '../../../../images/delete_all_icon.png';
import save_icon from '../../../../images/save_icon.png';
import { competitiveMapsArray } from '../../../../utils/constants';


function Competitive(props) {
  
  return (
    <div className={"regym regym_competitive" + (props.isVisible ? " regym_visible" : " ")}>
      <div className='regym__settings regym__settings_competitive'>
        <Switch span="Закрытый подбор" id="switch_competitive_1"/>
        <Switch span="Рейтинговые игры" id="switch_competitive_2"/>
        <Switch span="Открытая группа" id="switch_competitive_3"/>
      </div>
      <div className='regym__main regym__main_competitive'>
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
                <img className='filters__action-icon' src={add_all_icon} alt="icon"/>
                <p className='filters__action-text'>Выбрать все</p>
              </li>
              <li className='filters__action'>
                <img className='filters__action-icon' src={delete_all_icon} alt="icon"/>
                <p className='filters__action-text'>Удалить все</p>
              </li>
              <li className='filters__action'>
                <img className='filters__action-icon' src={save_icon} alt="icon"/>
                <p className='filters__action-text'>Сохранить как ...</p>
              </li>
            </ul>
          </div>

        </div>
        <div className='maps'>
          <ul className="regym__maps regym__maps_competitive">
            {
              competitiveMapsArray.map((element, index) => 
                <Map 
                  key={index}
                  logo={element.logo}
                  icon={element.icon}
                  name={element.name}
                  time={element.time}
                  isCompetitive={element.isCompetitive}
                />            
              )
            }  
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Competitive;