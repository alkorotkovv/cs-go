import React  from 'react';
import { Link } from 'react-router-dom';

function Product(props) {

  console.log(props)

  function handleArrLeftClick() {

  }

  function handleArrRightClick() {

  }
  
  return (
    <a className='product' href={props.link} target="blank">
      <img className='product__logo' src={props.logo} alt="logo" onClick={handleArrLeftClick}/>
      <p className='product__title'>{props.name}</p>
      <p className='product__price'>{props.price}</p>
    </a>
  )
}

export default Product;