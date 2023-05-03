import React  from 'react';
import Panel from '../Panel/Panel';
import Select from '../Select/Select';
import Official from './Types/Official/Official';
import Bots from './Types/Bots/Bots';
import Instruction from './Types/Instruction/Instruction';
import Workshop from './Types/Workshop/Workshop';
import Servers from './Types/Servers/Servers';



function Play(props) {

  const [title, setTitle] = React.useState("Официальный подбор игр")

  const [isOfficial, setIsOfficial] = React.useState(true)
  const [isBots, setIsBots] = React.useState(false)
  const [isInstruction, setIsInstruction] = React.useState(false)
  const [isWorkshop, setIsWorkshop] = React.useState(false)
  const [isServers, setIsServers] = React.useState(false)

  //Обработчик закрытия попапа ИНСТРУКТАЖ
  function handleInstructionClose() {
    setIsInstruction(false);
  }

  //Обработчик закрытия панели Серверов сообщества
  function handleServersClose() {
    setIsServers(false);
  }
  
  return (
    <>
    <Panel title={"ИГРАТЬ"} name="play" isVisible={props.isVisible}>
        <div className='play__select'>
        <Select 
          class="play"
          options={[
            {
              name:"Официальный подбор игр",
              handle: (arg) => {
                setTitle(arg.name)
                setIsOfficial(true);
                setIsBots(false);
                setIsInstruction(false);
                setIsWorkshop(false);
                setIsServers(false);
              }
            },
            {
              name: "Тренировка с ботами", 
              handle: (arg) => {
                setTitle(arg.name)
                setIsOfficial(false);
                setIsBots(true);
                setIsInstruction(false);
                setIsWorkshop(false);
                setIsServers(false);
              }
            },
            {
              name: "Инструктаж", 
              handle: (arg) => {
                setIsInstruction(true);
              }
            },
            {
              name: "Карты из мастерской", 
              handle: (arg) => {
                setTitle(arg.name)
                setIsOfficial(false);
                setIsBots(false);
                setIsInstruction(false);
                setIsWorkshop(true);
                setIsServers(false);
              }
            },
            {
              name: "Список серверов сообщества", 
              handle: (arg) => {
                setIsServers(true);
              }
            }
          ]}
          title={title}
          minwidth="300px"
        />
        </div>
        { isOfficial ? <Official isVisible={isOfficial} /> : <></>}
        { isBots ? <Bots isVisible={isBots} /> : <></>}
        { isWorkshop ? <Workshop isVisible={isWorkshop} /> : <></>}
    </Panel>
    { isInstruction ? <Instruction isVisible={isInstruction} handleClose={handleInstructionClose} /> : <></>}
    { isServers ? <Servers isVisible={isServers} handleClose={handleServersClose} /> : <></>}
    </>
  )
}

export default Play;