import React from 'react';
import { CustomButton } from '../custom-button/custom-button.component';
import { FormInput } from '../form-input/form-input.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';

export class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.signIn = this.signIn.bind(this);
        this.formChange = this.formChange.bind(this);

        this.state = {
            email: '',
            password: ''
        };
    }

    signIn = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error.message);
        }

        this.setState({email: '', password: ''});
            
    }

    formChange(event) {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className="sign-in col-md-6">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit = { this.signIn }>
                    <FormInput name="email" type="email" value={this.state.email} label="Email" handleChange = {this.formChange} required/>
                    <FormInput name="password" type="password" handleChange = {this.formChange} label="Password" value={this.state.password} required/>
                    <CustomButton type="submit"><i className = "fa fa-sign-in"></i> Sing In</CustomButton>
                    <CustomButton onClick={ signInWithGoogle } isGoogleSignIn><i className="fa fa-sign-in"></i> Google Sing In</CustomButton>
                </form>
            </div>
        );
    }
}