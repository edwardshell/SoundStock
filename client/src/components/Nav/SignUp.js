import React from "react"

const styles = {
    dropdown: {
        backgroundColor: "#072659"
    }
}

export const SignUp = () =>
        <div className="nav-item dropdown">
            <button className="btn btn-info btn-sm nav-link dropdown-toggle m-1" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Sign Up</button>
            <div className="dropdown-menu" style={styles.dropdown}>
                <button className="btn btn-info btn-block ">Artist Sign Up</button>
                <button className="btn btn-info btn-block ">Investor Sign Up</button>
            </div>
        </div>