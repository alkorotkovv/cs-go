import React  from 'react';
import Switch from '../../../Switch/Switch';

function Competitive(props) {
  
  return (
    <div className={"competitive" + (props.isVisible ? " competitive_visible" : " ")}>
      <div className='competitive__settings'>
        <Switch span="Закрытый подбор" id="switch_competitive_1"/>
        <Switch span="Рейтинговые игры" id="switch_competitive_2"/>
        <Switch span="Открытая группа" id="switch_competitive_3"/>
      </div>
      <div className='competitive__main'>
        СОРЕВНОВАТЕЛЬНЫЙ
      </div>
    </div>
  )
}

export default Competitive;