import React  from 'react';


function Popup(props) {
  
  return (
    <div className={`${props.name}` + (props.isVisible ? " popup_visible" : "") + ` popup`}>
      {props.children}
    </div>
  )
}

export default Popup;