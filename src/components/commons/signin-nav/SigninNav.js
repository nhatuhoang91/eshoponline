import React from 'react';
import {Link} from 'react-router-dom';
import {SIGNIN_PAGE_URL} from '../../../constants/constants.js'
const SigninNav = () =>{
    return (
        <Link to={SIGNIN_PAGE_URL}>Sign in</Link>
    )
}

export default SigninNav;