import React  from 'react';

import { newsArray } from '../../utils/constants';
import newsIcon from '../../images/news.png';
import New from '../New/New';

function News(props) {
  
  return (
    <div className='news'>
      <img className='news__logo' src={newsIcon} alt="новости"/>
      <p className='news__title'>Новости</p>
      <ul className="new">
      {
        newsArray.map((element, index) => 
          <New 
            key={index}
            avatar={element.avatar}
            name={element.name}
            rank={element.rank}
            country={element.country}
            isProgressShow={props.isProgressShow}
            isVisible={props.isVisible}
          />
        )
      }  
      </ul>
    </div>

    
  )
}

export default News;