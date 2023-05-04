import React  from 'react';
import Select from '../../../Select/Select';

function Stickers(props) {

  const [isAll, setIsAll] = React.useState(true)
  const [isPatch, setIsPatch] = React.useState(false);
  const [isSticker, setIsSticker] = React.useState(false);
  const [isGraffiti, setIsGraffiti] = React.useState(false);

  //Обработчики режимов игры
  function handleAllClick() {
    setIsAll(true);
    setIsPatch(false);
    setIsSticker(false);
    setIsGraffiti(false);
  }

  function handlePatchClick() {
    setIsAll(false);
    setIsPatch(true);
    setIsSticker(false);
    setIsGraffiti(false);
  }

  function handleStickerClick() {
    setIsAll(false);
    setIsPatch(false);
    setIsSticker(true);
    setIsGraffiti(false);
  }

  function handleGraffitiClick() {
    setIsAll(false);
    setIsPatch(false);
    setIsSticker(false);
    setIsGraffiti(true);
  }

  
  return (
    <div className={"type type_official" + (props.isVisible ? " type_visible" : " ")}>
      <ul className='type__regyms'>
        <li className={"type__regym" + (isAll ? " type__regym_active" : " ")} onClick={handleAllClick}><p className='type__regym-text'>Вся графика</p></li>
        <li className={"type__regym" + (isPatch ? " type__regym_active" : " ")} onClick={handlePatchClick}><p className='type__regym-text'>Нашивки</p></li>
        <li className={"type__regym" + (isSticker ? " type__regym_active" : " ")} onClick={handleStickerClick}><p className='type__regym-text'>Наклейки</p></li>
        <li className={"type__regym" + (isGraffiti ? " type__regym_active" : " ")} onClick={handleGraffitiClick}><p className='type__regym-text'>Граффити</p></li>
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
        Стикеры
      </div>
    </div>
  )
}

export default Stickers;