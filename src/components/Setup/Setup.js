import React  from 'react';

function Setup(props) {
  
  function handleClick() {
    props.handleSetupClick(props.type, props.value)
  }

  return (
    <div className={`setup ${props.id}`} onClick={handleClick}>
      <img className="setup__image" src={props.image} alt="img" draggable="false"/>
      <span className="setup__span">
        {
          props.type === "length" && props.value === "1" ? "Любая игра" : 
          props.type === "length" && props.value === "2" ? "Короткая игра" : 
          props.type === "length" && props.value === "3" ? "Длинная игра" : 
          props.type === "style" && props.value === "1" ? "Команда на команду" : 
          props.type === "style" && props.value === "2" ? "Все против всех" : 
          props.type === "style" && props.value === "3" ? "Классический" : ""
        }
      </span>
    </div>
  );
}

export default Setup;
