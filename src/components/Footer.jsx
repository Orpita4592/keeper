import React from "react";

function Footer(){
    var currDate = new Date();
    var currYear = currDate.getFullYear();
    return (
    <footer>
        <p>CopyRight &copy; {currYear}</p>
    </footer>
    );
    
}

export default Footer;