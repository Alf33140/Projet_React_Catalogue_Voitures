import React, {Component} from 'react';
import Toto from './Toto';

class Maman extends Component {
    state = {
        // messageMaman: "Oh non, je n'ai pas envie de faire mes devoirs",
        messageMaman: null,
        messageToto: null,
        disabled: true
    }

    
    ordreMaman = (message) => {
        this.setState({
            messageMaman: message, disabled: false
        });   
    }
    reponseToto = msg => {
        this.setState({
            messageToto: msg
        });
    }
    
    render() {
        return (
            <div>
                <h1>Maman</h1>
                <button onClick={() => this.ordreMaman("va ranger ta chambre!")}>Ordre de la mère</button>
                <p>{this.state.messageMaman}</p>
                {/* <button onClick={this.ordreToto}>Ordre de Toto</button>
                <p>{this.state.messageToto}</p> */}
                <hr />
                <Toto name="Toto" reponseTotoProps={this.reponseToto} leState={this.state} />
            </div>
        )
    }
}
export default Maman;