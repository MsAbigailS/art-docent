import React, { Component } from 'react';
import './Calculator.css'
import { Button } from '../Button'

class Calculator extends Component{

    addSymbol = () =>{
        console.log("hello");
    }

    render(){
        return(
            <nav className="CalculatorFrame">
                <input className="calculator-screen"
                 type = "text"
                 value = {this.props.text}/>

                <div className="calculator-buttons">
                    <Button className="plusButton" onClick={this.addSymbol()}><i className="fas fa-plus"></i></Button>
                    <Button className="minusButton" onClick={this.addSymbol()}><i className="fas fa-minus"></i></Button>
                    <Button className="divideButton" onClick={this.addSymbol()}><i className="fas fa-divide"></i></Button>
                    <Button className="multiplyButton" onClick={this.addSymbol()}><i className="fas fa-times"></i></Button>
                </div>
            </nav>
        )
    }
}

export default Calculator