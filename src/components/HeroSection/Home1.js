import React from 'react'
import './Home.css';
import './Typing.css';
import paint from '../../Images/splash.png';

var x = "{"

function Home1() {
    return (

        <body>
            {/* <main>
                <section className="landing">
                    <nav>

                        <h1 className="logo">Dian Kumanov</h1>


                        <ul className="nav-links">

                            <li>
                                About
                                <a href="#">About</a>
                            </li>
                            <li>
                                Experience
                                <a href="#">Experience</a>
                            </li>
                            <li>
                                Projects
                                <a href="#">Projects</a>
                            </li>

                        </ul>
                    </nav>
                </section>
            </main> */}

            <div className="intro">
                <div className="intro-text">
                    <h1 className="hide">
                        <span className="text">“Creativity is just</span>
                    </h1>
                    <h1 className="hide">
                        <span className="text">connecting things.”</span>
                    </h1>
                    <h1 className="hide">
                        <span className="text"> ― Steve Jobs</span>
                    </h1>

                </div>

            </div>
            <div className="slider">

            </div>
            <div class="circle">
                <div class="content">

                </div>
            </div>
            <img className="splatter" src={paint} alt="" />


            <div className="body">
                <div class="css-typing">

                    <p>.splatter {x}  <br /></p>


                    <p>  position: absolute;<br /></p>
                    <p> <span classname="code">top:</span> -80px;</p>
                    <p>  left: -80px;<br /></p>
                    <p>  z-index: 799;<br /></p>
                    <p>  -webkit-animation-name: zoomIn;<br /></p>
                    <p>  animation-name: zoomIn;<br /></p>
                    <p>   -webkit-animation-duration: .2s;<br /></p>
                    <p>  animation-duration: .2s;<br /></p>
                    <p>  -webkit-animation-fill-mode: both;<br /></p>
                    <p>  animation-fill-mode: both;<br /></p>
                    <p>  -webkit-animation-delay: 5.7s;<br /></p>
                    <p>  animation-delay: 5.7s;<br /></p>

                    <p> )</p>


                </div>
            </div>
        </body>

    )
}

export default Home1
