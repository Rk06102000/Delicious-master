import { useEffect, useState } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { Link, useLocation } from "react-router-dom";

export default function Sarch() {
    return (
        <>
            <Header />
            <BreadcumbArea />
            <RecipePostArea/>
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
    let [apidata, setApidata] = useState([]);

  let query = useLocation().search.split("=")[1];
  console.log(query);

  const api = `https://dummyjson.com/recipes/search?q=${query}`;

  useEffect(() => {
    fetch(api)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setApidata(data["recipes"]);
      });
  }, []);

    return (
        <div className="receipe-post-area section-padding-80">
            <div className="blog-area section-padding-80">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <div className="blog-posts-area">
                                <div className="single-blog-area mb-80">
                                    {
                                        apidata.map((recipe, index) => (
                                            <div key={index}>
                                                <div className="blog-thumbnail">
                                                    <img src={recipe.image} alt="" />
                                                </div>
                                                <div className="blog-content">
                                                    <a href="#" className="post-title">{recipe.name}</a>
                                                    <p>{recipe.instructions}</p>
                                                    <Link to={`/blog/${recipe.id}`} className="btn delicious-btn mt-30">Read More</Link>
                                                </div>
                                            </div>
                                        ))
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



