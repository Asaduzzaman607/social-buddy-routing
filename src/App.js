import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Post from './Components/Post/Post';
import PostDetails from './Components/PostDetails/PostDetails';


function App() {
  return (
        <Router>
          <Switch>
          <Route path="/post">
            <Post></Post>
          </Route>
          <Route path="/postDetails/:postId">
            <PostDetails></PostDetails>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <p>Not matched</p>
          </Route>
        </Switch>
      </Router>
  
  );
}

export default App;
