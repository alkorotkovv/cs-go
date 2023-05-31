import React  from 'react';
import Setup from '../../../../../Setup/Setup';
import Switch from '../../../../../Switch/Switch';
import setup_setting_icon from '../../../../../../images/setup_setting_icon.png';
import Map from '../../../../../Map/Map';
import { botsDeathmatchMapsArray } from '../../../../../../utils/constants';

function Deathmatch(props) {
  
  return (
    <div className={"regym regym_deathmatch-bots" + (props.isVisible ? " regym_visible" : " ")}>
      <div className='regym__settings regym__settings_deathmatch-bots'>
        <div className='wrapper wrapper_deathmatch-bots'>
          <Setup span="Команда на команду" id="setup_deathmatch-bots_1" type="style" value="1" image={setup_setting_icon} handleSetupClick={props.handleSetupClick}/>
        </div>
        <div className='wrapper wrapper_deathmatch-bots'>
          <Switch span="Открытая группа" id="switch_deathmatch-bots_1" isChecked={true}/>
        </div>
      </div>
      <div className='regym__main-wrapper'>
        <div className='regym__main regym__main_deathmatch-bots'>
        <div className='maps'>
            <ul className="regym__maps regym__maps_deathmatch-bots">          
              {
                botsDeathmatchMapsArray.map((element, index) => 
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

export default Deathmatch;