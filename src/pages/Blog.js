import { useLoaderData, useLocation } from "react-router-dom";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import { useEffect, useState } from "react";

export default function Blogs() {
    return (
        <>
            <Header />
            <BreadcumbArea />
            <Breadcumb />
            <Footer />
        </>
    )
}
export function BreadcumbArea() {
    return (
        <div
            className="breadcumb-area bg-img bg-overlay"
            style={{ backgroundImage: 'url(../img/bg-img/breadcumb2.jpg)' }}
        >
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12">
                        <div className="breadcumb-text text-center">
                            <h2>Recipe Details</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export function Breadcumb() {
    const id = useLocation().pathname.split("/")[2];
    const [recipedetails, setRecipedetails] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);

    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/${id}`)
          .then(response => response.json())
          .then(data => {
            setRecipedetails(data);
            setIngredients(data.ingredients);
            setInstructions(data.instructions);
          })
          .catch(error => console.error('Error fetching recipe:', error));
    }, [id]);

    return (
        <div className="receipe-post-area section-padding-80">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="receipe-slider"style={{ margin:"0 auto", width:"100%", } }>
                            <img src={recipedetails.image} alt={recipedetails.name}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="receipe-content-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <div className="receipe-headline my-5">
                                <span>{recipedetails.cuisine}</span>
                                <h2>{recipedetails.name || 'Recipe Title'}</h2>
                                <div className="receipe-duration">
                                    <h6>Preparation Time : {recipedetails.prepTimeMinutes || 'N/A'}</h6>
                                    <h6>Cooking Time : {recipedetails.cookTimeMinutes || 'N/A'}</h6>
                                    <h6>Servings : {recipedetails.servings || 'N/A'} Persons</h6>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-4">
                            <div className="receipe-ratings text-right my-5">
                                <div className="ratings">
                                    {[...Array(Math.floor(recipedetails.rating || 0))].map((_, index) => (
                                        <i key={index} className="fa fa-star" aria-hidden="true"></i>
                                    ))}
                                    {[...Array(5 - Math.floor(recipedetails.rating || 0))].map((_, index) => (
                                        <i key={index + 5} className="fa fa-star-o" aria-hidden="true"></i>
                                    ))}
                                </div>
                                <a href="#" className="btn delicious-btn">{recipedetails.difficulty || 'Unknown Level'}</a>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-lg-8">
                            {instructions.map((step, index) => (
                                <div key={index} className="single-preparation-step d-flex">
                                    <h4>{index + 1}.</h4>
                                    <p>{step}</p>
                                </div>
                            ))}
                        </div>

                        <div className="col-12 col-lg-4">
                            <div className="ingredients">
                                <h4>Ingredients</h4>
                                {ingredients.map((ingredient, index) => (
                                    <div key={index} className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id={`customCheck${index}`} />
                                        <label className="custom-control-label" htmlFor={`customCheck${index}`}>{ingredient}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
