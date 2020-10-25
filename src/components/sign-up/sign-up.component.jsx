import React from 'react';
import { FormInput } from '../form-input/form-input.component';
import { CustomButton } from '../custom-button/custom-button.component';
import { auth, userProfileSaver } from '../../firebase/firebase.utils'; 
import './sign-up.scss';

export class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            email: '',
            displayName: '',
            password: '',
            confirmPassword: ''
        };
    }

    signUp = async event => {
        event.preventDefault();

        const {email, displayName, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            return alert('Password should match');
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await userProfileSaver(user, {displayName});

            this.setState({
                email: '',
                displayName: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.log(error.message);
        }
    }

    formChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return(
            <div className="sign-up col-md-6 clearfix">
                <h2 className="title">Create new account</h2>
                <span>I don't have an account</span>
                <form onSubmit = { this.signUp }>
                    <FormInput name="displayName" type="text" value={this.state.displayName} label="Display name" handleChange = {this.formChange} required/>
                    <FormInput name="email" type="email" value={this.state.email} label="Email" handleChange = {this.formChange} required/>
                    <FormInput name="password" type="password" handleChange = {this.formChange} label="Password" value={this.state.password} required/>
                    <FormInput name="confirmPassword" type="password" handleChange = {this.formChange} label="Password" value={this.state.confirmPassword} required/>
                    
                    <CustomButton type="submit"><i className = "fa fa-sign-in"></i> Sing Up</CustomButton>
                </form>
            </div>
        );
    }
}