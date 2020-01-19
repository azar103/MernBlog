import React, {Component} from 'react'
import axios from 'axios';

class SinglePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {}
        }

    }

    componentDidMount() {
        this._getPost(this.props.match.params.id)
        
    }

    _getPost(id) {
         axios.get('http://localhost:3001/api/posts/'+id).then(
             (res) => {
                 this.setState({
                     post: res.data
                 })}
         )
    }

    render() {
        const {post} = this.state
        console.log(this.props.match.params.id)
        if(post){
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                           <h1 className="text-info">{post.title}</h1>
                           <p>{post.content}</p>
                        </div>
                    </div>
                </div>
            )
        } else {
            return(
                <h2>Article Non trouvé !</h2>
            )
        }
       

    }
}

export default SinglePost

