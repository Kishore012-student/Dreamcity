import "../css/Home.css";
import Navbar from "../components/Navbar";
import Searchform from "../components/Searchform";
import heroimage from "../assets/bg-image.jpg";
import Homecardlist from "../components/Cardlist/Homecardlist";
import { ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";



const Home = () => {
    const navigate = useNavigate();

    return (
        <main className="home-page">

            <div className="home-container">

                <Navbar />

                <section className="hero-section">

                    <img
                        src={heroimage}
                        alt="Dream property"
                        className="hero-img"
                    />

                    <div className="hero-overlay"></div>

                    <div className="hero-content">

                        <h1>
                            Find the Perfect Plot
                            <br />
                            to Build Your Future
                        </h1>

                        <p>
                            Explore verified land projects and premium plots
                            in prime locations. Find the right property for
                            your dream home or your next investment.
                        </p>

                    </div>

                    <Searchform />
                </section>
                <div className="mid-section">
                    <div className="show">
                        <p
                            className="arrow" onClick={() => navigate("/projects")} style={{ cursor: "pointer" }}
                        >Show All Projects
                            <ArrowRight className="text-blue-500 w-6 h-6 arrow-icon" />
                        </p>
                    </div>
                    <div className="plot-cards">
                        <Homecardlist />
                    </div>
                </div>


            </div>

        </main>
    );
};

export default Home;