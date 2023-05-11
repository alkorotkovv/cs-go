import React  from 'react';
import Panel from '../Panel/Panel';
import Picture from './Types/Picture/Picture';



function Settings(props) {

  const [isPicture, setIsPicture] = React.useState(true)
  const [isSound, setIsSound] = React.useState(false)
  const [isGame, setIsGame] = React.useState(false)
  const [isKeyboardMouse, setIsKeyboardMouse] = React.useState(false)
  const [isController, setIsController] = React.useState(false)

  //Обработчики режимов игры
  function handlePictureClick() {
    setIsPicture(true);
    setIsSound(false);
    setIsGame(false);
    setIsKeyboardMouse(false);
    setIsController(false);
  }

  function handleSoundClick() {
    setIsPicture(false);
    setIsSound(true);
    setIsGame(false);
    setIsKeyboardMouse(false);
    setIsController(false);
  }

  function handleGameClick() {
    setIsPicture(false);
    setIsSound(false);
    setIsGame(true);
    setIsKeyboardMouse(false);
    setIsController(false);
  }

  function handleKeyboardMouseClick() {
    setIsPicture(false);
    setIsSound(false);
    setIsGame(false);
    setIsKeyboardMouse(true);
    setIsController(false);
  }

  function handleControllerClick() {
    setIsPicture(false);
    setIsSound(false);
    setIsGame(false);
    setIsKeyboardMouse(false);
    setIsController(true);
  }

  
  return (
    <>
    <Panel title={"НАСТРОЙКИ ИГРЫ"} name="settings" isVisible={props.isVisible}>
      <ul className='type__regyms'>
        <li className={"type__regym" + (isPicture ? " type__regym_active" : " ")} onClick={handlePictureClick}><p className='type__regym-text'>Изображение</p></li>
        <li className={"type__regym" + (isSound ? " type__regym_active" : " ")} onClick={handleSoundClick}><p className='type__regym-text'>Звук</p></li>
        <li className={"type__regym" + (isGame ? " type__regym_active" : " ")} onClick={handleGameClick}><p className='type__regym-text'>Игра</p></li>
        <li className={"type__regym" + (isKeyboardMouse ? " type__regym_active" : " ")} onClick={handleKeyboardMouseClick}><p className='type__regym-text'>Клавиатура и мышь</p></li>
        <li className={"type__regym" + (isController ? " type__regym_active" : " ")} onClick={handleControllerClick}><p className='type__regym-text'>Контроллер</p></li>
      </ul>
      { Picture ? <Picture isVisible={isPicture} /> : <></>}
    </Panel>
    </>
  )
}

export default Settings;