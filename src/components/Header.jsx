import React from "react";

    function Header(){
        return (
            <div className="header">
                <div className="brand">
                    <h1>ToDo App</h1>
                </div>
                <div className="header-menu">
                    <input type="text" placeholder="Search task" />
                    <img src="" alt="avatar"/>
                </div>
            </div>
        )
    }

export default Header;