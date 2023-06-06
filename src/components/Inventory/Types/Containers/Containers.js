import React  from 'react';
import Select from '../../../Select/Select';
import { inventoryArray } from '../../../../utils/constants';
import Gun from '../../../Gun/Gun';

function Containers(props) {

  const [array, setArray] = React.useState(props.array);
  const [sortArray, setSortArray] = React.useState(array);
  const [sortType, setSortType] = React.useState("По качеству");

  const [isAll, setIsAll] = React.useState(true)
  const [isWeapon, setIsWeapon] = React.useState(false);
  const [isSticker, setIsSticker] = React.useState(false);
  const [isGraffiti, setIsGraffiti] = React.useState(false);
  const [isSouvenir, setIsSouvenir] = React.useState(false);
  const [isInstrument, setIsInstrument] = React.useState(false);

  React.useEffect(() => {
    switch (sortType) {
      case "По качеству":
        setSortArray(array);
        break;
      case "По новизне":
        setSortArray(array.slice().sort((a, b) => {return new Date(b.date) - new Date(a.date)}));
        break;
      case "По алфавиту":
        setSortArray(array.slice().sort((a, b) => a.weapon + a.name > b.weapon + b.name? 1 : -1));
        break;
      default:
        setSortArray(array);
    }
  }, [array, sortType])

  //Обработчики режимов игры
  function handleAllClick() {
    setArray(props.array.filter((e) => (
      e.type === "Case" || 
      e.type === "Capsule" || 
      e.type === "GraffitiCase" || 
      e.type === "SouvenirCase" || 
      e.type === "Instrument")));
    setIsAll(true);
    setIsWeapon(false);
    setIsSticker(false);
    setIsGraffiti(false);
    setIsSouvenir(false);
    setIsInstrument(false);
  }

  function handleWeaponClick() {
    setArray(props.array.filter((e) => (
      e.type === "Case")));
    setIsAll(false);
    setIsWeapon(true);
    setIsSticker(false);
    setIsGraffiti(false);
    setIsSouvenir(false);
    setIsInstrument(false);
  }

  function handleStickerClick() {
    setArray(props.array.filter((e) => (
      e.type === "Capsule")));
    setIsAll(false);
    setIsWeapon(false);
    setIsSticker(true);
    setIsGraffiti(false);
    setIsSouvenir(false);
    setIsInstrument(false);
  }

  function handleGraffitiClick() {
    setArray(props.array.filter((e) => (
      e.type === "GraffitiCase")));
    setIsAll(false);
    setIsWeapon(false);
    setIsSticker(false);
    setIsGraffiti(true);
    setIsSouvenir(false);
    setIsInstrument(false);
  }

  function handleSouvenirClick() {
    setArray(props.array.filter((e) => (
      e.type === "SouvenirCase")));
    setIsAll(false);
    setIsWeapon(false);
    setIsSticker(false);
    setIsGraffiti(false);
    setIsSouvenir(true);
    setIsInstrument(false);
  }

  function handleInstrumentClick() {
    setArray(props.array.filter((e) => (
      e.type === "Instrument")));
    setIsAll(false);
    setIsWeapon(false);
    setIsSticker(false);
    setIsGraffiti(false);
    setIsSouvenir(false);
    setIsInstrument(true);
  }

  
  return (
    <div className={"type type_official" + (props.isVisible ? " type_visible" : " ")}>
      <ul className='type__regyms type__regyms_inventory'>
        <li className={"type__regym" + (isAll ? " type__regym_active" : " ")} onClick={handleAllClick}><p className='type__regym-text'>Все</p></li>
        <li className={"type__regym" + (isWeapon ? " type__regym_active" : " ")} onClick={handleWeaponClick}><p className='type__regym-text'>Кейсы с оружием</p></li>
        <li className={"type__regym" + (isSticker ? " type__regym_active" : " ")} onClick={handleStickerClick}><p className='type__regym-text'>Капсулы с наклейками</p></li>
        <li className={"type__regym" + (isGraffiti ? " type__regym_active" : " ")} onClick={handleGraffitiClick}><p className='type__regym-text'>Ящики с граффити</p></li>
        <li className={"type__regym" + (isSouvenir ? " type__regym_active" : " ")} onClick={handleSouvenirClick}><p className='type__regym-text'>Сувенирные кейсы</p></li>
        <li className={"type__regym" + (isInstrument ? " type__regym_active" : " ")} onClick={handleInstrumentClick}><p className='type__regym-text'>Инструменты</p></li>
        <div className='type__select'>
          <Select 
            class="sort-containers"
            options={[
              {
                name: "По новизне",
                titled: true,         //Параметр указывает устанавливать ли текст опции в заголовок селекта
                handle: (arg) => {    //arg это и есть объект опции {name: ..., handle: ...}, логика внутри компонента Select по клику на элемент
                  setSortType(arg.name)
                }
              },
              {
                name: "По качеству", 
                titled: true,
                handle: (arg) => {
                  setSortType(arg.name)
                }
              },
              {
                name: "По алфавиту", 
                titled: true,
                handle: (arg) => {
                  setSortType(arg.name)
                }
              },
              {
                name: "По ячейке", 
                titled: true,
                handle: (arg) => {
                  setSortType(arg.name)
                }
              },
              {
                name: "По коллекции", 
                titled: true,
                handle: (arg) => {
                  setSortType(arg.name)
                }
              },
              {
                name: "По использованию", 
                titled: true,
                handle: (arg) => {
                  setSortType(arg.name)
                }
              }
            ]}
            title="По качеству"
            minwidth="164px"
            isBackground={false}
          />
        </div>
      </ul>
      <div className='type__main'>
        <div className='regym__main-wrapper'>
          <div className='regym__main regym__main_inventory'>
            <div className='guns'>
              <ul className="regym__guns">
                {
                  sortArray.map((element, index) => 
                    <Gun 
                      key={index}
                      object={element}
                      handleInspectClick={props.handleInspectClick}
                    />
                  )
                }  
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Containers;