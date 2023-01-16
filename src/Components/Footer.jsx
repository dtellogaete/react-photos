import React from "react";



const Footer = (props) =>{
    const {desc} = props;
    const handleClick = () => {
        alert('Esta es una galería de animales');
    };
    
    return (
        <footer className="footer bg-success mt-2 p-2">
            <p>{desc}</p>
            <button className="button" 
                style={{ backgroundColor:'#1C6758', border: '0', color: '#ccc', fontSize: '15px'}}
                onClick={handleClick} >
                Acerca de
            </button>
        </footer>
    );
}

export default Footer;