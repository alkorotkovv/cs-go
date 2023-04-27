import React from 'react';

function Panel(props) {
  
  return (
    <div className={`${props.name}` + (props.isVisible ? " panel_visible":"") + " panel"}>
      <h1 className='panel__title'>{props.title}</h1>
      {props.children}
    </div>
  )
}

export default Panel;