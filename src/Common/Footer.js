import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <InstagramArea />
            <FooterAreaStart />
        </>
    );
}

export function InstagramArea() {
    const [data, setData] = useState([]);

    const apiGet = () => {
        fetch("https://dummyjson.com/recipes/tag/indian")
            .then(response => { return response.json() })
            .then((data) => setData(data.recipes));

    };
    useEffect(() => {
        apiGet();
        const interval = setInterval(() => {
            apiGet();
        }, 10000);
        return () => clearInterval(interval);
    }, []);

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

                {
                    data.map((recipe, index) => (
                        <div className="single-insta-feeds" key={index}>
                            <img src={recipe.image} alt="" />
                            <div className="insta-icon">
                                <Link to={`/blog/${recipe.id}`}><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                            </div>
                        </div>
                    ))
                }
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
                            <a href="index.html"><img src="../img/core-img/logo.png" alt="" /></a>
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
