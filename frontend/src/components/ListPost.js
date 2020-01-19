import React, { Component } from "react";
import axios from 'axios';
import Post from "./Post";
class ListPost extends Component {

  constructor(props){
      super(props)
      this.state= {
          posts: []
      }
  }  
  componentDidMount(){
      this._loadPosts();
  }

  _loadPosts() {
    
      axios.get('http://localhost:3001/api/posts')
      
           .then(
               (res) => {
                   this.setState({
                       posts: res.data
                   })
               }
           )
           .catch((error) => console.log({error}))
  }
  render() {
    if(this.state.posts.length == 0){
      return(
         <p className="text-center">Il n'y a pas d'articles</p>
      )
    }else {
      return (
        <ul className="list-group">
        {this.state.posts.map((res, index) => 
        <Post 
          key={index}
          post={res}
        />)}
        </ul>  
      );
    }
    
  }
}

export default ListPost