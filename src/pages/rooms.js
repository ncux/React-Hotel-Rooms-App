import React from 'react';
import { Link } from "react-router-dom";
import Hero from '../components/hero';
import Banner from '../components/banner';


function Rooms() {

    return (
        <div className="App">
            <Hero hero="roomsHero">
                <Banner title="Our Rooms">
                    <Link to="/" className="btn-primary">
                        Home
                    </Link>
                </Banner>

            </Hero>

        </div>
    );
}

export default Rooms;
