import React  from 'react';

function Gun(props) {

  const gunRef = React.useRef(null);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  React.useEffect(() => {        
    document.addEventListener("click", handleClick);
      return () => { document.removeEventListener("click", handleClick)};
  })

  //Обработчик клика по экрану
  function handleClick(evt) {
    gunRef.current.style.cssText = `--X: ${evt.clientX}px; --Y: ${evt.clientY}px`;
    gunRef.current.contains(evt.target) && !isMenuOpen ? setIsMenuOpen(true) : setIsMenuOpen(false)
  }

  //Обработчики клика по опциям в меню
  function handleOptionClick() {
    console.log("Осмотреть")
    props.handleInspectClick(props.object);
  }

  return (
    <li className={`gun`} ref={gunRef}>
      <div className={`gun__image-wrapper gun__image-wrapper-${props.object.name}` + 
        ((props.object.rarity === "Covert") ? " gun__image-wrapper_covert" : "") +
        ((props.object.rarity === "Classified") ? " gun__image-wrapper_classified" : "") +
        ((props.object.rarity === "Restricted") ? " gun__image-wrapper_retricted" : "") +
        ((props.object.rarity === "Mil-Spec") ? " gun__image-wrapper_milspec" : "") +
        ((props.object.rarity === "Industrial") ? " gun__image-wrapper_industrial" : "") +
        ((props.object.rarity === "Consumer") ? " gun__image-wrapper_consumer" : "")     
        }>
        <img className={`gun__image`} src={props.object.image} alt="gun-img" draggable="false"/>
        <div className='gun__sides'>
          <div className={'gun__side gun__side_ct' + (props.object.isCT ? " gun__side_visible" : "")}></div>
          <div className={'gun__side gun__side_t' + (props.object.isT ? " gun__side_visible" : "")}></div>
        </div>
      </div>
      <p className='gun__weapon'>{props.object.weapon}</p>
      <p className='gun__name'>{props.object.name}</p>

      { isMenuOpen ? 
      <div className={`gun__menu` + (isMenuOpen ? ` gun__menu_visible` : "")}>
        <ul className={`gun__options` + (isMenuOpen ? ` gun__options_visible` : "")}>
          <li className={"gun__option" + 
            ((props.object.type !== "Bomb" && 
              props.object.type !== "Instrument" && 
              props.object.type !== "Music") ? " gun__option_visible" : "")} onClick={handleOptionClick}>
            <p className='gun__option-text'>Осмотреть</p>
          </li>
          <li className={"gun__option" + 
            ((
              props.object.type === "Agent" || 
              props.object.type === "Medal" || 
              props.object.type === "Music") ? " gun__option_visible" : "")} onClick={handleOptionClick}>
            <p className='gun__option-text'>Просмотреть ячейку инвентаря</p>
          </li>
          <li className={"gun__option" + 
            ((
              props.object.type === "Medal" && 
              !props.object.isCT) ? " gun__option_visible" : "")} onClick={handleOptionClick}>
            <p className='gun__option-text'>Отображать этот предмет</p>
          </li>
          <li className={"gun__option" + 
            ((
              props.object.type !== "Bomb" && 
              props.object.type !== "Instrument" && 
              props.object.type !== "Music" &&
              props.object.type !== "Medal" &&
              props.object.type !== "Patch" &&
              props.object.type !== "Sticker" &&
              props.object.canCT && 
              props.object.canT && 
              !props.object.isCT &&
              !props.object.isT ) ? " gun__option_visible" : "")} onClick={handleOptionClick}>
            <p className='gun__option-text'>Заменить для обеих команд</p>
          </li>
          <li className={"gun__option" + 
            ((
              props.object.type !== "Bomb" && 
              props.object.type !== "Instrument" && 
              props.object.type !== "Music" &&
              props.object.type !== "Medal" &&
              props.object.type !== "Patch" &&
              props.object.type !== "Sticker" &&
              props.object.canCT && 
              !props.object.isCT ) ? " gun__option_visible" : "")} onClick={handleOptionClick}>
            <p className='gun__option-text'>Заменить для спецназа</p>
          </li>
          <li className={"gun__option" + 
            ((
              props.object.type !== "Bomb" && 
              props.object.type !== "Instrument" && 
              props.object.type !== "Music" &&
              props.object.type !== "Medal" &&
              props.object.type !== "Patch" &&
              props.object.type !== "Sticker" &&
              props.object.canT && 
              !props.object.isT ) ? " gun__option_visible" : "")} onClick={handleOptionClick}>
            <p className='gun__option-text'>Заменить для террористов</p>
          </li>
          <li className={"gun__option" + 
            ((
              props.object.type !== "Bomb" && 
              props.object.type !== "Instrument" && 
              props.object.type !== "Music" &&
              props.object.type !== "Sticker" &&
              props.object.type !== "Patch") ? " gun__option_visible" : "")} onClick={handleOptionClick}>
            <p className='gun__option-text'>Изменить случайный выбор</p>
          </li>
          <li className={"gun__option" + 
            ((
              props.object.type !== "Gloves" && 
              props.object.type !== "Bomb" && 
              props.object.type !== "Instrument" && 
              props.object.type !== "Music" &&
              props.object.type !== "Agent" &&
              props.object.type !== "Medal" &&
              props.object.type !== "Sticker" &&
              props.object.type !== "Patch") ? " gun__option_visible" : "")} onClick={handleOptionClick}>
            <p className='gun__option-text'>Переименовать</p>
          </li>
          <li className={"gun__option" + 
            ((
              props.object.type === "Agent" || 
              props.object.type === "Patch") ? " gun__option_visible" : "")} onClick={handleOptionClick}>
            <p className='gun__option-text'>Нанести нашивку</p>
          </li>
          <li className={"gun__option" + 
            ((
              props.object.type !== "Gloves" && 
              props.object.type !== "Knife" && 
              props.object.type !== "Bomb" && 
              props.object.type !== "Instrument" && 
              props.object.type !== "Music" &&
              props.object.type !== "Agent" &&
              props.object.type !== "Medal" &&
              props.object.type !== "Patch") ? " gun__option_visible" : "")} onClick={handleOptionClick}>
            <p className='gun__option-text'>Нанести наклейку</p>
          </li>
          <li className={"gun__option" + 
            ((
              props.object.type !== "Gloves" && 
              props.object.type !== "Knife" && 
              props.object.type !== "Bomb" && 
              props.object.type !== "Instrument" && 
              props.object.type !== "Music" &&
              props.object.type !== "Agent" &&
              props.object.type !== "Medal" &&
              props.object.type !== "Sticker" &&
              props.object.type !== "Patch") ? " gun__option_visible" : "")} onClick={handleOptionClick}>
            <p className='gun__option-text'>Поскрести наклейку</p>
          </li>
          <li className={"gun__option" + 
            ((
              props.object.rarity !== "Covert" &&
              props.object.type !== "Bomb" && 
              props.object.type !== "Instrument" && 
              props.object.type !== "Music" &&
              props.object.type !== "Agent" &&
              props.object.type !== "Medal" &&
              props.object.type !== "Sticker" &&
              props.object.type !== "Patch") ? " gun__option_visible" : "")} onClick={handleOptionClick}>
            <p className='gun__option-text'>Использовать в контракте</p>
          </li>
          <li className={"gun__option" + 
            ((
              props.object.type !== "Bomb" && 
              props.object.type !== "Instrument" && 
              props.object.type !== "Music" &&
              props.object.type !== "Medal") ? " gun__option_visible" : "")} onClick={handleOptionClick}>
            <p className='gun__option-text'>Поместить в хранилище</p>
          </li>
          <li className={"gun__option" + 
            ((
              props.object.type !== "Bomb" && 
              props.object.type !== "Instrument" && 
              props.object.type !== "Music" &&
              props.object.type !== "Medal") ? " gun__option_visible" : "")} onClick={handleOptionClick}>
            <p className='gun__option-text'>Продать на Торговой площадке</p>
          </li>
        </ul>
      </div> : <></> }   
      
    </li>
  )
}

export default Gun;

export const typesArray = [
  "Bomb",
  "Knife",
  "Pistol",
  "PP",
  "Rifle",
  "Shotgun",
  "Machinegun",
  "Agent",
  "Gloves",

  "Patch",
  "Sticker",
  "Graffiti",
  
  "Case",
  "Capsule",
  "GraffitiCase",
  "SouvenirCase",
  "Instrument",

  "Medal",
  "Music"
]