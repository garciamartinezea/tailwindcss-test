import React from 'react';

const CarruselSeccionUI = (props)=>{
    const {picture, alt} = props
    return (  
    <img src={picture} style={{width: '100%'}} alt={alt} />
    )
}

export default CarruselSeccionUI
