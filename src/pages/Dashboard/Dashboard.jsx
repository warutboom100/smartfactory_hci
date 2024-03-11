import React, { useEffect, useState } from 'react';
import indicators from '../../assets/images/indicators.png'; 
import efficiency from '../../assets/images/efficiency.png'; 
import VideoStreaming from './components/Videostreaming';
import Rawstat_card from './components/Rawstat_card';
import OEEstat_card from './components/OEEstat_card';

import OrderList from './components/OrderList';

import datajson from '../../services/pending_data_sample'
import orderjson from '../../services/order_data_sample'

import axios from 'axios';
import "../Ulelement.css";

function Dashboard() {
  const [pendingdata, setPendingdata] = useState("");
  const [completedata, setCompletedata] = useState("");
  
  useEffect(() => {
  const get_pending = async () => {
    try {
      const response = await axios.post(
        `https://smartfactory.hcilab.net/app/product-customization/api.php`,
        {"action": "ORDER_LIST_PENDING"}
      );
    
      setPendingdata(response.data);
      console.log(response.data);
    } catch (error) {
      
    }
  };
  const get_complete = async () => {
    try {
      const response = await axios.post(
        `https://smartfactory.hcilab.net/app/product-customization/api.php`,
        {"action": "ORDER_LIST_COMPLETE"}
      );
    
      setCompletedata(response.data);
      // console.log(response.data);
    } catch (error) {
      
    }
  };

  // get_complete();
  // get_pending();
  const interval = setInterval(() => {

    // get_complete();
    // get_pending();
  }, 1000);

  return () => {
    clearInterval(interval); 
  };
}, []);



  return (
    <>
      <div className="p-2 wrapper container-xl ">
        <div className="row">
          <VideoStreaming/>
          <OrderList data ={datajson}/>
        </div>   

            <div className="card my-2 h-100">
              <div className="card-body" >
                <li className="d-flex" to="/">
                  <img src={indicators} alt="" height="32px" width="32px" />
                  <div className="p-1 h5" style={{ fontWeight: 'bold' }}>สถิติการทำงานระบบ</div>
                </li>
                <hr className="status-line" />
                <OEEstat_card orderjson={orderjson}/>

              </div>
            </div>
    
            <div className="card my-2 h-100">
              <div className="card-body" >
                <li className="d-flex" to="/">
                  <img src={efficiency} alt="" height="32px" width="32px" />
                  <div className=" h5 p-1" style={{ fontWeight: 'bold' }}>OEE</div>
                </li>
                <hr className="status-line" />
                <Rawstat_card datajson={datajson} orderjson={orderjson}/>
                
              </div>
            </div>
          
        
      </div>
    
      
    </>
    
  )
}

export default Dashboard