import React  from 'react';
import Select from '../../../Select/Select';
import timeIcon from '../../../../images/map_time_icon.png';
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
                  class="setting"
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

              <p id="command" className='customization__title'>Общение</p>
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


              
            </ul>
          </div>        
        </div>
        <div className='customization__bottom'>
          <div className='customization__button'>
            <img className='customization__button-icon' src={timeIcon} alt="icon" draggable="false"/>
            <p className='customization__button-text'>СБРОС</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game;