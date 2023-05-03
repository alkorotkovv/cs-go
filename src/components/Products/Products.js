import React  from 'react';
import Product from "../Product/Product";
import arrowDown from '../../images/arr_down.png';


function Products(props) {
  
  return (
    <div className='shop__items'>
      <img className={"shop__arrow shop__arrow_left" + ((props.productsArray.length < 5) && (!props.isCuponsVisible) ? " shop__arrow_unvisible" : "") + ((props.countProductsBlock > 0) || (props.isFindVisible) ? " shop__arrow_active" : "")} src={arrowDown} alt="arrow" onClick={props.handleArrLeftClick} draggable="false"/>
      <ul className={"shop__products" + (props.isProductsSwipingLeft ? " shop__products_left" : "") + (props.isProductsSwipingRight ? " shop__products_right" : "") + (props.isFindVisible ? " shop__products_unvisible" : "")}>
        {
          props.productsArray.slice(4 * props.countProductsBlock , 4 * props.countProductsBlock + 4).map((element, index) => 
            <Product 
              key={index}
              logo={element.logo}
              name={element.name}
              price={element.price}
              link={element.link}
            />            
          )
        }  
      </ul>
      <div className={"shop__find" + (props.isFindVisible ? " shop__find_visible" : "") + (props.isProductsSwipingLeft ? " shop__find_left" : "") + (props.isProductsSwipingRight ? " shop__find_right" : "")}>
        <input className='shop__input' type="text" name="cupon" id="cupon" placeholder="Поиск"></input>
        <button className='shop__button' type="submit">Поиск купонов</button>
      </div>
      <img className={"shop__arrow shop__arrow_right" + ((props.productsArray.length < 5) && (!props.isCuponsVisible) ? " shop__arrow_unvisible" : "") + ((props.countProductsBlock < Math.floor(props.productsArray.length/4) - 1) || ((props.isCuponsVisible) && (!props.isFindVisible)) ? " shop__arrow_active" : "")} src={arrowDown} alt="arrow" onClick={props.handleArrRightClick} draggable="false"/>
    </div>      
  )
}

export default Products;