import React  from 'react';

function Product(props) {
  
  return (
    <a className='product' href={props.link} target="blank">
      <img className='product__logo' src={props.logo} alt="logo"/>
      <p className='product__title'>{props.name}</p>
      <p className='product__price'>{props.price}</p>
    </a>
  )
}

export default Product;