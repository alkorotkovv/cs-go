import React  from 'react';
import Select from '../../../Select/Select';
import timeIcon from '../../../../images/map_time_icon.png';
import Slider from '../../../Slider/Slider';
import Input from '../../../Input/Input';

function Keyboard(props) {

  const customizationRef = React.useRef(null);
  
  const [isKeyboard, setIsKeyboard] = React.useState(true)
  const [isMovement, setIsMovement] = React.useState(false)
  const [isWeapons, setIsWeapons] = React.useState(false)
  const [isInterface, setIsInterface] = React.useState(false)
  const [isCommunication, setIsCommunication] = React.useState(false)  
  const [isButtons, setIsButtons] = React.useState(false)

  //Обработчики режимов игры
  function handleKeyboardClick() {
    setIsKeyboard(true);
    setIsMovement(false);
    setIsWeapons(false);
    setIsInterface(false);
    setIsCommunication(false);
    setIsButtons(false);
    customizationRef.current.scrollTo({left: 0, top: document.getElementById('keyboard').offsetTop - customizationRef.current.offsetTop, behavior: "smooth"});
  }

  function handleMovementClick() {
    setIsKeyboard(false);
    setIsMovement(true);
    setIsWeapons(false);
    setIsInterface(false);
    setIsCommunication(false);
    setIsButtons(false);
    customizationRef.current.scrollTo({left: 0, top: document.getElementById('movement').offsetTop - customizationRef.current.offsetTop, behavior: "smooth"});
  }

  function handleWeaponsClick() {
    setIsKeyboard(false);
    setIsMovement(false);
    setIsWeapons(true);
    setIsInterface(false);
    setIsCommunication(false);
    setIsButtons(false);
    customizationRef.current.scrollTo({left: 0, top: document.getElementById('weapons').offsetTop - customizationRef.current.offsetTop, behavior: "smooth"});
  }

  function handleInterfaceClick() {
    setIsKeyboard(false);
    setIsMovement(false);
    setIsWeapons(false);
    setIsInterface(true);
    setIsCommunication(false);
    setIsButtons(false);
    customizationRef.current.scrollTo({left: 0, top: document.getElementById('interface').offsetTop - customizationRef.current.offsetTop, behavior: "smooth"});
  }

  function handleCommunicationClick() {
    setIsKeyboard(false);
    setIsMovement(false);
    setIsWeapons(false);
    setIsInterface(false);
    setIsCommunication(true);
    setIsButtons(false);
    customizationRef.current.scrollTo({left: 0, top: document.getElementById('communication').offsetTop - customizationRef.current.offsetTop, behavior: "smooth"});
  }

  function handleButtonsClick() {
    setIsKeyboard(false);
    setIsMovement(false);
    setIsWeapons(false);
    setIsInterface(false);
    setIsCommunication(false);
    setIsButtons(true);
    customizationRef.current.scrollTo({left: 0, top: document.getElementById('buttons').offsetTop - customizationRef.current.offsetTop, behavior: "smooth"});
  }
  
  return (
    <div className={"regym regym_settings-picture" + (props.isVisible ? " regym_visible" : " ")}>
      <ul className='regym__settings regym__settings_customization'>
        <li className={"type__regym" + (isKeyboard ? " type__regym_active" : " ")} onClick={handleKeyboardClick}>
          <p className='type__regym-text type__regym-text_small'>Настройки клавиатуры и мыши</p>
        </li>
        <li className={"type__regym" + (isMovement ? " type__regym_active" : " ")} onClick={handleMovementClick}>
          <p className='type__regym-text type__regym-text_small'>Передвижение</p>
        </li>
        <li className={"type__regym" + (isWeapons ? " type__regym_active" : " ")} onClick={handleWeaponsClick}>
          <p className='type__regym-text type__regym-text_small'>Оружие</p>
        </li>
        <li className={"type__regym" + (isInterface ? " type__regym_active" : " ")} onClick={handleInterfaceClick}>
          <p className='type__regym-text type__regym-text_small'>Интерфейс</p>
        </li>
        <li className={"type__regym" + (isCommunication ? " type__regym_active" : " ")} onClick={handleCommunicationClick}>
          <p className='type__regym-text type__regym-text_small'>Общение</p>
        </li>
        <li className={"type__regym" + (isButtons ? " type__regym_active" : " ")} onClick={handleButtonsClick}>
          <p className='type__regym-text type__regym-text_small'>Кнопки колеса чата</p>
        </li>
      </ul>
      <div className='regym__main-wrapper'>
        <div className='regym__main regym__main_settings'>
          <div className='customization' ref={customizationRef}>
            <ul className='customization__list'>
              <p id="keyboard" className='customization__title'>Настройки клавиатуры и мыши</p>
              <li className='setting'>
                <p className='setting__name'>Инверсия мыши</p>
                <Select 
                  class="setting"
                  title={"Выкл."}
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
                <p className='setting__name'>Приседание</p>
                <Select 
                  class="setting"
                  title={"Удерживать"}
                  options={[
                    {
                      name:"Удерживать",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Переключать", 
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
                <p className='setting__name'>Режим ходьбы</p>
                <Select 
                  class="setting"
                  title={"Удерживать"}
                  options={[
                    {
                      name:"Удерживать",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Переключать", 
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
                <p className='setting__name'>Чувсвительность мыши</p>
                <Slider 
                  min="0.05"
                  max="8.00"
                  step="0.01"
                  value="2.50"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Чувсвительность в приближении</p>
                <Slider 
                  min="0.10"
                  max="1.50"
                  step="0.01"
                  value="1.00"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Ввод напрямую</p>
                <Select 
                  class="setting"
                  title={"Выкл."}
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
                <p className='setting__name'>Ускорение мыши</p>
                <Select 
                  class="setting"
                  title={"Выкл."}
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


              <p id="movement" className='customization__title'>Передвижение</p>
              <li className='setting'>
                <p className='setting__name'>Переключить отображение снаряжения</p>
                <Input 
                  title={"I"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Идти вперёд</p>
                <Input 
                  title={"W"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Идти назад</p>
                <Input 
                  title={"S"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Идти влево</p>
                <Input 
                  title={"A"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Идти вправо</p>
                <Input 
                  title={"D"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Медленная хотьба</p>
                <Input 
                  title={"Shift"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Прыжок</p>
                <Input 
                  title={"Space"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Присесть</p>
                <Input 
                  title={"Ctrl"}
                />
              </li>


              <p id="weapons" className='customization__title'>Оружие</p>
              <li className='setting'>
                <p className='setting__name'>Использовать</p>
                <Input 
                  title={"E"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Огонь</p>
                <Input 
                  title={"Mouse1"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Альтернативный огонь</p>
                <Input 
                  title={"Mouse2"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Перезарядка</p>
                <Input 
                  title={"R"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Круговое меню оружия</p>
                <Input 
                  title={""}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Предыдущее оружие</p>
                <Input 
                  title={"MWheelUp"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Следующее оружие</p>
                <Input 
                  title={"MWheelDown"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Последнее оружие</p>
                <Input 
                  title={"Q"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Бросить оружие</p>
                <Input 
                  title={"G"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Осмотреть оружие</p>
                <Input 
                  title={"F"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Меню покупок</p>
                <Input 
                  title={"B"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Автозакупка</p>
                <Input 
                  title={"F3"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Купить снова</p>
                <Input 
                  title={"F4"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Основное оружие</p>
                <Input 
                  title={"1"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Дополнительное оружие</p>
                <Input 
                  title={"2"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Оружие ближнего боя</p>
                <Input 
                  title={"3"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Смена гранат</p>
                <Input 
                  title={"4"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Взрывчатка и ловушки</p>
                <Input 
                  title={"5"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Осколочная граната</p>
                <Input 
                  title={"6"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Световая граната</p>
                <Input 
                  title={"7"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Дымовая граната</p>
                <Input 
                  title={"8"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Ложная граната</p>
                <Input 
                  title={"9"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Коктейль Молотова</p>
                <Input 
                  title={"0"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Zeus x27</p>
                <Input 
                  title={""}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Медшприц</p>
                <Input 
                  title={"X"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Снаряжение</p>
                <Input 
                  title={""}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Меню граффити</p>
                <Input 
                  title={"T"}
                />
              </li>


              <p id="interface" className='customization__title'>Интерфейс</p>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Таблица очков</p>
                <Input 
                  title={"TAB"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Показывать снаряжение команды</p>
                <Input 
                  title={""}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Начать голосование</p>
                <Input 
                  title={""}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Выбрать команду</p>
                <Input 
                  title={"M"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Открыть/закрыть консоль</p>
                <Input 
                  title={"`"}
                />
              </li>


              <p id="communication" className='customization__title'>Общение</p>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Поставить метку</p>
                <Input 
                  title={""}
                />
              </li> 
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Радиосообщение</p>
                <Input 
                  title={""}
                />
              </li> 
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Радио: приказы</p>
                <Input 
                  title={""}
                />
              </li> 
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Радио: стандартные сообщения</p>
                <Input 
                  title={""}
                />
              </li> 
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Радио: информационные сообщения</p>
                <Input 
                  title={""}
                />
              </li> 
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Сообщение команде</p>
                <Input 
                  title={"U"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Сообщение всем</p>
                <Input 
                  title={"Y"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Использовать микрофон</p>
                <Input 
                  title={"K"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Временно отключить чат</p>
                <Input 
                  title={""}
                />
              </li>


              <p id="buttons" className='customization__title'>Кнопки колеса чата</p>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Колесо чата 1</p>
                <Input 
                  title={""}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Колесо чата 2</p>
                <Input 
                  title={"Z"}
                />
              </li>
              <li className='setting setting_nopadding'>
                <p className='setting__name'>Колесо чата 3</p>
                <Input 
                  title={""}
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

export default Keyboard;