import React from "react";
import FormInput from '../form-component/form-component';
import CustomButton from '../custom-button/custom-button';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils.js';
import './sign-in.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const {email,password} = this.state;

        try{
          await auth.signInWithEmailAndPassword(email,password);
          this.setState({ email: '', password: '' });
        }catch(error)
        { 
          console.log(error);
        }
    }

    handleChange =  event =>{
        const {value, name } = event.target;
        this.setState({ [name]: value }, () => console.log("inside handlechange for ",value))
    }

    render(){
        return (
          <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
              <FormInput
                name="email"
                type="email"
                value={this.state.email}
                label="email"
                handleChange={this.handleChange}
                required
              />
              <FormInput
                name="password"
                type="password"
                value={this.state.password}
                handleChange={this.handleChange}
                label="password"
                required
              />
              <div className='buttons'>
                <CustomButton type="submit">SIGN IN</CustomButton>
                <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn> 
                  {' '}
                  SIGN IN WITH GOOGLE {' '}
                  </CustomButton>
              </div>
            </form>
          </div>
        );
    }
};

export default SignIn;