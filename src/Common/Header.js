import React from 'react';

export default function Header() {
    return (
        <>
            <Preloader />
            <SearchWrapper />
            <HeaderAreaStart />
        </>
    );
}

export function Preloader() {
    return (
        <div id="preloader">
            <i className="circle-preloader"></i>
            <img src="img/core-img/salad.png" alt="" />
        </div>
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
        <>
            <header className="header-area">
                <div className="top-header-area">
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
                            <div className="col-12 col-sm-6">
                                <div className="top-social-info text-right">
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
                <div className="delicious-main-menu">
                    <div className="classy-nav-container breakpoint-off">
                        <div className="container">
                            <nav className="classy-navbar justify-content-between" id="deliciousNav">
                                <a className="nav-brand" href="index.html"><img src="img/core-img/logo.png" alt="" /></a>
                                <div className="classy-navbar-toggler">
                                    <span className="navbarToggler"><span></span><span></span><span></span></span>
                                </div>
                                <div className="classy-menu">
                                    <div className="classycloseIcon">
                                        <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                                    </div>
                                    <div className="classynav">
                                        <ul>
                                            <li className="active"><a href="index.html">Home</a></li>
                                            <li><a href="#">About</a></li>
                                            <li><a href="receipe-post.html">Recipes</a></li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                        <div className="search-btn">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}
