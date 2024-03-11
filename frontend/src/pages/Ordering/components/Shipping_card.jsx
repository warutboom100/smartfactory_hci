import React from 'react';

import grape from '../../../assets/images/grape.png'; 
import mango from '../../../assets/images/mango.png'; 
import pineapple from '../../../assets/images/pineapple.png'; 
import starwbery from '../../../assets/images/starwbery.png'; 

import Fruitmenu from './Fruitmenu';

function Shipping_card({ handleIncrement, handleDecrement ,products}) {
  return (
    <div className="container">
        <div className="row gy-3">
            <div className="col-lg-6">
                <Fruitmenu images ={starwbery} headtitle ={"Strawberry"} subtitle ={"สีแดง"} handleIncrement={handleIncrement} handleDecrement={handleDecrement} fruit={"R"} products={products}/>
            </div>
            <div className="col-lg-6">
                <Fruitmenu images ={mango} headtitle ={"Mango"} subtitle ={"สีเขียว"} handleIncrement={handleIncrement} handleDecrement={handleDecrement} fruit={"G"} products={products}/>
            </div>
            <div className="col-lg-6">
                <Fruitmenu images ={grape} headtitle ={"Grape"} subtitle ={"สีน้ำเงิน"} handleIncrement={handleIncrement} handleDecrement={handleDecrement} fruit={"B"} products={products}/>
            </div>
            <div className="col-lg-6">
                <Fruitmenu images ={pineapple} headtitle ={"Pineapple"} subtitle ={"สีเหลือง"} handleIncrement={handleIncrement} handleDecrement={handleDecrement} fruit={"Y"} products={products}/>
            </div>
        </div>
    </div>

  );
}

export default Shipping_card;