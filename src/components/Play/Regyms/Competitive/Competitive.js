import React  from 'react';
import Switch from '../../../Switch/Switch';
import Map from '../../../Map/Map';

import { competitiveMapsArray } from '../../../../utils/constants';

function Competitive(props) {
  
  return (
    <div className={"regym regym_competitive" + (props.isVisible ? " regym_visible" : " ")}>
      <div className='regym__settings regym__settings_competitive'>
        <Switch span="Закрытый подбор" id="switch_competitive_1"/>
        <Switch span="Рейтинговые игры" id="switch_competitive_2"/>
        <Switch span="Открытая группа" id="switch_competitive_3"/>
      </div>
      <div className='regym__main regym__main_competitive'>
        <div className='filters'>

        </div>
        <div className='maps'>
          <ul className="regym__maps regym__maps_competitive">
            {
              competitiveMapsArray.map((element, index) => 
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
    </div>
  )
}

export default Competitive;