import React from 'react';
import arrowDown from '../../images/arr_down.png';

function Select(props) {

  //this.style.setProperty("--translate", `400px`)
  let select = React.useRef();

  //select.style.cssText = "--translate: `400px`";

  

  console.log(select.current)

  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {    
    select.current.style.cssText = `--minwidth: ${props.minwidth} `
    document.addEventListener("click", handleClick);
      return () => { document.removeEventListener("click", handleClick)};
  }, [])

  //Обработчик клика по экрану
  function handleClick(evt) {
    if (document.querySelector('.select__options').classList.contains('select__options_visible')) {
      setIsOpen(false)
      //document.querySelector('.select__options').classList.remove('select__options_visible')
    }      
    else if (evt.target.classList.contains('select') || evt.target.classList.contains('select__title') || evt.target.classList.contains('select__arrow') || evt.target.classList.contains('select__header')) {
      setIsOpen(true)
      //document.querySelector('.select__options').classList.add('select__options_visible')
    }
  }
  
  return (
    <div className={"select" + (isOpen ? " select_active" : "")} id='select' ref={select}>
      <div className='select__header' >
        <h1 className='select__title'>{props.title}</h1>
        <img className='select__arrow' src={arrowDown} alt="arrow"/>
      </div>
      <ul className={"select__options" + (isOpen ? " select__options_visible" : "")}>
        {
        props.options.map((element, index) => 
        (
          <li className='select__option' key={index} onClick={element.handle}><p className='select__option-text'>{element.name}</p></li>
        )
        )
        } 
      </ul>
    </div>


  )
}

export default Select;