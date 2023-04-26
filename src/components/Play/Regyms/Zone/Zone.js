import React  from 'react';
import Switch from '../../../Switch/Switch';

function Zone(props) {
  
  return (
    <div className={"zone" + (props.isVisible ? " zone_visible" : " ")}>
      <div className='zone__settings'>
        <Switch span="Рейтинговые игры" id="switch_zone_1"/>
        <Switch span="Открытая группа" id="switch_zone_2"/>
      </div>
      <div className='zone__main'>
        ЗАПРЕТКА
      </div>
    </div>
  )
}

export default Zone;