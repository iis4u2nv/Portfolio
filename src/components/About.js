import React from 'react';

function About () {
    return(
        <section id="about" className="container">
        <div className="row">
            <div className='col-md-6'>
                <h2>A Little About Me</h2> 
                <img src="https://github.com/iis4u2nv/Portfolio/blob/main/images/amazingpicture.jpg?raw=true" className="image-fluid" alt="amazingpicture" />            
                <p>
                    Transitioning from a successful 20-year career in finance and real estate, I'm now leveraging my business acumen to build user-friendly 
                    websites that convert visitors into leads and boost sales.  I'm deeply invested in understanding the online needs of businesses, 
                    especially in finance and real estate industries.
                    Recently, I completed a full-stack web development certificate program at the University of Central Florida, where I honed my skills
                    in both front-end and back-end development.  My capstone project involved building a website for connecting hikers of all backgrounds 
                    that resulted in a community engagement that celebrates the spirit of wanderlust, sharing personal journey, and inspiring others
                    to explore the boundless beauty of our planet's natural landscapes.
                    As a highly organized and resourceful problem-solver, I thrive in collaborative environments working in a team to bring projects to life.
                    I'm eager to connect with businesses looking to establish a strong online presence and leverage the power of the web to achieve their
                    growth goals. 
                </p>
            </div>
        </div>
        </section>
    );
}

export default About;
