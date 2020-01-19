import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ListPost from './components/ListPost';
import SinglePost from './components/SinglePost';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <div className="App-header">
          <nav className="navbar navbar-default">
          <div className="container-fluid">
          <div className="navbar-header"></div>  
          <ul className="nav navbar-nav">
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/new">Creer un Post</Link></li>
          </ul>
         
          <ul className="nav navbar-nav pull-right">
            <li><Link to="/auth/signin">Connexion</Link></li>
            <li><Link to="/auth/signup">Inscription</Link></li>
          </ul>
          </div>
          </nav>
        </div>
      </div>
     <div className="container">
      <Switch>
          <Route  exact path='/'  component={ListPost}/>
          <Route  path="/posts/:id"  component={SinglePost} />
          <Route  exact path="/post/edit/:id"  component={EditPost} />
          <Route  path="/posts" component={ListPost} />
          <Route  path="/new" component={CreatePost}/>
          <Route  path="/auth/signin"  component={SignIn} />
          <Route  path="/auth/signup"  component={SignUp} />
      </Switch>
      </div>   
      </Router>
    );
  }
}

export default App;
