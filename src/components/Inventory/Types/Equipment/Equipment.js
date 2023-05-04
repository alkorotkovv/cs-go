import React  from 'react';
import Select from '../../../Select/Select';

function Equipment(props) {

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
        <li className={"type__regym" + (isAll ? " type__regym_active" : " ")} onClick={handleAllClick}><p className='type__regym-text'>Вся экипировка</p></li>
        <li className={"type__regym" + (isZone ? " type__regym_active" : " ")} onClick={handleAllClick}><p className='type__regym-text'>Оружие ближнего боя</p></li>
        <li className={"type__regym" + (isDual ? " type__regym_active" : " ")} onClick={handleAllClick}><p className='type__regym-text'>Пистолет</p></li>
        <li className={"type__regym" + (isUsual ? " type__regym_active" : " ")} onClick={handleAllClick}><p className='type__regym-text'>ПП</p></li>
        <li className={"type__regym" + (isDeathmatch ? " type__regym_active" : " ")} onClick={handleAllClick}><p className='type__regym-text'>Винтовка</p></li>
        <li className={"type__regym" + (isMilitary ? " type__regym_active" : " ")} onClick={handleAllClick}><p className='type__regym-text'>Тяжёлое</p></li>
        <li className={"type__regym" + (isZone ? " type__regym_active" : " ")} onClick={handleAllClick}><p className='type__regym-text'>Агенты</p></li>
        <li className={"type__regym" + (isZone ? " type__regym_active" : " ")} onClick={handleAllClick}><p className='type__regym-text'>Перчатки</p></li>
        <li className={"type__regym" + (isZone ? " type__regym_active" : " ")} onClick={handleAllClick}><p className='type__regym-text'>Набор музыки</p></li>
        <div className='type__select'>
          <Select 
            class="bots"
            options={[
              {
                name: "По новизне",
                titled: true,         //Параметр указывает устанавливать ли текст опции в заголовок селекта
                handle: (arg) => {    //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                  
                }
              },
              {
                name: "По качеству", 
                titled: true,
                handle: (arg) => {
                  
                }
              },
              {
                name: "По алфавиту", 
                titled: true,
                handle: (arg) => {
                  
                }
              },
              {
                name: "По ячейке", 
                titled: true,
                handle: (arg) => {
                  
                }
              },
              {
                name: "По коллекции", 
                titled: true,
                handle: (arg) => {
                  
                }
              },
              {
                name: "По использованию", 
                titled: true,
                handle: (arg) => {
                  
                }
              }
            ]}
            minwidth="164px"
            isBackground={false}
          />
        </div>
      </ul>
      <div className='type__main'>

      </div>
    </div>
  )
}

export default Equipment;