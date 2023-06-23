import React from "react";

    function Header(){
        return (
            
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="/src/images/Logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                        ToDo App
                    </a>
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        )
    }

export default Header;