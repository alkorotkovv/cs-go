import React  from 'react';
import infoIcon from '../../../../images/info-icon.png';

function Download(props) {
  
  return (
    <div className={"type type_download" + (props.isVisible ? " type_visible" : " ")}>
      <div className='type__main'>
        <div className='regym__main-wrapper'>
          <img className='download__logo' src={infoIcon} alt="logo" draggable="false"/>
          <p className='download__text'>Не загружен ни один соревновательный матч. Вы&nbsp;можете загрузить матч из раздела «Ваши матчи»</p>
        </div>
      </div>
    </div>
  )
}

export default Download;