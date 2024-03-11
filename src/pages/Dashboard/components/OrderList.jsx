import React, { useState } from 'react';

import wait from '../../../assets/images/inprogress.png';
import grape from '../../../assets/images/grape.png';
import mango from '../../../assets/images/mango.png';
import pineapple from '../../../assets/images/pineapple.png';
import starwbery from '../../../assets/images/starwbery.png';

function OrderList({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const getColorImageURL = (color) => {
    let imageURL;
    switch (color) {
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
      case 'PENDING':
        backgroundColor = '#FFD968';
        color = 'white';
        break;
      case 'PROCESSING':
        backgroundColor = '#3D848B';
        color = 'white';
        break;
      default:
        backgroundColor = 'gray';
        color = 'white';
    }

    return (
      <span className="badge" style={{ backgroundColor, color }}>
        {status}
      </span>
    );
  };

  const renderDetailImages = (detail) => {
    return detail.map((color, index) => (
      <img key={index} className="detail-image" src={getColorImageURL(color)} alt={color} />
    ));
  };

  return (
    <>
      <div className="col-sm-4 py-2">
        <div className="card h-100">
          <div className="card-body overflow-auto">
            <li className="d-flex" to="/">
              <img src={wait} alt="" height="32px" width="32px" />
              <div className="p-1 h5" style={{ fontWeight: 'bold' }}>รายการที่รอดำเนินการ</div>
            </li>
            <hr className="status-line red" />
            <div className="table-container" style={{ maxHeight: '440px', overflowY: 'auto' }}>
              <table className="no-wrap align-middle table t">
                <thead className="table" style={{ position: "sticky", top: 0 }}>

                  <tr>
                    <th>#</th>
                    <th>ชื่อ</th>
                    <th>สินค้า</th>
                    <th>สถานะ</th>
                  </tr>
                </thead>
                <tbody>
                  {data[0].map((item, index) => (
                    <tr key={index} className="border-top">
                      <td>{item.id}</td>
                      <td>{item.owner.split(' ')[0]}</td>
                      <td>{renderDetailImages(item.detail)}</td>
                      <td>{getStatusStyle(item.status)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderList;
