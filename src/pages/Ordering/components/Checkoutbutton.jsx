import React, { useState } from 'react';
import { gsap } from 'gsap';
import './Checkoutbutton.css';
import success from '../../../assets/images/success.png'; 
import axios from 'axios';

function TruckButton({ product ,logindata,ResetProduct}) {
    const [isDone, setIsDone] = useState(false);
    const [data, setData] = useState("");
    const handleCheckout = (e) => {
        if (product.length === 4 && !product.includes('n') && logindata !=="") {
            handleClick(e);
        } else if (logindata ===""){
            
            alert('กรุณาทำการลงชื่อเข้าใช้ ก่อนยืนยันORDER');
        }else{
            alert('กรุณาเลือกสินค้าให้ครบ 4 ชิ้นก่อนกดปุ่ม CHECKOUT');
            
        }
    };
    const handleSubmit_api = async () => {
        try {
        
        const response = await axios.post(
            `https://b1673c385d99.ngrok.app/order`,
            {"action":"ORDER_SUBMIT", "owner":logindata,"order":product}	
        );
    
        setData(response.data);
    
        } catch (error) {
   
        } finally {
            ResetProduct();
        }
    };

    const handleClick = (e) => {
        e.preventDefault();

        let button = e.currentTarget,
            box = button.querySelector('.box'),
            truck = button.querySelector('.truck');

        if (!isDone && product.length === 4) {

            if (!button.classList.contains('animation')) {

                button.classList.add('animation');

                gsap.to(button, {
                    '--box-s': 1,
                    '--box-o': 1,
                    duration: .3,
                    delay: .5
                });

                gsap.to(box, {
                    x: 0,
                    duration: .4,
                    delay: .7
                });

                gsap.to(button, {
                    '--hx': -5,
                    '--bx': 50,
                    duration: .18,
                    delay: .92
                });

                gsap.to(box, {
                    y: 0,
                    duration: .1,
                    delay: 1.15
                });

                gsap.set(button, {
                    '--truck-y': 0,
                    '--truck-y-n': -26
                });

                gsap.to(button, {
                    '--truck-y': 1,
                    '--truck-y-n': -25,
                    duration: .2,
                    delay: 1.25,
                    onComplete() {
                        gsap.timeline({
                            
                            onComplete() {
                                
                                setIsDone(true);
                                handleSubmit_api();
                            }
                        }).to(truck, {
                            x: 0,
                            duration: .4
                        }).to(truck, {
                            x: 80,
                            duration: 1
                        }).to(truck, {
                            x: 430,
                            duration: 1.5
                        });
                        gsap.to(button, {
                            '--progress': 1,
                            duration: 2.9,
                            ease: "power2.in"
                        });
                    }
                });

            }

        } else {
            button.classList.remove('animation', 'done');
            gsap.set(truck, {
                x: 4
            });
            gsap.set(button, {
                '--progress': 0,
                '--hx': 0,
                '--bx': 0,
                '--box-s': .5,
                '--box-o': 0,
                '--truck-y': 0,
                '--truck-y-n': -26
            });
            gsap.set(box, {
                x: -24,
                y: -6
            });
            setIsDone(false);
        }
    };


    return (
        <button className={`truck-button ${isDone ? 'done' : ''}`} onClick={handleCheckout}>
            <span className="default" style={{color :"#ffffff", opacity: isDone ? 0 : 1 }}>
                    CHECKOUT ORDER
                </span>

            <span className="success" style={{color :"#ffffff", opacity: isDone ? 1 : 0}}>
                Order Placed
                <img src={success} alt="" height="16px" width="16px" className="mx-2"/>

            </span>

            <div className="truck">
                <div className="wheel"></div>
                <div className="back"></div>
                <div className="front"></div>
                <div className="box"></div>
            </div>
        </button>
    );
}

export default TruckButton;
