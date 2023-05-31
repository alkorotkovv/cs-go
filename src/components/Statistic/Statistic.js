import React  from 'react';
import statisticLogo from '../../images/statisticLogo.png';
import infoIcon from '../../images/info-icon.png';
import Select from '../Select/Select';


function Statistic(props) {
  
  return (
    <div className={`statistic` + (props.isVisible ? " panel_visible":"") + " panel"}>
      <div className='statistic__header'>
        <img className='statistic__header-logo' src={statisticLogo} alt="logo" draggable="false"/>
        <h1 className='statistic__header-title'>СТАТИСТИКА CS:GO 360</h1>
        <p className='statistic__header-subtitle'>Подписка неактивна - подпшитесь, чтобы собирать статистику новых игр</p>
      </div>
      <div className='statistic__main'>
        <div className='statistic__selects'>
          <Select 
            class="setting"
            title={"Последние 14 дн."}
            options={[
              {
                name:"Последние 14 дн.",
                titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                  
                }
              },
              {
                name: "Последние 30 дн.", 
                titled: true,
                handle: (arg) => {
                  
                }
              },
              {
                name: "Последние 90 дн.", 
                titled: true,
                handle: (arg) => {
                  
                }
              },
              {
                name: "Всё время", 
                titled: true,
                handle: (arg) => {
                  
                }
              }
            ]}
            minwidth="290px"
            isBackground={true}
          />
          <Select 
            class="setting"
            title={"Все 5 на 5"}
            options={[
              {
                name:"Все 5 на 5",
                titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                  
                }
              },
              {
                name: "Соревновательный премьер-режим", 
                titled: true,
                handle: (arg) => {
                  
                }
              },
              {
                name: "Сорев. (обезвреживание бомбы)", 
                titled: true,
                handle: (arg) => {
                  
                }
              },
              {
                name: "Все «Напарники»", 
                titled: true,
                handle: (arg) => {
                  
                }
              },
              {
                name: "Напарники (передовая)", 
                titled: true,
                handle: (arg) => {
                  
                }
              },
              {
                name: "Напарники (карты резерва)", 
                titled: true,
                handle: (arg) => {
                  
                }
              }
            ]}
            minwidth="290px"
            isBackground={true}
          />
        </div>
        <div className='statistic__blocks'>
          <div className='statistic__block statistic__block_1'></div>
          <div className='statistic__block statistic__block_2'>
            <img className='statistic__block-logo' src={infoIcon} alt="logo" draggable="false"/>
            <p className='statistic__block-text'>Статистика по указанным режимам и времени не найдена.Измените фильтры или сыграйте, чтобы появились данные.</p>
          </div>
          <div className='statistic__block statistic__block_3'></div>
          <div className='statistic__block statistic__block_4'></div>
          <div className='statistic__block statistic__block_5'></div>
          <div className='statistic__block statistic__block_6'></div>
        </div>
      </div>
    </div>
  )
}

export default Statistic;