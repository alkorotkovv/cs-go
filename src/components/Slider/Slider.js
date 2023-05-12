import React from 'react';

function Slider(props) {

  const sliderRef = React.useRef(null);
  const [value, setValue] = React.useState(props.value);

  
  React.useEffect(() => {
    sliderRef.current.style.setProperty('--min', props.min);
    sliderRef.current.style.setProperty('--max', props.max);
  })

  //Передаем value при любом изменении
  React.useEffect(() => {
    sliderRef.current.style.setProperty('--value', value || 0);
  },[value])
   
  //Обработчик сдвига ползунка
  function handleChange(evt) {
    setValue(evt.target.value);
  }

  //Обработчик ввода значения вручную
  function handleValueChange(evt) {
    setValue(evt.target.value);
  }

  
  return (
    <div className="slider" ref={sliderRef}>
        <input className="slider__track slider__progress"  type="range" id="slider" min={props.min} max={props.max} step={props.step} value={value || 0} onChange={handleChange}/>
        <input className="slider__value"  type="text" id="value" value={(value || 0) + props.unit} onChange={handleValueChange}/>
    </div>
  )
}

export default Slider;