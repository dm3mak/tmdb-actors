import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ActorsPage from './pages/ActorsPage';
import { Container } from 'react-bootstrap';
import { HashRouter, Route } from 'react-router-dom';
import MoviePage from './pages/MoviePage';
import SingleMovie from './components/SingleMovie';
import NavBar from './components/NavBar';

function App(){
  return (
    <HashRouter>
      <NavBar/>
      
      <Route exact path = "/">
      <Container>
        <ActorsPage/>
      </Container>
      </Route>
      <Route exact path = "/movie">
      <Container>
        <MoviePage/>
      </Container>
      </Route>
      <Route exact path = "/movie/:movieID">
      <Container>
        <SingleMovie/> 
      </Container>
      </Route>
    </HashRouter>
  )
}

export default App;

