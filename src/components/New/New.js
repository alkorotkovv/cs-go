import React  from 'react';

import { newsArray } from '../../utils/constants';
import newsIcon from '../../images/news.png';

function New(props) {
  
  return (
    <div className='new'>
      <img className='new__logo' src={newsIcon} alt="новость"/>
      <p className='new__title'>оврвпврвовловллвлвлвв</p>
    </div>

    
  )
}

export default New;