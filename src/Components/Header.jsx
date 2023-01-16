import React from "react";

const Header = (props) =>{
    const {title} = props;
    return <h1 style={{padding:'5px'}}>{title}</h1>;
}

export default Header;