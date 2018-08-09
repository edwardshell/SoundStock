import React, { Component } from "react";
import ReactDOM from "react-dom";
import Image from "./Image";
import Music from "./Music";
import Progress from "./Progress";

export class ArtistDiv extends Component {

    render() {
        return (

            <div>
                <Image />
                <Music />
                <Progress />
            </div>
        )
    }
}