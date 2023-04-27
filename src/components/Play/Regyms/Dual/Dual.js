import React  from 'react';
import Map from '../../../Map/Map';
import Switch from '../../../Switch/Switch';

import { dualMapsArray } from '../../../../utils/constants';

function Dual(props) {
  
  return (
    <div className={"regym regym_dual" + (props.isVisible ? " regym_visible" : " ")}>
      <div className='regym__settings regym__settings_dual'>
        <Switch span="Рейтинговые игры" id="switch_dual_1"/>
        <Switch span="Открытая группа" id="switch_dual_2"/>
      </div>
      <div className='regym__main regym__main_dual'>
        <ul className="regym__maps regym__maps_dual">
          {
            dualMapsArray.map((element, index) => 
              <Map 
                key={index}
                logo={element.logo}
                icon={element.icon}
                name={element.name}
                time={element.time}
                isCompetitive={element.isCompetitive}
              />            
            )
          }  
        </ul>
      </div>
    </div>
  )
}

export default Dual;