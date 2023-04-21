import React  from 'react';

function Product(props) {

  function handleArrLeftClick() {

  }

  function handleArrRightClick() {

  }
  
  return (
    <div className='product'>
      <img className='product__logo' src={"../"} alt="logo" onClick={handleArrLeftClick}/>
      <p className='product__title'>Tovar</p>
      <p className='product__price'>72p</p>
    </div>
  )
}

export default Product;