import React  from 'react';
import Switch from '../../../Switch/Switch';

function Military(props) {
  
  return (
    <div className={"military" + (props.isVisible ? " military_visible" : " ")}>
      <div className='military__settings'>
        <Switch span="Открытая группа" id="switch_military_1"/>
      </div>
      <div className='military__main'>
        ВОЕННЫЕ ИГРЫ
      </div>
    </div>
  )
}

export default Military;