import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
const axios = require("axios").default;

const SocialLogin = () => {
    let navigate = useNavigate();
    let location = useLocation();
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [user] = useAuthState(auth);
 
    let from = location.state?.from?.pathname || "/";
    const hanleToken = async (email) => {
        const {data} = await axios.post('https://vast-lowlands-94702.herokuapp.com/login', {email})
        localStorage.setItem('accessToken', data.accessToken)
        navigate(from, { replace: true });
    }
    if (user) { 
        hanleToken(user.email);
    }
    return (
        <div>
            <Button  onClick={() => signInWithGoogle()} variant="info" className='w-100'> Login With Google </Button>
        </div>
    );
};

export default SocialLogin;