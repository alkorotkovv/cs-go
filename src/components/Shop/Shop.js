import React  from 'react';
import { cuponsArray, shopArray, casesArray } from '../../utils/constants';
import Products from '../Products/Products';

function Shop(props) {

  const [isCuponsVisible, setIsCuponsVisible] = React.useState(true);
  const [isShopVisible, setIsShopVisible] = React.useState(false);
  const [isMarketplaceVisible, setIsMarketplaceVisible] = React.useState(false);
  const [productsArray, setProductsArray] = React.useState(cuponsArray);

  function handleCuponsClick() {
    setIsCuponsVisible(true);
    setIsShopVisible(false);
    setIsMarketplaceVisible(false);
    setProductsArray(cuponsArray);
  }

  function handleShopClick() {
    setIsCuponsVisible(false);
    setIsShopVisible(true);
    setIsMarketplaceVisible(false);
    setProductsArray(shopArray);
  }

  function handleMarketplaceClick() {
    setIsCuponsVisible(false);
    setIsShopVisible(false);
    setIsMarketplaceVisible(true);
    setProductsArray(casesArray);
  }
  
  return (
    <div className='shop'>
      <div className='shop__header'>
        <p className={"shop__title" + (isCuponsVisible ? " shop__title_active" : "")} onClick={handleCuponsClick}>Купоны</p>
        <p className={"shop__title" + (isShopVisible ? " shop__title_active" : "")} onClick={handleShopClick}>Магазин</p>
        <p className={"shop__title" + (isMarketplaceVisible ? " shop__title_active" : "")} onClick={handleMarketplaceClick}>Торговая площадка</p>
      </div>
      <Products productsArray={productsArray} isCuponsVisible={isCuponsVisible} isShopVisible={isShopVisible} isMarketplaceVisible={isMarketplaceVisible} />
    </div>

    
  )
}

export default Shop;