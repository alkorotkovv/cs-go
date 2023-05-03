import React  from 'react';
import Switch from '../../../../../Switch/Switch';
import Map from '../../../../../Map/Map';
import add_all_icon from '../../../../../../images/add_all_icon.png';
import delete_all_icon from '../../../../../../images/delete_all_icon.png';
import save_icon from '../../../../../../images/save_icon.png';
import setup_setting_icon from '../../../../../../images/setup_setting_icon.png';
import { botsCompetitiveMapsArray } from '../../../../../../utils/constants';
import Setup from '../../../../../Setup/Setup';


function Competitive(props) {
  
  return (
    <div className={"regym regym_competitive-bots" + (props.isVisible ? " regym_visible" : " ")}>
      <div className='regym__settings regym__settings_competitive-bots'>
        <div className='wrapper wrapper_competitive-bots'>
          <Setup span="Любая длительность" id="setup_competitive-bots_1" image={setup_setting_icon} />
        </div>
        <div className='wrapper wrapper_competitive-bots'>
          <Switch span="Открытая группа" id="switch_competitive-bots_2" isChecked={true}/>
        </div>
      </div>
      <div className='regym__main-wrapper'>
        <div className='regym__main regym__main_competitive-bots'>
          <div className='maps'>
            <ul className="regym__maps regym__maps_competitive-bots">
              {
                botsCompetitiveMapsArray.map((element, index) => 
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

export default Competitive;