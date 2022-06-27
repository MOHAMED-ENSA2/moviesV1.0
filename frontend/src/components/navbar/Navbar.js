import React from "react" 
import {Link} from "react-router-dom"

import './Navbar.css' 

function Navbar(){
    return(
        <nav className="navbar">
            <ul className="navbar--items">
                <li className="navbar--item" >
                    <Link to = '/' className = "link">
                        <span>الرئيسية</span>
                    </Link>
                </li>
                <li className="navbar--item" >
                    <Link to = '/category/أفلام' className = "link">
                        <span>الأفلام</span>
                    </Link>    
                    <i className="fa-solid fa-angle-down fa-sm"></i>
                </li>    
                <li className="navbar--item" >
                    <Link to = '/category/مسلسلات' className = "link">
                        <span>المسلسلات</span>
                    </Link>
                    <i className="fa-solid fa-angle-down fa-sm"></i>
                </li>
                   
            </ul>
            <div className="navbar--login">
                <Link to = "/" className="btn btn_curved">الدخول</Link>
                <Link to = "/" className="btn btn_curved">إنشاء حساب</Link>
            </div>
        </nav>
    )
}

export default Navbar