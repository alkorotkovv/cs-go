import React  from 'react';

function New(props) {
  
  return (
    <div className='new'>
      <div className='new__logo-block'>
        <img className='new__logo' src={props.logo} alt="новость" draggable="false"/>
      </div>
      <div className='new__article-block'>
        <p className='new__date'>{props.date}</p>
        <h3 className='new__title'>{props.title}</h3>
        <p className='new__text'>{props.text}</p>
      </div>
    </div>  
  )
}

export default New;