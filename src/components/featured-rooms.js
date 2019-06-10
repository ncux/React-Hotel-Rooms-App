import React, { Component } from 'react'
import { RoomContext } from "../context";

export default class FeaturedRooms extends Component {

    static contextType = RoomContext;

    render() {
        // const { make, model } = this.context;

        return (
            <div className="navbar">
                <h3>The  is a nice ride! Featured rooms </h3>

            </div>
        )
    }
}