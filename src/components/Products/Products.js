import React  from 'react';
import Product from "../Product/Product";
import arrowDown from '../../images/arr_down.png';


function Products(props) {

  const [countProductsBlock, setCountProductsBlock] = React.useState(0);

  function handleArrLeftClick() {
    if (countProductsBlock > 0) {
      setCountProductsBlock(countProductsBlock - 1);
    }    
  }

  function handleArrRightClick() {
    if (countProductsBlock < Math.floor(props.productsArray.length/4) - 1) {
      setCountProductsBlock(countProductsBlock + 1);
    }
  }
  
  return (
    <div className='shop__items'>
      <img className={"shop__arrow shop__arrow_left" + ((props.productsArray.length < 5) ? " shop__arrow_unvisible" : "") + ((countProductsBlock > 0) ? " shop__arrow_active" : "")} src={arrowDown} alt="arrow" onClick={handleArrLeftClick}/>
      <ul className="shop__products">
        {
          props.productsArray.slice(4 * countProductsBlock , 4 * countProductsBlock + 4).map((element, index) => 
            <Product 
              key={index}
              logo={element.logo}
              name={element.name}
              price={element.price}
            />
          )
        }  
      </ul>
      <img className={"shop__arrow shop__arrow_right" + ((props.productsArray.length < 5) ? " shop__arrow_unvisible" : "") + ((countProductsBlock < Math.floor(props.productsArray.length/4) - 1) ? " shop__arrow_active" : "")} src={arrowDown} alt="arrow" onClick={handleArrRightClick}/>
    </div>      
  )
}

export default Products;