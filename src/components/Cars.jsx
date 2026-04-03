import React from 'react';
import Wrapper from './wrapper';

const Cars = ({children, color}) => {
    // console.log(props) 
    const colorInfo = color?<p>Couleur: {color}</p>:<p>Couleur: Non précisée</p>
    // const brandInfo = children?<p>Marque: {children}</p>:<p> Marque non précisée</p>

    return children &&(
        <Wrapper>
            <p>Marque: {children}</p>
            <p>{colorInfo}</p>
        </Wrapper>
    ) : <p>Pas de data</p>
}

export default Cars