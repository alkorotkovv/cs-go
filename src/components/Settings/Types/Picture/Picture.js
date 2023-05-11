import React  from 'react';
import Select from '../../../Select/Select';
import timeIcon from '../../../../images/map_time_icon.png';

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
        <div className='regym__main regym__main_settings'>
          <div className='customization'>
            <ul className='customization__list'>
              <p className='customization__title'>Графика</p>
              <li className='setting'>
                <p className='setting__name'>Фон в главном меню</p>
                <Select 
                  class="setting"
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
                  class="setting"
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
                <p className='setting__name'>Яркость</p>
                <Select 
                  class="setting"
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
                <p className='setting__name'>Формат экрана</p>
                <Select 
                  class="setting"
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
                <p className='setting__name'>Разрешение</p>
                <Select 
                  class="setting"
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
                  class="setting"
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
                <p className='setting__name'>Энергосберегающий режим</p>
                <Select 
                  class="setting"
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
              <p className='customization__title'>Расширенные настройки изображения</p>
              <li className='setting'>
                <p className='setting__name'>Общее качество теней</p>
                <Select 
                  class="setting"
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
                <p className='setting__name'>Детализация моделей и текстур</p>
                <Select 
                  class="setting"
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
                <p className='setting__name'>Стриминг текстур</p>
                <Select 
                  class="setting"
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
                <p className='setting__name'>Детализация эффектов</p>
                <Select 
                  class="setting"
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
                <p className='setting__name'>Детализация шейдеров</p>
                <Select 
                  class="setting"
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
                <p className='setting__name'>Повышенный контраст игроков</p>
                <Select 
                  class="setting"
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
                <p className='setting__name'>Многоядерная обработка</p>
                <Select 
                  class="setting"
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
                <p className='setting__name'>Режим сглаживания множественной выборкой</p>
                <Select 
                  class="setting"
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
                <p className='setting__name'>Сглаживание с помощью FXAA</p>
                <Select 
                  class="setting"
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
                <p className='setting__name'>Режим фильтрации текстур</p>
                <Select 
                  class="setting"
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
                <p className='setting__name'>Вертикальная синхронизация</p>
                <Select 
                  class="setting"
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
                <p className='setting__name'>Размытие движения</p>
                <Select 
                  class="setting"
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
                <p className='setting__name'>Режим трёх мониторов</p>
                <Select 
                  class="setting"
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
                <p className='setting__name'>Использовать убершейдеры</p>
                <Select 
                  class="setting"
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
        <div className='customization__bottom'>
          <div className='customization__button'>
            <img className='customization__button-icon' src={timeIcon} alt="icon" draggable="false"/>
            <p className='customization__button-text'>СБРОСИТЬ</p>
          </div>
          <div className='customization__button'>
            <p className='customization__button-text'>ОТМЕНИТЬ ИЗМЕНЕНИЯ</p>
          </div>
          <div className='customization__button'>
            <p className='customization__button-text'>ПРИМЕНИТЬ ИЗМЕНЕНИЯ</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Picture;