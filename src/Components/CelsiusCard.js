import React from "react";
class CelsiusCard extends React.Component{
    tempToConvertRef = React.createRef(); onChangeHandler = e => {
        let newCelsius = this.tempToConvertRef.current.value;
        let newFahrenheit;
        newFahrenheit =(newCelsius * 9) / 5 + 32;
        const rounded = Math.round(newFahrenheit * 1000)/ 1000;
        this.props.getNewTempValue(newCelsius, rounded);
    };
    render(){
        return(
            <div>
                <hi>celsius</hi>
                <input type="number" onChange={this.onChangeHandler} value={this.props.celsius} ref={this.tempToConvertRef}/>
            </div>
        );
    }
}

export default Celsius ;