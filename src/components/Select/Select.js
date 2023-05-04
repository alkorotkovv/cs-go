import React from 'react';
import arrowDown from '../../images/arr_down.png';

function Select(props) {

  let select = React.useRef("");

  const [isOpen, setIsOpen] = React.useState(false);
  const [title, setTitle] = React.useState(props.options[0].name);

  React.useEffect(() => {    
    select.current.style.cssText = `--minwidth: ${props.minwidth} `
    document.addEventListener("click", handleClick);
      return () => { document.removeEventListener("click", handleClick)};
  })

  //Обработчик клика по экрану
  function handleClick(evt) {
    //console.log(document.querySelector(`select__options`))
    if (document.querySelector(`.select-${props.class}__options`).classList.contains(`select-${props.class}__options_visible`)) {
      setIsOpen(false)
      //document.querySelector('.select__options').classList.remove('select__options_visible')
    }      
    else if (evt.target.classList.contains(`select-${props.class}`) || evt.target.classList.contains(`select-${props.class}__title`) || evt.target.classList.contains(`select-${props.class}__arrow`) || evt.target.classList.contains(`select-${props.class}__header`)) {
      setIsOpen(true)
      //document.querySelector('.select__options').classList.add('select__options_visible')
    }
  }

  //Обработчик клика на опцию - передаем в handler этой опции сам объект этой опции (handle есть у каждой опции и передается пропсом в селект)
  function handleOptionClick() {
    if (this.titled)
      setTitle(this.name);
    this.handle(this);
  }
  
  return (
    <div className={"select" + (isOpen ? " select_active" : "") + ` select-${props.class}` + (props.isBackground ? "" : " select_transparent")} id={`select-${props.class}`} ref={select}>
      <div className={`select__header select-${props.class}__header`} >
        <p className={`select__title select-${props.class}__title`}>{title}</p>
        <img className={`select__arrow select-${props.class}__arrow`} src={arrowDown} alt="arrow" draggable="false"/>
      </div>
      <ul className={`select__options select-${props.class}__options` + (isOpen ? ` select__options_visible select-${props.class}__options_visible` : "")}>
        {
        props.options.map((element, index) => 
        (
          <li className={`select__option select-${props.class}_option`} key={index} onClick={handleOptionClick.bind(element)}><p className='select__option-text'>{element.name}</p></li>
        )
        )
        } 
      </ul>
    </div>
  )
}

export default Select;