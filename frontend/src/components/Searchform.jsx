import "../css/Searchform.css";

import Dropdown from "react-bootstrap/Dropdown";

import { FaSearch } from "react-icons/fa";

function Searchform() {

    return (

        <div className="inpagesearch">

            <div className="wholebox">
                <div className="searchbar">

                    <FaSearch className="search-icon" />

                    <input
                        type="text"
                        placeholder="Search for available plots"
                    />

                </div>
                <div className="searchbyselect">
                    <Dropdown>

                        <Dropdown.Toggle
                            id="location-dropdown"
                        >
                            Location
                        </Dropdown.Toggle>


                        <Dropdown.Menu>

                            <Dropdown.Item>
                                Chennai
                            </Dropdown.Item>

                            <Dropdown.Item>
                                Madurai
                            </Dropdown.Item>

                            <Dropdown.Item>
                                Coimbatore
                            </Dropdown.Item>

                        </Dropdown.Menu>

                    </Dropdown>
                    <Dropdown>

                        <Dropdown.Toggle
                            id="plot-dropdown"
                        >
                            Plot Type
                        </Dropdown.Toggle>


                        <Dropdown.Menu>

                            <Dropdown.Item>
                                Residential
                            </Dropdown.Item>

                            <Dropdown.Item>
                                Commercial
                            </Dropdown.Item>

                            <Dropdown.Item>
                                Villa Plot
                            </Dropdown.Item>

                        </Dropdown.Menu>

                    </Dropdown>
                    <Dropdown>

                        <Dropdown.Toggle
                            id="budget-dropdown"
                        >
                            Budget
                        </Dropdown.Toggle>


                        <Dropdown.Menu>

                            <Dropdown.Item>
                                ₹5 - ₹10 Lakhs
                            </Dropdown.Item>

                            <Dropdown.Item>
                                ₹10 - ₹20 Lakhs
                            </Dropdown.Item>

                            <Dropdown.Item>
                                ₹20+ Lakhs
                            </Dropdown.Item>

                        </Dropdown.Menu>

                    </Dropdown>
                    <button
                        className="search-btn"
                    >

                        <FaSearch />

                        Search

                    </button>


                </div>

            </div>

        </div>

    );

}

export default Searchform;