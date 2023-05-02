import React  from 'react';
import Switch from '../../../../../Switch/Switch';
import MapDual from '../../../../../MapDual/MapDual';
import MapBig from '../../../../../MapBig/MapBig';
import { allMapsArray } from '../../../../../../utils/constants';

function Military(props) {
  
  return (
    <div className={"regym regym_military-bots" + (props.isVisible ? " regym_visible" : " ")}>
      <div className='regym__settings regym__settings_military-bots'>
        <div className='wrapper wrapper_military-bots'>
          <Switch span="Открытая группа" id="switch_military-bots_1"/>
        </div>
      </div>
      <div className='regym__main-wrapper'>
        <div className='regym__main regym__main_military-bots'>
          <ul className="regym__maps regym__maps_military-bots">          
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
              isCheckable={false}
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
              isCheckable={false}
            />        
            <MapBig maps={[
              allMapsArray.find((e) => e.name === "Lake"),
              allMapsArray.find((e) => e.name === "Safehouse"),
              allMapsArray.find((e) => e.name === "Dizzy"),
              allMapsArray.find((e) => e.name === "Lunacy"),
              allMapsArray.find((e) => e.name === "Shoots")
              ]} 
              name="Перелётные снайперы"
              isCheckable={false}
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
              isCheckable={false}
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Military;