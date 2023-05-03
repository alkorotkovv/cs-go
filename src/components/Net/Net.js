import React  from 'react';
import mmIcon from '../../images/mm_icon.png';
import dualIcon from '../../images/dual_icon.png';
import zoneIcon from '../../images/zone_icon.png';

function Net(props) {

  const [isMmActive, setIsMmActive] = React.useState(false);
  const [isDualActive, setIsDualActive] = React.useState(false);
  const [isZoneActive, setIsZoneActive] = React.useState(false);

  //Обработчики выбора режима
  function handleMmClick() {
    setIsMmActive(true);
    setIsDualActive(false);
    setIsZoneActive(false);
    props.handleSearch(true);
    props.handleClose();
  }

  function handleDualClick() {
    setIsMmActive(false);
    setIsDualActive(true);
    setIsZoneActive(false);
    props.handleSearch(true);
    props.handleClose();
  }

  function handleZoneClick() {
    setIsMmActive(false);
    setIsDualActive(false);
    setIsZoneActive(true);
    props.handleSearch(true);
    props.handleClose();
  }

  function handleStopClick() {
    setIsMmActive(false);
    setIsDualActive(false);
    setIsZoneActive(false);
    props.handleSearch(false);
    props.handleClose();
  }
  
  return (
    <div className={'net' + (props.isVisible ? " net_visible" : "")} onClick={props.handleClose}>
      <div className='net__container'>
        <ul className='net__items'>
          <li className='net__item' onClick={handleMmClick}>
            <img className='net__item-icon' src={mmIcon} alt="иконка"/>
            <p className={'net__item-text' + (isMmActive ? " net__item-text_active" : "")}>Соревновательный режим</p>
          </li>
          <li className='net__item' onClick={handleDualClick}>
            <img className='net__item-icon' src={dualIcon} alt="иконка"/>
            <p className={'net__item-text' + (isDualActive ? " net__item-text_active" : "")}>Напарники</p>
          </li>
          <li className='net__item' onClick={handleZoneClick}>
            <img className='net__item-icon' src={zoneIcon} alt="иконка"/>
            <p className={'net__item-text' + (isZoneActive ? " net__item-text_active" : "")}>Запретная зона</p>
          </li>
        </ul>
        <div className='net__bottom'>
          <p className='net__bottom-text' onClick={props.handleClose} >Найти игрока</p>
          <p className={(isMmActive || isDualActive || isZoneActive) ? "net__bottom-text" : "net__bottom-text_unvisible"} onClick={handleStopClick} >Остановить поиск</p>
        </div>
      </div>
    </div>  
  )
}

export default Net;