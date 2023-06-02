import React  from 'react';
import Panel from '../Panel/Panel';
import Majors from './Types/Majors/Majors';
import Matches from './Types/Matches/Matches';
import Download from './Types/Download/Download';
import Tournaments from './Types/Tournaments/Tournaments';
import Live from './Types/Live/Live';

function TV(props) {
  
  const [isMajors, setIsMajors] = React.useState(true)
  const [isMatches, setIsMatches] = React.useState(false)
  const [isDownload, setIsDownload] = React.useState(false)
  const [isLive, setIsLive] = React.useState(false)
  const [isTournaments, setIsTournaments] = React.useState(false)

  //Обработчики режимов игры
  function handleMajorsClick() {
    setIsMajors(true);
    setIsMatches(false);
    setIsDownload(false);
    setIsLive(false);
    setIsTournaments(false);
  }

  function handleMatchesClick() {
    setIsMajors(false);
    setIsMatches(true);
    setIsDownload(false);
    setIsLive(false);
    setIsTournaments(false);
  }

  function handleDownloadClick() {
    setIsMajors(false);
    setIsMatches(false);
    setIsDownload(true);
    setIsLive(false);
    setIsTournaments(false);
  }

  function handleLiveClick() {
    setIsMajors(false);
    setIsMatches(false);
    setIsDownload(false);
    setIsLive(true);
    setIsTournaments(false);
  }

  function handleTournamentsClick() {
    setIsMajors(false);
    setIsMatches(false);
    setIsDownload(false);
    setIsLive(false);
    setIsTournaments(true);
  }

  
  return (
    <>
    <Panel title={"СМОТРЕТЬ"} name="tv" isVisible={props.isVisible}>
          <ul className='type__regyms'>
            <li className={"type__regym" + (isMajors ? " type__regym_active" : " ")} onClick={handleMajorsClick}><p className='type__regym-text'>Мейджоры</p></li>
            <li className={"type__regym" + (isMatches ? " type__regym_active" : " ")} onClick={handleMatchesClick}><p className='type__regym-text'>Ваши матчи</p></li>
            <li className={"type__regym" + (isDownload ? " type__regym_active" : " ")} onClick={handleDownloadClick}><p className='type__regym-text'>Загружено</p></li>
            <li className={"type__regym" + (isLive ? " type__regym_active" : " ")} onClick={handleLiveClick}><p className='type__regym-text'>Прямой эфир</p></li>
            <li className={"type__regym" + (isTournaments ? " type__regym_active" : " ")} onClick={handleTournamentsClick}><p className='type__regym-text'>Турниры</p></li>
          </ul>
        { isMajors ? <Majors isVisible={isMajors} /> : <></>}
        { isMatches ? <Matches isVisible={isMatches} /> : <></>}
        { isDownload ? <Download isVisible={isDownload} /> : <></>}
        { isLive ? <Live isVisible={isLive} /> : <></>}
        { isTournaments ? <Tournaments isVisible={isTournaments} /> : <></>}
    </Panel>
    </>
  )
}

export default TV;