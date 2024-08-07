import React from 'react';

export default function Footer() {
    return (
        <>
            <InstagramArea/>
            <FooterAreaStart />
        </>
    );
}

export function InstagramArea() {
    return (
        <div className="follow-us-instagram">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h5>Follow Us Instagram</h5>
                    </div>
                </div>
            </div>
            <div className="insta-feeds d-flex flex-wrap">
                <div className="single-insta-feeds">
                    <img src="img/bg-img/insta1.jpg" alt="" />
                    <div className="insta-icon">
                        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
                </div>

                <div className="single-insta-feeds">
                    <img src="img/bg-img/insta2.jpg" alt="" />
                    <div className="insta-icon">
                        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
                </div>

                <div className="single-insta-feeds">
                    <img src="img/bg-img/insta3.jpg" alt="" />
                    <div className="insta-icon">
                        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
                </div>

                <div className="single-insta-feeds">
                    <img src="img/bg-img/insta4.jpg" alt="" />
                    <div className="insta-icon">
                        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
                </div>

                <div className="single-insta-feeds">
                    <img src="img/bg-img/insta5.jpg" alt="" />
                    <div className="insta-icon">
                        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
                </div>

                <div className="single-insta-feeds">
                    <img src="img/bg-img/insta6.jpg" alt="" />
                    <div className="insta-icon">
                        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
                </div>

                <div className="single-insta-feeds">
                    <img src="img/bg-img/insta7.jpg" alt="" />
                    <div className="insta-icon">
                        <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}


export function FooterAreaStart() {
    return (
        <footer className="footer-area">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-12 h-100 d-flex flex-wrap align-items-center justify-content-between">
                        <div className="footer-social-info text-right">
                            <a href="#"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-dribbble" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-behance" aria-hidden="true"></i></a>
                            <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                        </div>
                        <div className="footer-logo">
                            <a href="index.html"><img src="img/core-img/logo.png" alt="" /></a>
                        </div>
                        <p>
                            Copyright &copy;
                            <script>document.write(new Date().getFullYear());</script> All rights reserved | This template
                            is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com"
                                target="_blank">Colorlib</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
