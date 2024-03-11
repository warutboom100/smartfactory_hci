import React, { useEffect, useState } from 'react';
import Navbar from "./components/layouts/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import './App.css'
import Dashboard from "./pages/Dashboard/Dashboard";
import Order from "./pages/Ordering/Order_shipping";
import History from "./pages/Historys/History";


import axios from 'axios';

function App() {
  const [logindata, setLogindata] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [pages, setPages] = useState("dashboard");

  useEffect(() => {
        let abortController = new AbortController();
        const loaddata = async () => {
          try {
            setLoading(true);
            let response = await axios.get(`https://ik25o0qwj7.execute-api.ap-southeast-1.amazonaws.com/wepapp_admin/WKa9BnJm-MovementEvent`, {
              signal: abortController.signal,
              
            });
    
            setLogindata(response.data);
            setError("");
          } catch (error) {
            setError("Something went wrong", error);
          } finally {
            setLoading(false);
          }
        }
        loaddata();
       
        return () => abortController.abort();
        
    }, []);
  
  const setPageBody = (page) => {
    setPages(page);
  };
  const Pagebody = (page) => {
    switch(page) {
      case 'dashboard':
        
        return <Dashboard />;
      case 'order':
        
        return <Order logindata={logindata.body}/>;
      case 'history':
        return <History />;
      default:
        return <Dashboard />;
    }
  
  };

  return (
    <>
      <div className="App">
        <Navbar logindata={logindata.body}/> 
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/order" element={<Order logindata={logindata.body}/>} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
