import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Post from './Components/Post/Post';
import PostDetails from './Components/PostDetails/PostDetails';
import Header from './Components/Header/Header';
import NotMatched from './Components/NotMatched/NotMatched';


function App() {

 

  return (
    <>
    
      <Header></Header>
        <Router>
          <Switch>
          <Route path="/post">
            <Post></Post>
          </Route>
          <Route path="/postDetails/:pId">
            <PostDetails></PostDetails>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotMatched></NotMatched>
          </Route>
        </Switch>
      </Router>
  </>
  );
}

export default App;
