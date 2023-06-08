import React  from 'react';
import intro from '../../images/intro.png';

function Intro(props) {

  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {        
    document.addEventListener("keydown", handleKeyDown);
      return () => { document.removeEventListener("keydown", handleKeyDown)};
  },[]);

  //Обработчик нажатия ESC
  function handleKeyDown(evt) {
    if (!props.isAnyPopupVisible)
    switch (evt.code) {
      case "Enter": { 
        document.removeEventListener("keydown", handleKeyDown); 
        props.handleFullscreen(); 
        setIsVisible(false);  
        break; }
      default: ;
    }
  };
  
  return (
    <div className={'intro' + (isVisible ? " intro_visible" : "")}>
      <img className={"intro__logo" + (isVisible ? " intro__logo_visible" : "")} src={intro} alt="intro" draggable="false"/>
      <p className={'intro__text' + (isVisible ? " intro__text_visible" : "")}>Нажмите Enter для продолжения</p>
    </div>  
  )
}

export default Intro;