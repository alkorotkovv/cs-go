import React  from 'react';
import Switch from '../../../Switch/Switch';

function Usual(props) {
  
  return (
    <div className={"usual" + (props.isVisible ? " usual_visible" : " ")}>
      <div className='usual__settings'>
        <Switch span="Открытая группа" id="switch_usual_1"/>
      </div>
      <div className='usual__main'>
        ОБЫЧНЫЙ
      </div>
    </div>
  )
}

export default Usual;