import { Component } from 'react';
import Cars from './Cars';
import Wrapper from './Wrapper';
import MyHeader from './MyHeader';

export class Mycars extends Component {

    


    addsStyle = (event) => {
        console.log(event.target);
      if(event.target.classList.contains('styled')){
        event.target.classList.remove('styled');
      } else{
        event.target.classList.add('styled');
      }
    }
    noCopy = () => {
        alert('Copier le texte est interdit')
    }

    state = {
        car:['Toyota', 'Renault', 'Peugeot']
    }

    
  render() {
    return (
      <div>
        <Wrapper>
            <MyHeader 
                MyStyle={this.props.colordedavy}>
             {this.props.titrededavy}   
            </MyHeader>    
        </Wrapper>
         <p onCopy={this.noCopy}>bien essayé...mais non pas de copie</p>
        {/* <h1 onMouseOver={this.addsStyle}>Mon Catalogue de voiture</h1> */}
      <Cars color="red">{this.state.car[0]}</Cars>
      <Cars color="blue">{this.state.car[1]}</Cars>
      <Cars color="green">{this.state.car[2]}</Cars>

          <MyHeader 
                MyStyle={this.props.colordedavy}>
            Elements de details des cars  
            </MyHeader>
      </div>

    )
  }
}

export default Mycars;