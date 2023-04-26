import React  from 'react';
import Map from '../../../Map/Map';
import Switch from '../../../Switch/Switch';

import { dualMapsArray } from '../../../../utils/constants';

function Dual(props) {
  
  return (
    <div className={"dual" + (props.isVisible ? " dual_visible" : " ")}>
      <div className='dual__settings'>
        <Switch span="Рейтинговые игры" id="switch_dual_1"/>
        <Switch span="Открытая группа" id="switch_dual_2"/>
      </div>
      <div className='dual__main'>
        <ul className="dual__maps">
          {
            dualMapsArray.map((element, index) => 
              <Map 
                key={index}
                logo={element.logo}
                icon={element.icon}
                name={element.name}
                time={element.time}
              />            
            )
          }  
        </ul>
      </div>
    </div>
  )
}

export default Dual;