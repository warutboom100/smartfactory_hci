import React from 'react'


import quality from '../../../assets/images/quality.png'; 
import performance from '../../../assets/images/performance.png'; 
import available from '../../../assets/images/available.png'; 
import manufacturing from '../../../assets/images/manufacturing.png'; 

import CardStatus from "./Cardstatus";

import performance_oee from '../../../services/calculatePerformance'
import quality_oee from '../../../services/calculateQuality'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function OEEstat_card({orderjson}) {

  
  return (
    <>
        <div className="container-sm ">
              <OwlCarousel items={4} responsive={{0: {items: 2},600: {items: 3},1100: {items: 4}} }className='owl-theme' loop margin={0} nav>
               
               <div className='item'>
                    <CardStatus data ={"100 %"} status ={"Availability"} images = {available}/>
                </div>
                <div className='item'>
                    <CardStatus data ={performance_oee(orderjson[0]).toFixed(2)*100 +" %"} status ={"Performance"} images = {manufacturing}/>
                </div>
                <div className='item'>
                    <CardStatus data ={quality_oee(orderjson[0]).toFixed(2)*100+" %"} status ={"Quality"} images = {quality}/>
                </div>
                <div className='item'>
                    <CardStatus data ={quality_oee(orderjson[0]).toFixed(2)*performance_oee(orderjson[0]).toFixed(2)*100 +" %"} status ={"OEE"} images = {performance}/>
                </div>
               
              
              </OwlCarousel>

        </div>
    
    </>
  )
}

export default OEEstat_card