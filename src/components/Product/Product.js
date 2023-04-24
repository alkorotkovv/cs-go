import React  from 'react';

function Product(props) {

  function handleArrLeftClick() {

  }

  function handleArrRightClick() {

  }
  
  return (
    <div className='product'>
      <img className='product__logo' src={props.logo} alt="logo" onClick={handleArrLeftClick}/>
      <p className='product__title'>{props.name}</p>
      <p className='product__price'>{props.price}</p>
    </div>
  )
}

export default Product;