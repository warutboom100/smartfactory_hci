import React from 'react'

function Fruitmenu({images, headtitle,subtitle,handleIncrement,handleDecrement,fruit,products}) {

    const fruitvalue = (arr, char) => {
        const filteredArr = arr.filter(item => item === char);
    
        return filteredArr.length;
    };

  return (
    <>
        <div className="card mb-3" id ="fruit-menu" style={{ borderRadius: '5px' } }>
            <div className="card-body">
                <div className="row align-items-center">
                    <div className="col-auto">
                        <img src={images} alt="" height="64px" width="64px" />
                    </div>
                    <div className="col">
                        <div>
                            <h5>{headtitle}</h5>
                            <p className="small mb-0">{subtitle}</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row align-items-center justify-content-end">
                            <div className="col">
                                <div className="def-number-input number-input">
                                    <button className="plus btn btn-secondary pt-1" onClick={() => handleIncrement(fruit)}>+</button>
                                    <span className="quantity btn btn-outline-secondary">{fruitvalue(products, fruit)}</span>
                                    <button className="minus btn btn-secondary pt-1" onClick={() => handleDecrement(fruit)}>-</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Fruitmenu