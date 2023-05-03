import React  from 'react';
import Setup from '../../../../../Setup/Setup';
import Switch from '../../../../../Switch/Switch';
import setup_prime_icon from '../../../../../../images/setup_prime_icon.png';
import Map from '../../../../../Map/Map';
import MapBig from '../../../../../MapBig/MapBig';
import { allMapsArray } from '../../../../../../utils/constants';


function Usual(props) {
  
  return (
    <div className={"regym regym_usual-official" + (props.isVisible ? " regym_visible" : " ")}>
      <div className='regym__settings regym__settings_usual-official'>
        <div className='wrapper wrapper_usual-official'>
          <Setup span="Прайм-статус включён" id="setup_usual-official_1" image={setup_prime_icon} />
        </div>
        <div className='wrapper wrapper_usual-official'>
          <Switch span="Открытая группа" id="switch_usual-official_1" isChecked={true}/>
        </div>
      </div>
      <div className='regym__main-wrapper'>
        <div className='regym__main regym__main_usual-official'>
          <ul className="regym__maps regym__maps_usual-official">          
            <MapBig maps={[
              allMapsArray.find((e) => e.name === "Canals"),
              allMapsArray.find((e) => e.name === "Vertigo"),
              allMapsArray.find((e) => e.name === "Cobblestone"),
              allMapsArray.find((e) => e.name === "Ancient"),
              allMapsArray.find((e) => e.name === "Cache"),
              allMapsArray.find((e) => e.name === "Tuscan")
              ]} 
              name="Разминирование, группа Сигма"
              isCheckable={false}
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
              isCheckable={false}
            />        
            <Map
              logo={allMapsArray.find((e) => e.name === "Dust 2").logo}
              icon={allMapsArray.find((e) => e.name === "Dust 2").icon}
              name={allMapsArray.find((e) => e.name === "Dust 2").name}
              time={allMapsArray.find((e) => e.name === "Dust 2").time}
              isCompetitive={false}
              isCheckable={false}
              isTimeVisible={false}
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
              isCheckable={false}
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Usual;