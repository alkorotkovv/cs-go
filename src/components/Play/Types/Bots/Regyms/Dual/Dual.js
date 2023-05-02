import React  from 'react';
import Map from '../../../../../Map/Map';
import Switch from '../../../../../Switch/Switch';
import { botsDualMapsArray } from '../../../../../../utils/constants';

function Dual(props) {
  
  return (
    <div className={"regym regym_dual-bots" + (props.isVisible ? " regym_visible" : " ")}>
      <div className='regym__settings regym__settings_dual-bots'>
        <div className='wrapper wrapper_dual-bots'>
          <Switch span="Открытая группа" id="switch_dual-bots_1"/>
        </div>
      </div>
      <div className='regym__main-wrapper'>
        <div className='regym__main regym__main_dual-bots'>
          <ul className="regym__maps regym__maps_dual-bots">
            {
              botsDualMapsArray.map((element, index) => 
                <Map 
                  key={index}
                  logo={element.logo}
                  icon={element.icon}
                  name={element.name}
                  time={element.time}
                  isCompetitive={element.isCompetitive}
                  isCheckable={false}
                  isTimeVisible={false}
                />            
              )
            }  
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dual;