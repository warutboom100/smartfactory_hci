import React from 'react'

import loading from '../../../assets/images/loading.png'; 
import error from '../../../assets/images/error.png'; 
import success from '../../../assets/images/success.png'; 
import total from '../../../assets/images/total.png'; 

import CardStatus from "./Cardstatus";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Rawstat_card({datajson,orderjson}) {

  const countSuccessStatus = (orderData) => {
    let successCount = 0;
    orderData.forEach((order) => {
      if (order.status === 'SUCCESS') {
        successCount++;
      }
    });
    return successCount;
  };
  const countPendingStatus = (orderData) => {
    let PendingCount = 0;
    orderData.forEach((order) => {
      if (order.status === 'PENDING') {
        PendingCount++;
      }
    });
    return PendingCount;
  };
  const countFailureStatus = (orderData) => {
    let FailureCount = 0;
    orderData.forEach((order) => {
      if (order.status === 'FAILURE') {
        FailureCount++;
      }
    });
    return FailureCount;
  };
  return (
    <>
        <div className="container-sm ">
              <OwlCarousel items={4} responsive={{0: {items: 2},600: {items: 3},1100: {items: 4}} }className='owl-theme' loop margin={0} nav>
                <div className='item '>
                    <CardStatus data ={countPendingStatus(datajson[0])} status ={"Pending"} images = {loading} />
                </div>
                <div className='item'>
                    <CardStatus data ={countFailureStatus(orderjson[0])} status ={"Failure"} images = {error}/>
                </div>
                <div className='item'>
                    <CardStatus data ={countSuccessStatus(orderjson[0])} status ={"Success"} images = {success}/>
                </div>
                
                <div className='item'>
                    <CardStatus data ={orderjson[0].length} status ={"Total"} images = {total}/>
                </div>
              
              </OwlCarousel>

        </div>
    
    </>
  )
}

export default Rawstat_card