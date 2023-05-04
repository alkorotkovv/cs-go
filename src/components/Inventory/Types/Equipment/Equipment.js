import React  from 'react';
import Select from '../../../Select/Select';
import { inventoryArray } from '../../../../utils/constants';
import Gun from '../../../Gun/Gun';

function Equipment(props) {

  const [array, setArray] = React.useState(inventoryArray.filter((e) => (
    e.type === "Bomb" || 
    e.type === "Knife" || 
    e.type === "Pistol" || 
    e.type === "PP" || 
    e.type === "Rifle" || 
    e.type === "Shotgun" || 
    e.type === "Machinegun" || 
    e.type === "Agent" ||
    e.type === "Gloves" ||
    e.type === "Music")));

  const [isAll, setIsAll] = React.useState(true);
  const [isMelee, setIsMelee] = React.useState(false);
  const [isPistol, setIsPistol] = React.useState(false);
  const [isPP, setIsPP] = React.useState(false);
  const [isRifle, setIsRifle] = React.useState(false);
  const [isHeavy, setIsHeavy] = React.useState(false);
  const [isAgent, setIsAgent] = React.useState(false);
  const [isGlove, setIsGlove] = React.useState(false);
  const [isMusic, setIsMusic] = React.useState(false);

  //Обработчики режимов игры
  function handleAllClick() {
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
      e.type === "Music")));
    setIsAll(true);
    setIsMelee(false);
    setIsPistol(false);
    setIsPP(false);
    setIsRifle(false);
    setIsHeavy(false);
    setIsAgent(false);
    setIsGlove(false);
    setIsMusic(false);
  }

  function handleMeleeClick() {
    setArray(inventoryArray.filter((e) => (
      e.type === "Bomb" || 
      e.type === "Knife" )));
    setIsAll(false);
    setIsMelee(true);
    setIsPistol(false);
    setIsPP(false);
    setIsRifle(false);
    setIsHeavy(false);
    setIsAgent(false);
    setIsGlove(false);
    setIsMusic(false);
  }

  function handlePistolClick() {
    setArray(inventoryArray.filter((e) => (
      e.type === "Pistol" )));
    setIsAll(false);
    setIsMelee(false);
    setIsPistol(true);
    setIsPP(false);
    setIsRifle(false);
    setIsHeavy(false);
    setIsAgent(false);
    setIsGlove(false);
    setIsMusic(false);
  }

  function handlePPClick() {
    setArray(inventoryArray.filter((e) => (
      e.type === "PP" )));
    setIsAll(false);
    setIsMelee(false);
    setIsPistol(false);
    setIsPP(true);
    setIsRifle(false);
    setIsHeavy(false);
    setIsAgent(false);
    setIsGlove(false);
    setIsMusic(false);
  }

  function handleRifleClick() {
    setArray(inventoryArray.filter((e) => (
      e.type === "Rifle" )));
    setIsAll(false);
    setIsMelee(false);
    setIsPistol(false);
    setIsPP(false);
    setIsRifle(true);
    setIsHeavy(false);
    setIsAgent(false);
    setIsGlove(false);
    setIsMusic(false);
  }

  function handleHeavyClick() {
    setArray(inventoryArray.filter((e) => (
      e.type === "Shotgun" || 
      e.type === "Machinegun" )));
    setIsAll(false);
    setIsMelee(false);
    setIsPistol(false);
    setIsPP(false);
    setIsRifle(false);
    setIsHeavy(true);
    setIsAgent(false);
    setIsGlove(false);
    setIsMusic(false);
  }

  function handleAgentClick() {
    setArray(inventoryArray.filter((e) => (
      e.type === "Agent" )));
    setIsAll(false);
    setIsMelee(false);
    setIsPistol(false);
    setIsPP(false);
    setIsRifle(false);
    setIsHeavy(false);
    setIsAgent(true);
    setIsGlove(false);
    setIsMusic(false);
  }

  function handleGloveClick() {
    setArray(inventoryArray.filter((e) => (
      e.type === "Gloves" )));
    setIsAll(false);
    setIsMelee(false);
    setIsPistol(false);
    setIsPP(false);
    setIsRifle(false);
    setIsHeavy(false);
    setIsAgent(false);
    setIsGlove(true);
    setIsMusic(false);
  }

  function handleMusicClick() {
    setArray(inventoryArray.filter((e) => (
      e.type === "Music" )));
    setIsAll(false);
    setIsMelee(false);
    setIsPistol(false);
    setIsPP(false);
    setIsRifle(false);
    setIsHeavy(false);
    setIsAgent(false);
    setIsGlove(false);
    setIsMusic(true);
  }

  
  return (
    <div className={"type type_official" + (props.isVisible ? " type_visible" : " ")}>
      <ul className='type__regyms type__regyms_inventory'>
        <li className={"type__regym" + (isAll ? " type__regym_active" : " ")} onClick={handleAllClick}><p className='type__regym-text'>Вся экипировка</p></li>
        <li className={"type__regym" + (isMelee ? " type__regym_active" : " ")} onClick={handleMeleeClick}><p className='type__regym-text'>Оружие ближнего боя</p></li>
        <li className={"type__regym" + (isPistol ? " type__regym_active" : " ")} onClick={handlePistolClick}><p className='type__regym-text'>Пистолет</p></li>
        <li className={"type__regym" + (isPP ? " type__regym_active" : " ")} onClick={handlePPClick}><p className='type__regym-text'>ПП</p></li>
        <li className={"type__regym" + (isRifle ? " type__regym_active" : " ")} onClick={handleRifleClick}><p className='type__regym-text'>Винтовка</p></li>
        <li className={"type__regym" + (isHeavy ? " type__regym_active" : " ")} onClick={handleHeavyClick}><p className='type__regym-text'>Тяжёлое</p></li>
        <li className={"type__regym" + (isAgent ? " type__regym_active" : " ")} onClick={handleAgentClick}><p className='type__regym-text'>Агенты</p></li>
        <li className={"type__regym" + (isGlove ? " type__regym_active" : " ")} onClick={handleGloveClick}><p className='type__regym-text'>Перчатки</p></li>
        <li className={"type__regym" + (isMusic ? " type__regym_active" : " ")} onClick={handleMusicClick}><p className='type__regym-text'>Набор музыки</p></li>
        <div className='type__select'>
          <Select 
            class="bots"
            options={[
              {
                name: "По новизне",
                titled: true,         //Параметр указывает устанавливать ли текст опции в заголовок селекта
                handle: (arg) => {    //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                  
                }
              },
              {
                name: "По качеству", 
                titled: true,
                handle: (arg) => {
                  
                }
              },
              {
                name: "По алфавиту", 
                titled: true,
                handle: (arg) => {
                  
                }
              },
              {
                name: "По ячейке", 
                titled: true,
                handle: (arg) => {
                  
                }
              },
              {
                name: "По коллекции", 
                titled: true,
                handle: (arg) => {
                  
                }
              },
              {
                name: "По использованию", 
                titled: true,
                handle: (arg) => {
                  
                }
              }
            ]}
            minwidth="164px"
            isBackground={false}
          />
        </div>
      </ul>
      <div className='type__main'>
        <div className='regym__main-wrapper'>
          <div className='regym__main regym__main_inventory'>
            <div className='guns'>
              <ul className="regym__guns">
                {
                  array.map((element, index) => 
                    <Gun 
                      key={index}
                      image={element.image}
                      weapon={element.weapon}
                      name={element.name}
                      rarity={element.rarity}
                      category={element.category}
                      type={element.type}
                    />
                  )
                }  
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Equipment;