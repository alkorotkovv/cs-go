import React  from 'react';
import Select from '../../../Select/Select';
import timeIcon from '../../../../images/map_time_icon.png';
import Slider from '../../../Slider/Slider';

function Picture(props) {

  const customizationRef = React.useRef(null);
  
  const [isGraphic, setIsGraphic] = React.useState(true)
  const [isAdvanced, setIsAdvanced] = React.useState(false)
  const [isInterface, setIsInterface] = React.useState(false)

  //Обработчики режимов игры
  function handleGraphicClick() {
    setIsGraphic(true);
    setIsAdvanced(false);
    setIsInterface(false);
    customizationRef.current.scrollTo({left: 0, top: document.getElementById('graphic').offsetTop - customizationRef.current.offsetTop, behavior: "smooth"});
  }

  function handleAdvancedClick() {
    setIsGraphic(false);
    setIsAdvanced(true);
    setIsInterface(false);
    customizationRef.current.scrollTo({left: 0, top: document.getElementById('advanced-graphic').offsetTop - customizationRef.current.offsetTop, behavior: "smooth"});
  }

  function handleInterfaceClick() {
    setIsGraphic(false);
    setIsAdvanced(false);
    setIsInterface(true);
  }
  
  return (
    <div className={"regym regym_settings-picture" + (props.isVisible ? " regym_visible" : " ")}>
      <ul className='regym__settings regym__settings_customization'>
        <li className={"type__regym" + (isGraphic ? " type__regym_active" : " ")} onClick={handleGraphicClick}>
          <p className='type__regym-text type__regym-text_small'>Графика</p>
        </li>
        <li className={"type__regym" + (isAdvanced ? " type__regym_active" : " ")} onClick={handleAdvancedClick}>
          <p className='type__regym-text type__regym-text_small'>Расширенные настройки изображения</p>
        </li>
        <li className={"type__regym" + (isInterface ? " type__regym_active" : " ")} onClick={handleInterfaceClick}>
          <p className='type__regym-text type__regym-text_small'>Позиция краёв интерфейса</p>
        </li>
      </ul>
      <div className='regym__main-wrapper'>
        <div className='regym__main regym__main_settings'>
          <div className='customization' ref={customizationRef}>
            <ul className='customization__list'>
              <p id="graphic" className='customization__title'>Графика</p>
              <li className='setting'>
                <p className='setting__name'>Фон в главном меню</p>
                <Select 
                  class="setting"
                  title={"Anubis"}
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
                      name:"Монитор",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Телевизор", 
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
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="80"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Формат экрана</p>
                <Select 
                  class="setting"
                  title={"Широкоэкранный 16:9"}
                  options={[
                    {
                      name:"Обычный, 4:3",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Широкоэкранный 16:9", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Широкоэкранный 16:10", 
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
                  title={"1920x1080"}
                  options={[
                    {
                      name:"1280x720",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "1366x768", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "1600x900", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "1920x1080", 
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
                  title={"На весь экран"}
                  options={[
                    {
                      name:"В окне",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "На весь экран", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Полноэкранный в окне", 
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
                      name:"Выкл.",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Вкл.", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    }
                  ]}
                  minwidth="50px"
                  isBackground={false}
                />
              </li>
              <p id="advanced-graphic" className='customization__title'>Расширенные настройки изображения</p>
              <li className='setting'>
                <p className='setting__name'>Общее качество теней</p>
                <Select 
                  class="setting"
                  title={"Высокое"}
                  options={[
                    {
                      name:"Очень низкое",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Низкое", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Среднее", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Высокое", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Автоматически:Высокое", 
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
                  title={"Высокое"}
                  options={[
                    {
                      name:"Низкое",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Среднее", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Высокое", 
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
                      name:"Выкл.",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Вкл.", 
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
                  title={"Высокое"}
                  options={[
                    {
                      name:"Низкое",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Среднее", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Высокое", 
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
                  title={"Высокое"}
                  options={[
                    {
                      name:"Низкое",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Среднее", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Высокое", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Очень высокое", 
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
                  title={"Вкл."}
                  options={[
                    {
                      name:"Выкл.",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Вкл.", 
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
                  title={"Вкл."}
                  options={[
                    {
                      name:"Выкл.",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Вкл.", 
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
                      name:"Нет",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "2x MSAA", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "4x MSAA", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "8x MSAA", 
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
                  title={"Вкл."}
                  options={[
                    {
                      name:"Выкл.",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Вкл.", 
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
                  title={"Анизотропная 16х"}
                  options={[
                    {
                      name:"Билинейная",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Трилинейная", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Анизотропная 2х", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Анизотропная 4х", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Анизотропная 8х", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Анизотропная 16х", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Автоматически:Анизотропная 16х", 
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
                      name:"Выкл.",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Двойная буферизация", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Тройная буферизация", 
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
                      name:"Выкл.",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Вкл.", 
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
                      name:"Выкл.",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Вкл.", 
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
                      name:"Выкл.",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Вкл.", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Автоматически:Выкл.", 
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