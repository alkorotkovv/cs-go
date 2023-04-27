import React  from 'react';
import Switch from '../../../Switch/Switch';

function Competitive(props) {
  
  return (
    <div className={"regym regym_competitive" + (props.isVisible ? " regym_visible" : " ")}>
      <div className='regym__settings regym__settings_competitive'>
        <Switch span="Закрытый подбор" id="switch_competitive_1"/>
        <Switch span="Рейтинговые игры" id="switch_competitive_2"/>
        <Switch span="Открытая группа" id="switch_competitive_3"/>
      </div>
      <div className='regym__main regym__main_competitive'>
        СОРЕВНОВАТЕЛЬНЫЙ
      </div>
    </div>
  )
}

export default Competitive;