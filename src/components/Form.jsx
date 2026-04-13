
import React, { Component } from 'react';
import Car from './Car';

class Form extends Component{
    
    state = {
        username: '',
        color: '',
        colors: ["", "red", "green", "black", "orange"],
        comment: '',
    }
    
    handlePseudo = event => {
        this.setState({
            username: event.target.value

        })
    }
    handleColor = event => {
        this.setState({
            color: event.target.value
        })
    }
    handleComment = event => {
        this.setState({
            comment: event.target.value
        })
    }

    render() {
        return(
            <form>
                <div>
                    <Car color="red" height="400"  />
                    <h1>CATALOGUE DE VOITURES</h1>
                    
                        <form>
                        
                            <label>Pseudo</label>
                            <input type="text" value={this.state.username} onChange={this.handlePseudo} />
                        </form>
                    </div>
                    <div>
                        <label>Couleur</label>
                        <select value={this.state.color} onChange={this.handleColor}>
                                {this.state.colors.map((color, index) => {
                                    return <option key={index} value={color}> {color} </option>
                                })
                                }
                            {/* <option value="vert">Vert</option>
                            <option value="rouge">Rouge</option>
                            <option value="orange">Orange</option> */}
                        </select>
                    </div>
                    <div>
                        <Car color={this.state.color} height="400"  />
                        <label>Commentaire</label>
                        <textarea value={this.state.comment} onChange={this.handleComment} />
                        
                    </div>
                </form>
        )
    }
}
export default Form;