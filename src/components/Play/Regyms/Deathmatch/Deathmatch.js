import React  from 'react';
import Switch from '../../../Switch/Switch';

function Deathmatch(props) {
  
  return (
    <div className={"regym regym_deathmatch" + (props.isVisible ? " regym_visible" : " ")}>
      <div className='regym__settings regym__settings_deathmatch'>
        <Switch span="Открытая группа" id="switch_deathmatch_1"/>
      </div>
      <div className='regym__main regym__main_deathmatch'>
        БОЙ НАСМЕРТЬ
      </div>
    </div>
  )
}

export default Deathmatch;