import React from 'react';

const NavBar = ({props}) => {
    return (
        <nav>
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
};

export default NavBar
