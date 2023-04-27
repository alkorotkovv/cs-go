import React  from 'react';
import Setup from '../../../Setup/Setup';
import Switch from '../../../Switch/Switch';
import setup_prime_icon from '../../../../images/setup_prime_icon.png';
import MapBig from '../../../MapBig/MapBig';

import { competitiveMapsArray } from '../../../../utils/constants';

function Usual(props) {
  
  return (
    <div className={"regym regym_usual" + (props.isVisible ? " regym_visible" : " ")}>
      <div className='regym__settings regym__settings_usual'>
        <div className='wrapper wrapper_usual'>
          <Setup span="Прайм-статус включён" id="setup_usual_1" image={setup_prime_icon} />
        </div>
        <div className='wrapper wrapper_usual'>
          <Switch span="Открытая группа" id="switch_usual_1"/>
        </div>
      </div>
      <div className='regym__main regym__main_usual'>
        <MapBig maps={[
          competitiveMapsArray.find((e) => e.name === "Anubis"),
          competitiveMapsArray.find((e) => e.name === "Mirage"),
          competitiveMapsArray.find((e) => e.name === "Inferno"),
          competitiveMapsArray.find((e) => e.name === "Overpass"),
          competitiveMapsArray.find((e) => e.name === "Nuke"),
          competitiveMapsArray.find((e) => e.name === "Train")
          ]} 
          name="Разминирование, группа Дельта"
        />
      </div>
    </div>
  )
}

export default Usual;