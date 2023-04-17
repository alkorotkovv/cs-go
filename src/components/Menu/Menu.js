import React from 'react';
import menuLogo from '../../images/background.jpg';
import anubis from '../../movies/anubis.webm';
import terr from '../../movies/terr.webm';
import terrgif from '../../movies/giff.gif';

function Menu(props) {

  //console.log (terr);

  function handleClick(evt) {
  }

  return (
    <div className="menu" onClick={handleClick} >
      <video id="nubexVideo" width="auto" height="auto" autoPlay muted loop="loop" preload="auto">
        <source src={anubis} type='video/webm' ></source>
        {/*<source src={terr} type='video/webm' ></source>*/}
      </video>
      <img src={terrgif} alt="я джифка"></img>
      <img className="menu__background" src={menuLogo} alt="закрыть" onClick={props.onClose} />
    </div>
  )
}

export default Menu;