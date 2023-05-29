import React from 'react';
import input_close from '../../images/input_close.png';

function Input(props) {

  const inputRef = React.useRef(null);
  const inputCloseRef = React.useRef(null);

  const [title, setTitle] = React.useState(props.title);
  const [oldTitle, setOldTitle] = React.useState(props.title);
  const [isOpen, setIsOpen] = React.useState(false);

  function handleNameChange(evt) {
    //Значение меняется посредством обработчика нажатия на клавишу (слушатель на документе)
  }

  //Обработчик фокуса
  function handleFocus() {
    setOldTitle(title);
    setTitle("");
    setIsOpen(true);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("wheel", handleWheel);
  }

  //Обработчик расфокуса
  function handleBlur() {
    setIsOpen(false);
    document.removeEventListener("keydown", handleKeyDown);
    document.removeEventListener("mousedown", handleClick);
    document.removeEventListener("wheel", handleWheel);
    inputRef.current.blur();
  }
    
  //Обработчик нажатия на клавиатуру
  function handleKeyDown(evt) {
    evt.preventDefault();
    setTitle(evt.key);
    //console.log(evt);
    switch (evt.code) {
      case "Escape": setTitle(oldTitle); break;
      case "Space": setTitle("Space"); break;
      case "ControlLeft": setTitle("Ctrl"); break;
      case "ControlRight": setTitle("Ctrl"); break;
      default: setTitle(evt.key); setOldTitle(evt.key);
    }
    handleBlur();
  }

  //Обработчик клика мыши
  function handleClick(evt) {
    evt.preventDefault();
    switch (evt.button) {
      case 0: setTitle("Mouse1"); setOldTitle("Mouse1"); break;
      case 1: setTitle("Mouse3"); setOldTitle("Mouse3"); break;
      case 2: setTitle("Mouse2"); setOldTitle("Mouse2"); break;
      default: setTitle("Mouse1"); setOldTitle("Mouse1");
    }
    if (evt.target === inputCloseRef.current) {
      setTitle(""); 
      setOldTitle("");
    }
    handleBlur();
  }

  function handleWheel(evt) {
    //evt.preventDefault();
    //console.log(evt.deltaY)
    if (evt.deltaY > 0) {
      setTitle("WheelDown");
      setOldTitle("WheelDown");
      handleBlur();
    }
    else if (evt.deltaY < 0) {
      setTitle("WheelUp");
      setOldTitle("WheelUp");
      handleBlur();
    }
  }
  
  return (
    <div className={"input"} >
      <input className='input__title' ref={inputRef} id="input-settings" name="input-settings" type="text" placeholder="" value={title} onChange={handleNameChange} onFocus={handleFocus} onBlur={handleBlur} />
      <img className={"input__close" + (isOpen ? ' input__close_visible' : ' input__close_unvisible')} ref={inputCloseRef} src={input_close} alt="закрыть" draggable="false" />
    </div>
  )
}

export default Input;