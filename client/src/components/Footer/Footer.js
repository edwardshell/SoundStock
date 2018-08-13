import React from "react";

const styles = {
    nav: {
      backgroundColor: "#02183a",
      boxShadow: "0px 1px 1px grey",
      borderTop: "3px solid #13a2b8",
      color: "#237c9a"
    }
  }

export const Footer = () => (
  <nav className="navbar navbar-expand-lg navbar-dark" style={styles.nav}>
    <a className="navbar-brand mx-auto" href="/">
      <img
        src="https://preview.ibb.co/hcgto9/Image_uploaded_from_i_OS.jpg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt=""
      />
      
      &copy;
    </a>
  </nav>
);

