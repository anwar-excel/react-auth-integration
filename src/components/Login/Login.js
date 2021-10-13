import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInUsingGoogle, signInUsingGithub } = useFirebase();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle}>Google sign In</button>
            <br />
            <button onClick={signInUsingGithub}>Github sign in</button>
            <Link to="/register">New User?</Link>
        </div>
    );
};

export default Login;