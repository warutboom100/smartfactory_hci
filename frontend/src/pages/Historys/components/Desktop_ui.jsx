import React, { useState } from 'react';
import "./Desktop_table.css";

import grape from '../../../assets/images/grape.png'; 
import mango from '../../../assets/images/mango.png'; 
import pineapple from '../../../assets/images/pineapple.png'; 
import starwbery from '../../../assets/images/starwbery.png'; 
import datajson from '../../../services/order_data_sample';

function Desktop_ui() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

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
    }
    return imageURL;
  };

  const getStatusStyle = (status) => {
    let backgroundColor, color;

    switch (status) {
      case 'SUCCESS':
        backgroundColor = '#2ED855';
        color = 'white';
        break;
      case 'FAILURE':
        backgroundColor = '#ED1D2B';
        color = 'white';
        break;
      default:
        backgroundColor = 'gray';
        color = 'white';
    }

    return (
      <span className="badge" id ="historybadge"style={{ backgroundColor, color}}>
        {status}
      </span>
    );
  };

  const renderDetailImages = (detail) => {
    return detail.map((color, index) => (
      <img key={index} className="detail-image1" src={getColorImageURL(color)} alt={color} />
    ));
  };


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = datajson[0].slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
        <div className="market-status-table mt-2">
            <div className="table-responsive-sm">
              <table className="dbkit-table no-wrap align-middle table ">
                <thead>
                  <tr className="heading-td">
                    <th className="mv-icon">#</th>
                    <th className="coin-name">ผู้ใช้งาน</th>
                    <th className="buy">สินค้า</th>
                    <th className="sell">เวลาที่เริ่ม</th>
                    <th className="trends">เวลาสิ้นสุด</th>
                    <th className="attachments">สถานะ</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.owner ? (item.owner.length > 10 ? `${item.owner.slice(0, 10)}...` : item.owner) : ''}</td>
                      <td>{renderDetailImages(item.detail)}</td>
                      <td>{item.time_order_begin}</td>
                      <td>{item.time_order_end}</td>
                      <td>{getStatusStyle(item.status)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Pagination */}
          <div className="pagination">
                <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>{"<"}</button>
                <select value={currentPage} onChange={(e) => paginate(parseInt(e.target.value))}>
                    {Array.from({ length: Math.ceil(datajson[0].length / itemsPerPage) }, (_, index) => index + 1).map(pageNumber => (
                    <option key={pageNumber} value={pageNumber}>{pageNumber}</option>
                    ))}
                </select>
                <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(datajson[0].length / itemsPerPage)}>{">"}</button>

                
               
                </div>

    </>
        
   
  );
}

export default Desktop_ui