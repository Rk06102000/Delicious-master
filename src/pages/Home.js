import React, { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllreceipe, fetchBest, fetchUsers } from '../Redux-Thunk/DeliciousActions';

export default function Homes() {
    return (
        <>
            <Header />
            <HeroAreaStart />
            <CategoryAreaStart />
            <BestReceipe />
            <CtaArea />
            <SmallRecipeArea />
            <QuoteSubscribeAdds />
            <Footer />
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
    const dispatch = useDispatch();
    const recipes = useSelector((state) => state.recdata);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    return (
        <section className="top-catagory-area section-padding-80-0">
            <div className="container">
                <div className="row">
                    {
                        recipes.map((recipe) => (
                            <div className="col-12 col-lg-6" key={recipe.id}>
                                <div className="single-top-catagory">
                                    <img src={recipe.image} />
                                    <div className="top-cta-content">
                                        <h3>{recipe.name}</h3>
                                        <h6>Simple & Delicious</h6>
                                        <Link to={`/blog/${recipe.id}`} className="btn delicious-btn">See Full Recipe</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export function BestReceipe() {
    const dispatch = useDispatch();
    const bestRecipes = useSelector((state) => state.recdata2);

    useEffect(() => {
        dispatch(fetchBest());
    }, [dispatch]);

    return (
        <section className="best-receipe-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading">
                            <h3>The Best Recipes</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {
                        bestRecipes.map((recipe) => (
                            <div className="col-12 col-sm-6 col-lg-4" key={recipe.id}>
                                <div className="single-best-receipe-area mb-30">

                                    <Link to={`/blog/${recipe.id}`}> <img src={recipe.image} alt={recipe.name} /></Link>
                                    <div className="receipe-content">
                                        <Link to={`/blog/${recipe.id}`}>
                                            <h5>{recipe.name}</h5>
                                        </Link>
                                        <div className="ratings">
                                            {[...Array(5)].map((_, i) => (
                                                <i
                                                    key={i}
                                                    className={`fa ${i < recipe.rating ? 'fa-star' : 'fa-star-o'}`}
                                                    aria-hidden="true">
                                                </i>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))

                    }
                </div>
            </div>
        </section>
    );
}

export function CtaArea() {
    return (
        <section className="cta-area bg-img bg-overlay" style={{ backgroundImage: 'url(img/bg-img/bg4.jpg)' }}>
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12">
                        {/* Cta Content */}
                        <div className="cta-content text-center">
                            <h2>Gluten Free Recipes</h2>
                            <p>Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie. Vestibulum
                                ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Cras sed
                                accumsan neque. Ut vulputate, lectus vel aliquam congue, risus leo elementum nibh</p>
                            <a href="#" className="btn delicious-btn">Discover all the recipes</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export function SmallRecipeArea() {
    const dispatch = useDispatch();
    const smallRecipes = useSelector((state) => state.recdata3);

    useEffect(() => {
        dispatch(fetchAllreceipe());
    }, [dispatch]);

    return (
        <section className="small-receipe-area section-padding-80-0">
            <div className="container">
                <div className="row">
                    {smallRecipes && smallRecipes.map((recipe) => (
                        <div className="col-12 col-sm-6 col-lg-4" key={recipe.id}>
                            <div className="single-small-receipe-area d-flex">
                                <div className="receipe-thumb">
                                    <Link to={`/blog/${recipe.id}`}><img src={recipe.image} alt={recipe.name || "Recipe Image"} /></Link>
                                </div>
                                <div className="receipe-content">
                                    <span>January 04, 2018</span>
                                    <Link to={`/blog/${recipe.id}`}>
                                        <h5>{recipe.name}</h5>
                                    </Link>
                                    <div className="ratings">
                                        {[...Array(5)].map((_, i) => (
                                            <i
                                                key={i}
                                                className={`fa ${i < recipe.rating ? 'fa-star' : 'fa-star-o'}`}
                                                aria-hidden="true">
                                            </i>
                                        ))}
                                    </div>
                                    <p>2 Comments</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function QuoteSubscribeAdds() {
    return (
        <section className="quote-subscribe-adds">
            <div className="container">
                <div className="row align-items-end">
                    {/* Quote */}
                    <div className="col-12 col-lg-4">
                        <div className="quote-area text-center">
                            <span>"</span>
                            <h4>Nothing is better than going home to family and eating good food and relaxing</h4>
                            <p>John Smith</p>
                            <div className="date-comments d-flex justify-content-between">
                                <div className="date">January 04, 2018</div>
                                <div className="comments">2 Comments</div>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="col-12 col-lg-4">
                        <div className="newsletter-area">
                            <h4>Subscribe to our newsletter</h4>
                            {/* Form */}
                            <div className="newsletter-form bg-img bg-overlay" style={{ backgroundImage: 'url(img/bg-img/bg1.jpg)' }}>
                                <form action="#" method="post">
                                    <input type="email" name="email" placeholder="Subscribe to newsletter" />
                                    <button type="submit" className="btn delicious-btn w-100">Subscribe</button>
                                </form>
                                <p>Fusce nec ante vitae lacus aliquet vulputate. Donec sceleri sque accumsan molestie.
                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
                            </div>
                        </div>
                    </div>

                    {/* Adds */}
                    <div className="col-12 col-lg-4">
                        <div className="delicious-add">
                            <img src="img/bg-img/add.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}



