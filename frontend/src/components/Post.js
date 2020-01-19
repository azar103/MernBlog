import React, { Component } from "react";
import './Post.css';
import moment from 'moment';
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
class Post extends React.Component {
    constructor(props){
        super(props)
        this._onHandleDelete = this._onHandleDelete.bind(this)
        this.state= {
            redirect: false
        }
    }

    _onHandleDelete(){
        axios.delete('http://localhost:3001/api/posts/'+this.props.post._id)
              .then(()=> {
                  this.setState({
                     redirect: true
                  })
              })
    }

    render(){
        const {post} = this.props
        if(this.state.redirect){
            return( <Redirect to="/posts" />)
           
        }else {
            return(
                <li className="list-group-item">
                <div className="row">
                     <h2 className="col-md-4"><Link to={`/posts/${post._id}`}>{post.title}</Link></h2>
                    <i id="date" className="col-md-4 col-md-offset-4">{moment(post.createdAt).format("DD/MM/YYYY HH:MM")}</i>
                </div>      
                <p>{post.content}</p>
                <div className="btn-group">
                <Link to={`/post/edit/${post._id}`}> <button className="btn btn-success" >Edit</button></Link>
                <button className="btn btn-danger" onClick={this._onHandleDelete}>Delete</button>
                </div>
             </li>
        
        
        )}}
    
}

export default Post