import { Component } from 'react';
import Mycars from './components/Mycars';
import './App.css';
import Welcome from './components/Welcome';

class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures'
  }

  render() {
    return (
      <div className='App'>
        <Welcome />
            <Mycars title={this.state.titre} />
        
      </div>
    )
  }
}

export default App;