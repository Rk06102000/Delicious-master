import { Link, useNavigate } from "react-router-dom";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { useEffect, useState } from "react";

export default function Recipes() {
    return (
        <>
            <Header />
            <BreadcumbArea />
            <RecipePostArea />
            <Footer />
        </>
    );
}

export function BreadcumbArea() {
    return (
        <div className="breadcumb-area bg-img bg-overlay" style={{ backgroundImage: 'url(img/bg-img/breadcumb3.jpg)' }}>
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12">
                        <div className="breadcumb-text text-center">
                            <h2>Recipe</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function RecipePostArea() {
    const [snack, setSnack] = useState([]);
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();  // Prevent default form submission behavior
        navigate(`/searchResults?query=${query}`);
    };

    const apiGet = () => {
        fetch('https://dummyjson.com/recipes/meal-type/snack')
            .then(response => response.json())
            .then((json) => setSnack(json.recipes || []))
            .catch(error => console.error('Error fetching data:', error));
    };

    useEffect(() => {
        apiGet();
        const interval = setInterval(() => {
            apiGet();
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="receipe-post-area section-padding-80">
            <div className="receipe-post-search mb-80">
                <div className="container">
                    <form action="#" method="post" onSubmit={handleSearch}>
                        <div className="row">
                            <div className="col-12 col-lg-3">
                                <Link to="/snack">
                                    <p style={{
                                        border: 'none', backgroundColor: '#f3f5f8', borderRadius: '0',
                                        width: '100%', height: '60px', lineHeight: '60px', color: '#2f2f2f', textAlign: "center"
                                    }}>All Lunch</p>
                                </Link>
                            </div>
                            <div className="col-12 col-lg-3">
                                <Link to="/dinner">
                                    <p style={{
                                        border: 'none', backgroundColor: '#f3f5f8', borderRadius: '0',
                                        width: '100%', height: '60px', lineHeight: '60px', color: '#2f2f2f', textAlign: "center"
                                    }}>All Dinner</p>
                                </Link>
                            </div>
                            <div className="col-12 col-lg-3">
                                <input 
                                type="search" 
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                name="search" 
                                placeholder="Search Recipes" />
                            </div>
                            <div className="col-12 col-lg-3 text-right">
                                <button type="submit" className="btn delicious-btn">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="blog-area section-padding-80">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <div className="blog-posts-area">
                                <div className="single-blog-area mb-80">
                                    {
                                        snack.length > 0 ? (
                                            snack.map((recipe, index) => (
                                                <div key={index}>
                                                    <div className="blog-thumbnail">
                                                        <img src={recipe.image} alt={recipe.name} />
                                                    </div>
                                                    <div className="blog-content">
                                                        <a href="#" className="post-title">{recipe.name}</a>
                                                        <p>{recipe.instructions}</p>
                                                        <Link to={`/blog/${recipe.id}`} className="btn delicious-btn mt-30">Read More</Link>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <p>No recipes available.</p>
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-lg-4">
                            <div className="blog-sidebar-area">
                                <div className="single-widget mb-80">
                                    <h6>Categories</h6>
                                    <ul className="list">
                                        <li><a href="#">Restaurants</a></li>
                                        <li><a href="#">Food & Drinks</a></li>
                                        <li><a href="#">Vegans</a></li>
                                        <li><a href="#">Events & Lifestyle</a></li>
                                        <li><a href="#">Uncategorized</a></li>
                                    </ul>
                                </div>

                                <div className="single-widget mb-80">
                                    <h6>Newsletter</h6>
                                    <div className="newsletter-form bg-img bg-overlay" style={{ backgroundImage: 'url(img/bg-img/bg1.jpg)' }}>
                                        <form action="#" method="post">
                                            <input type="email" name="email" placeholder="Subscribe to newsletter" />
                                            <button type="submit" className="btn delicious-btn w-100">Subscribe</button>
                                        </form>
                                        <p>Fusce nec ante vitae lacus aliquet vulputate. Donec scelerisque accumsan molestie.</p>
                                    </div>
                                </div>

                                <div className="single-widget mb-80">
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

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-heading text-left">
                            <h3>Leave a comment</h3>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="contact-form-area">
                            <form action="#" method="post">
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <input type="text" className="form-control" id="name" placeholder="Name" />
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <input type="email" className="form-control" id="email" placeholder="E-mail" />
                                    </div>
                                    <div className="col-12">
                                        <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                    </div>
                                    <div className="col-12">
                                        <textarea name="message" className="form-control" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn delicious-btn mt-30" type="submit">Post Comments</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
