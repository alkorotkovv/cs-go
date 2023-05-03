import React  from 'react';
import Setup from '../../../../../Setup/Setup';
import Switch from '../../../../../Switch/Switch';
import setup_prime_icon from '../../../../../../images/setup_prime_icon.png';
import MapDual from '../../../../../MapDual/MapDual';
import MapBig from '../../../../../MapBig/MapBig';
import { allMapsArray } from '../../../../../../utils/constants';

function Military(props) {
  
  return (
    <div className={"regym regym_military-official" + (props.isVisible ? " regym_visible" : " ")}>
      <div className='regym__settings regym__settings_military-official'>
      <div className='wrapper wrapper_military-official'>
          <Setup span="Прайм-статус включён" id="setup_military-official_1" image={setup_prime_icon} />
        </div>
        <div className='wrapper wrapper_military-official'>
          <Switch span="Открытая группа" id="switch_military-official_1" isChecked={true}/>
        </div>
      </div>
      <div className='regym__main-wrapper'>
        <div className='regym__main regym__main_military-official'>
          <ul className="regym__maps regym__maps_military-official">          
            <MapDual maps={[
              allMapsArray.find((e) => e.name === "Lake"),
              allMapsArray.find((e) => e.name === "Baggage"),
              allMapsArray.find((e) => e.name === "Safehouse"),
              allMapsArray.find((e) => e.name === "St Marc"),
              allMapsArray.find((e) => e.name === "Shoots"),
              allMapsArray.find((e) => e.name === "Lunacy"),
              allMapsArray.find((e) => e.name === "Monastery")
              ]} 
              name="Гонка вооружений"
              isCheckable={true}
            />        
            <MapBig maps={[
              allMapsArray.find((e) => e.name === "Lake"),
              allMapsArray.find((e) => e.name === "Safehouse"),
              allMapsArray.find((e) => e.name === "Sugarcane"),
              allMapsArray.find((e) => e.name === "Bank"),
              allMapsArray.find((e) => e.name === "St Marc"),
              allMapsArray.find((e) => e.name === "Shortdust")
              ]} 
              name="Уничтожение объекта"
              isCheckable={true}
            />        
            <MapBig maps={[
              allMapsArray.find((e) => e.name === "Lake"),
              allMapsArray.find((e) => e.name === "Safehouse"),
              allMapsArray.find((e) => e.name === "Dizzy"),
              allMapsArray.find((e) => e.name === "Lunacy"),
              allMapsArray.find((e) => e.name === "Shoots")
              ]} 
              name="Перелётные снайперы"
              isCheckable={true}
            />        
            <MapDual maps={[
              allMapsArray.find((e) => e.name === "Inferno"),
              allMapsArray.find((e) => e.name === "Mirage"),
              allMapsArray.find((e) => e.name === "Dust 2"),
              allMapsArray.find((e) => e.name === "Nuke"),
              allMapsArray.find((e) => e.name === "Overpass"),
              allMapsArray.find((e) => e.name === "Train"),
              allMapsArray.find((e) => e.name === "Vertigo"),
              allMapsArray.find((e) => e.name === "Ancient")
              ]} 
              name="Зачистка"
              isCheckable={true}
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Military;