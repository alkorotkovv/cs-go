import React  from 'react';
import Select from '../../../Select/Select';
import timeIcon from '../../../../images/map_time_icon.png';
import Slider from '../../../Slider/Slider';
import Input from '../../../Input/Input';

function Controller(props) {

  const customizationRef = React.useRef(null);
  
  const [isBinds, setIsBinds] = React.useState(true)
  const [isAimSticks, setIsAimSticks] = React.useState(false)
  const [isAimGyroscope, setIsAimGyroscope] = React.useState(false)
  const [isAimTrackpad, setIsAimTrackpad] = React.useState(false)
  const [isMoveSticks, setIsMoveSticks] = React.useState(false)  
  const [isMoveTrackpad, setIsMoveTrackpad] = React.useState(false)

  //Обработчики режимов игры
  function handleBindsClick() {
    setIsBinds(true);
    setIsAimSticks(false);
    setIsAimGyroscope(false);
    setIsAimTrackpad(false);
    setIsMoveSticks(false);
    setIsMoveTrackpad(false);
    customizationRef.current.scrollTo({left: 0, top: document.getElementById('binds').offsetTop - customizationRef.current.offsetTop, behavior: "smooth"});
  }

  function handleAimSticksClick() {
    setIsBinds(false);
    setIsAimSticks(true);
    setIsAimGyroscope(false);
    setIsAimTrackpad(false);
    setIsMoveSticks(false);
    setIsMoveTrackpad(false);
    customizationRef.current.scrollTo({left: 0, top: document.getElementById('aimsticks').offsetTop - customizationRef.current.offsetTop, behavior: "smooth"});
  }

  function handleAimGyroscopeClick() {
    setIsBinds(false);
    setIsAimSticks(false);
    setIsAimGyroscope(true);
    setIsAimTrackpad(false);
    setIsMoveSticks(false);
    setIsMoveTrackpad(false);
    customizationRef.current.scrollTo({left: 0, top: document.getElementById('aimgyroscope').offsetTop - customizationRef.current.offsetTop, behavior: "smooth"});
  }

  function handleAimTrackpadClick() {
    setIsBinds(false);
    setIsAimSticks(false);
    setIsAimGyroscope(false);
    setIsAimTrackpad(true);
    setIsMoveSticks(false);
    setIsMoveTrackpad(false);
    customizationRef.current.scrollTo({left: 0, top: document.getElementById('aimtrackpad').offsetTop - customizationRef.current.offsetTop, behavior: "smooth"});
  }

  function handleMoveSticksClick() {
    setIsBinds(false);
    setIsAimSticks(false);
    setIsAimGyroscope(false);
    setIsAimTrackpad(false);
    setIsMoveSticks(true);
    setIsMoveTrackpad(false);
    customizationRef.current.scrollTo({left: 0, top: document.getElementById('movesticks').offsetTop - customizationRef.current.offsetTop, behavior: "smooth"});
  }

  function handleMoveTrackpadClick() {
    setIsBinds(false);
    setIsAimSticks(false);
    setIsAimGyroscope(false);
    setIsAimTrackpad(false);
    setIsMoveSticks(false);
    setIsMoveTrackpad(true);
    customizationRef.current.scrollTo({left: 0, top: document.getElementById('movetrackpad').offsetTop - customizationRef.current.offsetTop, behavior: "smooth"});
  }
  
  return (
    <div className={"regym regym_settings-picture" + (props.isVisible ? " regym_visible" : " ")}>
      <ul className='regym__settings regym__settings_customization'>
        <li className={"type__regym" + (isBinds ? " type__regym_active" : " ")} onClick={handleBindsClick}>
          <p className='type__regym-text type__regym-text_small'>Button Binds</p>
        </li>
        <li className={"type__regym" + (isAimSticks ? " type__regym_active" : " ")} onClick={handleAimSticksClick}>
          <p className='type__regym-text type__regym-text_small'>Прицеливание стиком</p>
        </li>
        <li className={"type__regym" + (isAimGyroscope ? " type__regym_active" : " ")} onClick={handleAimGyroscopeClick}>
          <p className='type__regym-text type__regym-text_small'>Прицеливание гироскопом</p>
        </li>
        <li className={"type__regym" + (isAimTrackpad ? " type__regym_active" : " ")} onClick={handleAimTrackpadClick}>
          <p className='type__regym-text type__regym-text_small'>Прицеливание трекпадом</p>
        </li>
        <li className={"type__regym" + (isMoveSticks ? " type__regym_active" : " ")} onClick={handleMoveSticksClick}>
          <p className='type__regym-text type__regym-text_small'>Движение стиком</p>
        </li>
        <li className={"type__regym" + (isMoveTrackpad ? " type__regym_active" : " ")} onClick={handleMoveTrackpadClick}>
          <p className='type__regym-text type__regym-text_small'>Движение трекпадом</p>
        </li>
      </ul>
      <div className='regym__main-wrapper'>
        <div className='regym__main regym__main_settings'>
          <div className='customization' ref={customizationRef}>
            <ul className='customization__list'>
              <p id="binds" className='customization__title'>Button Binds</p>
              <li className='setting'>
                <p className='setting__name'>Отображение иконок контроллера</p>
                <Select 
                  class="setting"
                  title={"Автоматически"}
                  options={[
                    {
                      name:"Автоматически",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Всегда выключено", 
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


              <p id="aimsticks" className='customization__title'>Прицеливание стиком</p>
              <li className='setting'>
                <p className='setting__name'>FlickStick</p>
                <Select 
                  class="setting"
                  title={"Выкл. (Обычное прицеливание)"}
                  options={[
                    {
                      name:"Выкл. (Обычное прицеливание)",
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
                      name: "Включено (выключено при прицеливании)", 
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
                <p className='setting__name'>Invert Aim Y (Pitch)</p>
                <Select 
                  class="setting"
                  title={"Обычный"}
                  options={[
                    {
                      name:"Обычный",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Инверсия", 
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
                <p className='setting__name'>Invert Aim X (Yaw)</p>
                <Select 
                  class="setting"
                  title={"Обычный"}
                  options={[
                    {
                      name:"Обычный",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Инверсия", 
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
                <p className='setting__name'>Yaw Speed</p>
                <Slider 
                  min="0.0"
                  max="720.0"
                  step="1"
                  value="150"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Pitch Speed</p>
                <Slider 
                  min="0.0"
                  max="720.0"
                  step="1"
                  value="119"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Response Curve</p>
                <Slider 
                  min="0.10"
                  max="4.0"
                  step="0.01"
                  value="1.05"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Круговая мёртвая зона</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="34"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Outer Threshold</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="19"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Pitch Deadzone</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="4"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Yaw Deadzone</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="4"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Extra Yaw Speed</p>
                <Slider 
                  min="0.0"
                  max="720.0"
                  step="1"
                  value="11"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Extra Speed Ramp Up Time</p>
                <Slider 
                  min="0.00"
                  max="4.0"
                  step="0.01"
                  value="1.05"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Extra Speed Ramp Up Delay</p>
                <Slider 
                  min="0.0"
                  max="4.0"
                  step="0.01"
                  value="0.25"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Чувствительность при прицеливании 1 уровня</p>
                <Slider 
                  min="0.10"
                  max="1.5"
                  step="0.01"
                  value="1.00"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Чувствительность при прицеливании 2 уровня</p>
                <Slider 
                  min="0.10"
                  max="1.5"
                  step="0.01"
                  value="1.00"
                  unit=""
                />
              </li>


              <p id="aimgyroscope" className='customization__title'>Прицеливание гироскопом</p>
              <li className='setting'>
                <p className='setting__name'>Включать гироскоп</p>
                <Select 
                  class="setting"
                  title={"Всегда"}
                  options={[
                    {
                      name:"Всегда",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "При нажатии кнопки «Прицеливание»", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Когда не включено прицеливание стиком", 
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
                <p className='setting__name'>Invert Aim Y (Pitch)</p>
                <Select 
                  class="setting"
                  title={"Обычный"}
                  options={[
                    {
                      name:"Обычный",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Инверсия", 
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
                <p className='setting__name'>Invert Aim X (Yaw)</p>
                <Select 
                  class="setting"
                  title={"Обычный"}
                  options={[
                    {
                      name:"Обычный",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Инверсия", 
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
                <p className='setting__name'>Баланс движения по горизонтали и вертикали</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="50"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Yaw Deadzone</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="4"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Pitch Deadzone</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="4"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Круговая мёртвая зона</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="34"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Прицельная зона</p>
                <Slider 
                  min="0.00"
                  max="2.00"
                  step="0.01"
                  value="0.75"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Базовая чувствительность</p>
                <Slider 
                  min="0.0"
                  max="20.0"
                  step="0.1"
                  value="4"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Ускорение</p>
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
                <p className='setting__name'>Множитель высокой скорости</p>
                <Slider 
                  min="1.0"
                  max="20.0"
                  step="0.1"
                  value="4"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Порог базовой скорости</p>
                <Slider 
                  min="0.00"
                  max="720.00"
                  step="1"
                  value="80.0"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Порог высокой скорости</p>
                <Slider 
                  min="0"
                  max="1080"
                  step="1"
                  value="360.0"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Чувствительность при прицеливании 1 уровня</p>
                <Slider 
                  min="0.10"
                  max="1.5"
                  step="0.01"
                  value="1.00"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Чувствительность при прицеливании 2 уровня</p>
                <Slider 
                  min="0.10"
                  max="1.5"
                  step="0.01"
                  value="1.00"
                  unit=""
                />
              </li>


              <p id="aimtrackpad" className='customization__title'>Прицеливание трекпадом</p>
              <li className='setting'>
                <p className='setting__name'>Invert Aim Y (Pitch)</p>
                <Select 
                  class="setting"
                  title={"Обычный"}
                  options={[
                    {
                      name:"Обычный",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Инверсия", 
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
                <p className='setting__name'>Invert Aim X (Yaw)</p>
                <Select 
                  class="setting"
                  title={"Обычный"}
                  options={[
                    {
                      name:"Обычный",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Инверсия", 
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
                <p className='setting__name'>Pitch Sensitivity</p>
                <Slider 
                  min="0.05"
                  max="8"
                  step="0.01"
                  value="4.0"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Yaw Sensitivity</p>
                <Slider 
                  min="0.05"
                  max="8"
                  step="0.01"
                  value="4.0"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Чувствительность при прицеливании 1 уровня</p>
                <Slider 
                  min="0.10"
                  max="1.5"
                  step="0.01"
                  value="1.00"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Чувствительность при прицеливании 2 уровня</p>
                <Slider 
                  min="0.10"
                  max="1.5"
                  step="0.01"
                  value="1.00"
                  unit=""
                />
              </li>


              <p id="movesticks" className='customization__title'>Движение стиком</p>
              <li className='setting'>
                <p className='setting__name'>Круговая мёртвая зона</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="34"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Outer Threshold</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="19"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Move Forward/Back Deadzone</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="50"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Strafe Deadzone</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="10"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Response Curve</p>
                <Slider 
                  min="0.01"
                  max="4.0"
                  step="0.01"
                  value="1.00"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Зона хотьбы</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="20"
                  unit="%"
                />
              </li>


              <p id="movetrackpad" className='customization__title'>Движение трекпадом</p>
              <li className='setting'>
                <p className='setting__name'>Круговая мёртвая зона</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="34"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Move Forward/Back Deadzone</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="50"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Strafe Deadzone</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="10"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Forward/Back Sensitivity</p>
                <Slider 
                  min="0.00"
                  max="2.00"
                  step="0.01"
                  value="1.00"
                  unit=""
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Strafe Sensitivity</p>
                <Slider 
                  min="0.00"
                  max="2.00"
                  step="0.01"
                  value="1.00"
                  unit=""
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

export default Controller;