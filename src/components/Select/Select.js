import React from 'react';
import arrowDown from '../../images/arr_down.png';

function Select(props) {

  const selectRef = React.useRef(null);

  const [isOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = React.useState(props.title || props.options[0].name);

  React.useEffect(() => {    
    selectRef.current.style.setProperty('--minwidth', props.minwidth);
    document.addEventListener("click", handleClick);
      return () => { document.removeEventListener("click", handleClick)};
  })

  //Обработчик клика по экрану
  function handleClick(evt) {
    selectRef.current.contains(evt.target) && !isOpen ? setIsOpen(true) : setIsOpen(false);
    /*
    if (document.querySelector(`.select-${props.class}__options`).classList.contains(`select-${props.class}__options_visible`)) {
      setIsOpen(false)
      //document.querySelector('.select__options').classList.remove('select__options_visible')
    }      
    else if (evt.target.classList.contains(`select-${props.class}`) || evt.target.classList.contains(`select-${props.class}__title`) || evt.target.classList.contains(`select-${props.class}__arrow`) || evt.target.classList.contains(`select-${props.class}__header`)) {
      setIsOpen(true)
      //document.querySelector('.select__options').classList.add('select__options_visible')
    }
    */
  }

  //Обработчик клика на опцию - передаем в handler этой опции сам объект этой опции (handle есть у каждой опции и передается пропсом в селект)
  function handleOptionClick() {
    if (this.titled)
      setTitle(this.name);
    this.handle(this);
  }
  
  return (
    <div className={"select" + (isOpen ? " select_active" : "") + (props.isBackground ? "" : " select_transparent")}  ref={selectRef}>
      <div className="select__header">
        <p className={"select__title" + (props.class ==="small" ? " select__title_small" : "")}>{title}</p>
        <img className="select__arrow" src={arrowDown} alt="arrow" draggable="false"/>
      </div>
      <ul className={`select__options` + (isOpen ? ` select__options_visible` : "")}>
        {
        props.options.map((element, index) => 
          (
            <li className="select__option" key={index} onClick={handleOptionClick.bind(element)}><p className='select__option-text'>{element.name}</p></li>
          )
        )
        } 
      </ul>
    </div>
  )
}

export default Select;