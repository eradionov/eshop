import React from 'react';
import { SignIn } from '../../components/sign-in/sign-in.component';
import { SignUp } from '../../components/sign-up/sign-up.component';

export const SignInAndUp = () => (
    <div className="sign-in-up row">
        <SignIn/>
        <SignUp/>
    </div>
);