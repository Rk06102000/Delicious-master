import React from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import Footer from "../Common/Footer";
import Header from "../Common/Header";

export default function Homes(){
    return(
        <>
            <Header/>
            <HeroAreaStart/>
            <CategoryAreaStart/>
            <BestReceipe/>
            <Footer/>
        </>
    );
}



export function HeroAreaStart() {
    const options = {
        items: 1,
        loop: true,
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 5000,
        smartSpeed: 1000,
    };

    return (
        <section className="hero-area">
            <OwlCarousel className="hero-slides owl-carousel" {...options}>
                {/* Single Hero Slide */}
                <div className="single-hero-slide bg-img" style={{ backgroundImage: 'url(img/bg-img/bg1.jpg)' }}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="hero-slides-content" data-animation="fadeInUp" data-delay="100ms">
                                    <h2 data-animation="fadeInUp" data-delay="300ms">Delicious Homemade Burger</h2>
                                    <p data-animation="fadeInUp" data-delay="700ms">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique, ac posuere arcu varius.</p>
                                    <a href="#" className="btn delicious-btn" data-animation="fadeInUp" data-delay="1000ms">See Recipe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Single Hero Slide */}
                <div className="single-hero-slide bg-img" style={{ backgroundImage: 'url(img/bg-img/bg6.jpg)' }}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="hero-slides-content" data-animation="fadeInUp" data-delay="100ms">
                                    <h2 data-animation="fadeInUp" data-delay="300ms">Delicious Homemade Burger</h2>
                                    <p data-animation="fadeInUp" data-delay="700ms">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique, ac posuere arcu varius.</p>
                                    <a href="#" className="btn delicious-btn" data-animation="fadeInUp" data-delay="1000ms">See Recipe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Single Hero Slide */}
                <div className="single-hero-slide bg-img" style={{ backgroundImage: 'url(img/bg-img/bg7.jpg)' }}>
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                <div className="hero-slides-content" data-animation="fadeInUp" data-delay="100ms">
                                    <h2 data-animation="fadeInUp" data-delay="300ms">Delicious Homemade Burger</h2>
                                    <p data-animation="fadeInUp" data-delay="700ms">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tristique nisl vitae luctus sollicitudin. Fusce consectetur sem eget dui tristique, ac posuere arcu varius.</p>
                                    <a href="#" className="btn delicious-btn" data-animation="fadeInUp" data-delay="1000ms">See Recipe</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </section>
    );
}

export function CategoryAreaStart() {
    return (
        <section className="top-catagory-area section-padding-80-0">
            <div className="container">
                <div className="row">
                    {/* Top Category Area */}
                    <div className="col-12 col-lg-6">
                        <div className="single-top-catagory">
                            <img src="img/bg-img/bg2.jpg" alt=""/>
                            {/* Content */}
                            <div className="top-cta-content">
                                <h3>Strawberry Cake</h3>
                                <h6>Simple &amp; Delicious</h6>
                                <a href="receipe-post.html" className="btn delicious-btn">See Full Recipe</a>
                            </div>
                        </div>
                    </div>
                    {/* Top Category Area */}
                    <div className="col-12 col-lg-6">
                        <div className="single-top-catagory">
                            <img src="img/bg-img/bg3.jpg" alt=""/>
                            {/* Content */}
                            <div className="top-cta-content">
                                <h3>Chinese Noodles</h3>
                                <h6>Simple &amp; Delicious</h6>
                                <a href="receipe-post.html" className="btn delicious-btn">See Full Recipe</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function BestReceipe() {
    return (
        <section className="best-receipe-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading">
                            <h3>The best Recipes</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* Single Best Recipe Area */}
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="single-best-receipe-area mb-30">
                            <img src="img/bg-img/r1.jpg" alt=""/>
                            <div className="receipe-content">
                                <a href="receipe-post.html">
                                    <h5>Sushi Easy Recipe</h5>
                                </a>
                                <div className="ratings">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Single Best Recipe Area */}
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="single-best-receipe-area mb-30">
                            <img src="img/bg-img/r2.jpg" alt=""/>
                            <div className="receipe-content">
                                <a href="receipe-post.html">
                                    <h5>Homemade Burger</h5>
                                </a>
                                <div className="ratings">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Single Best Recipe Area */}
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="single-best-receipe-area mb-30">
                            <img src="img/bg-img/r3.jpg" alt=""/>
                            <div className="receipe-content">
                                <a href="receipe-post.html">
                                    <h5>Vegan Smoothie</h5>
                                </a>
                                <div className="ratings">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Single Best Recipe Area */}
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="single-best-receipe-area mb-30">
                            <img src="img/bg-img/r4.jpg" alt=""/>
                            <div className="receipe-content">
                                <a href="receipe-post.html">
                                    <h5>Calabasa Soup</h5>
                                </a>
                                <div className="ratings">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Single Best Recipe Area */}
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="single-best-receipe-area mb-30">
                            <img src="img/bg-img/r5.jpg" alt=""/>
                            <div className="receipe-content">
                                <a href="receipe-post.html">
                                    <h5>Homemade Breakfast</h5>
                                </a>
                                <div className="ratings">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Single Best Recipe Area */}
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="single-best-receipe-area mb-30">
                            <img src="img/bg-img/r6.jpg" alt=""/>
                            <div className="receipe-content">
                                <a href="receipe-post.html">
                                    <h5>Healthy Fruit Dessert</h5>
                                </a>
                                <div className="ratings">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
