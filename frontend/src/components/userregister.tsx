import React, {useState} from 'react';
import axios from 'axios'

function RegisterUser(){
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
        const {username, password} = user
        if (username && password){
            axios.post("http://localhost:8040/user/register", user)
            .then(res=>console.log(res));
        }
        else{
            alert("Invalid username or password");
        }
    }

    return(
        <div className="register">
        <h1>Rekisteröidy</h1>
        Käyttäjätunnus: <input type="text" value={user.username} onChange={handleChange}></input>
        Salasana: <input type="password" value={user.password} onChange={handleChange}></input>
        Y-tunnus: <input type="text" value={user.ytunnus} onChange={handleChange}></input>
        E-mail: <input type="text" value={user.email} onChange={handleChange}></input>
        Tilinumero: <input type="text" value={user.tilinumero} onChange={handleChange}></input>
        <input type="submit" onClick={Register}></input>
        </div>
    )
}

