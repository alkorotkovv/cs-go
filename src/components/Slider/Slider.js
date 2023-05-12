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
    sliderRef.current.style.setProperty('--value', evt.target.value);
  }

  
  return (
    <div className="slider" ref={sliderRef}>
        <input className="slider__track slider__progress"  type="range" id="slider" min="0" max="100" value={value} onChange={handleChange}/>
        <div className="slider__value">{value}</div>
    </div>
  )
}

export default Slider;