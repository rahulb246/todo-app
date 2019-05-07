import AuthService from '../services/AuthService'
import Constants from '../constants.js'
import React from 'react';
import LoginActions from '../actions/LoginActions'
import LoginStore from '../stores/LoginStore'
import {withRouter} from "react-router-dom";


import AlertActions from '../actions/AlertActions'


import request from 'superagent';

class LoginPage extends React.Component {
    
    constructor(props){
        super(props);

        //Set the initial state of the component
        this.state = {
            errors: {
                
            },
            user: {
                username: '',
                password: ''
            },
        };       
        this.loginGoogle = this.loginGoogle.bind(this);
    }

    loginGoogle(event){
        event.preventDefault();                
        AuthService.loginGoogle(this.props.history);
    }


    render(){
      return (
        <div className="row justify-content-center">

            <div className="card col-md-6">
            <div className="card-body text-center">

                <h3 className="card-title text-left">Login</h3>

                <br/>

                <hr />
                
                <button className="btn loginBtn loginBtn--google" onClick={this.loginGoogle}>
                    Log in with Google
                </button>

            <hr />

                <p className="text-justify">
                <small> By logging in with your Google account, you are giving this website permission
                    to obtain your name and email. Your personal information will not be shared with anyone.</small>
                </p>
            </div>
            </div>
        </div>
    )}
}

export default withRouter(LoginPage);