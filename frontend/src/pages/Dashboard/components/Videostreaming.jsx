import React from 'react'

import video from '../../../assets/images/video.png'; 
function Videostreaming() {
  return (
    <>
        <div className="col-sm-8 py-2">
            <div className="card h-100">
              <div className="card-body" >
                <li className="d-flex" to="/">
                  <img src={video} alt="" height="32px" width="32px" />
                  <div className="p-1 h5" style={{ fontWeight: 'bold' }}>ถ่ายทอดสด (FIBO)</div>
                  
                </li>
                <hr className="status-line" />
                
                <div className="container p-2">
                  <div className="ratio ratio-16x9">
                    <iframe src="https://player.vimeo.com/video/137857207" title="Vimeo video" allowFullScreen></iframe>
                  </div>
                </div>

            </div>
          </div>
          
                    
        </div>
    </>
    
  )
}

export default Videostreaming