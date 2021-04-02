import React from 'react';

const Footer = () => {
    return (
        <div style={{marginTop:"100px", textAlign:"center"}}>
            <p>Copyright {(new Date()).getFullYear()} all rights reserved</p>
        </div>
    );
};

export default Footer;