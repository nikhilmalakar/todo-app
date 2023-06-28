import React from "react";
import logo from "../images/Logo.png";

    function Header(){
        return (
            <div className="header">
                <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                <h1>ToDo List App</h1>
            </div>
        
            
            // <nav className="navbar bg-body-tertiary">
            //     <div className="container-fluid">
                    
            //     </div>
            // </nav>
        )
    }

export default Header;