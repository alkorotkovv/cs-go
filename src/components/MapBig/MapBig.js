import React  from 'react';
import competitiveIcon from '../../images/csgo_map_icon.png';
import timeIcon from '../../images/map_time_icon.png';

function MapBig(props) {

  console.log(props);

  const [isChecked, setIsChecked] = React.useState(false);
  const [isShow, setIsShow] = React.useState(props.maps[0].logo);

  React.useEffect(() => {
    let i = 0;
    setInterval(function() {
      if (i < props.maps.length - 1)
        i = i + 1;
      else 
        i = 0;
      setIsShow(props.maps[i].logo);
      console.log(i);
    }, 3000)
  }, [])

  function handleClick() {
    setIsChecked(!isChecked);
  }


  return (
    <li className={"map-big" + (isChecked ? " map-big_checked" : " ")} onClick={handleClick}>
      <img className="map-big__logo" src={isShow} alt="logo"/>
      
      {/*
        props.maps.map((element, index) => 
          <img className={"map-big__logo" + ` map-big__logo_${index}`} src={isShow} alt="logo"/>
        )
    */}
      <ul className='map-big__list'>
        {
          props.maps.map((element, index) => 
            <li key={index} className='map-big__item'><img className='map-big__icon' src={element.icon} alt="icon"/></li>
          )
        }
      </ul>
      <p className='map-big__title'>{props.name}</p>
    </li>
  )
  
}

export default MapBig;