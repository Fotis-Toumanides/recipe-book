import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RecipeList = (props) => {

    const [recipes, setRecipes] = useState([]);


    const [activeRecipe, setActiveRecipe] = useState(null);

    const handleDelete = async (recipeId) => {
        try {
            await axios.delete(`http://localhost:8000/recipe/${recipeId}`);
            recipes.refreshRecipes();
        } catch (error) {
            console.error('Error deleting recipe:', error);
        }
    };

    const handleRecipeClick = (recipe) => {
        alert(recipe.recipe_name)
    };

    return (

        <Container className="justify-content-center align-items-center">
            <div className='mb-4'>

                {/* <h2 className='mb-4'>All Recipes</h2> */}

                <Row>
                    {props.recipes.map(recipe => (


                        <Col key={recipe.id} xs={12} md={6} lg={4}>

                            {/* <div className="d-flex justify-content-between align-items-center"> */}
                            {/* <h3>{recipe.id} </h3> */}
                            {/*  <Image src="./images/butter-potato.jpg" fluid /> */}
                            <Card style={{ width: '18rem' }} className='mb-4'>
                                <Card.Img variant="top" src="./images/butter-potato.jpg" />
                                <Card.Body>
                                    <Card.Title>{recipe.recipe_name}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card.
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => handleRecipeClick(recipe)}>Show Recipe {recipe.id}</Button>{'    '}
                                    <Button variant="danger" onClick={() => handleDelete(recipe.id)}>Delete {recipe.id}</Button>
                                </Card.Body>
                            </Card>



                            <span
                                onClick={() => handleRecipeClick(recipe.id)}
                                style={{ cursor: 'pointer' }}
                                className="recipe-name"
                            >
                                {/*  <b>{recipe.recipe_name}</b> */}
                            </span>
                            {/* <button className='btn btn-danger' onClick={() => handleDelete(recipe.id)}>Delete</button> 
                        </div>*/}



                            {activeRecipe === recipe.id && (

                                <div className="mt-3" style={{ textAlign: 'left' }}>

                                    <strong style={{ textDecoration: 'underline', fontSize: '1.6rem' }}>Ingredients:</strong>
                                    <p style={{ marginLeft: '15px', fontSize: '1.2rem' }} dangerouslySetInnerHTML={{ __html: recipe.ingredients.replace(/\n/g, '<br />') }}></p>
                                    <strong style={{ textDecoration: 'underline', fontSize: '1.6rem' }}>Instructions:</strong>
                                    <p style={{ marginLeft: '15px', fontSize: '1.2rem' }} dangerouslySetInnerHTML={{ __html: recipe.instructions.replace(/\n/g, '<br />') }}></p>
                                </div>


                            )}
                        </Col>
                    ))}
                </Row>
            </div >

        </Container>

    );
};

export default RecipeList;