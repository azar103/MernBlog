import React, { Component } from "react";
import axios from 'axios';
import { Redirect } from "react-router-dom";

class SignUp extends Component {
  constructor(props){
    super(props)
    this.state = {
       email: '', 
       password: '',
       redirectTo: false,
       errorMessage: ''
    }
    this.onHandleChangeEmail = this.onHandleChangeEmail.bind(this)
    this.onHandleChangePassword = this.onHandleChangePassword.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onHandleChangeEmail(e){
      this.setState({
        email: e.target.value
      })
  }

  onHandleChangePassword(e){
    this.setState({
      password: e.target.value
    })
  }



  onSubmit(e) {
       e.preventDefault()
       const user = {
        email: this.state.email,
        password: this.state.password
      }
      console.log(user)
        
      axios.post('http://localhost:3001/api/auth/signup', user)
              .then(() => {
                this.setState({
                  redirectTo: true
                })
               
              }) 
  }
  render(){
    if(this.state.redirectTo){
      return(
        <Redirect to="/auth/signin" />
      )
    }
    else {
      return( 
        <form className="col-xs-8 col-xs-4-offset" onSubmit={this.onSubmit}>
        <div className="form-group">
           <label htmlFor="email">Email </label>
           <input type="text" className="form-control" onChange={this.onHandleChangeEmail} />
       </div>  
       <div className="form-group">
         <label htmlFor="password">Password </label>
         <input type="password" className="form-control" onChange={this.onHandleChangePassword}/>
       </div>  
       <button type="submit" className="btn btn-danger" >Inscription</button>
    </form>
      )
    }
    
  }

}

export default SignUp