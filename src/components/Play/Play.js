import React  from 'react';
import Select from '../Select/Select';

function Play(props) {

  const [title, setTitle] = React.useState("Официальный подбор игр")

  function handler1() {
    setTitle("Официальный подбор игр")
  }

  function handler2() {
    setTitle("Тренировка с ботами")
  }

  function handler3() {
    setTitle("Инструктаж")
  }

  function handler4() {
    setTitle("Карты из мастерской")
  }

  function handler5() {
    setTitle("Список серверов сообщества")
  }
  
  return (
    <div className={"play" + (props.isVisible ? " play_visible" : "")}>
      <h1 className='play__title'>ИГРАТЬ</h1>
      <div className='play__select'>
      <Select 
        options={[
            {
              name:"Официальный подбор игр",
              handle: handler1
            },
            {
              name: "Тренировка с ботами", 
              handle: handler2
            },
            {
              name: "Инструктаж", 
              handle: handler3
            },
            {
              name: "Карты из мастерской", 
              handle: handler4
            },
            {
              name: "Список серверов сообщества", 
              handle: handler5
            }
          ]} 
          title={title}
          minwidth="300px"
          />
      </div>
    </div>
  )
}

export default Play;