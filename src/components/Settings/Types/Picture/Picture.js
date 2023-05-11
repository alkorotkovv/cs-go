import React  from 'react';
import Major from '../../../Major/Major';
import { majorsArray } from '../../../../utils/constants';
import Select from '../../../Select/Select';

function Picture(props) {
  
  const [isGraphic, setIsGraphic] = React.useState(true)
  const [isAdvanced, setIsAdvanced] = React.useState(false)
  const [isInterface, setIsInterface] = React.useState(false)

  //Обработчики режимов игры
  function handleGraphicClick() {
    setIsGraphic(true);
    setIsAdvanced(false);
    setIsInterface(false);
  }

  function handleAdvancedClick() {
    setIsGraphic(false);
    setIsAdvanced(true);
    setIsInterface(false);
  }

  function handleInterfaceClick() {
    setIsGraphic(false);
    setIsAdvanced(false);
    setIsInterface(true);
  }

  
  return (
    <div className={"regym regym_settings-picture" + (props.isVisible ? " regym_visible" : " ")}>
      <ul className='regym__settings regym__settings_settings-picture'>
        <li className={"type__regym" + (isGraphic ? " type__regym_active" : " ")} onClick={handleGraphicClick}><p className='type__regym-text'>Графика</p></li>
        <li className={"type__regym" + (isAdvanced ? " type__regym_active" : " ")} onClick={handleAdvancedClick}><p className='type__regym-text'>Расширенные настройки изображения</p></li>
        <li className={"type__regym" + (isInterface ? " type__regym_active" : " ")} onClick={handleInterfaceClick}><p className='type__regym-text'>Позиция краёв интерфейса</p></li>
      </ul>
      <div className='regym__main-wrapper'>
        <div className='regym__main regym__main_settings-picture'>
          <ul className='setting-list'>
            <li className='setting'>
              <p className='setting__name'>Фон в главном меню</p>
              <Select 
                class="play"
                options={[
                  {
                    name:"Ancient",
                    titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                    handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                      
                    }
                  },
                  {
                    name: "Anubis", 
                    titled: true,
                    handle: (arg) => {
                      
                    }
                  },
                  {
                    name: "Blacksite", 
                    titled: true,
                    handle: (arg) => {
                      
                    }
                  },
                  {
                    name: "Cobblestone", 
                    titled: true,
                    handle: (arg) => {
                      
                    }
                  },
                  {
                    name: "Nuke", 
                    titled: true,
                    handle: (arg) => {
                      
                    }
                  },
                  {
                    name: "База «Феникса»", 
                    titled: true,
                    handle: (arg) => {
                      
                    }
                  },
                  {
                    name: "Vertigo", 
                    titled: true,
                    handle: (arg) => {
                      
                    }
                  },
                  {
                    name: "Случайно", 
                    titled: true,
                    handle: (arg) => {
                      
                    }
                  }
                ]}
                minwidth="50px"
                isBackground={false}
              />
            </li>
            <li className='setting'>
              <p className='setting__name'>Режим отображения</p>
              <Select 
                class="play"
                options={[
                  {
                    name:"Ancient",
                    titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                    handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                      
                    }
                  },
                  {
                    name: "Anubis", 
                    titled: true,
                    handle: (arg) => {
                      
                    }
                  },
                  {
                    name: "Blacksite", 
                    titled: true,
                    handle: (arg) => {
                      
                    }
                  },
                  {
                    name: "Cobblestone", 
                    titled: true,
                    handle: (arg) => {
                      
                    }
                  },
                  {
                    name: "Nuke", 
                    titled: true,
                    handle: (arg) => {
                      
                    }
                  },
                  {
                    name: "База «Феникса»", 
                    titled: true,
                    handle: (arg) => {
                      
                    }
                  },
                  {
                    name: "Vertigo", 
                    titled: true,
                    handle: (arg) => {
                      
                    }
                  },
                  {
                    name: "Случайно", 
                    titled: true,
                    handle: (arg) => {
                      
                    }
                  }
                ]}
                minwidth="50px"
                isBackground={false}
              />
            </li>

          </ul>          
        </div>
      </div>
    </div>
  )
}

export default Picture;