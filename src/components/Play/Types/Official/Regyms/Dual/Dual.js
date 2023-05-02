import React  from 'react';
import Map from '../../../../../Map/Map';
import Switch from '../../../../../Switch/Switch';
import { officialDualMapsArray } from '../../../../../../utils/constants';

function Dual(props) {
  
  return (
    <div className={"regym regym_dual" + (props.isVisible ? " regym_visible" : " ")}>
      <div className='regym__settings regym__settings_dual'>
        <div className='wrapper wrapper_dual'>
          <Switch span="Рейтинговые игры" id="switch_dual_1"/>
        </div>
        <div className='wrapper wrapper_dual'>
          <Switch span="Открытая группа" id="switch_dual_2"/>
        </div>
      </div>
      <div className='regym__main-wrapper'>
        <div className='regym__main regym__main_dual'>
          <ul className="regym__maps regym__maps_dual">
            {
              officialDualMapsArray.map((element, index) => 
                <Map 
                  key={index}
                  logo={element.logo}
                  icon={element.icon}
                  name={element.name}
                  time={element.time}
                  isCompetitive={element.isCompetitive}
                  isCheckable={true}
                  isTimeVisible={true}
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