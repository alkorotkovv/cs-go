import React  from 'react';
import Select from '../../../Select/Select';
import timeIcon from '../../../../images/map_time_icon.png';
import Slider from '../../../Slider/Slider';

function Sound(props) {

  const customizationRef = React.useRef(null);
  
  const [isSound, setIsSound] = React.useState(true)
  const [isMusic, setIsMusic] = React.useState(false)

  //Обработчики режимов игры
  function handleSoundClick() {
    setIsSound(true);
    setIsMusic(false);
    customizationRef.current.scrollTo({left: 0, top: document.getElementById('sound').offsetTop - customizationRef.current.offsetTop, behavior: "smooth"});
  }

  function handleMusicClick() {
    setIsSound(false);
    setIsMusic(true);
    customizationRef.current.scrollTo({left: 0, top: document.getElementById('music').offsetTop - customizationRef.current.offsetTop, behavior: "smooth"});
  }

  
  return (
    <div className={"regym regym_settings-picture" + (props.isVisible ? " regym_visible" : " ")}>
      <ul className='regym__settings regym__settings_customization'>
        <li className={"type__regym" + (isSound ? " type__regym_active" : " ")} onClick={handleSoundClick}>
          <p className='type__regym-text type__regym-text_small'>Звук</p>
        </li>
        <li className={"type__regym" + (isMusic ? " type__regym_active" : " ")} onClick={handleMusicClick}>
          <p className='type__regym-text type__regym-text_small'>Музыка</p>
        </li>
      </ul>
      <div className='regym__main-wrapper'>
        <div className='regym__main regym__main_settings'>
          <div className='customization' ref={customizationRef}>
            <ul className='customization__list'>
              <p id="sound" className='customization__title'>Звук</p>
              <li className='setting'>
                <p className='setting__name'>Общая громкость</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="35"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Громкость музыки в оверлее Steam</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="10"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Громкость комментатора GOTV</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="15"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Тип звукового устройства</p>
                <Select 
                  class="setting"
                  title={"Стереонаушники"}
                  options={[
                    {
                      name:"Стереонаушники",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Стереодинамики", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "4 динамика с объёмным звуком", 
                      titled: true,
                      handle: (arg) => {
                        
                      }
                    },
                    {
                      name: "Система 5.1 с объёмным звуком", 
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
                <p className='setting__name'>Устройство воспроизведения</p>
                <Select 
                  class="setting"
                  title={"Наушники (Conexant ISST Audio)"}
                  options={[
                    {
                      name:"Наушники (Conexant ISST Audio)",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Динамик (Conexant ISST Audio)", 
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
                <p className='setting__name'>Улучшенная обработка 3D звука</p>
                <Select 
                  class="setting"
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
                <p className='setting__name'>Активация микрофона</p>
                <Select 
                  class="setting"
                  title={"Клавишей"}
                  options={[
                    {
                      name:"Выкл.",
                      titled: true,                       //Параметр указывает устанавливать ли текст опции в заголовок селекта
                      handle: (arg) => {                  //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                        
                      }
                    },
                    {
                      name: "Клавишей", 
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
                <p className='setting__name'>Громкость голосового чата</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="100"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Позиционирование речи игроков</p>
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
                <p className='setting__name'>Не заглушать звук, когда игра свёрнута</p>
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


              <p id="music" className='customization__title'>Музыка</p>
              <li className='setting'>
                <p className='setting__name'>Громкость музыки в главном меню</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="0"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Громкость музыки в начале раунда</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="0"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Громкость музыки в конце раунда</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="0"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Громкость мелодии бомбы/заложника</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="0"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Громкость десятисекундного отсчёта</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="20"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Громкость музыки после смерти</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="0"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Громкость гимпа СЦИ</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="0"
                  unit="%"
                />
              </li>
              <li className='setting'>
                <p className='setting__name'>Отключить гимн СЦИ, если в обеих командах есть живые игроки</p>
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
                <p className='setting__name'>Громкость музыки в запретной зоне</p>
                <Slider 
                  min="0"
                  max="100"
                  step="1"
                  value="0"
                  unit="%"
                />
              </li>
              
            </ul>
          </div>        
        </div>
        <div className='customization__bottom'>
          <div className='customization__button'>
            <img className='customization__button-icon' src={timeIcon} alt="icon" draggable="false"/>
            <p className='customization__button-text' onClick={props.handleResetSettingsClick}>СБРОС</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sound;