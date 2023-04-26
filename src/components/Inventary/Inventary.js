import React  from 'react';
import Panel from '../Panel/Panel';
import Select from '../Select/Select';

function Inventary(props) {

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
    <Panel name="inventary" isVisible={props.isVisible}>
        <h1 className='inventary__title'>ИНВЕНТАРЬ</h1>
    </Panel>
  )
}

export default Inventary;