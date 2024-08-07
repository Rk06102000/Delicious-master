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
            <CtaArea/>
            <SmallRecipeArea/>
            <QuoteSubscribeAdds/>
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
    const recipes = [
        {
            imgSrc: "img/bg-img/sr1.jpg",
            date: "January 04, 2018",
            link: "receipe-post.html",
            title: "Homemade italian pasta",
            rating: 4,
            comments: 2
        },
        {
            imgSrc: "img/bg-img/sr2.jpg",
            date: "January 04, 2018",
            link: "receipe-post.html",
            title: "Baked Bread",
            rating: 4,
            comments: 2
        },
        {
            imgSrc: "img/bg-img/sr3.jpg",
            date: "January 04, 2018",
            link: "receipe-post.html",
            title: "Scalops on salt",
            rating: 3,
            comments: 2
        },
        {
            imgSrc: "img/bg-img/sr4.jpg",
            date: "January 04, 2018",
            link: "receipe-post.html",
            title: "Fruits on plate",
            rating: 4,
            comments: 2
        },
        {
            imgSrc: "img/bg-img/sr5.jpg",
            date: "January 04, 2018",
            link: "receipe-post.html",
            title: "Macaroons",
            rating: 4,
            comments: 2
        },
        {
            imgSrc: "img/bg-img/sr6.jpg",
            date: "January 04, 2018",
            link: "receipe-post.html",
            title: "Chocolate tart",
            rating: 4,
            comments: 2
        },
        {
            imgSrc: "img/bg-img/sr7.jpg",
            date: "January 04, 2018",
            link: "receipe-post.html",
            title: "Berry Desert",
            rating: 4,
            comments: 2
        },
        {
            imgSrc: "img/bg-img/sr8.jpg",
            date: "January 04, 2018",
            link: "receipe-post.html",
            title: "Zucchini Grilled on pepper",
            rating: 4,
            comments: 2
        },
        {
            imgSrc: "img/bg-img/sr9.jpg",
            date: "January 04, 2018",
            link: "receipe-post.html",
            title: "Chicken Salad",
            rating: 4,
            comments: 2
        }
    ];

    return (
        <section className="small-receipe-area section-padding-80-0">
            <div className="container">
                <div className="row">
                    {recipes.map((recipe, index) => (
                        <div className="col-12 col-sm-6 col-lg-4" key={index}>
                            <div className="single-small-receipe-area d-flex">
                                <div className="receipe-thumb">
                                    <img src={recipe.imgSrc} alt={recipe.title} />
                                </div>
                                <div className="receipe-content">
                                    <span>{recipe.date}</span>
                                    <a href={recipe.link}>
                                        <h5>{recipe.title}</h5>
                                    </a>
                                    <div className="ratings">
                                        {[...Array(5)].map((star, i) => (
                                            <i 
                                                key={i}
                                                className={`fa ${i < recipe.rating ? 'fa-star' : 'fa-star-o'}`} 
                                                aria-hidden="true">
                                            </i>
                                        ))}
                                    </div>
                                    <p>{recipe.comments} Comments</p>
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


// export function  QuoteSubscribeArea(){
//     return (

//     );
// }

