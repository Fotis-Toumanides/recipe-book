import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';  // 
import SingleRecipe from './pages/SingleRecipe';  // 
import AddRecipe from './components/AddRecipe';    // 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ErrorPage from './components/ErrorPage';


function App() {

  return (
    // React router 6.3 and Bootstrap 5 Navbar
    <Router>
      <main>
        <Navbar fixed="top" bg="blue" data-bs-theme="light" collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Container>
              <Navbar.Brand href="#home">Happy Days</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="recipes/AddRecipe">Add Recipe</Nav.Link>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Navbar>
        <div className="App">
          <header className="App-header">
            <h1>Happy Days Recipes</h1>
            <Routes>
              <Route index element={<Home />} />
              <Route path='/recipes/AddRecipe' element={<AddRecipe />} />
              <Route path='/recipes/:id' element={<SingleRecipe />} />
              <Route path='*' Component={ErrorPage} />
            </Routes>
          </header>
        </div>
      </main>
    </Router>
  );
}

export default App;