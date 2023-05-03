import React  from 'react';
import Map from '../../../../../Map/Map';
import Switch from '../../../../../Switch/Switch';
import { officialDualMapsArray } from '../../../../../../utils/constants';

function Dual(props) {
  
  return (
    <div className={"regym regym_dual-official" + (props.isVisible ? " regym_visible" : " ")}>
      <div className='regym__settings regym__settings_dual-official'>
        <div className='wrapper wrapper_dual-official'>
          <Switch span="Рейтинговые игры" id="switch_dual-official_1" isChecked={true}/>
        </div>
        <div className='wrapper wrapper_dual-official'>
          <Switch span="Открытая группа" id="switch_dual-official_2" isChecked={true}/>
        </div>
      </div>
      <div className='regym__main-wrapper'>
        <div className='regym__main regym__main_dual-official'>
          <ul className="regym__maps regym__maps_dual-official">
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
                  isIconVisible={true}
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