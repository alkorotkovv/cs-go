import React  from 'react';

function Download(props) {

  const [isCompetitive, setIsCompetitive] = React.useState(true)
  const [isDual, setIsDual] = React.useState(false)
  const [isUsual, setIsUsual] = React.useState(false)
  const [isDeathmatch, setIsDeathmatch] = React.useState(false)
  const [isMilitary, setIsMilitary] = React.useState(false)
  const [isZone, setIsZone] = React.useState(false)

  
  return (
    <div className={"type type_download" + (props.isVisible ? " type_visible" : " ")}>
      <div className='type__main'>

      </div>
      <div className='type__bottom'>
        <div className='type__button'>
          <p className='type__button-text'>НАЧАТЬ </p>
          <div className='type__button-color'></div>
        </div>
      </div>
    </div>
  )
}

export default Download;