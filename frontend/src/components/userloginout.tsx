import React, { Component } from 'react';
import { BehaviorSubject } from 'rxjs';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser') || '{}'));
type userState = {
  username: string,
  password: string
}
export default class UserLogin extends Component<any, any> {
    constructor(props: string) {
      super(props);
      this.state = {
        username : '',
        password : '',
        currentUser : null
      }
      this.updateUsername = this.updateUsername.bind(this);
      this.updatePassword = this.updatePassword.bind(this);
      this.updateToken = this.updateToken.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  
    }
    // Login function
    handleSubmit(){
      const reqOptions = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify ({
          username : this.state.username, 
          password : this.state.password})
      };
      return fetch('http://localhost:8040/user/login', reqOptions)
        .then(response => response.json())
        .then(username =>{
         localStorage.setItem('currentUser', JSON.stringify(username));
         currentUserSubject.next(username);
         console.log(username);
          return username;
        });
  
    }
    // Logout function
    logOut(){
      localStorage.removeItem('currentUser');
      currentUserSubject.next(null);
    }
  
    currentUserValue(){
      return currentUserSubject.value;
    }
  
    updatePassword(event: any) {
      this.setState({password : event.target.value});
  
    }
  
    updateUsername(event: any) {
      this.setState({ username : event.target.value });
  
    }
  
    updateToken(event: any) {
      this.setState({token : event.target.value});
    }
    
  
  
    render(){
      return(
        <div className="login">
        <h1>Kirjaudu</h1>
        Käyttäjätunnus: <input type="text" onChange={this.updateUsername}></input>
        Salasana: <input type="password" onChange={this.updatePassword}></input>
  
        <input type="submit" onClick={this.handleSubmit}></input>
        </div>
      );
    }
  }
