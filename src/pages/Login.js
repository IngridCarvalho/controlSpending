import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { usePost } from '../utils/rest';

const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyArYDyI6SXzRyn4rCIY9fDZjxgUavxvkZI'

const Login = () => {
    const [postData, signin] = usePost(url);
    const [logged, setLogged] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassaword] = useState('');

    const onChangeEmail = evt => {
        setEmail(evt.target.value);
    }

    const onChangePassword = evt => {
        setPassaword(evt.target.value);
    }

    useEffect(() => {
        if(Object.keys(postData.data).length > 0){
            localStorage.setItem('token', postData.data.idToken);
            window.location.reload();
        }
    }, [postData]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            setLogged(true);
        }
    })

    const access = async() => {
        await signin({ //the token will be caught for useEffect, when there is a change in data
            email,
            password,
            returnSecureToken: true
        });
    }

    if(logged){
        return <Redirect to='/' />
    }

    return (
        <div className="container">
            <h1>Login</h1>
            {
                postData.error && postData.error.length > 0 && 
                <p className="alert alert-danger">Email ou senha inválidos!</p>
            }
            <div className="form-group col-md-5">
                <label>Email:</label>
                <input type="text" className="form-control" value={email} onChange={onChangeEmail}/>
                <label>Senha:</label>
                <input type="password" className="form-control" value={password} onChange={onChangePassword}/>
            </div>
            <button type="button" className="btn btn-success" onClick={access}>Acessar</button>
        </div>
    )

}

export default Login;