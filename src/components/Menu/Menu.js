import React from 'react';
import menuLogo from '../../images/background.jpg';
import anubis from '../../movies/anubis.webm';

function Menu(props) {

  console.log (anubis);

  function handleClick(evt) {
  }

  return (
    <div className="menu" onClick={handleClick} >
      <video id="nubexVideo" width="100%" height="auto" loop="loop" autoplay="autoplay" preload="auto">
        <source src={anubis} type="video/webm"></source>
      </video>
      <img className="menu__background" src={menuLogo} alt="закрыть" onClick={props.onClose} />
    </div>
  )
}

export default Menu;