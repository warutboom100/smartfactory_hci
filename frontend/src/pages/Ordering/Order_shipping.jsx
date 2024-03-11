import React, { useState } from 'react';
import shipping from '../../assets/images/shipping.png';
import box from '../../assets/images/box.png';
import Shipping_card from './components/Shipping_card';

import grape from '../../assets/images/grape.png'; 
import mango from '../../assets/images/mango.png'; 
import pineapple from '../../assets/images/pineapple.png'; 
import starwbery from '../../assets/images/starwbery.png'; 

import TruckButton from './components/Checkoutbutton';

function Order_Shipping({logindata}) {
  const [products, setProducts] = useState(['n','n','n','n']);

  const handleIncrement = (fruit) => {
    const nonNCount = products.filter(item => item !== 'n').length;
    if (nonNCount < 4) {
      setProducts(prevProducts => {
        const newProducts = [...prevProducts];
        const firstEmptyIndex = newProducts.indexOf('n');
        if (firstEmptyIndex !== -1) {
          newProducts[firstEmptyIndex] = fruit;
        }
        return newProducts;
      });
    }
  };

  const handleDecrement = (fruit) => {
    setProducts(prevData => {
      const lastIndex = prevData.lastIndexOf(fruit); // ค้นหา index ของ fruit ที่พบล่าสุดใน array
      if (lastIndex !== -1) {
        const newData = [...prevData];
        newData[lastIndex] = 'n'; // แทนค่าที่พบล่าสุดด้วย 'n'
        newData.sort((a, b) => (a === 'n') - (b === 'n')); // เรียงลำดับโดยให้ 'n' อยู่หลังสุด
        return newData;
      } else {
        return prevData;
      }
    });
  };
  const ResetProduct = () => {
    setProducts(['n','n','n','n']);

  };

  

  const getColorImageURL = (color) => {
    
    let imageURL;
    switch(color) {
      case 'G':
        imageURL = mango;
        break;
      case 'R':
        imageURL = starwbery;
        break;
      case 'B':
        imageURL = grape;
        break;
      case 'Y':
        imageURL = pineapple;
        break;
      default:
        imageURL = box;
        break;
      
    }
    return imageURL;
  };

  
  return (
    <>
      
      <div className="p-4 wrapper container-lg ">
        <div className="card px-2">
          <div className="card-body">
            <li className="d-flex" to="/">
              <img src={shipping} alt="" height="32px" width="32px" />
              <div className="px-2 h3" style={{ fontWeight: 'bold'}}>เลือกสินค้าที่ต้องการ</div>
            </li>
            <hr className="status-line red" />
            <Shipping_card handleIncrement={handleIncrement} handleDecrement={handleDecrement} products={products}/>
            <hr className="status-line red" />
            <div className="d-flex justify-content-center mb-5 px-2">
              <div className="me-auto p-2 ">
                <div className="px-2 h3 "id="box-checkout" style={{ fontWeight: 'bold'}}>TOTAL</div>
              </div>
              <div className="p-1">
                <div className="d-flex flex-row mb-0 " id="box-checkout">
                  {products.map((item, index) => (
                    <img
                      key={index}
                      className="p-1"
                      src={getColorImageURL(item)}
                      alt=""
                      height="64px"
                      width="64px"
                    />
                  ))}
                  
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center mb-3">
              {/* <button type="button" className="checkout mb-3" onClick={handleCheckout}>CHECKOUT</button> */}
              <TruckButton product={products} logindata={logindata} ResetProduct={ResetProduct}/>
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Order_Shipping;