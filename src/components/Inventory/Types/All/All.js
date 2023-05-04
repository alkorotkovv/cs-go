import React  from 'react';
import Select from '../../../Select/Select';
import { gunsArray } from '../../../../utils/constants';

function All(props) {

  const [isAll, setIsAll] = React.useState(true)

  //Обработчики режимов игры
  function handleAllClick() {
    setIsAll(true);
  }

  
  return (
    <div className={"type type_official" + (props.isVisible ? " type_visible" : " ")}>
      <ul className='type__regyms'>
        <li className={"type__regym" + (isAll ? " type__regym_active" : " ")} onClick={handleAllClick}><p className='type__regym-text'>Все</p></li>
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
        <div className='regym__main-wrapper'>
          <div className='regym__main regym__main_all'>
            <ul className="regym__guns regym__guns_all">
              {
                gunsArray.map((element, index) => 
                <li className='gun'>
                  <img className={'gun__image'} src={element.image} alt="gun-img" draggable="false"/>
                  <p className='gun__weapon'>{element.weapon}</p>
                  <p className='gun__name'>{element.name}</p>
                </li>
                )
              }  
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default All;