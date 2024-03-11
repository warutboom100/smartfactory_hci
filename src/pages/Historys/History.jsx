import React, { useState, useEffect } from 'react';
import stock from '../../assets/images/stock.png';
import Desktop_ui from './components/Desktop_ui';
import Mobile_ui from './components/Mobile_ui';

function History() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 
    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  return (
    <>
      <div className="p-4 wrapper container-sm">
        <div className="card px-2">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <img src={stock} alt="" height="32px" width="32px" />
              <div className="px-2 h3 fw-bold">รายการที่ดำเนินการเสร็จสิ้นแล้ว</div>
            </div>
            {isMobile ? <Mobile_ui /> : <Desktop_ui />}
          </div>
        </div>
      </div>
    </>
  );
}

export default History;
