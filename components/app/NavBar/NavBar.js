import React from 'react';

require("./Nav.css");
const NavBar = ({props}) => {
    return (
        <nav className="navbar">
            <ul>
                {props.map((data, index) => {
                    return (
                        <li key={index}>{data}</li>
                    )
                })}

            </ul>
        </nav>
    )

};

NavBar.propTypes = {
    props: React.PropTypes.array.isRequired
}

export default NavBar