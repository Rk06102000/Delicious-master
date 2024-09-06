import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <SearchWrapper />
            <HeaderAreaStart />
        </>
    );
}



export function SearchWrapper() {
    return (
        <div className="search-wrapper">
            <div className="close-btn"><i className="fa fa-times" aria-hidden="true"></i></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form action="#" method="post">
                            <input type="search" name="search" placeholder="Type any keywords..." />
                            <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}


export function HeaderAreaStart() {
    return (
        <header className="header-area">
            <div className="top-header-area bg-light py-2">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-between">
                        <div className="col-12 col-sm-6">
                            <div className="breaking-news">
                                <div id="breakingNewsTicker" className="ticker">
                                    <ul>
                                        <li><a href="#">Hello World!</a></li>
                                        <li><a href="#">Welcome to Colorlib Family.</a></li>
                                        <li><a href="#">Hello Delicious!</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 text-right">
                            <div className="top-social-info">
                                <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="delicious-main-menu">
                <div class="classy-nav-container ">

                    <nav className="navbar navbar-expand-lg navbar-light bg-light classy-navbar justify-content-between">
                        <div className="container">
                            <Link className="navbar-brand" to="/">
                                <img src="../img/core-img/logo.png" alt="Logo" />
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse classynav" id="navbarNav">
                                <ul className="navbar-nav ml-auto" id='mynav'>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/about">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/recipe">Recipe</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/contact">Contact</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li> */}
                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>

        </header>
    );
}
// export function HeaderAreaStart() {
//     return (
//         <header className="header-area">
//                 <div className="top-header-area">
//                     <div className="container h-100">
//                         <div className="row h-100 align-items-center justify-content-between">
//                             <div className="col-12 col-sm-6">
//                                 <div className="breaking-news">
//                                     <div id="breakingNewsTicker" className="ticker">
//                                         <ul>
//                                             <li><a href="#">Hello World!</a></li>
//                                             <li><a href="#">Welcome to Colorlib Family.</a></li>
//                                             <li><a href="#">Hello Delicious!</a></li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-12 col-sm-6">
//                                 <div className="top-social-info text-right">
//                                     <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
//                                     <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
//                                     <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
//                                     <a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
//                                     <a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a>
//                                     <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="delicious-main-menu">
//                     <div className="classy-nav-container breakpoint-off">
//                         <div className="container">
//                             <nav className="classy-navbar justify-content-between" id="deliciousNav">
//                                 <a className="nav-brand" href="/"><img src="../img/core-img/logo.png" alt="Logo" /></a>
//                                 <div className="classy-navbar-toggler">
//                                     <span className="navbarToggler"><span></span><span></span><span></span></span>
//                                 </div>
//                                 <div className="classy-menu">
//                                     <div className="classycloseIcon">
//                                         <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
//                                     </div>
//                                     <div className="classynav">
//                                         <ul>
//                                             <li><Link to="/">Home</Link></li>
//                                             <li><Link to="/about">About</Link></li>
//                                             <li><Link to='/recipe'>Reacipe</Link></li>
//                                             <li><Link to='/contact'>Contact</Link></li>
//                                             {/* <li><Link to='/blog'>Blog</Link></li> */}

//                                         </ul>
//                                         {/* <div className="search-btn">
//                                             <i className="fa fa-search" aria-hidden="true"></i>
//                                         </div> */}
//                                     </div>
//                                 </div>
//                             </nav>
//                         </div>
//                     </div>
//                 </div>
//             </header>
//     );
// }
