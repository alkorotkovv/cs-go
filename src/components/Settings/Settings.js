import React  from 'react';
import Panel from '../Panel/Panel';
import Picture from './Types/Picture/Picture';
import Sound from './Types/Sound/Sound';
import Game from './Types/Game/Game';
import Keyboard from './Types/Keyboard/Keyboard';
import Controller from './Types/Controller/Controller';


function Settings(props) {

  const [isPicture, setIsPicture] = React.useState(true);
  const [isSound, setIsSound] = React.useState(false);
  const [isGame, setIsGame] = React.useState(false);
  const [isKeyboard, setIsKeyboard] = React.useState(false);
  const [isController, setIsController] = React.useState(false);

  React.useEffect(() => {        
    document.addEventListener("keydown", handleKeyDown);
      return () => { document.removeEventListener("keydown", handleKeyDown)};
  });

  //Обработчик нажатия ESC
  function handleKeyDown(evt) {
    if (!props.isAnyPopupVisible)
    switch (evt.code) {
      case "Escape": props.handleMainClick(); break;
      default: ;
    }
  };

  //Обработчики режимов игры
  function handlePictureClick() {
    setIsPicture(true);
    setIsSound(false);
    setIsGame(false);
    setIsKeyboard(false);
    setIsController(false);
  }

  function handleSoundClick() {
    setIsPicture(false);
    setIsSound(true);
    setIsGame(false);
    setIsKeyboard(false);
    setIsController(false);
  }

  function handleGameClick() {
    setIsPicture(false);
    setIsSound(false);
    setIsGame(true);
    setIsKeyboard(false);
    setIsController(false);
  }

  function handleKeyboardClick() {
    setIsPicture(false);
    setIsSound(false);
    setIsGame(false);
    setIsKeyboard(true);
    setIsController(false);
  }

  function handleControllerClick() {
    setIsPicture(false);
    setIsSound(false);
    setIsGame(false);
    setIsKeyboard(false);
    setIsController(true);
  }
  
  return (
    <>
    <Panel title={"НАСТРОЙКИ ИГРЫ"} name="settings" isVisible={props.isVisible}>
      <ul className='type__regyms'>
        <li className={"type__regym" + (isPicture ? " type__regym_active" : " ")} onClick={handlePictureClick}><p className='type__regym-text'>Изображение</p></li>
        <li className={"type__regym" + (isSound ? " type__regym_active" : " ")} onClick={handleSoundClick}><p className='type__regym-text'>Звук</p></li>
        <li className={"type__regym" + (isGame ? " type__regym_active" : " ")} onClick={handleGameClick}><p className='type__regym-text'>Игра</p></li>
        <li className={"type__regym" + (isKeyboard ? " type__regym_active" : " ")} onClick={handleKeyboardClick}><p className='type__regym-text'>Клавиатура и мышь</p></li>
        <li className={"type__regym" + (isController ? " type__regym_active" : " ")} onClick={handleControllerClick}><p className='type__regym-text'>Контроллер</p></li>
      </ul>
      { isPicture ? <Picture isVisible={isPicture} handleResetSettingsClick={props.handleResetSettingsClick}/> : <></>}
      { isSound ? <Sound isVisible={isSound} handleResetSettingsClick={props.handleResetSettingsClick}/> : <></>}
      { isGame ? <Game isVisible={isGame} handleResetSettingsClick={props.handleResetSettingsClick}/> : <></>}
      { isKeyboard ? <Keyboard isVisible={isKeyboard} handleResetSettingsClick={props.handleResetSettingsClick}/> : <></>}
      { isController ? <Controller isVisible={isController} handleResetSettingsClick={props.handleResetSettingsClick}/> : <></>}
    </Panel>
    </>
  )
}

export default Settings;