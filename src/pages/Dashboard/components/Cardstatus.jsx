import React from 'react'

function CardStatus({status, data,images}) {
 
  return (
    <>
        
            <div className="card m-3" id="dashboard">
              <div className="card-body ">
                <div className="d-flex ">
                 <div className="d-inline-block bg-light-success text-success mt-1 " >
                    <img src={images} alt="" height="64px" width="36px" className='mb-3'/>
                  </div>
                  <div className="pt-1 ms-2 text-center ">
                    <h5 className="mb-auto font-weight-bold">{data}</h5>
                    <h6 className="text-muted">{status}</h6>
                    
                  </div>
                  
                </div>
                
              </div>
              
            </div>
          
    </>
    
  )
}

export default CardStatus