import React, { Component } from 'react'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from './title';


export default class Services extends Component {

    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "Free Cocktails",
                info: "I was told that the resumes without photos likely meant that the kids didn't know - or approve - of their parents going to the park."
            },
            {
                icon: <FaHiking/>,
                title: "Endless Hiking",
                info: "So apparently the automoderator blocks posts with links to non-whitelisted sites, which is why my posts with the source didn't show up."
            },
            {
                icon: <FaShuttleVan/>,
                title: "Free Shuttle van",
                info: "I'd heard of Leagoo but only because the local shopping mall has one of those crane games with a bunch of cheap shitty phones as prizes."
            },
            {
                icon: <FaBeer/>,
                title: "Good Beer",
                info: "Why don't you just set up something incredibly technical involving linux, renting and setting up remote servers and then going though a 37 step network set up process?"
            }
        ],
    };




    render() {
        return (
                <section className="services">
                    <Title title="Services">  </Title>

                    <div className="services-center">

                        { this.state.services.map((service, index) => {
                            return (
                                <article key={ index } className="service">
                                    <span>{ service.icon }</span>
                                    <h6>{ service.title }</h6>
                                    <p>{ service.info }</p>
                                </article>
                            )
                        }) }

                    </div>

                </section>
        )
    }
}