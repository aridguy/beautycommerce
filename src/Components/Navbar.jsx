function Navbar () {
    return (
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">
          <div class="container">
            <button
              data-mdb-collapse-init
              class="navbar-toggler"
              type="button"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>

            {/* <!-- Collapsible wrapper --> */}
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              {/* <!-- Navbar brand --> */}
              <a class="navbar-brand mt-2 mt-lg-0" href="#home">
              <h3>Logo</h3>
              </a>
              {/* <!-- Left links --> */}
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" href="#shop">Shop</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
              {/* <!-- Left links --> */}
            </div>
            {/* <!-- Collapsible wrapper -->

            <!-- Right elements --> */}
            <div class="d-flex align-items-center">
              {/* <!-- Icon --> */}
              <a class="text-reset me-3" href="#">
                <i class="fas fa-shopping-cart"></i>
              </a>
        {/* 
              <!-- Notifications --> */}
              <div class="dropdown">
                
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">Some news</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Another news</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </div>
              {/* <!-- Avatar --> */}
              <div class="dropdown">
                <a
                  data-mdb-dropdown-init
                  class="dropdown-toggle d-flex align-items-center hidden-arrow"
                  href="#"
                  id="navbarDropdownMenuAvatar"
                  role="button"
                  aria-expanded="false"
                >
                  <i class="fas fa-user"></i>
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdownMenuAvatar"
                >
                  <li>
                    <a class="dropdown-item" href="#">My profile</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Settings</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Logout</a>
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