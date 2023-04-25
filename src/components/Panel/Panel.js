import React from 'react';

function Panel(props) {
  
  return (
    <div className={`${props.name}` + (props.isVisible ? " panel_visible":"") + " panel"}>
      {props.children}
    </div>
  )
}

export default Panel;