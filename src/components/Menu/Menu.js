import React from 'react';
import menuLogo from '../../images/background.jpg';

function Menu(props) {

  function handleClick(evt) {
  }

  return (
    <div className="menu" onClick={handleClick} >
      <img className="menu__background" src={menuLogo} alt="закрыть" onClick={props.onClose} />
    </div>
  )
}

export default Menu;