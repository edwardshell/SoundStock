import React, { Component } from "react"

const styles = {
    dropdown: {
        backgroundColor: "#072659"
    },
}


export class SignIn extends Component {

    state ={
        email:"",
        Password:""
    }

    render() {
        return (
            <div className="nav-item dropdown">
                <button className="btn btn-sm btn-outline-info nav-link dropdown-toggle m-1" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Sign In</button>
                <div className="dropdown-menu" style={styles.dropdown}>
                    <label className="text-light">Email
                <input className="form-control my-2 my-sm-1 bg-secondary text-light" placeholder="Email" />
                    </label>
                    <label className="text-light">Password
                <input className="form-control my-2 my-sm-1 bg-secondary text-light" placeholder="Password" />
                    </label>
                </div>
            </div>
        )
    }
}