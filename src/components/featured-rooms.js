import React, { Component } from 'react'
import Title from './title';
import Room from '../pages/room';
import { RoomContext } from "../context";

export default class FeaturedRooms extends Component {

    static contextType = RoomContext;

    render() {
        const { loading, featuredRooms } = this.context;

        const rooms = featuredRooms.map(room => {
            return <Room key={ room.id } room={ room } />
        });

        return (
            console.log(featuredRooms),

            <section className="featured-rooms">
                <Title title="featured-rooms" />
                <div className="featured-rooms-center">
                    { loading ? <h4>...loading</h4> : rooms }
                </div>
            </section>
        )
    }
}