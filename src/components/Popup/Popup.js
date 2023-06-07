import React  from 'react';


function Popup(props) {

  React.useEffect(() => {        
    document.addEventListener("keydown", handleKeyDown);
      return () => { document.removeEventListener("keydown", handleKeyDown)};
  });

  //Обработчик нажатия ESC
  function handleKeyDown(evt) {
    switch (evt.code) {
      case "Escape": props.handleClose(); break;
      default: ;
    }
  };
  
  return (
    <div className={`${props.name}` + (props.isVisible ? " popup_visible" : "") + ` popup`}>
      {props.children}
    </div>
  )
}

export default Popup;