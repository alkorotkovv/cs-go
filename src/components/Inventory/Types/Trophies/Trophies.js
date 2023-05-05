import React  from 'react';
import Select from '../../../Select/Select';
import { inventoryArray } from '../../../../utils/constants';
import Gun from '../../../Gun/Gun';

function Trophies(props) {

  const [array, setArray] = React.useState(props.array);

  const [isAll, setIsAll] = React.useState(true)
  const [isMedal, setIsMedal] = React.useState(false);
  const [isMusic, setIsMusic] = React.useState(false);

  //Обработчики режимов игры
  function handleAllClick() {
    setArray(props.array);
    setIsAll(true);
    setIsMedal(false);
    setIsMusic(false);
  }

  function handleMedalClick() {
    setArray(props.array.filter((e) => (
      e.type === "Medal")));
    setIsAll(false);
    setIsMedal(true);
    setIsMusic(false);
  }

  function handleMusicClick() {
    setArray(props.array.filter((e) => ( 
      e.type === "Music")));
    setIsAll(false);
    setIsMedal(false);
    setIsMusic(true);
  }


  
  return (
    <div className={"type type_official" + (props.isVisible ? " type_visible" : " ")}>
      <ul className='type__regyms type__regyms_inventory'>
        <li className={"type__regym" + (isAll ? " type__regym_active" : " ")} onClick={handleAllClick}><p className='type__regym-text'>Все</p></li>
        <li className={"type__regym" + (isMedal ? " type__regym_active" : " ")} onClick={handleMedalClick}><p className='type__regym-text'>Медали</p></li>
        <li className={"type__regym" + (isMusic ? " type__regym_active" : " ")} onClick={handleMusicClick}><p className='type__regym-text'>Наборы музыки</p></li>
        <div className='type__select'>
          <Select 
            class="sort-trophies"
            options={[
              {
                name: "По новизне",
                titled: true,         //Параметр указывает устанавливать ли текст опции в заголовок селекта
                handle: (arg) => {    //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                  setArray(array.sort(function(a,b) {
                     return new Date(b.date) - new Date(a.date);
                  }))
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
            title="По качеству"
            minwidth="164px"
            isBackground={false}
          />
        </div>
      </ul>
      <div className='type__main'>
        <div className='regym__main-wrapper'>
          <div className='regym__main regym__main_inventory'>
            <div className='guns'>
              <ul className="regym__guns">
                {
                  array.map((element, index) => 
                    <Gun 
                      key={index}
                      object={element}
                    />
                  )
                }  
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trophies;