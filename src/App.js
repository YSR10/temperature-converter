import React, { Component } from 'react'
import "./Components/Style.css";
import FahrenheitCard from "./Components/FahrenheitCard"
import CelsiusCard from "./Components/CelsiusCard"
class App extends Component {
  state = {
    fahrenheit:0,
    celsius:0
  };

   getNewTempValue = (newCelsius, newFahrenheit) => {
     this.setState({
       fahrenheit:newFahrenheit,
       celsius:newCelsius
     });
   };

  render(){
    return (
      <div className='App'>
        <CelsiusCard 
        celsius={this.state.celsius}/>
        <FahrenheitCard 
        fahrenheit={this.state.fahrenheit}/>
      </div>
    )
  }
}

export default App;