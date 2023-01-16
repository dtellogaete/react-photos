import React from "react";
import {Card as BCard} from 'react-bootstrap';

const Card = (props) =>{
    const {title, desc, photo} = props;
    return (
        <BCard style={{ padding: '15px',
                        margin: '5px',
                        background: '#3D8361',
                        border: '1px solid #D6CDA4',
                        width: '30%',
                        height: '400px',
                        }}
                className = 'card-img-top'>
            <BCard.Img variant="top" src={photo}/>
            <BCard.Body>
                <BCard.Title>{title}</BCard.Title>
                <BCard.Text>{desc}</BCard.Text>                
            </BCard.Body>
        </BCard>
    );
}

export default Card;