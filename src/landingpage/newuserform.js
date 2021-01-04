import React, {Component} from 'react';
import './newUserForm.css';

class NewUserForm extends Component {
    render(){
        return(

            <div className="user">
                <div className="user_box">
                    <h3>Create a New User Account</h3>
                <form className="user_form">
                <label htmlFor="name"> Name: </label>
                <br/>
                <input name="name" placeholder="Name"/>
                <br/>
                <label htmlFor="username"> Username: </label>
                <br/>
                <input name="username" placeholder="Username"/>
                <br/>
                <label htmlFor="password"> New Password: </label>
                <br/>
                <input name="password" placeholder="Password"/>
                <br/>
                <label htmlFor="email"> E-mail: </label>
                <br/>
                <input name="email" placeholder="E-mail"/>
                <br/>
                <br/>
                <button>Sign-Up</button>
                </form>
                </div>
            </div>
        )
    }
}


export default NewUserForm;
