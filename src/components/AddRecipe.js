import React, { useState } from 'react';
import axios from 'axios';
import './addRecipe.css';

const AddRecipe = (props) => {
    const [recipeName, setRecipeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/recipes', {
                recipe_name: recipeName,
                ingredients: ingredients,
                instructions: instructions
            });
            setRecipeName('');
            setIngredients('');
            setInstructions('');
            props.refreshRecipes();
        } catch (error) {
            console.error('Error adding recipe:', error);
        }
    };

    return (
        <b-container fluid>
            {/* <div className='container justify-content-center mt-5'> */}
            <h2 className='mb-4'>Add New Recipe</h2>
            <form onSubmit={handleSubmit} className='mb-5 recipe-name'>
                <div className='mb-3'>
                    {/* <label className='form-label'>Recipe Name:</label> */}
                    <input type='text' className='form-control' placeholder='Recipe Name' value={recipeName} onChange={(e) => setRecipeName(e.target.value)} required />
                </div>
                <div className='mb-3'>
                    {/* <label className='form-label' >Ingredients:</label> */}
                    <textarea className='form-control' rows="10" placeholder='Ingredients' value={ingredients} onChange={(e) => setIngredients(e.target.value)} required></textarea>
                </div>
                <div className='mb-3'>
                    {/* <label className='form-laQbel'>Instructions:</label> */}
                    <textarea className='form-control' rows="10" placeholder='Instructions' value={instructions} onChange={(e) => setInstructions(e.target.value)} required></textarea>
                </div>
                <button type='submit' className='addRecipe'>Add Recipe</button>
            </form>

        </b-container>
    );
};

export default AddRecipe;