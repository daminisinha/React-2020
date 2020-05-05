import React from 'react';
import SignIn from '../../component/sign-in/sign-in';
import SignUp from '../../component/sign-up/sign-up';
import './signInAndSignUp.scss';

const SingInAndSignUpPage = () =>(
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
    </div>
)


export default SingInAndSignUpPage;