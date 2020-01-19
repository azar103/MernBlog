import React, {Component} from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom';
class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            redirection: false
        }
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeContent = this.handleChangeContent.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }

    handleChangeTitle(event) {
      this.setState({
          title: event.target.value
      })
    }

    handleChangeContent(event) {
        this.setState({
            content: event.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const Post = {
            title: this.state.title,
            content: this.state.content
        }
       axios.post('http://localhost:3001/api/posts', Post).then(
           () => {
            this.setState({
                redirection: true
            })    
          }
       )
       .catch((error) => console.log({error}))
    }

    render() {
        if(this.state.redirection){
           return <Redirect to="/posts" />
        } else {
            return(
                <div class="row">
                  <div class="col-sm-8 col-sm-offset-2">
                    <h2>Nouveau Post</h2>
                   <form onSubmit={this.onSubmit} action="/posts">
                   <div class="form-group">
                   <label for="title">Titre</label>
                   <input type="text" class="form-control" onChange={this.handleChangeTitle}/>
                  </div>
                  <div class="form-group">
                 <label for="content">Contenu</label>
                 <textarea  class="form-control"  rows="4" onChange={this.handleChangeContent}/>
                </div>
                <button class="btn btn-success"  type="submit">Soumettre</button>
               </form>
                </div>
                </div>
            )
        }
       
    }
}

 


export default CreatePost;