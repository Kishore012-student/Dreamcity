import "../css/Navbar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

function MainNavbar() {

    return (

        <Navbar
            expand="lg"
            className="whole"
        >

            <Container>
                <Navbar.Brand
                    as={Link}
                    to="/"
                    className="brand-name"
                >

                    <span className="b-n-dream">Dream</span>City

                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                >
                    <Nav className="mx-auto center-nav-links">

                        <Nav.Link
                            as={Link}
                            to="/"
                            className="alink"
                        >
                            Home
                        </Nav.Link>


                        <Nav.Link
                            as={Link}
                            to="/projects"
                            className="alink"
                        >
                            Projects
                        </Nav.Link>


                        <Nav.Link
                            as={Link}
                            to="/plots"
                            className="alink"
                        >
                            Plots
                        </Nav.Link>


                        <Nav.Link
                            as={Link}
                            to="/about"
                            className="alink"
                        >
                            About
                        </Nav.Link>


                        <Nav.Link
                            as={Link}
                            to="/contact"
                            className="alink"
                        >
                            Contact
                        </Nav.Link>

                    </Nav>
                    <div className="credential">

                        <Link
                            to="/login"
                            className="auth-link"
                        >

                            <button className="buttons">

                                Login
                                <ArrowRight className="text-blue-500 w-6 h-6" />

                            </button>

                        </Link>

                    </div>

                </Navbar.Collapse>

            </Container>

        </Navbar>

    );

}

export default MainNavbar;