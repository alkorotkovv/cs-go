import React  from 'react';
import Select from '../../../Select/Select';
import timeIcon from '../../../../images/map_time_icon.png';
import aim_settings from '../../../../images/aim_settings.png';
import Slider from '../../../Slider/Slider';

function Game(props) {

  const customizationRef = React.useRef(null);
  
  const [isGame, setIsGame] = React.useState(true)
  const [isInterface, setIsInterface] = React.useState(false)
  const [isCommand, setIsCommand] = React.useState(false)
  const [isCommunication, setIsCommunication] = React.useState(false)
  const [isTable, setIsTable] = React.useState(false)
  const [isItem, setIsItem] = React.useState(false)
  const [isRadar, setIsRadar] = React.useState(false)
  const [isAim, setIsAim] = React.useState(false)

  //Обработчики режимов игры
  function handleGameClick() {
    setIsGame(true);
    setIsInterface(false);
    setIsCommand(false);
    setIsCommunication(false);
    setIsTable(false);
    setIsItem(false);
    setIsRadar(false);
    setIsAim(false);
    customizationRef.current.scrollTo({left: 0, top: document.getElementById('game').offsetTop - customizationRef.current.offsetTop, behavior: "smooth"});
  }

  function handleInterfaceClick() {
    setIsGame(false);
    setIsInterface(true);
    setIsCommand(false);
    setIsCommunication(false);
    setIsTable(false);
    setIsItem(false);
    setIsRadar(false);
    setIsAim(false);
    customizationRef.current.scrollTo({left: 0, top: document.getElementById('interface').offsetTop - customizationRef.current.offsetTop, behavior: "smooth"});
  }

  function handleCommandClick() {
    setIsGame(false);
    setIsInterface(false);
    setIsCommand(true);
    setIsCommunication(false);
    setIsTable(false);
    setIsItem(false);
    setIsRadar(false);
    setIsAim(false);
    customizationRef.current.scrollTo({left: 0, top: document.getElementById('command').offsetTop - customizationRef.current.offsetTop, behavior: "smooth"});
  }

  function handleCommunicationClick() {
    setIsGame(false);
    setIsInterface(false);
    setIsCommand(false);
    setIsCommunication(true);
    setIsTable(false);
    setIsItem(false);
    setIsRadar(false);
    setIsAim(false);
    customizationRef.current.scrollTo({left: 0, top: document.getElementById('communication').offsetTop - customizationRef.current.offsetTop, behavior: "smooth"});
  }

  function handleTableClick() {
    setIsGame(false);
    setIsInterface(false);
    setIsCommand(false);
    setIsCommunication(false);
    setIsTable(true);
    setIsItem(false);
    setIsRadar(false);
    setIsAim(false);
    customizationRef.current.scrollTo({left: 0, top: document.getElementById('table').offsetTop - customizationRef.current.offsetTop, behavior: "smooth"});
  }

  function handleItemClick() {
    setIsGame(false);
    setIsInterface(false);
    setIsCommand(false);
    setIsCommunication(false);
    setIsTable(false);
    setIsItem(true);
    setIsRadar(false);
    setIsAim(false);
    customizationRef.current.scrollTo({left: 0, top: document.getElementById('item').offsetTop - customizationRef.current.offsetTop, behavior: "smooth"});
  }

  function handleRadarClick() {
    setIsGame(false);
    setIsInterface(false);
    setIsCommand(false);
    setIsCommunication(false);
    setIsTable(false);
    setIsItem(false);
    setIsRadar(true);
    setIsAim(false);
    customizationRef.current.scrollTo({left: 0, top: document.getElementById('radar').offsetTop - customizationRef.current.offsetTop, behavior: "smooth"});
  }

  function handleAimClick() {
    setIsGame(false);
    setIsInterface(false);
    setIsCommand(false);
    setIsCommunication(false);
    setIsTable(false);
    setIsItem(false);
    setIsRadar(false);
    setIsAim(true);
    customizationRef.current.scrollTo({left: 0, top: document.getElementById('aim').offsetTop - customizationRef.current.offsetTop, behavior: "smooth"});
  }

  
  return (
    <div className={"regym regym_settings-picture" + (props.isVisible ? " regym_visible" : " ")}>
      <ul className='regym__settings regym__settings_customization'>
        <li className={"type__regym" + (isGame ? " type__regym_active" : " ")} onClick={handleGameClick}>
          <p className='type__regym-text type__regym-text_small'>Игра</p>
        </li>
        <li className={"type__regym" + (isInterface ? " type__regym_active" : " ")} onClick={handleInterfaceClick}>
          <p className='type__regym-text type__regym-text_small'>Интерфейс</p>
        </li>
        <li className={"type__regym" + (isCommand ? " type__regym_active" : " ")} onClick={handleCommandClick}>
          <p className='type__regym-text type__regym-text_small'>Команда</p>
        </li>
        <li className={"type__regym" + (isCommunication ? " type__regym_active" : " ")} onClick={handleCommunicationClick}>
          <p className='type__regym-text type__regym-text_small'>Общение</p>
        </li>
        <li className={"type__regym" + (isTable ? " type__regym_active" : " ")} onClick={handleTableClick}>
          <p className='type__regym-text type__regym-text_small'>Наблюдение и таблица счёта</p>
        </li>
        <li className={"type__regym" + (isItem ? " type__regym_active" : " ")} onClick={handleItemClick}>
          <p className='type__regym-text type__regym-text_small'>Предмет</p>
        </li>
        <li className={"type__regym" + (isRadar ? " type__regym_active" : " ")} onClick={handleRadarClick}>
          <p className='type__regym-text type__regym-text_small'>Радар/планшет</p>
        </li>
        <li className={"type__regym" + (isAim ? " type__regym_active" : " ")} onClick={handleAimClick}>
          <p className='type__regym-text type__regym-text_small'>Прицел</p>
        </li>
      </ul>
      <div className='regym__main-wrapper'>
        <div className='regym__main regym__main_settings'>
          <div className='customization' ref={customizationRef}>
            <ul className='customization__list'>
              <p id="game" className='customization__title'>Игра</p>
              <li className='setting'>
                <p className='setting__name'>Включить сообщения инструктора по игре</p>
                <Select 
                  class="setting"
                  title={"Нет"}
                  options={[
                    {
                      name:"Да",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Нет", 
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
                <p className='setting__name'>Максимально допустимый пинг в поиске матчей</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="88"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Ограничение пропускной способности</p>
                <Select 
                  class="setting"
                  title={"Минимальная"}
                  options={[
                    {
                      name:"Минимальная",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Ниже 384 кбит/с", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Ниже 512 кбит/с", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Ниже 768 кбит/с", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Ниже 1 Мбит/с", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "До 1,5 Мбит/с", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "До 2 Мбит/с", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "3 Мбит/с", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "4 Мбит/с", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Не ограничена", 
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
                <p className='setting__name'>Расположение внутриигровых уведомлений</p>
                <Select 
                  class="setting"
                  title={"Вверху слева"}
                  options={[
                    {
                      name:"Вверху слева",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Внизу слева", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Внизу справа", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Вверху справа", 
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
                <p className='setting__name'>Включить консоль разработчика (~)</p>
                <Select 
                  class="setting"
                  title={"Да"}
                  options={[
                    {
                      name:"Да",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Нет", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    }
                  ]}
                  minwidth="50px"
                  isBackground={false}
                />
              </li>


              <p id="interface" className='customization__title'>Интерфейс</p>
              <li className='setting'>
                <p className='setting__name'>Предупреждение об огне по своим на прицеле</p>
                <Select 
                  class="setting"
                  title={"Всегда включено"}
                  options={[
                    {
                      name:"Всегда выключено",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Только при стандартном прицеле", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Всегда включено", 
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
                <p className='setting__name'>Размер внутриигрового интерфейса</p>
                <Slider 
                  min="0"
                  max="1"
                  step="0.01"
                  value="0.77"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Цвет интерфейса</p>
                <Select 
                  class="setting"
                  title={"Стандартный"}
                  options={[
                    {
                      name:"Стандартный",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Белый", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Светло-голубой", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Светло-голубой", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Голубой", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Фиолетовый", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Розовый", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Красный", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Оранжевый", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Жёлтый", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Зелёный", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Аквамарин", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Классический", 
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
                <p className='setting__name'>Прозрачность фона интерфейса</p>
                <Slider 
                  min="0"
                  max="1"
                  step="0.01"
                  value="0.5"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Стиль здоровья/патронов</p>
                <Select 
                  class="setting"
                  title={"Стандартный"}
                  options={[
                    {
                      name:"Стандартный",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Простой", 
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
                <p className='setting__name'>Позиция индикатора бомбы</p>
                <Select 
                  class="setting"
                  title={"Показывать под радаром"}
                  options={[
                    {
                      name:"Показывать в инвентаре",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Показывать под радаром", 
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
                <p className='setting__name'>Позиция мини-таблицы очков</p>
                <Select 
                  class="setting"
                  title={"Вверху экрана"}
                  options={[
                    {
                      name:"Вверху экрана",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Внизу экрана", 
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
                <p className='setting__name'>Стиль мини-таблицы очков</p>
                <Select 
                  class="setting"
                  title={"Показывать аватары"}
                  options={[
                    {
                      name:"Показывать аватары",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Показывать число игроков", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    }
                  ]}
                  minwidth="50px"
                  isBackground={false}
                />
              </li>


              <p id="command" className='customization__title'>Команда</p>
              <li className='setting'>
                <p className='setting__name'>Тег группы Steam</p>
                <Select 
                  class="setting"
                  title={"Без тега команды"}
                  options={[
                    {
                      name:"Без тега команды",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "#Овощ", 
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
                <p className='setting__name'>Теги команд в истории убийств</p>
                <Select 
                  class="setting"
                  title={"Да"}
                  options={[
                    {
                      name:"Да",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Нет", 
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
                <p className='setting__name'>Показывать в интерфейсе позиции союзников</p>
                <Select 
                  class="small"
                  title={"Показывать позиции и снаряжение"}
                  options={[
                    {
                      name:"Показывать позиции и снаряжение",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Показывать позиции", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Выкл.", 
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
                <p className='setting__name'>Цвета союзников в соревновательном режиме</p>
                <Select 
                  class="setting"
                  title={"Только цвета"}
                  options={[
                    {
                      name:"Только цвета",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Цвета и буквы", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Нет", 
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
                <p className='setting__name'>Стандартные разрешения лобби</p>
                <Select 
                  class="setting"
                  title={"Для всех друзей"}
                  options={[
                    {
                      name:"Для приглашенных друзей",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Для всех друзей", 
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
                <p className='setting__name'>Включать поиск команды при запуске CS:GO</p>
                <Select 
                  class="setting"
                  title={"Запоминать состояние"}
                  options={[
                    {
                      name:"Выкл.",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Запоминать состояние", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Автоматически", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    }
                  ]}
                  minwidth="50px"
                  isBackground={false}
                />
              </li>

              <p id="communication" className='customization__title'>Общение</p>
              <li className='setting'>
                <p className='setting__name'>Метки игроков</p>
                <Select 
                  class="setting"
                  title={"Показывать и воспроизводить звук"}
                  options={[
                    {
                      name:"Показывать и воспроизводить звук",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Показывать без звука", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Выключить", 
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
                <p className='setting__name'>Заглушить вражескую команду</p>
                <Select 
                  class="setting"
                  title={"Нет"}
                  options={[
                    {
                      name:"Нет",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Да", 
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
                <p className='setting__name'>Заглушить всех, кроме друзей</p>
                <Select 
                  class="setting"
                  title={"Нет"}
                  options={[
                    {
                      name:"Нет",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Только вне соревновательного режима", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Всегда", 
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
                <p className='setting__name'>Фильтрация текста</p>
                <Select 
                  class="setting"
                  title={"Нет"}
                  options={[
                    {
                      name:"Нет",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Настройки аккаунта", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Да", 
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
                <p className='setting__name'>Показывать аватары</p>
                <Select 
                  class="setting"
                  title={"Все"}
                  options={[
                    {
                      name:"Все",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Никакие", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Только друзей", 
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
                <p className='setting__name'>Скрыть имена игроков</p>
                <Select 
                  class="setting"
                  title={"Нет"}
                  options={[
                    {
                      name:"Нет",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Да", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Автоматически", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    }
                  ]}
                  minwidth="50px"
                  isBackground={false}
                />
              </li>


              <p id="table" className='customization__title'>Наблюдение и таблица счёта</p>
              <li className='setting'>
                <p className='setting__name'>Клавиши выбора при наблюдении/голосовании</p>
                <Select 
                  class="setting"
                  title={"Клавиши с цифрами"}
                  options={[
                    {
                      name:"Клавиши с цифрами",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Ячейки оружия", 
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
                <p className='setting__name'>Показать мышь в таблице очков/ таблицу очков после игры</p>
                <Select 
                  class="setting"
                  title={"Альтернативный огонь"}
                  options={[
                    {
                      name:"Альтернативный огонь",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Прыжок", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Присесть", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Бросить оружие", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Последнее оружие", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Радиосообщение", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Использовать", 
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
                <p className='setting__name'>Показывать число выживших</p>
                <Select 
                  class="setting"
                  title={"Нет"}
                  options={[
                    {
                      name:"Да",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Нет", 
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
                <p className='setting__name'>Плавная камера наблюдателя</p>
                <Select 
                  class="setting"
                  title={"Да"}
                  options={[
                    {
                      name:"Да",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Нет", 
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
                <p className='setting__name'>Скорость плавной камеры наблюдателя</p>
                <Slider 
                  min="0"
                  max="0.4"
                  step="0.01"
                  value="0.27"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Передавать управление камерой игроку</p>
                <Select 
                  class="setting"
                  title={"Нет"}
                  options={[
                    {
                      name:"Да",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Нет", 
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
                <p className='setting__name'>Клавиша отслеживания гранаты</p>
                <Select 
                  class="setting"
                  title={"Alt слева"}
                  options={[
                    {
                      name:"Alt слева",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Shift слева", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Клавиша перезарядки", 
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
                <p className='setting__name'>Показывать запись убийства автоматически</p>
                <Select 
                  class="setting"
                  title={"Да"}
                  options={[
                    {
                      name:"Да",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Нет", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    }
                  ]}
                  minwidth="50px"
                  isBackground={false}
                />
              </li>


              <p id="item" className='customization__title'>Предмет</p>
              <li className='setting'>
                <p className='setting__name'>Быстрый граффити (наносится отпусканием клавиши)</p>
                <Select 
                  class="setting"
                  title={"Да"}
                  options={[
                    {
                      name:"Да",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Нет", 
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
                <p className='setting__name'>Переключать оружие на поднятое</p>
                <Select 
                  class="setting"
                  title={"Нет"}
                  options={[
                    {
                      name:"Да",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Нет", 
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
                <p className='setting__name'>Задержать выход из прицеливания после выстрела</p>
                <Select 
                  class="setting"
                  title={"Нет"}
                  options={[
                    {
                      name:"Да",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Нет", 
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
                <p className='setting__name'>Вид модели рук и оружия</p>
                <Select 
                  class="setting"
                  title={"Стандартный"}
                  options={[
                    {
                      name:"Стандартный",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Увеличенный", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Классический", 
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
                <p className='setting__name'>Всегда показывать снаряжение</p>
                <Select 
                  class="setting"
                  title={"Нет"}
                  options={[
                    {
                      name:"Да",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Нет", 
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
                <p className='setting__name'>Закрывать магазин после покупки</p>
                <Select 
                  class="setting"
                  title={"Нет"}
                  options={[
                    {
                      name:"Да",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Нет", 
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
                <p className='setting__name'>Открывать меню покупок кнопкой действия</p>
                <Select 
                  class="setting"
                  title={"Да"}
                  options={[
                    {
                      name:"Нет",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Да", 
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
                <p className='setting__name'>Начальная позиция мыши в меню покупок</p>
                <Select 
                  class="setting"
                  title={"Центр кругового меню покупок"}
                  options={[
                    {
                      name:"Центр кругового меню покупок",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Позиция прицела", 
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
                <p className='setting__name'>Клавиши цифр в меню покупок</p>
                <Select 
                  class="setting"
                  title={"Использовать для покупок"}
                  options={[
                    {
                      name:"Использовать для покупок",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Использовать для игры", 
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
                <p className='setting__name'>Покупка оружия для союзников</p>
                <Select 
                  class="setting"
                  title={"Левый Ctrl"}
                  options={[
                    {
                      name:"Левый Ctrl",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Левый Alt", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Левый Shift", 
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
                <p className='setting__name'>Достать последнее оружие кнопкой кругового меню</p>
                <Select 
                  class="setting"
                  title={"Да"}
                  options={[
                    {
                      name:"Да",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Нет", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    }
                  ]}
                  minwidth="50px"
                  isBackground={false}
                />
              </li>


              <p id="radar" className='customization__title'>Радар/планшет</p>
              <li className='setting'>
                <p className='setting__name'>Расположение карты на планшете</p>
                <Select 
                  class="setting"
                  title={"Вращать и показывать всю карту"}
                  options={[
                    {
                      name:"Центрировать на игроке",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Вращать и показывать всю карту", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Закрепить карты севером кверху", 
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
                <p className='setting__name'>Центрировать радар на игроке</p>
                <Select 
                  class="setting"
                  title={"Да"}
                  options={[
                    {
                      name:"Да",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Нет", 
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
                <p className='setting__name'>Вращать радар</p>
                <Select 
                  class="setting"
                  title={"Да"}
                  options={[
                    {
                      name:"Да",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Нет", 
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
                <p className='setting__name'>Размер радара</p>
                <Slider 
                  min="0.4"
                  max="1.0"
                  step="0.01"
                  value="0.7"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Приближение радара</p>
                <Slider 
                  min="0.8"
                  max="1.3"
                  step="0.01"
                  value="1.00"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Изменять форму радара в таблице результатов</p>
                <Select 
                  class="setting"
                  title={"Да"}
                  options={[
                    {
                      name:"Да",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Нет", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    }
                  ]}
                  minwidth="50px"
                  isBackground={false}
                />
              </li>


              <p id="aim" className='customization__title'>Прицел</p>
              <img className='customization__aim' src={aim_settings} alt="aim" draggable="false"/>
              <li className='setting'>
                <p className='setting__name'>Стиль прицела</p>
                <Select 
                  class="setting"
                  title={"Классический (статичный)"}
                  options={[
                    {
                      name:"По умолчанию",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "По умолчанию (статичный)", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Классический", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Классический (динамический)", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Классический (статичный)", 
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
                <p className='setting__name'>Точка в центре</p>
                <Select 
                  class="setting"
                  title={"Нет"}
                  options={[
                    {
                      name:"Да",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Нет", 
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
                <p className='setting__name'>Длина</p>
                <Slider 
                  min="0.0"
                  max="10.0"
                  step="0.1"
                  value="3.3"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Толщина</p>
                <Slider 
                  min="0.1"
                  max="6.0"
                  step="0.1"
                  value="0.8"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Зазор</p>
                <Slider 
                  min="-5.0"
                  max="5.0"
                  step="0.1"
                  value="1.0"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Обводка</p>
                <Slider 
                  min="0.0"
                  max="3.0"
                  step="0.1"
                  value="1.0"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Красный</p>
                <Slider 
                  min="0"
                  max="255"
                  step="1"
                  value="50"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Зелёный</p>
                <Slider 
                  min="0"
                  max="255"
                  step="1"
                  value="255"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Синий</p>
                <Slider 
                  min="0"
                  max="255"
                  step="1"
                  value="55"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Прозрачность</p>
                <Slider 
                  min="0"
                  max="255"
                  step="1"
                  value="255"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Т-образный</p>
                <Select 
                  class="setting"
                  title={"Нет"}
                  options={[
                    {
                      name:"Да",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Нет", 
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
                <p className='setting__name'>Зазор зависит от оружия</p>
                <Select 
                  class="setting"
                  title={"Нет"}
                  options={[
                    {
                      name:"Нет",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Да", 
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
                <p className='setting__name'>Показывать чужие прицелы</p>
                <Select 
                  class="setting"
                  title={"Все"}
                  options={[
                    {
                      name:"Нет",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Друзья и участники лобби", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Все", 
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
          <div className='customization__button' onClick={props.handleResetSettingsClick}>
            <img className='customization__button-icon' src={timeIcon} alt="icon" draggable="false"/>
            <p className='customization__button-text'>СБРОС</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game;