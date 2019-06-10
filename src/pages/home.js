import React from 'react';
import { Link } from "react-router-dom";
import Hero from '../components/hero';
import Banner from '../components/banner';
import Services from '../components/services';
import FeaturedRooms from '../components/featured-rooms';


function Home() {
    return (
        <>
            <Hero>
                <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms Starting at $299">
                    <Link to="/rooms" className="btn-primary">
                        our rooms
                    </Link>

                </Banner>
            </Hero>
            <Services>

            </Services>

            <FeaturedRooms />

        </>
    );
}

export default Home;
