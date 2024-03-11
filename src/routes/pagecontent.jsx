import React, { useEffect, useState } from 'react';
import Dashboard from "../pages/Dashboard/Dashboard";
import Order from "../pages/Ordering/Order_shipping";
import History from "../pages/Historys/History";

function pagecontent() {
  const [pages, setPages] = useState("dashboard");
  
  const setPageBody = (page) => {
    setPages(page);
  };

  return pages;
}

export default pagecontent