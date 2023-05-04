import React  from 'react';

function Switch(props) {

  const [isChecked, setIsChecked] = React.useState(props.isChecked)

  function handleClick() {
    setIsChecked(!isChecked)
  }

  return (
    <div className={`switch ${props.id}`} >
      <input className="switch__checkbox" type="checkbox" id={props.id} checked={isChecked} onChange={handleClick} />
      <label className="switch__label" htmlFor={props.id} ></label>
      <span className="switch__span" onClick={handleClick}>{props.span}</span>
    </div>
  );
}

export default Switch;
