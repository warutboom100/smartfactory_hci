import React, { useState } from 'react';
import "./Mobile_table.css";

import grape from '../../../assets/images/grape.png'; 
import mango from '../../../assets/images/mango.png'; 
import pineapple from '../../../assets/images/pineapple.png'; 
import starwbery from '../../../assets/images/starwbery.png'; 
import datajson from '../../../services/order_data_sample';

function Mobile_ui() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null); // เพิ่ม state สำหรับเก็บข้อมูลของ modal

  const openModal = (item) => {
    setModalData(item); 
    setIsModalOpen(true); 
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setModalData(null); // เมื่อปิด modal ให้ล้างข้อมูลใน state ด้วย
  }

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
                    <th className="attachments">สถานะ</th>
                    <th className="details"></th>
                  </tr>
                </thead>
                <tbody>
                    {currentItems.map((item, index) => (
                        <tr key={index} onClick={() => openModal(item)}>
                        <td>{item.id}</td>
                        <td>{item.owner ? (item.owner.length > 10 ? `${item.owner.slice(0, 8)}...` : item.owner) : ''}</td>
                        <td>{renderDetailImages(item.detail)}</td>
                        <td>{getStatusStyle(item.status)}</td>
                        <td>:</td>
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
            {isModalOpen && (
                <div className="modal_overlay show">
                <div className="modal_content">
                    <span className="close_button" onClick={closeModal}>&times;</span>
                    <h2>รายละเอียดเพิ่มเติม</h2>
                    <hr className="status-line red" />
                    <p>#ID : {modalData.id}</p>
                    <p>ชื่อผู้ใช้ : {modalData.owner}</p>
                    <p>สินค้า : {renderDetailImages(modalData.detail)}</p>
                    <p>เวลาที่เริ่ม : {modalData.time_order_begin}</p>
                    <p>เวลาสิ้นสุด : {modalData.time_order_end}</p>
                    <p>สถานะ : {modalData.status}</p>
                 
                </div>
                </div>
            )}

    </>
        
   
  );
}

export default Mobile_ui;
