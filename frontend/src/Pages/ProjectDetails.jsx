import Navbar from '../components/Navbar';
import '../css/ProjectDetails.css';

import {
    MapPinCheckInside,
    LandPlot,
    Share2,
    Heart,
    SquareDimensions,
    Grid2x2Check,
    CircleCheckBig,
    ShieldCheck,
    Trees,
    Lamp,
    Construction,
    FileCheck,
    FerrisWheel
} from 'lucide-react';

import Stats from '../components/Stats';

import entrance from '../assets/Projects/Greenvalley/Entrance.png';
import road from '../assets/Projects/Greenvalley/road.png';
import image1 from '../assets/bg-img.png';
import image2 from '../assets/bg-image.jpg';
import image4 from '../assets/bg-image.jpg';

import { useState } from 'react';


function ProjectDetails() {

    const projectImages = [
        entrance,
        road,
        image1,
        image2,
        image4
    ];

    const [selectedImage, setSelectedImage] =
        useState(projectImages[0]);


    return (
        <>
            <Navbar />

            <main className="project-details-page">
                <section className="project-gallery">
                    <div className="image-container">

                        <div className="big-container">

                            <img
                                className="big-image"
                                src={selectedImage}
                                alt="Project"
                            />

                        </div>
                        <div className="small-container">

                            {projectImages.map((image, index) => (

                                <img
                                    key={index}
                                    src={image}
                                    alt={`Project ${index + 1}`}
                                    onClick={() =>
                                        setSelectedImage(image)
                                    }
                                    className={`thumbnail 
                                        ${selectedImage === image
                                            ? "active-thumbnail"
                                            : ""
                                        }`}
                                />

                            ))}

                        </div>

                    </div>
                    <div className="project-details">
                        <div className="share-detail">

                            <div className="bt">
                                <p>Residential Plot</p>
                            </div>


                            <div className="share">

                                <button className="save">

                                    <Heart className="heart" />

                                    <span>Save</span>

                                </button>


                                <button className="share-op">

                                    <Share2 className="share2" />

                                    <span>Share</span>

                                </button>

                            </div>

                        </div>
                        <div className="pro-de">

                            <div className="pro-title">

                                <h2>
                                    Green Valley
                                </h2>
                                <div className="location2">

                                    <MapPinCheckInside
                                        className="map-icon"
                                    />

                                    <p>
                                        Dindigul, Tamil Nadu
                                    </p>

                                </div>
                                <p className="descrip">

                                    Discover premium residential plots
                                    in a peaceful and well-planned
                                    community. Green Valley offers
                                    excellent connectivity, modern
                                    infrastructure and a secure
                                    investment opportunity.

                                </p>

                            </div>
                            <div className="plot-price2">

                                <p className="p1">
                                    Price Starting From
                                </p>


                                <div className="per-plot">

                                    <p className="p2">
                                        ₹ 20 Lakh
                                    </p>

                                    <p className="p3">
                                        Per Plot
                                    </p>

                                </div>

                            </div>

                        </div>
                        <div className="book-btn">

                            <button>
                                Book Now
                            </button>

                        </div>

                    </div>

                </section>
                <section className="midd">

                    <Stats
                        Heading="Total Acres"
                        Content="25 Acres"
                        icon={LandPlot}
                    />

                    <Stats
                        Heading="Total Plots"
                        Content="300 Plots"
                        icon={Grid2x2Check}
                    />

                    <Stats
                        Heading="Plot Size"
                        Content="1000 - 2400 sq.ft"
                        icon={SquareDimensions}
                    />

                    <Stats
                        Heading="Project Type"
                        Content="Residential"
                        icon={LandPlot}
                    />

                </section>
                <section className='about-pro'>
                    <div className="aboutdiv">
                        <div className="about-in">
                            <h3>About The Project</h3>
                            <p>
                                Green Valley is a premium residential land project
                                designed for peaceful and comfortable living. The
                                project offers well-planned plots, excellent
                                connectivity and essential modern infrastructure.

                                Located in a developing area, Green Valley provides
                                an ideal opportunity for both home buyers and
                                property investors.
                            </p>
                        </div>
                        <div className="highlight">
                            <h3>Project Highlights</h3>
                            <div className="high-des">
                                <p><CircleCheckBig className='checkicon' /> Reliable Water Facility</p>
                                <p><CircleCheckBig className='checkicon' /> Green & Peaceful Environment</p>
                                <p><CircleCheckBig className='checkicon' /> Secure Gated Community</p>
                                <p><CircleCheckBig className='checkicon' /> DTCP / RERA Approved Layout</p>
                                <p><CircleCheckBig className='checkicon' /> Close to Schools, Hospitals & Transport</p>
                                <p><CircleCheckBig className='checkicon' /> Ready-to-Build Plots</p>
                            </div>
                        </div>
                    </div>
                    <div className="amenities">

                        <div className="amenities-header">

                            <p className="section-tag">
                                FEATURES
                            </p>

                            <h3>
                                Project Amenities
                            </h3>

                            <p className='de'>
                                Everything you need for a comfortable,
                                secure and modern lifestyle.
                            </p>

                        </div>
                        <div className="amenities-grid">
                            <div className="amen1">
                                <div className="amen-icon">
                                    <ShieldCheck />
                                </div>
                                <div className="amen-con">
                                    24/7 Security
                                </div>
                            </div>
                            <div className="amen1">
                                <div className="amen-icon">
                                    <Trees />
                                </div>
                                <div className="amen-con">
                                    Green Environment
                                </div>
                            </div>
                            <div className="amen1">
                                <div className="amen-icon">
                                    <Lamp />
                                </div>
                                <div className="amen-con">
                                    Street Lighting                                </div>
                            </div>
                            <div className="amen1">
                                <div className="amen-icon">
                                    <Construction />
                                </div>
                                <div className="amen-con">
                                    Developed Roads
                                </div>
                            </div>
                            <div className="amen1">
                                <div className="amen-icon">
                                    <FileCheck />
                                </div>
                                <div className="amen-con">
                                    Legal Document                               </div>
                            </div>
                            <div className="amen1">
                                <div className="amen-icon">
                                    <FerrisWheel />
                                </div>
                                <div className="amen-con">
                                    Children's Park
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

        </>
    );
}


export default ProjectDetails;