import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { usePost } from '../utils/rest';

const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyArYDyI6SXzRyn4rCIY9fDZjxgUavxvkZI'

const Login = () => {
    const [postData, signin] = usePost(url);
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        if(Object.keys(postData.data).length > 0){
            localStorage.setItem('token', postData.data.idToken);
            setLogged(true);
        }
    }, [postData]);
    const access = async() => {
        await signin({ //the token will be caught for useEffect, when there is a change in data
            email: 'ingridcarvalho.1007@gmail.com',
            password: '123456',
            returnSecureToken: true
        });
    }

    if(logged){
        return <Redirect to='/' />
    }

    return (
        <div>
            <h1>Login</h1>
            <button type="button" onClick={access}>Acessar</button>
        </div>
    )

}

export default Login;