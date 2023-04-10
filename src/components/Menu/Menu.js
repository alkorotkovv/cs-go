import React from 'react';
import { Link } from 'react-router-dom';
import closeLogo from '../../images/background.jpg';

function Menu(props) {

  function handleClick(evt) {
    if ( (evt.target.classList.contains('menu_visible')) || (evt.target.classList.contains('menu__item')) )
      handleClose();
  }

  function handleClose() {
      props.onClose();
  }

  return (
    <div className={"menu" + (props.isOpen ? " menu_visible" : "")} onClick={handleClick} >
      <img className="menu__background" src={closeLogo} alt="закрыть" onClick={props.onClose} />
    </div>
  )
}

export default Menu;