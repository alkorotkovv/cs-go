import React  from 'react';

import { productsArray } from '../../utils/constants';
import arrowDown from '../../images/arr_down.png';
import Product from '../Product/Product';

function Shop(props) {

  function handleArrLeftClick() {

  }

  function handleArrRightClick() {

  }
  
  return (
    <div className='shop'>
      <div className='shop__header'>
        <p className='shop__title'>Купоны</p>
        <p className='shop__title'>Магазин</p>
        <p className='shop__title'>Торговая площадка</p>
      </div>
      <div className='shop__items'>
        <img className='shop__arrow shop__arrow_left' src={arrowDown} alt="arrow" onClick={handleArrLeftClick}/>
        <ul className="shop__products">
          {
            productsArray.map((element, index) => 
              <Product 
                key={index}
                logo={element.logo}
                name={element.name}
                price={element.price}
              />
            )
          }  
        </ul>
        <img className='rank__arrow rank__arrow_right' src={arrowDown} alt="arrow" onClick={handleArrRightClick}/>
      </div>      
    </div>

    
  )
}

export default Shop;