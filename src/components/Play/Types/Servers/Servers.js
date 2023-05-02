import React  from 'react';
import PopupWindow from '../../../PopupWindow/PopupWindow';
import servers from '../../../../images/servers.jpg';

function Servers(props) {

  return (
    <div className={"type type_servers" + (props.isVisible ? " type_visible" : " ")} >
      <img className='servers' src={servers} alt="сервера" onClick={props.handleClose} />
    </div>
  )
}

export default Servers;