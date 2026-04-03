import { Component } from 'react';
import Cars from './Cars';


export class Mycars extends Component {

    state = {
        car:['Toyota', 'Renault', 'Peugeot']
    }

  render() {
    return (
      <div>
       <h1 style={{color: this.props.colordedavy}}> {this.props.titrededavy}</h1>
        {/* <h1>Mon Catalogue de voiture</h1> */}
      <Cars color="red">{this.state.car[0]}</Cars>
      <Cars color="blue">{this.state.car[1]}</Cars>
      <Cars color="green">{this.state.car[2]}</Cars>
      <Cars > </Cars>
      </div>
    )
  }
}

export default Mycars;