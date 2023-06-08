import React from 'react';
import terr from '../../images/terr.png';
import anubis from '../../movies/anubis.webm';
//import terr from '../../movies/terr.webm';
//import terrgif from '../../movies/giff.gif';

import News from '../News/News';
import Shop from '../Shop/Shop';


function Menu(props) {

  /*
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    setIsVisible(props.isPlayVisible);
  }, [])
  */

  return (
    <div className="menu">
      <video id="nubexVideo" width="auto" height="auto" autoPlay muted loop="loop" preload="auto">
        <source src={anubis} type='video/webm' ></source>
        {/*<source src={terr} type='video/webm' ></source>*/}
      </video>
      {/*<img src={terrgif} alt="я джифка"></img>*/}
      <img className="menu__terr" src={terr} alt="закрыть" draggable={false} />
      <News isVisible={props.isMainVisible} />
      <Shop isVisible={props.isMainVisible} />
      
    </div>
  )
}

export default Menu;