import React  from 'react';

function MapBig(props) {

  const [isChecked, setIsChecked] = React.useState(false);
  const [logoNow, setLogoNow] = React.useState(props.maps[0].logo);
  const [isAnim, setIsAnim] = React.useState(false);
  const intervalAnimRef = React.useRef(null);
  let i;  
  let period = randomIntFromInterval(7, 14) * 1000;

  //Функция получения рандомного числа из интервала
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  

  //Эффект для плавной смены картинок на фоне
  React.useEffect(() => {
    intervalAnimRef.current = setInterval( Animation, period );
    console.log("Смонтировали")

    return(() => {
        console.log("Размонтировали")
        clearInterval(intervalAnimRef.current)
    })
  })

//Анимация для плавной смены картинок на фоне
  function Animation() {
    if (i < props.maps.length - 1)
      i = i + 1;
    else 
      i = 0;

    setLogoNow(props.maps[i].logo);

    setTimeout(function() {
      setIsAnim(true);
    }, period-1500);

    setTimeout(function() {
      setIsAnim(false);
    }, period+1500)

    console.log(period)
    console.log("Анимируется задний фон биг-мап")
  }

  function handleClick() {
    setIsChecked(!isChecked);
  }


  return (
    <li className={"map-big" + (isChecked ? " map-big_checked" : " ")} onClick={handleClick}>
      <img className={"map-big__logo" + 
                     (isChecked && !isAnim ? " map-big__logo_checked" : " ") + 
                     (isChecked && isAnim ? " map-big__logo_checked map-big__logo_checked-anim" : " ") +
                     (!isChecked && isAnim ? " map-big__logo_anim" : "")} 
        src={logoNow} alt="logo" draggable="false"/>
      {
      /*
      <img className="map-big__logo map-big__logo_back" src={premier} alt="logo"/>
      
        props.maps.map((element, index) => 
          <img className={"map-big__logo" + ` map-big__logo_${index}`} src={isShow} alt="logo"/>
        )
      */
      }
      <ul className='map-big__list'>
        {
          props.maps.map((element, index) => 
            <li key={index} className='map-big__item'><img className='map-big__icon' src={element.icon} alt="icon" draggable="false"/></li>
          )
        }
      </ul>
      <p className='map-big__title'>{props.name}</p>
      <div className={"map-big__checkbox" + (isChecked ? " map-big__checkbox_visible" : " ") + (props.isCheckable ? " " : " map-big__checkbox_unvisible")}></div>
    </li>
  )
  
}

export default MapBig;