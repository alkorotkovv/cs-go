import React  from 'react';
import Switch from '../../../../../Switch/Switch';
import Map from '../../../../../Map/Map';
import { botsUsualMapsArray } from '../../../../../../utils/constants';


function Usual(props) {
  
  return (
    <div className={"regym regym_usual-bots" + (props.isVisible ? " regym_visible" : " ")}>
      <div className='regym__settings regym__settings_usual-bots'>
        <div className='wrapper wrapper_usual-bots'>
          <Switch span="Открытая группа" id="switch_usual-bots_1" isChecked={true}/>
        </div>
      </div>
      <div className='regym__main-wrapper'>
        <div className='regym__main regym__main_usual-bots'>
          <div className='maps'>
            <ul className="regym__maps regym__maps_usual-bots">  
              { 
                botsUsualMapsArray.map((element, index) => 
                  <Map 
                    key={index}
                    logo={element.logo}
                    icon={element.icon}
                    name={element.name}
                    time={element.time}
                    isCompetitive={element.isCompetitive}
                    isCheckable={false}
                    isTimeVisible={false}
                    isIconVisible={true}
                  />            
                )
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Usual;