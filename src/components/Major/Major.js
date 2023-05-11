import React  from 'react';
import championLogo from '../../images/championLogo.png';

function Major(props) {

  const [isChecked, setIsChecked] = React.useState(false);

  function handleClick() {
    setIsChecked(!isChecked);
  }


  return (
    <li className={"major" + (isChecked ? " major_checked" : " ")} onClick={handleClick}>
      <p className='major__title'>{props.object.operator.name}</p>
      <div className='major__card'>
        <img className="major__background" src={props.object.operator.background} alt="back" draggable="false"/>      
        <img className="major__operator-logo" src={props.object.operator.logo} alt="operator" draggable="false"/>
        <img className='major__winner-logo' src={props.object.top[0].logo} alt="winner" draggable="false"/>
        <img className='major__champion' src={championLogo} alt="winner" draggable="false"/>
        <p className='major__winner-text'>{props.object.top[0].name}</p>
        <ul className='major__teams'>
          {
            props.object.top.slice(1).map((element, index) => 
            <li className='major__team' key={index}>
              <img className='major__team-logo' src={element.logo} alt="winner" draggable="false"/>
              <p className='major__team-position'>{element.place}</p>
              <p className='major__team-name'>{element.name}</p>
            </li>
          )
          }
        </ul>
      </div>      
    </li>
  )
}

export default Major;