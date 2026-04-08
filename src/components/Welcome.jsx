// EXERCICE 5

const bonjour = () => {console.log('bonjour')}
const Bonsoir = message => {console.log(message)}

const Welcome = () => {
    return (
      <div>
        {/* Invoquer une fonction "Bonjour" qui affichera console.log('bonjour') */}
        <button onClick={bonjour}>Invoque une fonction sans argument</button>
       
        {/* Invoquer une fonction "Bonsoir" avec un argument "Bonsoir" */}
        <button onClick={() => Bonsoir('Bonsoir')}>
          Invoquer une fonction avec un argument
        </button>

        {/* lancer le console.log("Bonne nuit") apres le click sans invoquer de fonction*/}
        <button onClick={() => console.log('Bonne nuit')}>
          Afficher un message personnalisé
        </button>
      </div>  
    )
}

export default Welcome