import React from "react";
class FahrenheitCard extends React.Component{
    tempToConvertRef = React.createRef(); onChangeHandler = e => {
        let newFahrenheit = this.tempToConvertRef.current.value;
        let newCelsius;
        newCelsius =((newFahrenheit -32) * 5) / 9;
        const rounded = Math.round(newCelsius * 1000)/ 1000;
        this.props.getNewTempValue(rounded, newFahrenheit);
    };
    render(){
        return(
            <div>
                <hi>Fahrenheit</hi>
                <input type="number" onChange={this.onChangeHandler} value={this.props.fahrenheit} ref={this.tempToConvertRef}/>
            </div>
        );
    }
}

export default Fahrenheit;