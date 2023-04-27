import React  from 'react';
import Switch from '../../../Switch/Switch';

function Zone(props) {
  
  return (
    <div className={"regym regym_zone" + (props.isVisible ? " regym_visible" : " ")}>
      <div className='regym__settings regym__settings_zone'>
        <Switch span="Рейтинговые игры" id="switch_zone_1"/>
        <Switch span="Открытая группа" id="switch_zone_2"/>
      </div>
      <div className='regym__main regym__main_zone'>
        ЗАПРЕТКА
      </div>
    </div>
  )
}

export default Zone;