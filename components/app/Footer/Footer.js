import React from 'react';

const Footer = ({links}) => {
    return (
        <div>
            {links.map((data,index) => {
                <li key={index}> data</li>
            })}
        </div>
    )
};

Footer.propTypes = {
    links: React.PropTypes.array.isRequired
};

export default Footer
