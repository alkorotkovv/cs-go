import React  from 'react';

import { newsArray } from '../../utils/constants';
import newsIcon from '../../images/news.png';

function New(props) {
  
  return (
    <div className='new'>
      <img className='new__logo' src={props.logo} alt="новость"/>
      <h3 className='new__title'>{props.title}</h3>
      <p className='new__date'>{props.date}</p>
      <p className='new__text'>{props.text}</p>
    </div>

    
  )
}

export default New;