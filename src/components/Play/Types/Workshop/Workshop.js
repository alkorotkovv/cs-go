import React  from 'react';
import Usual from '../Official/Regyms/Usual/Usual';
import Select from '../../../Select/Select';

function Workshop(props) {

  const [title, setTitle] = React.useState("Легкие боты")

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

  return (
    <div className={"type type_workshop" + (props.isVisible ? " type_visible" : " ")} >
      <div className='type__regyms'>
        <input className='workshop__input' id="workshop-map" name="workshop-map" type="text" size="40" placeholder="Поиск по картам" />
        <div className='type__select'>
          <Select 
            class="workshop"
            options={[
                {
                  name:"Без ботов",
                  handle: handler1
                },
                {
                  name: "Безобидные боты", 
                  handle: handler2
                },
                {
                  name: "Легкие боты", 
                  handle: handler3
                },
                {
                  name: "Средние боты", 
                  handle: handler4
                },
                {
                  name: "Сложные боты", 
                  handle: handler5
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
        <Usual isVisible={true} />
      </div>
    </div>
  )
}

export default Workshop;