import React  from 'react';
import servers from '../../../../images/servers.jpg';

function Live(props) {

  return (
    <div className={"type type_live" + (props.isVisible ? " type_visible" : " ")} >
      <img className='servers' src={servers} alt="сервера" onClick={props.handleClose} draggable="false"/>
    </div>
  )
}

export default Live;