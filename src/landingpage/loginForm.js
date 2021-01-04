import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './loginForm.css'

class LoginForm extends Component {
    render(){
        return(

            <div className="login">
                <div className="form_box">
                <form className="main_form">
                    <label htmlFor="name">User Name: </label>
                    <br/>
                    <input name="name" id="name" value="UserName" />
                    <br/>
                    <label htmlFor="name">Password: </label>
                    <br/>
                    <input name="password" id="password" value="Password" />
                    <br/>
                    <br/>
                    <Link to='/homepage'><button>Login</button></Link>
                    <br/>
                    <br/>
                    <Link to='/newuser'><button>New User</button></Link>
                </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;