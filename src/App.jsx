import './App.css';
import { Component } from 'react';
import Mycars from './components/Mycars'

class App extends Component {

  changeViaInput = (event) => {
    this.setState({
      titre: event.target.value
    })
  }

  changeViaBind = (param) => {
    this.setState({
      titre: param
    })
  }

  changeTitleViaParam = (newTitle) => {
    this.setState({
      titre: newTitle
    })
  }
  
  changeTitle = () => {
    this.setState({
      titre: 'Nouveau titre'
    })
  }
  state = {
    titre: 'Mon catalogue de voitures',
    color: 'grey',
  }
  render(){
    return (
      <div className="App">

        <Mycars
          titrededavy={this.state.titre}
          colordedavy={this.state.color}
        />
        <button onClick={this.changeTitle}>Changer le titre</button>
        <button onClick={() => this.changeTitleViaParam('Titre modifié via paramètre')}>Nouveau Titre via paramètre</button>
        <button onClick={this.changeViaBind.bind(this, 'Titre modifié via bind')}>Nouveau Titre via bind</button>
        <input type="text" onChange={this.changeViaInput} value={this.state.titrededavy} />
      </div>
// la arrow fonction () => fait que ca ne se charge pas direct au chargement de la page, c est nous qui actionons l action via le bouton
    )
  }
}

export default App;