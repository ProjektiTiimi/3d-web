import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BehaviorSubject } from 'rxjs';
import configData from "../config/configData.json";

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
      return fetch(`${configData.API_URL}:${configData.API_PORT}/user/login`, reqOptions)
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
        <div className="AddCustomer">
        <h1>Kirjaudu</h1>
        Käyttäjätunnus: <input type="text" onChange={this.updateUsername} className="AddCustomer-input"></input>
        Salasana: <input type="password" onChange={this.updatePassword} className="AddCustomer-input"></input>
      <Link to="/register" className="AddCustomer-btn">
        Rekiströidy
      </Link>
  
        <input type="submit" onClick={this.handleSubmit} className="AddCustomer-btn"></input>
        <button onClick={this.logOut}>Kirjaudu ulos</button>
        </div>
      );
    }
  }
