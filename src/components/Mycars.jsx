import { Component } from 'react'
import Car from './Cars'

class Mycars extends Component {

    addTenYears = () => {
        const updatedCars = this.state.cars.map((param) => {
            return param.year-=10; 
        })
        this.setState({updatedCars})
    }

    state= {
    
        cars :[
        {name: 'Ford', color: 'red',year: 2022},
        {name: 'Mercedes', color: 'blue',year: 1997},
        {name: 'BMW', color: 'green',year: 2005},
        {name: 'BMW', color: 'purple',year: 2026}
     ]
    }
    
     getAge = year => {
            const currentYear = new Date().getFullYear();
            const age = currentYear - year;
        
            let ageCategory = "";
           
            if (age < 1) {
                ageCategory = "sortie d'usine";
            return `(${ageCategory})`;

            } else if (age=== 1){
                ageCategory = "neuf";
            
            }else if (age >1) {
                ageCategory = "occasion";
      
            }
            return `(${age} ans) (${ageCategory})`;
        }
    
    render() {
       
        return (
            <div>
                <h1>{this.props.title}</h1>
                 <button onClick={this.addTenYears}>+ 10ans</button>    
                {
                    this.state.cars.map(({name, color, year}, index) => {
                        return(
                            <div key={index}>
                                <Car color={color} year={this.getAge(year)}>{name}</Car>
                            </div>
                        )
                    })
                }
            </div>
           
        )
    }
}

export default Mycars