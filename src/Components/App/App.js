import React, { Component } from 'react';

import Checkbox from '../Checkbox/Checkbox'; 
import AllCheckbox from '../AllCheckbox/AllCheckbox'; 

import './App.css';

class App extends Component { 

  constructor(props) {
    super(props); 
    this.state = {
      checkbox: [
        {id: 1, value: "javascript", isChecked: false}, 
        {id: 2, value: "react", isChecked: false},
        {id: 3, value: "node.js", isChecked: false},
        {id: 4, value: "express", isChecked: false},
      ]
    } 
  } 

  handleCheckbox = (event) => { 
    // Je déclare une variable checkbox copiant la propriété checkbox de mon state 
    let checkbox = this.state.checkbox 

    // J'applique sur l'array de ma variable checkbox une boucle forEach 
    // Celle-ci va parcourir tout le tableau jusqu'à trouver la box ayant la même value que l'event de l'utilisateur  
    checkbox.forEach(box => { 
      if(box.value === event.currentTarget.value) { 

        // Une fois la box trouver je modifie sa valeur de isChecked avec un toggle 
        box.isChecked = !box.isChecked
      }
    }) 

    // Ma variable checkbox étant modifier avec la bonne valeur par le forEach 
    // Je modifie donc mon state avec la nouvelle valeur via une destructuration 
    this.setState({checkbox: checkbox}) 
    
  } 

  handleAllCheckbox = (event) => { 
    
    let checkbox = this.state.checkbox; 

    checkbox.forEach(box => box.isChecked = event.target.checked) 

    this.setState ({checkbox: checkbox}) 
    console.log(this.state.checkbox) 
  }

  render() {
  return (
    <div className="App"> 
    <ul> 
      <AllCheckbox handleAllCheckbox={this.handleAllCheckbox}/> 
      {
        this.state.checkbox.map( (box) => {
          return (
            <Checkbox key={box.id} handleCheckbox={this.handleCheckbox} {...box}/> 
            )
        })
      }
    </ul>
    </div>
  );
} 
}

export default App;
