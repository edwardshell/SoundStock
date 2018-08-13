import React from "react";

const styles = {
    img: {
        height: "150px",
        width: "150px"
    }
}

const Image = props => <img style={styles.img} src={props.img} alt="artist image" />;

export default Image;
