import React from "react";
import { SignIn, Search, SignUp } from "./"
import pic from "../../images/logo.jpg"

const styles = {
  nav: {
    backgroundColor: "#02183a",
    boxShadow: "0px 1px 1px grey",
    borderTop: "3px solid #13a2b8",
    color: "#237c9a",
    height: "120px"
  },
  input: {
    borderColor: "#237c9a",
    boxShadow: "0 0 0 3px rgba(35,124,154, .25)",
    color: "white"
  },
  img: {
    width: 165,
    height: 115
  }

}

export const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark" style={styles.nav} >
    <a className="navbar-brand text-info" href="/">
      {/* <strong> Sound Stock</strong> */}
      <img id="logo" src={pic} style={styles.img} alt="logo"/>
    </a>
    <SignIn />
    <SignUp />
    <Search />
  </nav>
);

export default Nav;
