import React  from 'react';
import Setup from '../../../Setup/Setup';
import Switch from '../../../Switch/Switch';
import setup_prime_icon from '../../../../images/setup_prime_icon.png';
import MapDual from '../../../MapDual/MapDual';
import MapBig from '../../../MapBig/MapBig';
import { allMapsArray } from '../../../../utils/constants';

function Military(props) {
  
  return (
    <div className={"regym regym_military" + (props.isVisible ? " regym_visible" : " ")}>
      <div className='regym__settings regym__settings_military'>
      <div className='wrapper wrapper_military'>
          <Setup span="Прайм-статус включён" id="setup_military_1" image={setup_prime_icon} />
        </div>
        <div className='wrapper wrapper_military'>
          <Switch span="Открытая группа" id="switch_military_1"/>
        </div>
      </div>
      <div className='regym__main regym__main_military'>
        <ul className="regym__maps regym__maps_usual">          
          <MapDual maps={[
            allMapsArray.find((e) => e.name === "Canals"),
            allMapsArray.find((e) => e.name === "Vertigo"),
            allMapsArray.find((e) => e.name === "Cobblestone"),
            allMapsArray.find((e) => e.name === "Ancient"),
            allMapsArray.find((e) => e.name === "Cache"),
            allMapsArray.find((e) => e.name === "Ancient"),
            allMapsArray.find((e) => e.name === "Tuscan")
            ]} 
            name="Гонка вооружений"
            period={3000}
            isCheckable={true}
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
            isCheckable={true}
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
            isCheckable={true}
          />        
          <MapDual maps={[
            allMapsArray.find((e) => e.name === "Agency"),
            allMapsArray.find((e) => e.name === "Militia"),
            allMapsArray.find((e) => e.name === "Office"),
            allMapsArray.find((e) => e.name === "Italy"),
            allMapsArray.find((e) => e.name === "Assault")
            ]} 
            name="Освобождение заложников"
            period={5000}
            isCheckable={true}
          />
        </ul>
      </div>
    </div>
  )
}

export default Military;