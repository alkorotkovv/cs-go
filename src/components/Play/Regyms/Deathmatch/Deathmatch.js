import React  from 'react';
import Switch from '../../../Switch/Switch';

function Deathmatch(props) {
  
  return (
    <div className={"deathmatch" + (props.isVisible ? " deathmatch_visible" : " ")}>
      <div className='deathmatch__settings'>
        <Switch span="Открытая группа" id="switch_deathmatch_1"/>
      </div>
      <div className='deathmatch__main'>
        БОЙ НАСМЕРТЬ
      </div>
    </div>
  )
}

export default Deathmatch;