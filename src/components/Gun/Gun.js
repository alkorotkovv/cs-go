import { click } from '@testing-library/user-event/dist/click';
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

  function handleOptionClick() {
    console.log("Осмотреть")
  }

  return (
    <li className={`gun`} ref={gunRef}>
      <div className={`gun__image-wrapper gun__image-wrapper-${props.object.name}` + 
        ((props.object.rarity === "Covert") ? " gun__image-wrapper_red" : "") +
        ((props.object.rarity === "Classified") ? " gun__image-wrapper_pink" : "") +
        ((props.object.rarity === "Restricted") ? " gun__image-wrapper_purple" : "") +
        ((props.object.rarity === "Mil-Spec") ? " gun__image-wrapper_blue" : "") +
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
      <div className={`gun__menu` + (isMenuOpen ? ` gun__menu_visible` : "")}>
        <ul className={`gun__options` + (isMenuOpen ? ` gun__options_visible` : "")}>
          <li className={`gun__option`} onClick={handleOptionClick}><p className='gun__option-text'>Осмотреть</p></li>
          <li className={`gun__option`} onClick={handleOptionClick}><p className='gun__option-text'>Заменить для обеих команд</p></li>
          <li className={`gun__option`} onClick={handleOptionClick}><p className='gun__option-text'>Заменить для спецназа</p></li>
          <li className={`gun__option`} onClick={handleOptionClick}><p className='gun__option-text'>Заменить для террористов</p></li>
          <li className={`gun__option`} onClick={handleOptionClick}><p className='gun__option-text'>Изменить случайный выбор</p></li>
          <li className={`gun__option`} onClick={handleOptionClick}><p className='gun__option-text'>Переименовать</p></li>
          <li className={`gun__option`} onClick={handleOptionClick}><p className='gun__option-text'>Нанести наклейку</p></li>
          <li className={`gun__option`} onClick={handleOptionClick}><p className='gun__option-text'>Поскрести наклейку</p></li>
          <li className={`gun__option`} onClick={handleOptionClick}><p className='gun__option-text'>Использовать в контракте</p></li>
          <li className={`gun__option`} onClick={handleOptionClick}><p className='gun__option-text'>Поместить в хранилище</p></li>
          <li className={`gun__option`} onClick={handleOptionClick}><p className='gun__option-text'>Продать на Торговой площадке</p></li>
        </ul>
      </div>
    </li>
  )
}

export default Gun;