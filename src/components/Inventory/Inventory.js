import React  from 'react';
import Panel from '../Panel/Panel';
import Select from '../Select/Select';
import loop from '../../images/loop.png';
import link from '../../images/link.png';

import All from './Types/All/All';
import Equipment from './Types/Equipment/Equipment';
import Stickers from './Types/Stickers/Stickers';
import Containers from './Types/Containers/Containers';
import Trophies from './Types/Trophies/Trophies';

import { inventoryArray } from '../../utils/constants';

function Inventory(props) {

  const [array, setArray] = React.useState(inventoryArray);

  const [isAll, setIsAll] = React.useState(true);
  const [isEquipment, setIsEquipment] = React.useState(false);
  const [isStickers, setIsStickers] = React.useState(false);
  const [isContainers, setIsContainers] = React.useState(false);
  const [isTrophies, setIsTrophies] = React.useState(false);

  React.useEffect(() => {        
    document.addEventListener("keydown", handleKeyDown);
      return () => { document.removeEventListener("keydown", handleKeyDown)};
  });

  //Обработчик нажатия ESC
  function handleKeyDown(evt) {
    if (!props.isAnyPopupVisible)
    switch (evt.code) {
      case "Escape": props.handleMainClick(); break;
      default: ;
    }
  };
  
  return (
    <Panel title={"ИНВЕНТАРЬ"} name="inventory" isVisible={props.isVisible}>
      <div className='panel__header'>
        <Select 
          class="inventory"
          options={[
            {
              name:"Всё",
              titled: true,           //Параметр указывает устанавливать ли текст опции в заголовок селекта
              handle: (arg) => {      //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                setArray(inventoryArray)
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
                setArray(inventoryArray.filter((e) => (
                  e.type === "Bomb" || 
                  e.type === "Knife" || 
                  e.type === "Pistol" || 
                  e.type === "PP" || 
                  e.type === "Rifle" || 
                  e.type === "Shotgun" || 
                  e.type === "Machinegun" || 
                  e.type === "Agent" ||
                  e.type === "Gloves" ||
                  e.type === "Music")))
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
                setArray(inventoryArray.filter((e) => (
                  e.type === "Sticker" || 
                  e.type === "Patch" || 
                  e.type === "Graffiti")));
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
                setArray(inventoryArray.filter((e) => (
                  e.type === "Case" || 
                  e.type === "Capsule" || 
                  e.type === "GraffitiCase" || 
                  e.type === "SouvenirCase" || 
                  e.type === "Instrument")));
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
                setArray(inventoryArray.filter((e) => (
                  e.type === "Medal" || 
                  e.type === "Music")));
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
          <a className='inventory__header-text' href="https://steamcommunity.com/market/" target="_blank" rel='noreferrer'>Торговая площадка</a>
        </div>
      </div>
      { isAll ? <All isVisible={isAll} array={array} handleInspectClick={props.handleInspectClick}/> : <></>}
      { isEquipment ? <Equipment isVisible={isEquipment} array={array} handleInspectClick={props.handleInspectClick}/> : <></>}
      { isStickers ? <Stickers isVisible={isStickers} array={array} handleInspectClick={props.handleInspectClick}/> : <></>}
      { isContainers ? <Containers isVisible={isContainers} array={array} handleInspectClick={props.handleInspectClick}/> : <></>}
      { isTrophies ? <Trophies isVisible={isTrophies} array={array} handleInspectClick={props.handleInspectClick}/> : <></>}
    </Panel>
  )
}

export default Inventory;