import React  from 'react';
import Select from '../../../Select/Select';

function Containers(props) {

  const [isAll, setIsAll] = React.useState(true)
  const [isWeapon, setIsWeapon] = React.useState(false);
  const [isSticker, setIsSticker] = React.useState(false);
  const [isGraffiti, setIsGraffiti] = React.useState(false);
  const [isSouvenir, setIsSouvenir] = React.useState(false);
  const [isInstrument, setIsInstrument] = React.useState(false);

  //Обработчики режимов игры
  function handleAllClick() {
    setIsAll(true);
    setIsWeapon(false);
    setIsSticker(false);
    setIsGraffiti(false);
    setIsSouvenir(false);
    setIsInstrument(false);
  }

  function handleWeaponClick() {
    setIsAll(false);
    setIsWeapon(true);
    setIsSticker(false);
    setIsGraffiti(false);
    setIsSouvenir(false);
    setIsInstrument(false);
  }

  function handleStickerClick() {
    setIsAll(false);
    setIsWeapon(false);
    setIsSticker(true);
    setIsGraffiti(false);
    setIsSouvenir(false);
    setIsInstrument(false);
  }

  function handleGraffitiClick() {
    setIsAll(false);
    setIsWeapon(false);
    setIsSticker(false);
    setIsGraffiti(true);
    setIsSouvenir(false);
    setIsInstrument(false);
  }

  function handleSouvenirClick() {
    setIsAll(false);
    setIsWeapon(false);
    setIsSticker(false);
    setIsGraffiti(false);
    setIsSouvenir(true);
    setIsInstrument(false);
  }

  function handleInstrumentClick() {
    setIsAll(false);
    setIsWeapon(false);
    setIsSticker(false);
    setIsGraffiti(false);
    setIsSouvenir(false);
    setIsInstrument(true);
  }

  
  return (
    <div className={"type type_official" + (props.isVisible ? " type_visible" : " ")}>
      <ul className='type__regyms'>
        <li className={"type__regym" + (isAll ? " type__regym_active" : " ")} onClick={handleAllClick}><p className='type__regym-text'>Все</p></li>
        <li className={"type__regym" + (isWeapon ? " type__regym_active" : " ")} onClick={handleWeaponClick}><p className='type__regym-text'>Кейсы с оружием</p></li>
        <li className={"type__regym" + (isSticker ? " type__regym_active" : " ")} onClick={handleStickerClick}><p className='type__regym-text'>Капсулы с наклейками</p></li>
        <li className={"type__regym" + (isGraffiti ? " type__regym_active" : " ")} onClick={handleGraffitiClick}><p className='type__regym-text'>Ящики с граффити</p></li>
        <li className={"type__regym" + (isSouvenir ? " type__regym_active" : " ")} onClick={handleSouvenirClick}><p className='type__regym-text'>Сувенирные кейсы</p></li>
        <li className={"type__regym" + (isInstrument ? " type__regym_active" : " ")} onClick={handleInstrumentClick}><p className='type__regym-text'>Инструменты</p></li>
        <div className='type__select'>
          <Select 
            class="bots"
            options={[
              {
                name: "По новизне",
                titled: true,         //Параметр указывает устанавливать ли текст опции в заголовок селекта
                handle: (arg) => {    //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                  
                }
              },
              {
                name: "По качеству", 
                titled: true,
                handle: (arg) => {
                  
                }
              },
              {
                name: "По алфавиту", 
                titled: true,
                handle: (arg) => {
                  
                }
              },
              {
                name: "По ячейке", 
                titled: true,
                handle: (arg) => {
                  
                }
              },
              {
                name: "По коллекции", 
                titled: true,
                handle: (arg) => {
                  
                }
              },
              {
                name: "По использованию", 
                titled: true,
                handle: (arg) => {
                  
                }
              }
            ]}
            minwidth="164px"
            isBackground={false}
          />
        </div>
      </ul>
      <div className='type__main'>
        Containers
      </div>
    </div>
  )
}

export default Containers;