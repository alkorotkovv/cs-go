import React  from 'react';
import Select from '../../../Select/Select';
import { inventoryArray } from '../../../../utils/constants';
import Gun from '../../../Gun/Gun';

function Equipment(props) {

  const [array, setArray] = React.useState(props.array);
  const [sortArray, setSortArray] = React.useState(array);
  const [sortType, setSortType] = React.useState("По качеству");

  const [isAll, setIsAll] = React.useState(true);
  const [isMelee, setIsMelee] = React.useState(false);
  const [isPistol, setIsPistol] = React.useState(false);
  const [isPP, setIsPP] = React.useState(false);
  const [isRifle, setIsRifle] = React.useState(false);
  const [isHeavy, setIsHeavy] = React.useState(false);
  const [isAgent, setIsAgent] = React.useState(false);
  const [isGlove, setIsGlove] = React.useState(false);
  const [isMusic, setIsMusic] = React.useState(false);

  React.useEffect(() => {
    switch (sortType) {
      case "По качеству":
        setSortArray(array);
        break;
      case "По новизне":
        setSortArray(array.slice().sort((a, b) => {return new Date(b.date) - new Date(a.date)}));
        break;
      case "По алфавиту":
        setSortArray(array.slice().sort((a, b) => a.weapon + a.name > b.weapon + b.name? 1 : -1));
        break;
      default:
        setSortArray(array);
    }
  }, [array, sortType])

  //Обработчики режимов игры
  function handleAllClick() {
   setArray(props.array.filter((e) => (
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
    setArray(props.array.filter((e) => (
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
    setArray(props.array.filter((e) => (
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
    setArray(props.array.filter((e) => (
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
    setArray(props.array.filter((e) => (
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
    setArray(props.array.filter((e) => (
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
    setArray(props.array.filter((e) => (
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
    setArray(props.array.filter((e) => (
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
    setArray(props.array.filter((e) => (
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
            class="sort-equipment"
            options={[
              {
                name: "По новизне",
                titled: true,         //Параметр указывает устанавливать ли текст опции в заголовок селекта
                handle: (arg) => {    //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                   setSortType(arg.name)
                }
              },
              {
                name: "По качеству", 
                titled: true,
                handle: (arg) => {
                  setSortType(arg.name)
                }
              },
              {
                name: "По алфавиту", 
                titled: true,
                handle: (arg) => {
                  setSortType(arg.name)
                }
              },
              {
                name: "По ячейке", 
                titled: true,
                handle: (arg) => {
                  setSortType(arg.name)
                }
              },
              {
                name: "По коллекции", 
                titled: true,
                handle: (arg) => {
                  setSortType(arg.name)
                }
              },
              {
                name: "По использованию", 
                titled: true,
                handle: (arg) => {
                  setSortType(arg.name)
                }
              }
            ]}
            title="По качеству"
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
                  sortArray.map((element, index) => 
                    <Gun 
                      key={index}
                      object={element}
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