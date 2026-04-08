import React from 'react'

function Wrapper({children}) {
 
  return (
    <div style={{backgroundColor:'skyblue', width:'400px', padding:'10px', margin:'5px auto'}}>
      {children} 
      {/* children est un mot clé qui représente tout ce qui se trouve entre les balises d'ouverture et de fermeture du composant Wrapper dans le composant Mycars, c'est à dire le composant MyHeader dans notre cas. Donc tout ce qui est entre <Wrapper> et </Wrapper> dans Mycars sera représenté par children dans Wrapper. C'est une technique très utilisée pour faire du style ou des mises en page réutilisables. */}
    </div>
  ); // Assure-toi qu'il n'y a RIEN entre </div> et ici
}

export default Wrapper
