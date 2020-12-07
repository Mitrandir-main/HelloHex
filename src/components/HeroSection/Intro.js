import React, { Component } from "react";
import gsap from "gsap";





class Intro extends Component {
    constructor(props) {
        super(props);
        this.tl = gsap.timeline({ defaults: { ease: "power1.out" } });
    }
    componentDidMount() {
        this.tl.to('.text', { y: '0%', duration: 1, stagger: 1 })
        this.tl.to('.slider', { y: '-100%', duration: 1.5, delay: 0.5 })
        this.tl.to('.intro', { y: '-100%', duration: 1}, "-=1")
        this.tl.fromTo('nav', {opacity:0}, {opacity: 1, duration: 1});
        // this.tl.fromTo('.body', {opacity:0}, {opacity: 2, duration: 1.5, delay: 1});






    }
    render() {
        return (
            <div>
                

            </div>
        )

    }

}
export default Intro;



// import React from 'react'

// import gsap from "gsap";

// function Intro() {
//     const tl = gsap.timeline({ defaults: { ease: "power1.out" } })

//     return (

//         tl.to('.text', { y: '0%', duration: 1 })

//     )
// }

// export default Intro
