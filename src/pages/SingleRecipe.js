import React from 'react'
import { useLocation } from 'react-router-dom';


const SingleRecipe = () => {
    // Getting the recipe object from the Home page
    const location = useLocation();
    const { recipe } = location.state || {};

    return (
        // Bootstrap container div to print the recipe details
        <div className="container text-center">
            <h1>Title: {recipe.recipe_name}</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
                <div className="col">
                    <h3>Igredients</h3>
                    <ul className="list-group">
                        <li className="list-group-item">{recipe.ingredients}</li>
                    </ul>
                </div>
                <div className="col">
                    <h3>Cooking</h3>
                    <ul className="list-group">
                        <li className="list-group-item">{recipe.instructions}</li>
                    </ul>
                </div>
            </div >
        </div >
    )
}

export default SingleRecipe;