import React  from 'react';
import Select from '../../../Select/Select';
import Switch from '../../../Switch/Switch';
import Map from '../../../Map/Map';
import { workshopMapsArray } from '../../../../utils/constants';

function Workshop(props) {

  const [title, setTitle] = React.useState("Легкие боты")
  const [name, setName] = React.useState("");

  //Обработчики селекта
  function handler1() {
    setTitle("Без ботов");
  }

  function handler2() {
    setTitle("Безобидные боты");
  }

  function handler3() {
    setTitle("Легкие боты");
  }

  function handler4() {
    setTitle("Средние боты");
  }

  function handler5() {
    setTitle("Сложные боты");
  }

  function handler6() {
    setTitle("Опытные боты");
  }

  //Обработчик ввода текста в инпут
  function handleNameChange(evt) {
    setName(evt.target.value);
  }

  return (
    <div className={"type type_workshop" + (props.isVisible ? " type_visible" : " ")} >
      <div className='type__regyms'>
        <input className='workshop__input' id="workshop-map" name="workshop-map" type="text" size="40" placeholder="Поиск по картам" value={name} onChange={handleNameChange} />
        <div className='type__select'>
          <Select 
            class="workshop"
            options={[
              {
                name:"Без ботов",
                handle: (arg) => {    //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                  setTitle(arg.name)
                }
              },
              {
                name: "Безобидные боты", 
                handle: (arg) => {
                  setTitle(arg.name)
                }
              },
              {
                name: "Легкие боты", 
                handle: (arg) => {
                  setTitle(arg.name)
                }
              },
              {
                name: "Средние боты", 
                handle: (arg) => {
                  setTitle(arg.name)
                }
              },
              {
                name: "Сложные боты", 
                handle: (arg) => {
                  setTitle(arg.name)
                }
              },
              {
                name: "Опытные боты", 
                handle: (arg) => {
                  setTitle(arg.name)
                }
              }
            ]} 
            title={title}
            minwidth="200px"
          />
        </div>
        <div className='workshop__button'>
          <p className='workshop__button-title'>ОТКРЫТЬ МАСТЕРСКУЮ</p>
        </div>
      </div>
      <div className='type__main'>
        <div className={"regym regym_workshop" + (props.isVisible ? " regym_visible" : " ")}>
          <div className='regym__settings regym__settings_workshop'>
            <div className='wrapper wrapper_workshop'>
              <Switch span="Открытая группа" id="switch_workshop_1"/>
            </div>
          </div>
          <div className='regym__main-wrapper'>
            <div className='regym__main regym__main_workshop'>
              <ul className="regym__maps regym__maps_workshop">  
                {
                  workshopMapsArray.filter((e) => e.name.includes(name)).map((element, index) => 
                    <Map 
                      key={index}
                      logo={element.logo}
                      icon={element.icon}
                      name={element.name}
                      time={element.time}
                      isCompetitive={element.isCompetitive}
                      isCheckable={false}
                      isTimeVisible={false}
                      isIconVisible={false}
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

export default Workshop;