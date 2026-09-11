import Navbar from '../components/Navbar'
import '../css/Projects.css'
import bgimg from '../assets/bg-img.png'
import filterimg from '../assets/filter.svg'
import Homecardlist from "../components/Cardlist/Homecardlist";




function Projects() {
    return (
        <main className="home-page">

            <div className="home-container">

                <Navbar />

                <section className="hero-section1">

                    <img
                        src={bgimg}
                        alt="Dream property"
                        className="hero-img"
                    />

                    <div className="hero-overlay1"></div>

                    <div className="hero-content1">

                        <h1>
                            Explore Our Projects
                        </h1>

                        <p>
                            Explore verified land projects and premium plots
                            in prime locations. Find the right property for
                            your dream home or your next investment.
                        </p>

                    </div>
                </section>
                <div className="mid-section1">

                    <div className="plot-sort1">
                        <button className="sort-button1">All Projects</button>
                        <button className="sort-button1">Residential</button>
                        <button className="sort-button1">Commertial</button>
                        <button className="sort-button1">Agriculture</button>
                    </div>
                </div>
            </div>

            <div className="project-section">
                <div className="filters">
                    <div className="fil-reset">
                        <div className="fil">
                            <img src={filterimg} className='filimg'></img>
                            <p>Filters</p>
                        </div>
                        <div className="reset-btn">
                            <button>Reset</button>
                        </div>
                    </div>
                    <div className="location">
                        <div className="title">
                            Location
                        </div>
                        <div className="selection">
                            <div className="loc1">
                                <input type="checkbox" ></input>
                                <label>Dindigul</label>
                            </div>
                            <div className="loc1">
                                <input type="checkbox" ></input>
                                <label>Madurai</label>
                            </div>
                            <div className="loc1">
                                <input type="checkbox" ></input>
                                <label>Trichy</label>
                            </div>
                            <div className="loc1">
                                <input type="checkbox" ></input>
                                <label className='loclast'>Coimbatore</label>
                            </div>
                        </div>
                    </div>
                    <div className="location">
                        <div className="title">
                            Plot Types
                        </div>
                        <div className="selection">
                            <div className="loc1">
                                <input type="checkbox" ></input>
                                <label>Residential</label>
                            </div>
                            <div className="loc1">
                                <input type="checkbox" ></input>
                                <label>Commertial</label>
                            </div>
                            <div className="loc1">
                                <input type="checkbox" ></input>
                                <label>Villa Plot</label>
                            </div>
                        </div>
                    </div>
                    <div className="location1">
                        <div className="title">
                            Budget Range
                        </div>
                        <div className="selection">
                            <div className="loc1">
                                <input type="checkbox" ></input>
                                <label>Below ₹10 Lakh </label>
                            </div>
                            <div className="loc1">
                                <input type="checkbox" ></input>
                                <label>₹10 - ₹25 Lakh</label>
                            </div>
                            <div className="loc1">
                                <input type="checkbox" ></input>
                                <label>₹25 - ₹50 Lakh</label>
                            </div>
                            <div className="loc1">
                                <input type="checkbox" ></input>
                                <label>Above ₹50 Lakh</label>
                            </div>
                        </div>
                    </div>
                    <button className='apply-filter'>Apply Filters</button>
                </div>
                <div className="project-card2">
                    <Homecardlist />
                </div>
            </div>

        </main >

    );
} export default Projects