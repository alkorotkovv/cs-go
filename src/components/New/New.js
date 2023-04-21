import React  from 'react';

function New(props) {
  
  return (
    <div className='new'>
      <img className='new__logo' src={props.logo} alt="новость"/>
      <div className='new__block'>
        <p className='new__date'>{props.date}</p>
        <h3 className='new__title'>{props.title}</h3>
        <p className='new__text'>{props.text}</p>
      </div>
    </div>  
  )
}

export default New;