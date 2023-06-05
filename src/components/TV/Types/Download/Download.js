import React  from 'react';
import Match from '../../../Match/Match';
import infoIcon from '../../../../images/info-icon.png';
import link from '../../../../images/link.png';
import urn from '../../../../images/urn.png';

function Download(props) {

  const [id, setId] = React.useState(-1);
  
  React.useEffect(() => {
    props.matches.find((item) => item.download) ? setId(props.matches.find((item) => item.download).id) : setId(-1);
  }, [props.matches])
  
  //Обработчик клика по матчу
  function handleMatchClick(id) {
    setId(id);
  };

  //Обработчик удаления матча
  function handleDeleteClick() {
    setId(props.matches[0].id);
    props.setMatches(
      props.matches.map((item, index) =>
      item.id === id ? { ...item, download: false } : { ...item }
      )
    );
  };
  
  return (
    <div className={"type type_download" + (props.isVisible ? " type_visible" : " ")}>
      <div className='type__main'>
        <div className='regym__main-wrapper'>
          { id < 0 ?
            (<>
              <div className="regym__secondary">
                <img className='download__logo' src={infoIcon} alt="logo" draggable="false"/>
                <p className='download__text'>Не загружен ни один соревновательный матч. Вы&nbsp;можете загрузить матч из раздела «Ваши матчи»</p>
              </div>
            </>)
            :
            (<>
              <div className="regym__secondary regym__secondary_matches">
                <div className='matches'>
                  <ul className="regym__matches">
                    {
                      props.matches.filter(item => item.download === true).map((element, index) => 
                        <Match 
                          key={index}
                          index={index}
                          id={id}
                          object={element}
                          handleMatchClick={handleMatchClick}
                        />
                      )
                    }  
                  </ul>
                </div>
                <div className='legend'>
                  <div className='legend__main'>
                    <img className='legend__match-picture' src={props.matches.find((item) => item.id === id).image} alt="match" draggable="false"/>
                  </div>
                  <div className='legend__bottom'>
                    <button className='legend__button'>Смотреть</button>
                    <img className="legend__link" src={link} alt="link" draggable="false"/>
                    <img className={"legend__link" + (props.matches.find((item) => item.id === id).download ? "":" legend__link_unactive")} src={urn} alt="urn" draggable="false" onClick={handleDeleteClick}/>
                  </div>
                </div>
              </div>
            </>
            )
          } 
        </div>
      </div>
    </div>
  )
}

export default Download;