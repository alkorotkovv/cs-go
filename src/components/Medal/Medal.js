import React from 'react';
import TooltipContext from '../../context/TooltipContext';

function Medal(props) {

  const showTooltip = React.useContext(TooltipContext);
  
  return (    
    <li key={props.index} 
      className='medal-list__item' 
      onMouseEnter={() => showTooltip({visible: true, text: props.element.name, x:"1584", y:"99"})} 
      onMouseLeave={() => showTooltip(false, {})} 
    >
      <img className='medal-list__logo' src={props.element.logo} alt="медаль" draggable="false"/>
    </li>
  )
}

export default Medal;