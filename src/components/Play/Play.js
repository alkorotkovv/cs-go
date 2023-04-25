import React  from 'react';
import Select from '../Select/Select';

function Play(props) {
  
  return (
    <div className={"play" + (props.isVisible ? " play_visible" : "")}>
      <h1 className='play__title'>ИГРАТЬ</h1>
      <div className='play__select'>
      <Select 
        options={["Официальный подбор игр", "Тренировка с ботами", "Инструктаж", "Карты из мастерской", "Список серверов сообщества"]} />
      </div>
    </div>
  )
}

export default Play;