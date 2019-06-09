import React from 'react';
import { Link } from "react-router-dom";
import Hero from '../components/hero';
import Banner from '../components/banner';


function Error() {

    return (
        <div className="App">
            <Hero >
                <Banner title="Error 404" subtitle="page not found">

                    <Link to="/" className="btn-primary">
                        Home
                    </Link>

                </Banner>
            </Hero>

        </div>
    );
}

export default Error;
