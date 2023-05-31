import React  from 'react';
import statisticLogo from '../../images/statisticLogo.png';


function Statistic(props) {
  
  return (
    <div className={`statistic` + (props.isVisible ? " panel_visible":"") + " panel"}>
      <div className='statistic__header'>
        <img className='statistic__header-logo' src={statisticLogo} alt="logo" draggable="false"/>
        <h1 className='statistic__header-title'>СТАТИСТИКА CS:GO 360</h1>
        <p className='statistic__header-subtitle'>Подписка неактивна - подпшитесь, чтобы собирать статистику новых игр</p>
      </div>
    </div>
  )
}

export default Statistic;