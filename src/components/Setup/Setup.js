import React  from 'react';

function Setup(props) {

  

  function handleClick() {
    props.handleSetupClick(props.type)
  }

  return (
    <div className={`setup ${props.id}`} onClick={handleClick}>
      <img className="setup__image" src={props.image} alt="img" draggable="false"/>
      <span className="setup__span">{props.span}</span>
    </div>
  );
}

export default Setup;
