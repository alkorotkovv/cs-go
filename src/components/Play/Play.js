import React  from 'react';
import Panel from '../Panel/Panel';
import Select from '../Select/Select';
import Bots from './Types/Bots/Bots';
import Official from './Types/Official/Official';


function Play(props) {

  const [title, setTitle] = React.useState("Официальный подбор игр")

  const [isOfficial, setIsOfficial] = React.useState(true)
  const [isBots, setIsBots] = React.useState(false)
  const [isInstruction, setIsInstruction] = React.useState(false)
  const [isWorkshop, setIsWorkshop] = React.useState(false)
  const [isServers, setIsServers] = React.useState(false)

  //Обработчики селекта
  function handler1() {
    setTitle("Официальный подбор игр");
    setIsOfficial(true);
    setIsBots(false);
    setIsInstruction(false);
    setIsWorkshop(false);
    setIsServers(false);
  }

  function handler2() {
    setTitle("Тренировка с ботами");
    setIsOfficial(false);
    setIsBots(true);
    setIsInstruction(false);
    setIsWorkshop(false);
    setIsServers(false);
  }

  function handler3() {
    setTitle("Инструктаж");
    setIsOfficial(false);
    setIsBots(false);
    setIsInstruction(true);
    setIsWorkshop(false);
    setIsServers(false);
  }

  function handler4() {
    setTitle("Карты из мастерской");
    setIsOfficial(false);
    setIsBots(false);
    setIsInstruction(false);
    setIsWorkshop(true);
    setIsServers(false);
  }

  function handler5() {
    setTitle("Список серверов сообщества");
    setIsOfficial(false);
    setIsBots(false);
    setIsInstruction(false);
    setIsWorkshop(true);
    setIsServers(false);
  }

  
  return (
    <Panel title={"ИГРАТЬ"} name="play" isVisible={props.isVisible}>
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
        <Official isVisible={isOfficial} />
        <Bots isVisible={isBots} />
    </Panel>
  )
}

export default Play;