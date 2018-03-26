import React, { Component } from 'react';

const Projects = class Projects extends Component {

    render() {
        return (
            <div>
                <h2 style={{marginTop: 0}}><a href="https://capture.techulus.in/" className="title">Capture</a></h2>
                <p>Display screenshots anywhere with the best screenshot automation tool</p>
                <p>5% market share in Website Screenshots category</p>
                <p>Featured on <a href="https://siftery.com/capture-by-techulus">siftery</a></p>

                <h2><a href="http://feline.techulus.in/" className="title">Feline</a></h2>
                <p>A beautiful, unofficial Android app for Product Hunt</p>
                <p>Featured on <a href="http://madewithreactnative.com/feline/">madewithreactnative</a></p>
                <a href="https://play.google.com/store/apps/details?id=com.arjunkomath.product_hunt&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-AC-global-none-all-co-pr-py-PartBadges-Oct1515-1"><img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/images/apps/en-play-badge.png" width="175" /></a>
                {/* <div className="col-md-4"> */}
                {/* <img style={{ width: '100%' }} src="http://techulus.in/assets/img/feline.jpg" /> */}
                {/* </div> */}

                {/* <div className="col-md-4"> */}
                {/* <img style={{ width: '100%' }} src="http://techulus.in/assets/img/jaas.jpg" /> */}
                {/* </div> */}
                <h2><a href="https://jaas.techulus.in/" className="title">JSON as a Service</a></h2>
                <p>Simple data store for your mobile and web applications</p>

                <h2><a href="https://logbase.techulus.in/" className="title">LogBase</a></h2>
                <p>Realtime Javascript cloud logger</p>
                {/* <div className="col-md-4"> */}
                {/* <img style={{ width: '100%' }} src="http://techulus.in/assets/img/logbase.jpg" /> */}
                {/* </div> */}
            </div>
        );
    }
}

export default Projects;
