import React  from 'react';
import Switch from '../../../Switch/Switch';

function Usual(props) {
  
  return (
    <div className={"regym regym_usual" + (props.isVisible ? " regym_visible" : " ")}>
      <div className='regym__settings regym__settings_usual'>
        <Switch span="Открытая группа" id="switch_usual_1"/>
      </div>
      <div className='regym__main regym__main_usual'>
        ОБЫЧНЫЙ
      </div>
    </div>
  )
}

export default Usual;