import React, { useEffect, useState ,useRef} from 'react';
import { NavLink } from 'react-router-dom'; // เพิ่มนี้เข้ามา
import logo from '../../../assets/images/SmartFactory_LOGO.jpg'; 
import boom from '../../../assets/images/profile.jpg'; 
import './Navbar.css';

function Navbar({logindata}) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  

  const hideSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    setIsDropdownOpen(false);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const showSidebar = () => {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  };

  
  
  return (
    <nav className="py-2" role="navigation">
      
      <ul className="sidebar">
        <li onClick={hideSidebar}><a><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg></a></li>
        <li onClick={hideSidebar}>
          <NavLink className="nav-linkk" to="/">ถ่ายทอดสด</NavLink>
        </li>
        <li onClick={hideSidebar}>
          <NavLink className="nav-linkk" to="/order">เลือกสินค้า</NavLink>
        </li>
        <li onClick={hideSidebar}>
          <NavLink className="nav-linkk" to="/history">รายการที่เสร็จสิ้นแล้ว</NavLink>
        </li>

        {logindata !== "" ? (
                    <>
                      <li onClick={hideSidebar}>
                        <NavLink className="nav-linkk" to="/logout">ออกจากระบบ</NavLink>   
                      </li>
                    </>
                  ) : (
                     <li onClick={() => {window.location.href = "https://smartfactory.hcilab.net/wp-login.php" }}>
                        <NavLink className="nav-linkk" to="/login">ลงชื่อเข้าใช้</NavLink>   
                      </li>


                  )}
              

        
      </ul>
      <ul className="my-2">
        <li >
          <a className="navbar-brand d-flex" to="/">
            <img src={logo} alt="" height="32px" width="32px" />
            <div className="logo-text">
              <div className="logo-title mb-0">Product Customization</div>
              <div className="logo-sub-title mt-0">หน่วยสาธิตระบบการบรรจุชิ้นงาน</div>
            </div>
          </a>
        </li>
        <li className="hideOnMobile">
          <NavLink className="nav-linkk" to="/">ถ่ายทอดสด</NavLink>
        </li>
        <li className="hideOnMobile">
          <NavLink className="nav-linkk" to="/order">เลือกสินค้า</NavLink>
        </li>
        <li className="hideOnMobile">
          <NavLink className="nav-linkk" to="/history">รายการที่เสร็จสิ้นแล้ว</NavLink>
        </li>
        <li className="hideOnMobile">
          <ul className="ms-auto mb-2 mb-lg-0 profile-menu">
            <li className={`dropdown ${isDropdownOpen ? 'show' : ''}`}>
              {logindata !== "" ? (
                    <>
                      <a className="dropdown-toggle" href="#" id="navbarDropdown" role="button" onClick={toggleDropdown} aria-expanded={isDropdownOpen} aria-haspopup="true">
                        <span className="mx-1" style={{ color: '#F27314', fontSize: "12px" }}>{logindata}</span>
                          <div className="profile-pic">
                            <img src={boom} alt="" height="32px" width="32px" />
                        </div>
                            
                      </a>
                    </>
                  ) : (
                    <button className="btn my-2" style={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", whiteSpace: "nowrap", backgroundColor: "#F27314", color: "#FFFFFF" }} onClick={() => {window.location.href = "https://smartfactory.hcilab.net/wp-login.php" }}>
                      <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 24 24" className="brz-icon-svg align-[initial] brz-css-wFsxt brz-css-m8VJd" data-type="outline" data-name="log-in" width="14" height="14">
                        <g fill="none" stroke="#FFFFFF" strokeLinecap="square" strokeWidth="2" vectorEffect="non-scaling-stroke" className="nc-icon-wrapper">
                          <path d="M1 12h15" data-cap="butt" data-color="color-2" vectorEffect="non-scaling-stroke"></path>
                          <path strokeLinecap="square" d="m11 7 5 5-5 5" data-color="color-2" vectorEffect="non-scaling-stroke"></path>
                          <path strokeLinecap="square" d="M10 1h12v22H10" vectorEffect="non-scaling-stroke"></path>
                        </g>
                      </svg>
                      <span style={{ marginLeft: "4px" ,color: "#FFFFFF"}}>ลงชื่อเข้าใช้</span>
                    </button>


                  )}
              
              <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="navbarDropdown">
                <li><NavLink to="/logout"><i className="fas fa-sign-out-alt fa-fw"></i> 
                    <span style={{ color:"#F27314"}}>ออกจากระบบ</span>
                </NavLink></li>
              </ul>
            </li>
          </ul>
        </li>
        
        <li className="menu-button" onClick={showSidebar}><a><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg></a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
