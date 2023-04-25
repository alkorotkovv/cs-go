import React from 'react';

function Panel(props) {
  
  return (
    <div className={`${props.name}` + " panel" + (props.isVisible ? " panel_visible":"")}>
      {props.children}
    </div>
  )
}

export default Panel;