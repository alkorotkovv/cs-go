import React  from 'react';
import { cuponsArray, shopArray, casesArray } from '../../utils/constants';
import Products from '../Products/Products';

function Shop(props) {

  const [isCuponsVisible, setIsCuponsVisible] = React.useState(true);
  const [isShopVisible, setIsShopVisible] = React.useState(false);
  const [isMarketplaceVisible, setIsMarketplaceVisible] = React.useState(false);
  const [productsArray, setProductsArray] = React.useState(cuponsArray);

  const [countCuponsBlock, setCountCuponsBlock] = React.useState(0);
  const [countShopBlock, setCountShopBlock] = React.useState(0);
  const [countMarketplaceBlock, setCountMarketplaceBlock] = React.useState(0);
  const [countProductsBlock, setCountProductsBlock] = React.useState(0);

  const [isProductsSwipingLeft, setIsProductsSwipingLeft] = React.useState(false);
  const [isProductsSwipingRight, setIsProductsSwipingRight] = React.useState(false);

  const [isFindVisible, setIsFindVisible] = React.useState(false);


//Функция обработки нажатия на Купоны
  function handleCuponsClick() {
    setIsCuponsVisible(true);
    setIsShopVisible(false);
    setIsMarketplaceVisible(false);
    setProductsArray(cuponsArray);
    setCountProductsBlock(countCuponsBlock);
  }

//Функция обработки нажатия на Магазин
  function handleShopClick() {
    setIsCuponsVisible(false);
    setIsShopVisible(true);
    setIsMarketplaceVisible(false);
    setProductsArray(shopArray);
    setCountProductsBlock(countShopBlock);
    setIsFindVisible(false);
  }

//Функция обработки нажатия на Торговую площадку
  function handleMarketplaceClick() {
    setIsCuponsVisible(false);
    setIsShopVisible(false);
    setIsMarketplaceVisible(true);
    setProductsArray(casesArray);
    setCountProductsBlock(countMarketplaceBlock);
    setIsFindVisible(false);
  }

  function handleArrLeftClick() {
    
    if (isCuponsVisible) {
      if (countCuponsBlock > 0) {
        SwipeLeft();
        setCountCuponsBlock(countCuponsBlock - 1)
        setCountProductsBlock(countCuponsBlock -1);
      }
      //Скрываем поиск купонов
      setIsFindVisible(false);
      //SwipeLeft();
    }
    else if (isShopVisible) {
      if (countShopBlock > 0) {
        SwipeLeft();
        setCountShopBlock(countShopBlock - 1)
        setCountProductsBlock(countShopBlock - 1);
      }
    }
    else if (isMarketplaceVisible) {
      if (countMarketplaceBlock > 0) {
        SwipeLeft();
        setCountMarketplaceBlock(countMarketplaceBlock - 1)
        setCountProductsBlock(countMarketplaceBlock - 1);
      }
    }
  }

  function handleArrRightClick() {
    if (isCuponsVisible) {
      if (countCuponsBlock < Math.floor(productsArray.length/4) - 1) {
        SwipeRight();
        setCountCuponsBlock(countCuponsBlock + 1);
        setCountProductsBlock(countCuponsBlock + 1);
      }
      //Показываем поиск купонов
      setIsFindVisible(true);
      //SwipeRight();
    }
    else if (isShopVisible) {
      if (countShopBlock < Math.floor(productsArray.length/4) - 1) {
        SwipeRight();
        setCountShopBlock(countShopBlock + 1);
        setCountProductsBlock(countShopBlock + 1);
      }
    }
    else if (isMarketplaceVisible) {
      if (countMarketplaceBlock < Math.floor(productsArray.length/4) - 1) {
        SwipeRight();
        setCountMarketplaceBlock(countMarketplaceBlock + 1);
        setCountProductsBlock(countMarketplaceBlock + 1);
      }
    }
  }

  //Функции свайпа товаров влево и вправо
  function SwipeLeft() {
    setIsProductsSwipingLeft(true);
    setTimeout(function() {
      setIsProductsSwipingLeft(false)
    }, 200)
  }

  function SwipeRight() {
    setIsProductsSwipingRight(true);
    setTimeout(function() {
      setIsProductsSwipingRight(false)
    }, 200)
  }
  
  return (
    <div className={"shop" + (props.isVisible ? " " : " shop_unvisible")}>
      <div className='shop__header'>
        <p className={"shop__title" + (isCuponsVisible ? " shop__title_active" : "")} onClick={handleCuponsClick}>Купоны</p>
        <p className={"shop__title" + (isShopVisible ? " shop__title_active" : "")} onClick={handleShopClick}>Магазин</p>
        <p className={"shop__title" + (isMarketplaceVisible ? " shop__title_active" : "")} onClick={handleMarketplaceClick}>Торговая площадка</p>
      </div>
      <Products 
        productsArray={productsArray} 
        countProductsBlock={countProductsBlock}
        handleArrLeftClick={handleArrLeftClick} 
        handleArrRightClick={handleArrRightClick}
        isProductsSwipingLeft={isProductsSwipingLeft} 
        isProductsSwipingRight={isProductsSwipingRight}
        isCuponsVisible={isCuponsVisible}
        isFindVisible={isFindVisible}
        />
    </div>

    
  )
}

export default Shop;