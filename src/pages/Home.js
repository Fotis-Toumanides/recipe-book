import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
    // useNavigate is for sending recipe object to SingleRecipe page
    const navigate = useNavigate();

    const [recipes, setRecipes] = useState([]);
    // Fetching all recipes from Django dbase
    const fetchRecipes = async () => {
        try {
            const response = await axios.get('http://localhost:8000/recipes');
            setRecipes(response.data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, []);
    // Deleting a recipe
    const handleDelete = async (recipeId) => {
        try {
            await axios.delete(`http://localhost:8000/recipe/${recipeId}`);
            recipes.refreshRecipes();
        } catch (error) {
            console.error('Error deleting recipe:', error);
        }
    };
    // Handling the user request to see one's recipe details
    const handleRecipeClick = (recipe) => {
        navigate(`/recipes/${recipe.id}`, { state: { recipe } });
        {/* <Link to={{ pathname: `/recipes/${recipe.id}`, state: { recipe } }} />; */ }
    };

    return (
        <Container className="justify-content-center align-items-center">
            <div className='mb-4'>
                <h2 className='mb-4'>All Recipes</h2>
                <Row>
                    {/* Mapping all recipes on Bootstrap 5 cards */}
                    {recipes.map(recipe => (
                        <Col key={recipe.id} xs={12} md={6} lg={4}>
                            <Card style={{ width: '18rem' }} className='mb-4 shadow p-3 rounded'>
                                <Card.Img variant="top" src="./images/butter-potato.jpg" />
                                <Card.Body>{recipe.recipe_name}
                                    {/* <Link to={{ pathname: `/recipes/${recipe.id}`, state: { recipe } }}>{recipe.recipe_name}</Link> */}
                                    <Card.Text>
                                        Easy       120'
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => handleRecipeClick(recipe)}>Show Recipe {recipe.id}</Button>{'    '}
                                    <Button variant="danger" onClick={() => handleDelete(recipe.id)}>Delete {recipe.id}</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))};
                </Row>
            </div >

        </Container>

    )
}
export default Home;