import React  from 'react';
import Select from '../../../Select/Select';

function Trophies(props) {

  const [isAll, setIsAll] = React.useState(true)
  const [isMedal, setIsMedal] = React.useState(false);
  const [isMusic, setIsMusic] = React.useState(false);

  //Обработчики режимов игры
  function handleAllClick() {
    setIsAll(true);
    setIsMedal(false);
    setIsMusic(false);
  }

  function handleMedalClick() {
    setIsAll(false);
    setIsMedal(true);
    setIsMusic(false);
  }

  function handleMusicClick() {
    setIsAll(false);
    setIsMedal(false);
    setIsMusic(true);
  }


  
  return (
    <div className={"type type_official" + (props.isVisible ? " type_visible" : " ")}>
      <ul className='type__regyms'>
        <li className={"type__regym" + (isAll ? " type__regym_active" : " ")} onClick={handleAllClick}><p className='type__regym-text'>Все</p></li>
        <li className={"type__regym" + (isMedal ? " type__regym_active" : " ")} onClick={handleMedalClick}><p className='type__regym-text'>Медали</p></li>
        <li className={"type__regym" + (isMusic ? " type__regym_active" : " ")} onClick={handleMusicClick}><p className='type__regym-text'>Наборы музыки</p></li>
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
      Trophies
      </div>
    </div>
  )
}

export default Trophies;