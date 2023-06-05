import React  from 'react';
import Match from '../../../Match/Match';
import link from '../../../../images/link.png';
import urn from '../../../../images/urn.png';
import download from '../../../../images/download.png';

function Matches(props) {
  
  const [id, setId] = React.useState(props.matches[0].id);
  const [isDownloading, setIsDownloading] = React.useState(false);

  //Обработчик клика по матчу
  function handleMatchClick(id) {
    setId(id);
  };

  //Обработчик нажатия на загрузку матча
  function handleDownloadClick() {  
    setIsDownloading(true);
    props.setMatches(
      props.matches.map((item, index) =>
        item.id === id ? { ...item, downloading: true } : { ...item }
      )
    );
    setTimeout(() => {
      setIsDownloading(false);
      props.setMatches(
        props.matches.map((item, index) =>
          item.id === id ? { ...item, download: true, downloading: false } : { ...item }
        )
      );
    }, 1000);
  };

  //Обработчик удаления матча
  function handleDeleteClick() {    
    props.setMatches(
      props.matches.map((item, index) =>
        item.id === id ? { ...item, download: false } : { ...item }
      )
    );
    
  };
  

  return (
    <div className={"type type_matches" + (props.isVisible ? " type_visible" : " ")}>
      <div className='type__main'>
        <div className='regym__main-wrapper'>
          <div className="regym__secondary regym__secondary_matches">
            <div className='matches'>
              <ul className="regym__matches">
                {
                  props.matches.map((element, index) => 
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
                <div className={'legend__download' + (isDownloading ? " legend__download_visible" : "")}>
                  <img className="legend__download-icon" src={download} alt="download" draggable="false"/>
                  <p className='legend__download-text'>Скачивание</p>
                </div>
                <button className='legend__button' onClick={handleDownloadClick}>Загрузить</button>
                <img className="legend__link" src={link} alt="link" draggable="false"/>
                <img className={"legend__link" + (props.matches.find((item) => item.id === id).download ? "":" legend__link_unactive")} src={urn} alt="urn" draggable="false" onClick={handleDeleteClick}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Matches;