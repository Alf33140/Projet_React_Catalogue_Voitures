const Car = ({year, color, children}) => {

    const colorInfo = color ? <p>Couleur: {color}</p> : <p>Couleur: "Néant"</p>;

    if (children) {
        return (
            <div style={ {backgroundColor: 'skyblue', width: '400px', padding: '10px', margin: '5px auto'} }>
                <p>Marque: { children }</p>
                {colorInfo}
                <p>Année: {year}</p>
            </div>
        )
    }

    // return null // ce return est Facultatif
}

export default Car
