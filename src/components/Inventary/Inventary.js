import React  from 'react';
import Panel from '../Panel/Panel';
import Select from '../Select/Select';

function Inventary(props) {

  const [title, setTitle] = React.useState("Всё")
  
  return (
    <Panel title={"ИНВЕНТАРЬ"} name="inventary" isVisible={props.isVisible}>
      <div className='panel__header'>
        <Select 
          class="play"
          options={[
            {
              name:"Всё",
              handle: (arg) => {
                setTitle(arg.name)
              }
            },
            {
              name: "Экипировка", 
              handle: (arg) => {
                setTitle(arg.name)
              }
            },
            {
              name: "Наклейки, граффити и нашивки", 
              handle: (arg) => {
                setTitle(arg.name)
              }
            },
            {
              name: "Контейнеры и другое", 
              handle: (arg) => {
                setTitle(arg.name)
              }
            },
            {
              name: "Трофеи", 
              handle: (arg) => {
                setTitle(arg.name)
              }
            }
          ]}
          title={title}
          minwidth="324px"
        />
      </div>
    </Panel>
  )
}

export default Inventary;