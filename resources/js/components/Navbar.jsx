import React from "react";
import AuthUser from "../pageauth/AuthUser";
import Config from "../Config";

const Navbar = () => {
    const { getRol,getLogout,getToken } = AuthUser();

    const logoutUser = () => {
        Config.getLogout('/logout')
        .then(response=>{
          console.log(response)
           getLogout()
       })
        // Handle CSRF token error (419)
        .catch(error => {
            if (error.response && error.response.status === 419) {
                // Refresh the page to get a new CSRF token
                window.location.reload();
            }
            console.error('Logout error:', error);
        });
    }; // Closing brace for logoutUser function

    const renderLinks = () => {
        if (getToken()) {
            return (
            <>
              <li className="nav-item">
                  <a className="nav-link" href={`/${getRol()}`}>
                      Administración
                  </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#" onClick={logoutUser}>
                      Logout
                  </a>
              </li>
            </>
            );
        } else {
          (
            <>
              <li className="nav-item">
                  <a className="nav-link" href="/login">
                      Login
                  </a>
              </li>
            </>
          )
        }
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Diremp
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="/"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/categorias">
                                categorias
                            </a>
                        </li>
                        {renderLinks()}
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button
                            className="btn btn-outline-success"
                            type="submit"
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
