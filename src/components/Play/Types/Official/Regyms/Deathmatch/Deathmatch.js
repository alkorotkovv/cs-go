import React  from 'react';
import Setup from '../../../../../Setup/Setup';
import Switch from '../../../../../Switch/Switch';
import setup_prime_icon from '../../../../../../images/setup_prime_icon.png';
import setup_setting_icon from '../../../../../../images/setup_setting_icon.png';
import Map from '../../../../../Map/Map';
import MapBig from '../../../../../MapBig/MapBig';
import { allMapsArray } from '../../../../../../utils/constants';

function Deathmatch(props) {
  
  return (
    <div className={"regym regym_deathmatch-official" + (props.isVisible ? " regym_visible" : " ")}>
      <div className='regym__settings regym__settings_deathmatch-official'>
        <div className='wrapper wrapper_deathmatch-official'>
          <Setup span="Классический" id="setup_deathmatch-official_1" type="style" value={props.setupValue || "3"} image={setup_setting_icon} handleSetupClick={props.handleSetupClick}/>
        </div>
        <div className='wrapper wrapper_deathmatch-official'>
          <Setup span="Прайм-статус включён" id="setup_deathmatch-official_2" image={setup_prime_icon} />
        </div>
        <div className='wrapper wrapper_deathmatch-official'>
          <Switch span="Открытая группа" id="switch_deathmatch-official_1" isChecked={true}/>
        </div>
      </div>
      <div className='regym__main-wrapper'>
        <div className='regym__main regym__main_deathmatch-official'>
          <ul className="regym__maps regym__maps_deathmatch-official">          
            <MapBig maps={[
              allMapsArray.find((e) => e.name === "Canals"),
              allMapsArray.find((e) => e.name === "Vertigo"),
              allMapsArray.find((e) => e.name === "Cobblestone"),
              allMapsArray.find((e) => e.name === "Ancient"),
              allMapsArray.find((e) => e.name === "Cache"),
              allMapsArray.find((e) => e.name === "Tuscan")
              ]} 
              name="Разминирование, группа Сигма"
              period={3000}
              checkable={false}
            />          
            <MapBig maps={[
              allMapsArray.find((e) => e.name === "Anubis"),
              allMapsArray.find((e) => e.name === "Mirage"),
              allMapsArray.find((e) => e.name === "Inferno"),
              allMapsArray.find((e) => e.name === "Overpass"),
              allMapsArray.find((e) => e.name === "Nuke"),
              allMapsArray.find((e) => e.name === "Train")
              ]} 
              name="Разминирование, группа Дельта"
              period={5000}
              checkable={false}
            />          
            <Map
              logo={allMapsArray.find((e) => e.name === "Dust 2").logo}
              icon={allMapsArray.find((e) => e.name === "Dust 2").icon}
              name={allMapsArray.find((e) => e.name === "Dust 2").name}
              time={""}
              isCompetitive={false}
              isCheckable={false}
              isIconVisible={true}
            />
            <MapBig maps={[
              allMapsArray.find((e) => e.name === "Agency"),
              allMapsArray.find((e) => e.name === "Militia"),
              allMapsArray.find((e) => e.name === "Office"),
              allMapsArray.find((e) => e.name === "Italy"),
              allMapsArray.find((e) => e.name === "Assault")
              ]} 
              name="Освобождение заложников"
              period={5000}
              checkable={false}
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Deathmatch;