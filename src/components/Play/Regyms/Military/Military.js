import React  from 'react';
import Switch from '../../../Switch/Switch';

function Military(props) {
  
  return (
    <div className={"regym regym_military" + (props.isVisible ? " regym_visible" : " ")}>
      <div className='regym__settings regym__settings_military'>
        <Switch span="Открытая группа" id="switch_military_1"/>
      </div>
      <div className='regym__main regym__main_military'>
        ВОЕННЫЕ ИГРЫ
      </div>
    </div>
  )
}

export default Military;