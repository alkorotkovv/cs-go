import React from 'react';

function Slider(props) {

  const sliderRef = React.useRef(null);
  const [value, setValue] = React.useState(0);

  
  React.useEffect(() => {
    sliderRef.current.style.setProperty('--min', 0);
    sliderRef.current.style.setProperty('--max', 100);
  })
   
  //Обработчик сдвига ползунка
  function handleChange(evt) {
    setValue(evt.target.value);
    sliderRef.current.style.setProperty('--value', evt.target.value || 0);
  }

  //Обработчик ввода значения вручную
  function handleValueChange(evt) {
    setValue(evt.target.value);
    sliderRef.current.style.setProperty('--value', evt.target.value || 0);
  }

  
  return (
    <div className="slider" ref={sliderRef}>
        <input className="slider__track slider__progress"  type="range" id="slider" min="0" max="100" value={value || 0} onChange={handleChange}/>
        <input className="slider__value"  type="text" id="value" value={value || 0} onChange={handleValueChange}/>
    </div>
  )
}

export default Slider;