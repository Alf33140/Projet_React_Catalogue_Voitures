import './App.css';
import { Component } from 'react';
import Mycars from './components/Mycars'

class App extends Component {
  
  state = {
    titre: 'Mon catalogue de voitures',
    color: 'blue',
  }
  render(){
    return (
      <div className="App">

        <Mycars
          titrededavy={this.state.titre}
          colordedavy={this.state.color}
        />
      </div>
    )
  }
}

export default App;