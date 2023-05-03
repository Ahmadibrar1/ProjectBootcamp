import React from 'react'
import {Link} from 'react-router-dom'



export default function Layout() {
  return (
    <div>
    
<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container-fluid">
        <Link className="navbar-brand mt-2 mt-lg-0" to="/">
            <h5 className="pt-1">Gold And Silver Price</h5>
        </Link>
        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse justify-content-center"  id="navbarSupportedContent">
             <div
      class="collapse navbar-collapse justify-content-center"
      id="navbarCenteredExample"
    >
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="#">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="#">Prices</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="#">CurrencyExchange</Link>
        </li>

        {/* <li class="nav-item">
          <Link class="nav-link" to="#">Link</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link" to="#">Link</Link>
        </li> */}

      </ul>
    </div>
            <div className="d-flex align-items-center justify-content-start">

                {/* <Link className="text-reset me-3" to="/">
                    <i className="fas fa-shopping-cart text-white"></i>
                </Link>
                <div className="dropdown">
                    <Link className="text-reset me-3 dropdown-toggle hidden-arrow" to="/" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                        <i className="fas fa-bell text-white"></i>
                        <span className="badge rounded-pill badge-notification bg-danger">1</span>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                        <li>
                            <Link className="dropdown-item" to="/">Some news</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/">Another news</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/">Something else here</Link>
                        </li>
                    </ul>
                </div> */}
                {/* <!-- Avatar --> */}
                <div className="dropdown">
                    <Link className="dropdown-toggle d-flex align-items-center hidden-arrow" to="/" id="navbarDropdownMenuAvatar" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
                        <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle" height="25" alt="Black and White Portrait of a Man" loading="lazy" />
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                        <li>
                            <Link className="dropdown-item" to="/">My profile</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/">Settings</Link>
                        </li>
                        <li>
                            <Link className="dropdown-item" to="/">Logout</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!-- Right elements --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}
    </div>
    {/* <!-- Container wrapper --> */}
</nav>
{/* <!-- Navbar --> */}

{/* <div style="height: 300px;"></div> */}

{/* <!-- Footer --> */}
<footer className="bg-primary text-center text-white fixed-bottom">
  
    <div className="container p-4 pb-0">
       
        <section className="mb-4">
           
            <Link className="btn btn-outline-light btn-floating m-1" to="/!" role="button"><i className="fab fa-facebook-f"></i></Link>

            
            <Link className="btn btn-outline-light btn-floating m-1" to="/!" role="button"><i className="fab fa-twitter"></i></Link>

           
            <Link className="btn btn-outline-light btn-floating m-1" to="/!" role="button"><i className="fab fa-google"></i></Link>

            
            <Link className="btn btn-outline-light btn-floating m-1" to="/!" role="button"><i className="fab fa-instagram"></i></Link>

           
            <Link className="btn btn-outline-light btn-floating m-1" to="/!" role="button"><i className="fab fa-linkedin-in"></i></Link>

            <Link className="btn btn-outline-light btn-floating m-1" to="/!" role="button"><i className="fab fa-github"></i></Link>
        </section>
        
    </div>
    </footer>

    </div>
  )
}



















// import React from 'react';
// import Header from './Header';
// import Navigation from './Navegation';
// const Layout = ({ children }) => {
//     return (
//     <>
//         <Header />
//         <div classNameName="navigationWrapper">
//             <Navigation />
//             <main>{children}</main>
//         </div>
//     </>
//     );
// };
// export default Layout;