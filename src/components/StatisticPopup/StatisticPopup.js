import React  from 'react';
import statisticLogo from '../../images/statisticLogo.png';
import statisticLine from '../../images/statistic-line.jpg';
import Popup from '../Popup/Popup';


function StatisticPopup(props) {
  
  return (
    <Popup name="statistic-popup" isVisible={props.isVisible} handleClose={props.handleClose}>
      <div className='statistic-popup__container'>
        <div className='statistic-popup__main'>
          <div className='statistic-popup__header'>
            <img className='statistic-popup__header-logo' src={statisticLogo} alt="logo" draggable="false"/>
            <h1 className='statistic-popup__header-title'>СТАТИСТИКА CS:GO 360</h1>
            <p className='statistic-popup__header-subtitle'>Узнай больше о своих играх в режимах «Соревновательный» и «Напарники». Статистика CS:GO 360 - это ежемесячная подписка.</p>
            <p className='statistic-popup__header-text'>Активировать ежемесячную подписку 81 руб / месяц</p>
          </div>
          <div className='statistic-popup__line'>
            <img className='statistic-popup__images' src={statisticLine} alt="line" draggable="false"/>
          </div>          
        </div>
        <div className='statistic-popup__bottom'>
          <button className='statistic-popup__button statistic-popup__button_green'>Подписаться</button>
          <button className='statistic-popup__button' onClick={props.handleClose}>Закрыть</button>
        </div>
      </div>
    </Popup>
  )
}

export default StatisticPopup;