import React, {useState} from 'react';
import axios from 'axios';
import configData from "../config/configData.json";

export function RegisterUser(){
    const [user,setUser] = useState({
        username:'',
        password:'',
        ytunnus:'',
        email:'',
        tilinumero:''
    })
    const handleChange = (e: { target: { name: any; value: any; }; }) =>{
        const {name, value} = e.target 
        setUser({...user,
        [name]:value
    })
    }

    const Register = () =>{
        const {username, password, ytunnus, email, tilinumero} = user
        if (username && password){
            axios.post(`${configData.API_URL}:${configData.API_PORT}/user/register`, user)
            .then(res=>console.log(res));
        }
        else{
            alert("Invalid username or password");
        }
    }

    return(
        <div className="AddCustomer">
        <h1>Rekisteröidy</h1>
        Käyttäjätunnus: <input type="text" value={user.username} name="username" onChange={handleChange} className="AddCustomer-input"></input>
        Salasana: <input type="password" value={user.password} name="password" onChange={handleChange} className="AddCustomer-input"></input>
        Y-tunnus: <input type="text" value={user.ytunnus} name="ytunnus" onChange={handleChange} className="AddCustomer-input"></input>
        E-mail: <input type="text" value={user.email} name="email" onChange={handleChange} className="AddCustomer-input"></input>
        Tilinumero: <input type="text" value={user.tilinumero} name="tilinumero" onChange={handleChange} className="AddCustomer-input"></input>
        <input type="submit" onClick={Register} className="AddCustomer-btn"></input>
        </div>
    )
}

export default RegisterUser;
