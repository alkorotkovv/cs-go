import React  from 'react';

import { newsArray } from '../../utils/constants';
import newsIcon from '../../images/news.png';
import New from '../New/New';

function News(props) {
  
  return (
    <div className='news'>
      <img className='news__logo' src={newsIcon} alt="новости"/>
      <p className='news__title'>Новости</p>
      <ul className="news__items">
      {
        newsArray.map((element, index) => 
          <New 
            key={index}
            logo={element.logo}
            date={element.date}
            title={element.title}
            text={element.text}
          />
        )
      }  
      </ul>
    </div>

    
  )
}

export default News;