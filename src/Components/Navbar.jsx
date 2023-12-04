function Navbar () {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
          <div className="container">
            <button
              data-mdb-collapse-init
              className="navbar-toggler"
              type="button"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            {/* <!-- Collapsible wrapper --> */}
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              {/* <!-- Navbar brand --> */}
              <a className="navbar-brand mt-2 mt-lg-0" href="#home">
              <h3>Logo</h3>
              </a>
              {/* <!-- Left links --> */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#shop">Shop</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
              {/* <!-- Left links --> */}
            </div>
            {/* <!-- Collapsible wrapper -->

            <!-- Right elements --> */}
            <div className="d-flex align-items-center">
              {/* <!-- Icon --> */}
              <a className="text-reset me-3" href="#">
                <i className="fas fa-shopping-cart"></i>
              </a>
        {/* 
              <!-- Notifications --> */}
              <div className="dropdown">
                
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">Some news</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Another news</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </div>
              {/* <!-- Avatar --> */}
              <div className="dropdown">
                <a
                  data-mdb-dropdown-init
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  aria-expanded="false"
                >
                  <i className="fas fa-user"></i>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <a className="dropdown-item" href="#">My profile</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Settings</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">Logout</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Right elements --> */}
          </div>
        </nav>
        </>
    );
}


export default Navbar;