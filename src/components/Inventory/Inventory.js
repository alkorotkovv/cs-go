import React  from 'react';
import Panel from '../Panel/Panel';
import Select from '../Select/Select';
import loop from '../../images/loop.png';
import link from '../../images/link.png';

import All from './Types/All/All';
import Equipment from './Types/Equipment/Equipment';

function Inventory(props) {

  const [isAll, setIsAll] = React.useState(true)
  const [isEquipment, setIsEquipment] = React.useState(false)
  const [isStickers, setIsStickers] = React.useState(false)
  const [isContainers, setIsContainers] = React.useState(false)
  const [isTrophies, setIsTrophies] = React.useState(false)
  
  return (
    <Panel title={"ИНВЕНТАРЬ"} name="inventory" isVisible={props.isVisible}>
      <div className='panel__header'>
        <Select 
          class="play"
          options={[
            {
              name:"Всё",
              titled: true,           //Параметр указывает устанавливать ли текст опции в заголовок селекта
              handle: (arg) => {      //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                setIsAll(true);
                setIsEquipment(false);
                setIsStickers(false);
                setIsContainers(false);
                setIsTrophies(false);
              }
            },
            {
              name: "Экипировка",
              titled: true,
              handle: (arg) => {
                setIsAll(false);
                setIsEquipment(true);
                setIsStickers(false);
                setIsContainers(false);
                setIsTrophies(false);
              }
            },
            {
              name: "Наклейки, граффити и нашивки",
              titled: true,
              handle: (arg) => {
                setIsAll(false);
                setIsEquipment(false);
                setIsStickers(true);
                setIsContainers(false);
                setIsTrophies(false);
              }
            },
            {
              name: "Контейнеры и другое",
              titled: true,
              handle: (arg) => {
                setIsAll(false);
                setIsEquipment(false);
                setIsStickers(false);
                setIsContainers(true);
                setIsTrophies(false);
              }
            },
            {
              name: "Трофеи",
              titled: true,
              handle: (arg) => {
                setIsAll(false);
                setIsEquipment(false);
                setIsStickers(false);
                setIsContainers(false);
                setIsTrophies(true);
              }
            }
          ]}
          minwidth="324px"
          isBackground={true}
        />
        <div className="inventory__header-item"><p className='inventory__header-text'>Снаряжение</p></div>
        <div className="inventory__header-item"><p className='inventory__header-text'>Контракт обмена</p></div>
        <div className='inventory__line'></div>
        <div className="inventory__header-item">
          <img className="inventory__header-image" src={loop} alt="loop" draggable="false"/>
          <p className='inventory__header-text'>Поиск предметов</p>
        </div>
        <div className="inventory__header-item">
          <img className="inventory__header-image" src={link} alt="link" draggable="false"/>
          <p className='inventory__header-text'>Торговая площадка</p>
        </div>
      </div>
      { isAll ? <All isVisible={isAll} /> : <></>}
      { isEquipment ? <Equipment isVisible={isEquipment} /> : <></>}
    </Panel>
  )
}

export default Inventory;