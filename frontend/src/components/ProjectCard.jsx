import '../css/ProjectCard.css'
import { useNavigate } from "react-router-dom";



function Plotcard({ image, title, details, projectsize, plotprice }) {
    const navigate = useNavigate();
    return (
        <>
            <div className="project-card">
                <div>
                    <img src={image} className="project-img"></img>
                </div>
                <div className="project-details1">
                    <h3 className='project-title'>{title}</h3>
                    <p className='pro-details'>{details}</p>
                    <div className="mid">
                        <div className="size">
                            <p className='head'>TOTAL ACRES</p>
                            <p className='sizeacre'>{projectsize}</p>
                        </div>
                        <div className="price-box">
                            <p className='head1'>PLOTS FROM</p>
                            <div className="insection">
                                <div >
                                    <p className="price">₹{plotprice}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bt1' >
                        <button type='submit' className="explore-btn" onClick={() => navigate("/project-details")} style={{ cursor: "pointer" }}>Explore Project</button>
                    </div>
                </div>
            </div>
        </>
    );
} export default Plotcard