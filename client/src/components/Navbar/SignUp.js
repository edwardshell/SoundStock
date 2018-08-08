import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


const styles = {
    dropdown: {
        backgroundColor: "#02183a"
    }
}

export const SignUp = () =>
    <div className="nav-item dropdown">
        <button className="btn btn-info btn-sm nav-link dropdown-toggle m-1" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Sign Up</button>
        <div className="dropdown-menu" style={styles.dropdown}>
            <Link to="/artistSignUp">
                <button className="btn btn-info btn-block ">Artist Sign Up</button>
            </Link>
            <Link to="/investorSignUp">
            <button className="btn btn-info btn-block ">Investor Sign Up</button>
            </Link>
        </div>
    </div>