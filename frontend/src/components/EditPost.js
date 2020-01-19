import React, {Component} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
class EditPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            content: '',
            redirect: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this._handleChangeText = this._handleChangeText.bind(this);
        this._handleChangeContent = this._handleChangeContent.bind(this);
    }
    componentDidMount(){
        this._getPost(this.props.match.params.id)
    }
  

    _getPost(id) {
         axios.get('http://localhost:3001/api/posts/'+id)
              .then(
                  (res) => {
                      this.setState({
                          title: res.data.title,
                          content: res.data.content
                      })
                  }
              ) 
    }
    _handleChangeText(e) {
        this.setState({ title: e.target.value })
    }

   _handleChangeContent(e){
      this.setState({ content: e.target.value })
    }
    onSubmit(e){
        e.preventDefault();
        const Post = {
            title: this.state.title,
            content: this.state.content
        }
        axios.put('http://localhost:3001/api/posts/' + this.props.match.params.id, Post)
        .then((res) => {
          this.setState({
              redirect: true
          })
        }).catch((error) => {
          console.log(error)
        })
  
    }
    render() {
        if(this.state.redirect){
            return(
                <Redirect to="/posts" />
            )
        }else {
            return(
                <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                  <h2>Modifier Ce Post</h2>
                 <form onSubmit={this.onSubmit}  >
                 <div className="form-group">
                 <label htmlFor="title">Titre</label>
                  <input type="text" className="form-control" value={ this.state.title } onChange={this._handleChangeText}/>
                </div>
                <div className="form-group">
               <label htmlFor="content">Contenu</label>
               <textarea  className="form-control"  rows="4" value={ this.state.content } onChange={this._handleChangeContent}/>
              </div>
              <button className="btn btn-success"  type="submit">Modifier</button>
             </form>
              </div>
              </div>
            )
        }
        
    }
}

export default EditPost