import React  from 'react';
import Panel from '../Panel/Panel';
import Select from '../Select/Select';

function Inventary(props) {
  
  return (
    <Panel title={"ИНВЕНТАРЬ"} name="inventary" isVisible={props.isVisible}>
      <div className='panel__header'>
        <Select 
          class="play"
          options={[
            {
              name:"Всё",
              titled: true,           //Параметр указывает устанавливать ли текст опции в заголовок селекта
              handle: (arg) => {      //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                
              }
            },
            {
              name: "Экипировка",
              titled: true,
              handle: (arg) => {
                
              }
            },
            {
              name: "Наклейки, граффити и нашивки",
              titled: true,
              handle: (arg) => {
                
              }
            },
            {
              name: "Контейнеры и другое",
              titled: true,
              handle: (arg) => {
                
              }
            },
            {
              name: "Трофеи",
              titled: true,
              handle: (arg) => {
                
              }
            }
          ]}
          minwidth="324px"
          isBackground={true}
        />
      </div>
    </Panel>
  )
}

export default Inventary;