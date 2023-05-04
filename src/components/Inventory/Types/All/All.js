import React  from 'react';

function All(props) {

  const [isAll, setIsAll] = React.useState(true)
  const [isDual, setIsDual] = React.useState(false)
  const [isUsual, setIsUsual] = React.useState(false)
  const [isDeathmatch, setIsDeathmatch] = React.useState(false)
  const [isMilitary, setIsMilitary] = React.useState(false)
  const [isZone, setIsZone] = React.useState(false)

  //Обработчики режимов игры
  function handleAllClick() {
    /*
    setIsCompetitive(true);
    setIsDual(false);
    setIsUsual(false);
    setIsDeathmatch(false);
    setIsMilitary(false);
    setIsZone(false);
    */
  }

  
  return (
    <div className={"type type_official" + (props.isVisible ? " type_visible" : " ")}>
      <ul className='type__regyms'>
        <li className={"type__regym" + (isAll ? " type__regym_active" : " ")} onClick={handleAllClick}><p className='type__regym-text'>Всё</p></li>
      </ul>
      <div className='type__main'>

      </div>
    </div>
  )
}

export default All;